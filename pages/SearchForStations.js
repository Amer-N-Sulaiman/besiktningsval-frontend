import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Zoom from '@mui/material/Zoom'
import Slide from '@mui/material/Slide'
import Typography from '@mui/material/Typography'

import Search from '../components/Search.js'
import OpusStation from '../components/OpusStation.js'
import CarspectStation from '../components/CarspectStation.js'
import DekraStation from '../components/DekraStation.js'

import {useState, useEffect, useRef} from 'react';

import axios from 'axios';

import produce from 'immer';

import jsCookie from 'js-cookie';

import {useRouter} from 'next/router';

import Head from 'next/head';




const SearchForStations = (props) => {

	const [searchForcer, setSearchForcer] = useState(true);
	const myApiUrl = 'https://api.besiktningsval.se';
	const [sortingMethod, setSortingMethod] = useState('distance');

	const [searchedBefore, setSearchedBefore] = useState(0);
	
	const regNum = jsCookie.get('regNum')
	const [loadingStations, setLoadingStations] = useState(false);

	const [customerCoordinates, setCustomerCoordinates] = useState({
		lat: 0,
		lng: 0,
		NELat: 0,
		NELng: 0,
		SWLat: 0,
		SWLng: 0,
	})

	const [nearStations, setNearStations] = useState([]);
	const nearStationsRef = useRef(nearStations);
	nearStationsRef.current = nearStations

	const [opusStations, setOpusStations] = useState([]);
	const [opusBookingId, setOpusBookingId] = useState('');

	const [carspectStations, setCarspectStations] = useState([]);

	const [dekraStations, setDekraStations] = useState([]);
	const [dekraBookingId, setDekraBookingId] = useState('');

	const router = useRouter();

	useEffect(()=>{
		async function getAllStations(){

			await Promise.all([
				getOpusStations(),
				getCarspectStations(),
				getDekraStations(),
			]);
			
		}

		// if (jsCookie.get('regNum'))
		
		if (jsCookie.get('regNum') == undefined){
			router.push('/')
		}
		getAllStations();
		setLoadingStations(false);
	}, []);
	
	async function searchForStations(location){
			if (loadingStations){
				return
			}
			setLoadingStations(true);
			
			setNearStations([]);
			setSearchedBefore(1)
			await getOpusBookingId();
			var googleMapsApiKey = 'AIzaSyDD4bzCpX0rVcvl6wSm0y__gYPgwvkba14';
			
			try {
				var apiEndPoint = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + location + '&key=' + googleMapsApiKey;
				var locationInfo = await axios.get(apiEndPoint, {
					headers: {
								'Content-Type': 'application/json',
							}
				});
				var lat = locationInfo.data.results[0].geometry.location.lat;
			} catch {
				console.log('there was an error in google maps api');
				setLoadingStations(false);
				setSearchedBefore(1);
				return;
			}
			
			// var lat = 57.708870
			// var lng = 11.974560
			
			// if (location.toLowerCase() === 'stockholm'){
			// 	lat = 59.334591
			// 	lng = 18.063240
			// }
			console.log('location info: ', locationInfo.data)
			var customerCoordinatesNew = produce(customerCoordinates, (copy) => {

				copy.lat = locationInfo.data.results[0].geometry.location.lat;
				copy.lng = locationInfo.data.results[0].geometry.location.lng;

				copy.NELat = locationInfo.data.results[0].geometry.bounds.northeast.lat;
				copy.NELng = locationInfo.data.results[0].geometry.bounds.northeast.lng;

				copy.SWLat = locationInfo.data.results[0].geometry.bounds.southwest.lat;
				copy.SWLng = locationInfo.data.results[0].geometry.bounds.southwest.lng;
				// copy.lat = lat;
				// copy.lng = lng

			});

			if ( JSON.stringify(customerCoordinatesNew) === JSON.stringify(customerCoordinates)){
				setSearchForcer(!searchForcer)
			} else{
				setCustomerCoordinates(customerCoordinatesNew);
			}

	}

	async function searchForStationsWithIp(){
      setNearStations([]);
      var googleMapsApiKey = 'AIzaSyDD4bzCpX0rVcvl6wSm0y__gYPgwvkba14'
      var apiEndPoint = 'https://www.googleapis.com/geolocation/v1/geolocate?key='+googleMapsApiKey
      var locationInfo = await axios.post(apiEndPoint, {})
      var customerCoordinatesNew = produce(customerCoordinates, (copy)=>{
      		copy.lat = locationInfo.data.location.lat;
      		copy.lng = locationInfo.data.location.lng;
      		copy.NELat = 0;
      		copy.NELng = 0;
      		copy.SWLat = 0;
      		copy.SWLng = 0;
      });
		      if ( JSON.stringify(customerCoordinatesNew) === JSON.stringify(customerCoordinates)){
			      setSearchForcer(!searchForcer)
		      } else{
			      setCustomerCoordinates(customerCoordinatesNew);
		      }
    }
	// Runs when the coordinates of the customer change
	useEffect(()=>{
		console.log('set use Effect');
		async function searchForNearStationsLocal (){
			await Promise.all([
				searchForNearCarspectStations(),
				searchForNearOpusStations(),
				searchForNearDekraStations(),
			]);
		}
		searchForNearStationsLocal()
			.then(()=>{
				setLoadingStations(false);
				
			})

	}, [customerCoordinates, searchForcer]);




	// Carspect	
	async function getCarspectStations(){
		var response = await axios.get('https://booking-api.muster.se/v1/Stations?ChainId=2&productType=Inspection', {headers: {'Content-Type': 'application/json'}});
		setCarspectStations(response.data);
	}

	async function getCarspectStationTimeInfo(stationIdx){
		var timeInfo = await axios.get(myApiUrl + '/api/getCarspectStationTimeInfo/'+carspectStations[stationIdx].id+'/', {headers: {'Content-Type': 'application/json'}});
		var timeInfo1 = timeInfo.data;
		for (var i=0; i<timeInfo1.length; i++){
			var hours = Object.keys(timeInfo1[i].hours);
			for (var j=0; j<hours.length; j++){
				var currentHour = hours[j];
                var timeInfo1New = produce(timeInfo1, (copy)=>{
				copy[i].hours[currentHour] = copy[i].hours[currentHour].filter(time=>time.isAvailable);
					if (copy[i].hours[currentHour].length===0){
						delete copy[i].hours[currentHour];
					}
				})
				timeInfo1 = timeInfo1New;
			}
		}
		timeInfo1 = timeInfo1.filter(day => Object.keys(day.hours).length>0)
		return timeInfo1
	}

	async function searchForNearCarspectStations(){
		for (var i = 0; i<carspectStations.length; i++){
			var stationLat = carspectStations[i].coordinateLat;
			var stationLng = carspectStations[i].coordinateLng;
			var distance = getDistanceFromLatLonInKm(customerCoordinates.lat, customerCoordinates.lng, stationLat, stationLng);
			var NEDistance = getDistanceFromLatLonInKm(customerCoordinates.NELat, customerCoordinates.NELng, stationLat, stationLng);
			var SWDistance = getDistanceFromLatLonInKm(customerCoordinates.SWLat, customerCoordinates.SWLng, stationLat, stationLng);
			if (distance < 10 || NEDistance < 10 || SWDistance < 10){
				var timeInfo = await getCarspectStationTimeInfo(i);
				if (timeInfo.length<1){
					continue;
				}
				console.log(timeInfo)
				var carspectStationsNew = produce(carspectStations, (copy)=>{
					copy[i].Company = 'Carspect';
					copy[i].distance = distance;
					copy[i].timeInfo = timeInfo;
					
					var hours = timeInfo[0].hours
					
					var currentHour = Object.keys(hours)[0]
					copy[i].price = hours[currentHour][0].onlinePaymentPrice
					copy[i].nearestAvailableDate = timeInfo[0].day.split("T")[0]
				});
				var nearStationsNew = [...nearStationsRef.current, carspectStationsNew[i]];

				setNearStations(nearStationsNew);
				nearStationsRef.current=nearStationsNew;
			}
		}
	}



	
	// Opus
	async function getOpusStations(){
		var response = await axios.get(myApiUrl + '/api/getOpusStations/', {headers: {'Content-Type': 'application/json'}});
		setOpusStations(response.data);
	}

	async function getOpusBookingId() {
		var apiEndPoint = myApiUrl + '/api/getOpusBookingId/' + regNum +'/';
		var response = await axios.get(apiEndPoint, {headers: {'Content-Type': 'application/json'}});
		setOpusBookingId(response.data.Id);
	}

	async function getOpusStationTimeInfo(stationIdx){
		var timeInfo = await axios.get(myApiUrl + '/api/getOpusStationTimeInfo/'+opusStations[stationIdx].Id+'/'+ opusBookingId +'/', {
			headers: {
				'Content-Type': 'application/json'
			}});
		return timeInfo.data;
	}
	
	async function searchForNearOpusStations(){
		await getOpusBookingId();
		var opusStationsLocalCopy = opusStations;
		for (var i = 0; i < opusStations.length; i++) {
			var stationLat = opusStations[i].Latitude;
			var stationLong = opusStations[i].Longitude;
			var distance = getDistanceFromLatLonInKm(customerCoordinates.lat, customerCoordinates.lng, stationLat, stationLong);
			var NEDistance = getDistanceFromLatLonInKm(customerCoordinates.NELat, customerCoordinates.NELng, stationLat, stationLong);
			var SWDistance = getDistanceFromLatLonInKm(customerCoordinates.SWLat, customerCoordinates.SWLng, stationLat, stationLong);
			if (distance < 30 || NEDistance < 30 || SWDistance < 30){

				
				try{
					var timeInfo = await getOpusStationTimeInfo(i);
				}
				catch{
					continue;
				}
				if (timeInfo.length<1){
					continue;
				}
				var opusStationsNew = produce(opusStations, (copy)=>{
					copy[i].Company = 'Opus';	
					copy[i].distance = distance;
					copy[i].timeInfo = timeInfo;
					var nearestAvailableDate = timeInfo[0].Time.split('T')[0];
					copy[i].nearestAvailableDate = nearestAvailableDate;
					copy[i].price = timeInfo[0].Price;
					
				});
				setOpusStations(opusStationsNew);
				var nearStationsNew = [...nearStationsRef.current, opusStationsNew[i]];
				nearStationsRef.current = nearStationsNew;
				setNearStations(nearStationsNew);
			}
		}
	}

	// Dekra
	async function getDekraStations(){
		var response = await axios.get(myApiUrl + '/api/getDekraStations/'+regNum+'/', {headers: {'Content-Type': 'application/json'}});
		setDekraStations(response.data);
	}

	async function getDekraBookingId(){
		var response = await axios.get(myApiUrl + '/api/getDekraBookingId/'+regNum+'/', {headers: {'Content-Type': 'application/json'}})
		setDekraBookingId(response.data.id)
	}

	async function getDekraStationTimeInfo(stationId){
		var response = await axios.get(myApiUrl + '/api/getDekraStationTimeInfo/'+stationId+'/'+dekraBookingId+'/');
		console.log('Dekra Station Id: ' + stationId);
		console.log('Dekra Booking Id' + dekraBookingId);
		return response.data
	}

	async function searchForNearDekraStations(){
		await getDekraBookingId();
		for (var i = 0; i < dekraStations.length; i++) {
			var stationLat = dekraStations[i].latitude;
			var stationLong = dekraStations[i].longitude;
			var distance = getDistanceFromLatLonInKm(customerCoordinates.lat, customerCoordinates.lng, stationLat, stationLong);
			var NEDistance = getDistanceFromLatLonInKm(customerCoordinates.NELat, customerCoordinates.NELng, stationLat, stationLong);
			var SWDistance = getDistanceFromLatLonInKm(customerCoordinates.SWLat, customerCoordinates.SWLng, stationLat, stationLong);
			if (distance < 10 || NEDistance < 10 || SWDistance < 10){
				var stationId = dekraStations[i].id
				var timeInfo = await getDekraStationTimeInfo(stationId);
				var dekraStationsNew = produce(dekraStations, (copy)=>{
					copy[i].Company = 'Dekra';	
					copy[i].distance = distance;
					copy[i].timeInfo = timeInfo;
					var timeSlotsCounter = 0;
					while(true){
						if (timeInfo[timeSlotsCounter]['timeSlots'].length > 0){
							break;
						}
						timeSlotsCounter += 1;
					}
					var nearestAvailableDate = timeInfo[timeSlotsCounter]['timeSlots'][0]['interval']['start'].split('T')[0];
					copy[i].nearestAvailableDate = nearestAvailableDate;
					copy[i].price = timeInfo[timeSlotsCounter]['timeSlots'][0]['price'];
					
				});
				setDekraStations(dekraStationsNew);
				var nearStationsNew = [...nearStationsRef.current, dekraStationsNew[i]];
				nearStationsRef.current = nearStationsNew;
				setNearStations(nearStationsNew);
			}
		}
		// continue from here
		
	}

	// Common
	function deg2rad(deg) {
		      return deg * (Math.PI/180);
	}
	function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
		var R = 6371;
		var dLat = deg2rad(lat2-lat1);
		var dLon = deg2rad(lon2-lon1);
		var a =
			Math.sin(dLat/2) * Math.sin(dLat/2) +
			Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
			Math.sin(dLon/2) * Math.sin(dLon/2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
		var d = R * c; // Distance in km
		return d;
	}

	return (
		<div className="SearchForStations">
			<Head>
				<title>
					bilbesiktningar finns
				</title>
				<meta name="description" content="Ange din plats för att söka efter de bästa besiktningsinspektionerna nära dig" />
			</Head>
			<Container>
				<Row>
					<Col lg={6} md={6} sm={10} xs={11} style={{margin: "20px auto"}}>
						<Search 
						searchForStations={searchForStations} 
						searchForStationsWithIp={searchForStationsWithIp} 
						setSortingMethod={setSortingMethod}
						sortingMethod={sortingMethod}
						loadingStations={loadingStations} />
					</Col>
				</Row>
			</Container>
			<Container>
				<Row>
					<Col>
						{nearStations.length > 0 && <Typography variant='subtitle2' style={{float:'left'}}>
							Hittades {nearStations.length} stationer
						</Typography>}
						{nearStations.length < 1 && !loadingStations && searchedBefore==1 && <Typography variant='subtitle2' style={{float:'left'}}>
							Inga stationer hittades nära din plats

						</Typography>}
						{nearStations.length < 1 && searchedBefore===0 && <Typography variant='subtitle2' style={{float:'left'}}>
							Ange din plats för att hitta stationer nära dig

						</Typography>}
					</Col>
				</Row>
					
						{nearStations.sort((a, b) => a[sortingMethod] > b[sortingMethod] ? 1 : -1).map((station, idx) => {
							if (station.Company==='Opus'){
								return <Slide key={station.Company + station.Id} direction="right" in={true} mountOnEnter unmountOnExit>
								 		<Row key={station.Company + station.Id}> 
											<Col sm={12} style={{margin: "10px auto"}}>
										          <OpusStation station={station} stationIdx={idx} regNum={regNum} />
    											
											</Col>
										</Row>
										</Slide>
							} else if (station.Company==='Carspect'){

								return <Slide key={station.Company + station.id} direction="right" in={true} mountOnEnter unmountOnExit>
											<Row key={station.Company + station.id}> 
												<Col sm={12} style={{margin: "10px auto"}}>
										        	<CarspectStation station={station} stationIdx={idx} />
										        </Col>
											</Row>
										</Slide>
							} else if (station.Company==='Dekra'){
								return <Slide key={station.Company + station.id} direction="right" in={true} mountOnEnter unmountOnExit>
											<Row key={station.Company + station.id}> 
												<Col sm={12} style={{margin: "10px auto"}}>
													<DekraStation station={station} stationIdx={idx} />
												</Col>
											</Row>
										</Slide>
							}
						})}
					
			</Container>
			

		</div>

	);
}

export default SearchForStations;
