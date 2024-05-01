import { useState, useEffect, useRef } from "react";

import DekraLogo from '../public/companiesLogos/Dekra-logo.png'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import produce from "immer";

import ReactDOM from 'react-dom';
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
    const [hourCounter, setHourCounter] = useState(0);
    const hoursCounterRef = useRef();

    const book = ()=>{
        window.open('https://bokning.dekra-bilbesiktning.se/')
    }
    
    const getTimeInfo = ()=>{
        var timeInfo = station.timeInfo;
        var timeInfoNew = [];
        for (var i=0; i<timeInfo.length; i++){
            if (timeInfo[i].timeSlots.length > 0){
                timeInfoNew.push(timeInfo[i])
            }
        }
        return timeInfoNew;
    }

    const [timeInfo, setTimeInfo] = useState(getTimeInfo());
    
    const increaseDate = () => {
        if (dateCounter < timeInfo.length-1){
            setHourCounter(0);
            setDateCounter(dateCounter+1);
        }
    }

    const decreaseDate = () => {
        if (dateCounter > 0){
            setHourCounter(0);
            setDateCounter(dateCounter-1);
        }
    }

    const increaseTime = () => {
        if (hourCounter < timeInfo[dateCounter].timeSlots.length-1){
            setHourCounter(hourCounter+1);
        }
    }

    const decreaseTime = () => {
        if (hourCounter > 0){
            setHourCounter(hourCounter-1)
        }
    }

    const currentDate = () => {
        var date = timeInfo[dateCounter].date;
        return date;
    }

    const currentTime = () => {
        var time = timeInfo[dateCounter].timeSlots[hourCounter].interval.start
        time = time.split('T')[1];
        time = time.split('.')[0];
        return time;
    }

    const price = () => {
        var price1 = timeInfo[dateCounter].timeSlots[hourCounter].price
        return price1;
    }


	return(
		<div className="CarspectStation">
			<Card style={{ width: '100%' }}>
			<Container>
			  <Row>
			  <Col sm={4} style={{float: "left", display: "flex", alignItems:"center"}}>
				  <CardMedia
				  	component='img'
				 	image='/companiesLogos/Dekra-logo.png'
                    alt='Dekra station'
				  	style={{maxHeight: '200px', maxWidth: '200px', width: 'auto', margin: '10px auto', marginTop: '30px'}} 
			      />
			  </Col>
			  <Col sm={8}>
			  
				  <CardContent>
				  <Row>
				  	<Col sm={8} style={{float:'left', height: '100%'}}>
	                    <Typography gutterBottom variant='h6' component='div'>{station.stationNumber} ({station.distance.toFixed(1)} Km)</Typography>
		                <Typography variant="body2" color="text.secondary">
		                    {station.city}, {station.address}
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
