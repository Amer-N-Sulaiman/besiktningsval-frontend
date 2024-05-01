// import logo from '../assets/footer-logo1.png'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
// import Image from 'next/image'

import FacebookIcon from '@mui/icons-material/Facebook';

import {useRouter} from 'next/router'

const Footer = () => {
	var router = useRouter();

	return <footer className='Footer mt-auto'>
				{/* mobile Footer */}
				<Box sx={{ display: {xs: 'block', md: 'block'}, width: '100%', backgroundColor: '#28282B'}}>
					<Container style={{paddingTop: '20px', paddingBottom: '20px'}}>
						<Row>
							<Col>
								<Row style={{marginBottom: '10px'}}>
									<Col>
										<b style={{color: 'white', float: 'left'}} onClick={()=>{router.push('/ ')}}>Besiktningsval.se</b>
									</Col>
									<Col>
										<Chip label="© 2022 Besiktningsval.se" onClick={()=>{router.push('/ ')}} color="primary" style={{float: 'left'}} />
									</Col>
								</Row>
								<Row style={{marginBottom: '10px'}}>
									<Col>
										<b onClick={()=>{router.push("/omoss")}} style={{color: 'white', float: 'left', cursor: 'pointer'}}>Om oss</b>
									</Col>
								</Row>
							
								<Row style={{marginBottom: '10px'}}>
									<Col>
										<b onClick={()=>{router.push("/F&S")}} style={{color: 'white', float: 'left', cursor: 'pointer'}}>Frågor & Svar</b>
									</Col>
									<Col>
										<Badge color="secondary" style={{float: 'left'}}>
										 	<Chip label={<FacebookIcon />} color="primary" style={{float: 'left'}} onClick={ ()=>{console.log(window.open('https://fb.me/besiktningsval'))} } />
		        							
		      							</Badge>
									</Col>
									
								</Row>
								<Row>
									<Col>
										<b onClick={()=>{router.push("/villkor")}} style={{color: 'white', float: 'left', cursor: 'pointer'}}>Villkor</b>
									</Col>
								</Row>
							</Col>
							<Col xs={0} md={4}>
								<Box sx={{ display:{xs: 'none', md: 'block'} }}>
									<img height='150px' width='174.5' alt='besiktning logo' src='/footer-besiktning-logo.png' style={{height:'150px'}} />
								</Box>
							</Col>
						</Row>
						





					</Container>
				</Box>



				{/* desktop Footer 
				<Box sx={{ dispaly: {xs: 'none', md: 'block'}, height:'300px', backgroundColor: '#28282B'}}>
					<Container>
						<Row>
							Footer
						</Row>
					</Container>
				</Box> */}
		</footer>

}


export default Footer