import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

import RegNumConfirmation from '../components/RegNumConfirmation.js';
import UserReviews from '../components/UserReviews.js'
import PartneringCompanies from '../components/PartneringCompanies.js'



const RegNumSearch = () => {

	return (
		<div className='RegNumSearch'>
		{/*Jumbotron*/}
		    <div
		    className="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white"
		    style={{backgroundImage: "url('besiktning-banner.jpg')",}}

		    >
			    <Container>
			    	<Row style={{marginBottom: '40px'}}>
			    		<Col lg={8} md={8} xs={12} style={{margin: '0 auto'}}>
			    			<h1 className="mb-3 h2" style={{color: 'white'}}>Redo att välja besiktning?</h1>
							<h6 className="mt-3 h6" style={{color: 'white'}}>Ange din bils registreringsnummer</h6>
			    		</Col>
			    	</Row>
			    	<Row style={{marginBottom: '40px'}}>
			    		<Col lg={3} md={4} sm={10} xs={12} style={{margin: '0 auto'}}>
							<RegNumConfirmation />
			    		</Col>
			    	</Row>
			    </Container>
		        

		        <p>
		        	Vi jämför besiktningar från flera leverantörer för att hitta den som passar dig bäst
		        </p>
		    </div>
		{/*Jumbotron*/}

		<PartneringCompanies />
		<UserReviews />

		</div>

		
	);
}

export default RegNumSearch;
