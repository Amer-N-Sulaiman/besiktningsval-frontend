import { useState, useEffect, useRef } from "react";

import CarspectLogo from '../public/companiesLogos/Carspect-logo.jpg'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Button from '@mui/material/Button';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const CarspectStation = ({station, stationIdx}) =>{
    const [dateCounter, setDateCounter] = useState(0);
    const [hoursCounter, setHoursCounter] = useState(0);
    const hoursCounterRef = useRef();
    hoursCounterRef.current = hoursCounter;
    const [minutesCounter, setMinutesCounter] = useState(0);
    const [currentHour, setCurrentHour] = useState(0);

	async function book(){
		let carspectWindow = window.open('https://www.carspect.se/');

	}

    function increaseDate(){
		if (dateCounter < timeInfo.length-1){
			setHoursCounter(0);
			setMinutesCounter(0);
    		setDateCounter(dateCounter+1);
		}
	}

	function decreaseDate(){
		if (dateCounter > 0){
			setHoursCounter(0);
			setMinutesCounter(0);
			setDateCounter(dateCounter-1);
		}
	}

	function increaseTime(){
		var hoursDict = timeInfo[dateCounter].hours;
		var currentHour = Object.keys(hoursDict)[hoursCounter];
		if (minutesCounter < timeInfo[dateCounter].hours[currentHour].length-1){
		    setMinutesCounter(minutesCounter+1);
		}
		else if (hoursCounter < Object.keys(timeInfo[dateCounter].hours).length-1){
			setMinutesCounter(0);
			setHoursCounter(hoursCounter+1);
		}
	}

	function decreaseTime(){
		if (minutesCounter > 0 ){
			setMinutesCounter(minutesCounter-1)
		} else if (hoursCounter > 0){
			setHoursCounter(hoursCounter-1);
			hoursCounterRef.current=hoursCounter-1
			var hoursDict = timeInfo[dateCounter].hours;

			var currentHour = Object.keys(hoursDict)[hoursCounterRef.current];
			setMinutesCounter(timeInfo[dateCounter].hours[currentHour].length-1);
		}
	}
    	
	const [timeInfo, setTimeInfo] = useState(station.timeInfo);

	String.prototype.replaceAt = function(index, replacement) {
    		return this.substr(0, index) + replacement + this.substr(index + replacement.length);
	}

	const price = ()=>{
		var hoursDict = timeInfo[dateCounter].hours
		var currentHour = Object.keys(hoursDict)[hoursCounter]
		return hoursDict[currentHour][minutesCounter].onlinePaymentPrice
	}

	const currentDate = ()=>{
		return timeInfo[dateCounter].day.split("T")[0]
	}

	const currentTime = ()=>{
		var hoursDict = timeInfo[dateCounter].hours
		var currentHour = Object.keys(hoursDict)[hoursCounter]
		var currentTime1 = hoursDict[currentHour][minutesCounter].time.split("T")[1].slice(0, -1)
		var hour1 = parseInt(currentTime1.substr(0, 2))+1
		console.log('hour1: ' + hour1)
		console.log(currentTime1)
		currentTime1 = hour1 + currentTime1.substr(2, currentTime1.length)
		if (currentTime1.length<8){
			currentTime1 = '0' + currentTime1
		}
		console.log(currentTime1)

		return currentTime1
	}


	return(
		<div className="CarspectStation">
			<Card style={{ width: '100%' }}>
			<Container>
			  <Row>
			  <Col sm={4} style={{float: "left", display: "flex", alignItems:"center"}}>
				  <CardMedia
				  	component='img'
				 	image='/companiesLogos/Carspect-logo.jpg'
					alt='Carspect station'
				  	style={{maxHeight: '200px', width: 'auto', margin: '10px auto', marginTop: '30px'}} 
			      />
			  </Col>
			  <Col sm={8}>
			  
				  <CardContent>
				  <Row>
				  	<Col sm={8} style={{float:'left', height: '100%'}}>
	                    <Typography gutterBottom variant='h6' component='div'>{station.name} ({station.distance.toFixed(1)} Km)</Typography>
		                <Typography variant="body2" color="text.secondary">
		                    {station.city}, {station.streetAddress}
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
	                    	<Button variant="contained" style={{marginTop: '7px'}} onClick={book}>boka</Button>
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

    

}

export default CarspectStation;
