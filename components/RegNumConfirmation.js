import axios from 'axios';

import Spinner from 'react-bootstrap/Spinner'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import Col from 'react-bootstrap/Col'

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

	const [onEmail, setOnEmail] = useState(false);
	const [email, setEmail] = useState('')
	const [fname, setFname] = useState('')
	

	

	const confirmNumber = (e) => {
		e.preventDefault();
		setEnteredNumberBefore(true);
		setOnEmail(false);
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
		if ((regNum.length===7 || regNum.length===8) && regNum[regNum.length-1]=== ' '){
			setRegNum(regNum.slice(0, regNum.length-1))
		}
		var test = regex.test(regNum)
		return test && (regNum.length === 6 || (regNum.length === 7 && regNum[3]=== ' '))
	}

	const emailState = () => {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		console.log(email)
		var test = regex.test(email)
		console.log(test)
		return test && fname.length>0
	}

	const closeModal = () => {
		setShowModal(false);
		setLoading(false);
		setCarInfo({});
	}

	const continueWithInfoToEmail = () => {
		jsCookie.set('regNum', regNum);
		if (jsCookie.get('email')!==undefined){
			router.push('/SearchForStations');
		} else {
			setOnEmail(true);
		}
		
		// router.push({ pathname: '/SearchForStations', state: { regNum: regNum } });
		// router.push('/SearchForStations');
	}

	

	const continueToSearchWithEmail = (e) => {
		e.preventDefault();
		
		const url = 'https://api.besiktningsval.se/emailList/addEmail/'
		
		const data = {
			"first_name": fname,
			"email": email
		}
		axios.post(url, 
			JSON.stringify(data), {
			headers: {
				'content-type': 'text/json',
			}
		});
		jsCookie.set('email', email)
		router.push('/SearchForStations');
	}



	

	return (
		<div className="RegNumConfirmation">

		<Modal show={showModal} onHide={() => {setShowModal(false)}}>
		        {carInfo.length>0 && !onEmail && !loading &&
					<Modal.Header closeButton>
						<Modal.Title>är detta din korrekta bilinformation?</Modal.Title>
					</Modal.Header>}
				{onEmail && !loading &&
					<Modal.Header closeButton>
						<Modal.Title>Prenumerera på vår e-postlista för att hålla dig uppdaterad.</Modal.Title>
					</Modal.Header>}

		        <Modal.Body>
				{/* If information found */}
				{carInfo.length>0 && !onEmail && !loading &&
					<>
					<p className="card-subtitle mb-4 mt-2 text-muted">registreringsnummer: {carInfo[0].licence_plate}</p>
					<p className="card-text">fordonsmodell: {carInfo[0].full_name}</p>
					<p className="card-text">Nästa deadline för inspektion: {carInfo[0].inspection_before}</p>
					<p className="card-text">licenskod: {carInfo[0].license_code}</p>
					</>
				}

				{/* If information not found */}
				{!carInfo.length>0 && !onEmail && !loading &&
					<p className="card-text">Registreringsnumret du har angett finns inte</p>
				}

				{onEmail && !loading && 
					<Form>

						<Form.Group as={Col} md="5" controlId="validationFormik01">
							<Form.Label>Förnamn</Form.Label>
							<Form.Control
								type="text"
								name="first_name"
								placeholder='Skriv in ditt förnamn'
								value={fname}
								onChange={(e)=>{setFname(e.target.value)}}
								className='mb-3'
							/>
							
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>E-postadress</Form.Label>
						<Form.Control type="email" placeholder="Skriv in din e-postadress" value={email} onChange={(e)=>{
							setEmail(e.target.value);
						}}/>
						<Form.Text className="text-muted">
						Vi kommer aldrig att dela din e-post med någon annan.
						</Form.Text>
						</Form.Group>

						
			  
				  	</Form>
				}
				
				{/* When loading */}
				{loading && 
					<div className="text-center" style={{width: "100%"}}>
						<Spinner animation="grow" />
					</div>
				}

			</Modal.Body>
			{carInfo.length>0 && !loading && !onEmail &&
		        <Modal.Footer>
		          <Button variant="secondary" onClick={() => {setShowModal(false)}}>
		            Felaktig (gå tillbaka)
		          </Button>
		          <Button variant="primary" onClick={() => {continueWithInfoToEmail()}}>
		            Rätt (fortsätt)
		          </Button>
		        </Modal.Footer>}

				{onEmail && !loading &&
		        <Modal.Footer>
		          
				  { emailState() && <Button variant="primary" onClick={(e) => {continueToSearchWithEmail(e)}}>
				  	Prenumerera
		          </Button>}
				  { !emailState() && <Button variant="secondary" onClick={() => {setShowModal(false)}} disabled>
				  	Prenumerera
		          </Button>}
		          <Button variant="primary" onClick={() => {router.push('/SearchForStations');}}>
				  	Hoppa över
		          </Button>

				 
		        </Modal.Footer>}


			{!carInfo.length>0 && !loading && !onEmail &&
				<Modal.Footer>

		          		<Button variant="secondary" onClick={() => {setShowModal(false)}}>
						  	Gå tillbaka
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
		  <img src='/eu-flag.jpg' style={{height: '60px', borderRadius: '10px 0 0 10px'}}/>
		  <Form.Control type="text" size="lg" placeholder="ABC123" value={regNum} onChange={(e)=>{
		  	let newValue = e.target.value;
			if (newValue[newValue.length-1]===' '){
				newValue = newValue.slice(0, newValue.length-1)
			}
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
