import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import OpusLogo from '../public/companiesLogos/Opus-logo.jpg'

import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'


import { ArrowRight, ArrowLeft } from 'react-bootstrap-icons';

import Button from '@mui/material/Button';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';


import {useState, useEffect} from 'react'

const OpusStation = ({station, stationIdx, addSortingInfo, regNum})=>{
	const [timeCounter, setTimeCounter] = useState(0);
	const [dateCounter, setDateCounter] = useState(0);

	const getTimeInfo = ()=>{
		var timeInfoDict1 = {};
		for (var i=0; i<station.timeInfo.length; i++){
			var date = station.timeInfo[i].Time.split('T')[0];
			if (Object.keys(timeInfoDict1).includes(date)){
				timeInfoDict1[date].push(station.timeInfo[i]);
			} else {
				timeInfoDict1[date] = [];
				timeInfoDict1[date].push(station.timeInfo[i]);
			}
		}
		return timeInfoDict1;
	}

	const [timeInfo, setTimeInfo] = useState(getTimeInfo());

	useEffect(()=>{
		if (timeInfo.length!==0){
			var nearestAvailableDate = Object.keys(timeInfo)[0];
			var price = timeInfo[nearestAvailableDate][0].Price;
		}
	}, []);

	const currentDate = () => {
		var currentDate = Object.keys(timeInfo)[dateCounter];
		return currentDate;
	}
	const currentTime = () => {
		var currentTime = timeInfo[currentDate()][timeCounter].Time.split('T')[1]
		return currentTime;
	}
	const price = () => {
		var price = timeInfo[currentDate()][timeCounter].Price;
		return price;
	}
	
	function increaseDate(){
		if (dateCounter < Object.keys(timeInfo).length - 1){
			setTimeCounter(0);
			setDateCounter(dateCounter+1);
		}
	}
	function decreaseDate(){
		if (dateCounter > 0){
			setTimeCounter(0);
			setDateCounter(dateCounter-1);
		}
	}
	function increaseTime(){
		if (timeCounter < timeInfo[currentDate()].length - 1){
			setTimeCounter(timeCounter+1);
		}
	}
	function decreaseTime(){
		if (timeCounter > 0){
			setTimeCounter(timeCounter-1);
		}
	}



	return(
		<div className="CarspectStation" style={{}}>
			<Card style={{ width: '100%' }}>
			<Container>
			  <Row>
			  <Col sm={4} style={{float: "left", display: "flex", alignItems:"center"}}>
				  <CardMedia
				  	component='img'
				 	image='/companiesLogos/Opus-logo.jpg'
				  	style={{maxHeight: '200px', width: 'auto', margin: '10px auto', marginTop: '30px'}} 
					alt="Opus station"
			      />
			  </Col>
			  <Col sm={8}>
			  
				  <CardContent>
				  <Row>
				  	<Col sm={8} style={{float:'left', height: '100%'}}>
	                    <Typography gutterBottom variant='h6' component='div'>{station.Name} ({station.distance.toFixed(1)} Km)</Typography>
		                <Typography variant="body2" color="text.secondary">
		                    {station.City}, {station.StreetAddress}
		                </Typography>
	                   	<Typography variant='body2' className="mt-2">
						   Tillgängligt datum<br />
	                    	<ArrowCircleLeftIcon style={{marginBottom: '6px', marginRight: '5px'}} onClick={decreaseDate} /><span style={{fontSize: '1.5em'}}>{currentDate()}</span><ArrowCircleRightIcon color="royalblue" style={{marginBottom: '6px', marginLeft: '5px'}} onClick={increaseDate}/><br />
							På<br />
	                    	<ArrowCircleLeftIcon style={{marginBottom: '6px', marginRight: '5px'}} onClick={decreaseTime}/><span style={{fontSize: '1.5em'}}>{currentTime()}</span><ArrowCircleRightIcon color="royalblue" style={{marginBottom: '6px', marginLeft: '5px'}} onClick={increaseTime}/><br />
	                	</Typography>
	                </Col>
	                <Col sm={4}>
						<Typography style={{fontSize: "3em", marginBottom: '0px', display: 'inline-block', alignItems: 'center', width: '100%'}} vairant='body2' color="text.secondary" className="mt-2">
	                    	<span>{price()}</span><span style={{fontSize: "0.4em"}}>SEK</span> <br />
	                    </Typography>
	                   	<Typography style={{fontSize: "3em", marginBottom: '0px', display: 'inline-block', alignItems: 'center'}} vairant='body2' color="text.secondary" className="mt-2">
	                    	<Button variant="contained" onClick={()=>{window.open('https://boka.bilprovning.se/vehiclesandproducts/'+regNum)}}>boka</Button>
	                    </Typography>
                    </Col>
                    </Row>
                  </CardContent>
              
			  </Col>
			  </Row>
			</Container>
			</Card>
		</div>
	);
	
	
	// return(
	// 	<div className="OpusStation">
	// 		<Card style={{ width: '100%' }}>
	// 		<Container>
	// 		  <Row >
	// 		  <Col sm={4} style={{float: "left", display: "flex", alignItems:"center"}}>
	// 			  <Card.Img src={OpusLogo} style={{maxHeight: '200px', width: 'auto', margin: '0 auto'}} />
	// 		  </Col>
	// 		  <Col sm={8}>
			  
	// 			  <Card.Body>
	// 			  <Row>
	// 			  	<Col sm={8} style={{float:'left', height: '100%'}}>
	//                     <Card.Title>{station.Name} ({station.distance.toFixed(1)} Km)</Card.Title>
	// 	                <Card.Subtitle>
	// 	                    {station.City}, {station.StreetAddress}
	// 	                </Card.Subtitle>
	//                    	<Card.Text className="mt-2">
	//                     Available Date<br />
	//                     	<ArrowCircleLeftIcon style={{marginBottom: '6px', marginRight: '5px'}} color="royalblue" onClick={decreaseDate} /><span style={{fontSize: '1.5em'}}>{currentDate()}</span><ArrowCircleRightIcon style={{marginBottom: '6px', marginLeft: '5px'}} onClick={increaseDate}/><br />
	//                    		At<br />
	//                     	<ArrowCircleLeftIcon style={{marginBottom: '6px', marginRight: '5px'}} color="royalblue" onClick={decreaseTime}/><span style={{fontSize: '1.5em'}}>{currentTime()}</span><ArrowCircleRightIcon style={{marginBottom: '6px', marginLeft: '5px'}} onClick={increaseTime}/><br />
	//                 	</Card.Text>
	//                 </Col>
	//                 <Col sm={4}>
	//                    	<Card.Text className="mt-2">
	//                     	<p style={{fontSize: "3em", marginBottom: '0px', display: 'inline-block', alignItems: 'center'}}><span>{price()}</span><span style={{fontSize: "0.4em"}}>SEK</span></p> <br />
	//                     	<Button variant="contained" style={{marginTop: '7px'}}>Book</Button>
	//                     </Card.Text>
 //                    </Col>
 //                    </Row>
 //                  </Card.Body>
              
	// 		  </Col>
	// 		  </Row>
	// 		</Container>
	// 		</Card>
	// 	</div>
	// );
}

export default OpusStation;
