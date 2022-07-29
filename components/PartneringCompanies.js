import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import carspectLogo from '../companiesLogos/Carspect-logo.png'
// import opusLogo from '../companiesLogos/Opus-logo.png'
// import dekraLogo from '../companiesLogos/Dekra-logo.png'
import Image from 'next/image'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

const PartneringCompanies = ()=>{

	return <div className="PartneringCompanies" style={{width: '90%', margin: '20px auto', backgroundColor: 'white'}}>
			<Card>
		<Container>
			<Row style={{paddingTop: '10px'}}>
				<Typography variant='button'>
					Vi jämför besiktnings från bland annat
				</Typography>
			</Row>

			<Row>
				<Col>
					<Image src='/companiesLogos/Carspect-logo.png' alt='Carspect logo' height='100px' width='100px' style={{/*height: '100px'*/}} />
				</Col>
				<Col>
					<Image src='/companiesLogos/Opus-logo.png' alt='Opus logo' height='100px' width='100px' style={{/*height: '100px'*/}} />
				</Col>
				<Col style={{paddingTop: '37px'}}>
					<Image height='27px' width='100px' alt='Dekra logo' src='/companiesLogos/Dekra-logo.png' style={{/*width: '100px',*/ marginTop: '10%'}} />
				</Col>
			</Row>
		</Container>
		</Card>
	</div>

}

export default PartneringCompanies;