import axios from 'axios';

import Spinner from 'react-bootstrap/Spinner'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import {useState, useEffect} from 'react'
// import {useHistory} from 'react-router-dom'
import { useRouter } from 'next/router'

import jsCookie from 'js-cookie';

const RegNumConfirmation = () => {

	// var history = useHistory();
	var router = useRouter()
	const [isInvalid, setIsInvalid]= useState(false);
	const [enteredNumberBefore, setEnteredNumberBefore] = useState(false);
	const [regNum, setRegNum] = useState('');
	const [showModal, setShowModal] = useState(false);
	const [showSpinner, setShowSpinner] = useState(false);
	const [loading, setLoading] = useState(false);
	const [carInfo, setCarInfo] = useState({});
	const myApiUrl = "https://api.besiktningsval.se"

	

	const confirmNumber = (e) => {
		e.preventDefault();
		setEnteredNumberBefore(true);
		if (regNumState()){
			setShowModal(true);
			setLoading(true);
			axios.get(myApiUrl + '/api/getCarInfo/' + regNum + '/')
				.then((res) => {
					var data = res.data.hits.idents;
					setCarInfo(data);	
					console.log(carInfo);
					setLoading(false);
				});
		}
	}

	const regNumState = () => {
		const regex = new RegExp("[A-Za-z]{3}\\s?[0-9]{2}[A-Za-z0-9]{1}")
		var test = regex.test(regNum)
		return test && (regNum.length === 6 || (regNum.length === 7 && regNum[3]=== ' '))
	}

	const closeModal = () => {
		setShowModal(false);
		setLoading(false);
		setCarInfo({});
	}

	const continueWithInfo = () => {
		jsCookie.set('regNum', regNum);
		// router.push({ pathname: '/SearchForStations', state: { regNum: regNum } });
		router.push('/SearchForStations');
	}

	

	return (
		<div className="RegNumConfirmation">

		<Modal show={showModal} onHide={() => {setShowModal(false)}}>
		        <Modal.Header closeButton>
		          <Modal.Title>är detta din korrekta bilinformation?</Modal.Title>
		        </Modal.Header>

		        <Modal.Body>
				{carInfo.length>0 && !loading &&
					<>
					<p className="card-subtitle mb-4 mt-2 text-muted">registreringsnummer: {carInfo[0].licence_plate}</p>
					<p className="card-text">fordonsmodell: {carInfo[0].full_name}</p>
					<p className="card-text">Nästa deadline för inspektion: {carInfo[0].inspection_before}</p>
					<p className="card-text">licenskod: {carInfo[0].license_code}</p>
					</>
				}

				{!carInfo.length>0 && !loading &&
					<p className="card-text">Registreringsnumret du har angett finns inte</p>
				}
				
				{loading && 
					<div className="text-center" style={{width: "100%"}}>
					<Spinner animation="grow" />
					</div>

				}

			</Modal.Body>
			{carInfo.length>0 && !loading &&
		        <Modal.Footer>
		          <Button variant="secondary" onClick={() => {setShowModal(false)}}>
		            Felaktig (gå tillbaka)
		          </Button>
		          <Button variant="primary" onClick={() => {continueWithInfo()}}>
		            Rätt (fortsätt)
		          </Button>
		        </Modal.Footer>}


			{!carInfo.length>0 && !loading &&
				<Modal.Footer>

		          		<Button variant="secondary" onClick={() => {setShowModal(false)}}>
		            			Go Back
		          		</Button>
				</Modal.Footer>}

			{loading &&
				<Modal.Footer>

		          		<Button variant="secondary" onClick={() => {setShowModal(false)}}>
		            			Sluta
		          		</Button>
				</Modal.Footer>}


		</Modal>
		<form onSubmit={confirmNumber}>
		<InputGroup hasValidation>
		  <InputGroup.Text style={{width: '70px', alignContent: 'center'}}><p style={{margin: '0 auto'}}>S</p></InputGroup.Text>
		  <Form.Control type="text" size="lg" placeholder="ABC 123" value={regNum} onChange={(e)=>{
		  	let newValue = e.target.value;
		  	setRegNum(newValue)
		  }} style={{textTransform: 'uppercase'}} required isInvalid={!regNumState() && enteredNumberBefore}/>
		  <Form.Control.Feedback type="invalid">
		  	Numret du har angett är ogiltigt
		  </Form.Control.Feedback>
		
		</InputGroup>

		{ regNumState() && <Button type="Submit" variant="primary" style={{margin: "20px auto"}}>fortsätt</Button>}{' '}
		{ !regNumState() && <Button variant="secondary" style={{margin: "20px auto"}} disabled>fortsätt</Button>}

		</form>
		</div>
	);


}

export default RegNumConfirmation;
