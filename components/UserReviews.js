import React from 'react';
import Carousel from 'react-material-ui-carousel'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const UserReviews = (props) => {
    var items = [
        {
            review: "Tack! På 1 minut hittade jag det bästa besiktningen. Bra hjälp av kundtjänst och snabb och smidig beställning!",
            author: "Johan"
        },
        {
            review: "Perfekt! Sökte på registreringsnummer och satte när och var till dagen före inflytt. Otroligt smidigt!",
            author: "Nina"
        },
        {
        	review: "besiktningsval.se gav mig en bra jämförelse direkt. Jag såg precis vad det skulle kosta och kunde beställa snabbare besiktning till ett bättre pris!",
        	author: "David",
        }
    ]

    return (
    	<Box sx={{margin: '20px auto', width:'80%', marginTop:'20px', marginBottom: '20px'}}>
	        <Carousel 
	        	next={()=>{console.log('next')}}
	        	previous={()=>{console.log('prev')}}
	        >
	            {
	                items.map( (item, i) => <Item key={i} item={item} /> )
	            }
	        </Carousel>
        </Box>

    )
}

export default UserReviews;

function Item(props)
{
    return (
        <Paper style={{backgroundColor: '#B0E0E6', padding: '25px 20px 10px 20px'}}>
        	<Container>
        		<Row>
	            	<h4 style={{marginBottom: '25px'}}>&quot;{props.item.review}&quot;</h4>
	            </Row>
	            <Row style={{display: 'inline-block'}}>
	            	<Col>
	            		<p style={{width: '100px', float: 'right'}}>~ {props.item.author}</p>
	            	</Col>
	            </Row>
            </Container>
        </Paper>
    )
}