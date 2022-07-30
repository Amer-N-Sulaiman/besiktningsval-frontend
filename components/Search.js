import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Spinner from 'react-bootstrap/Spinner';

import LocationOnIcon from '@mui/icons-material/LocationOn';


import {useState} from 'react';

const Search = ({searchForStations, searchForStationsWithIp, setSortingMethod, sortingMethod, loadingStations}) => {
	const [location, setLocation] = useState('');
	const [sortingMethodName, setSortingMethodName] = useState('Distans');

	const search = (e, location)=>{
		e.preventDefault();
		searchForStations(location);
	}

	return (
		<div className="Search" style={{marginTop: '40px', marginBottom: '40px'}}>
		<form onSubmit={(e) => {search(e, location)}}>
		  <InputGroup className="mb-3">
		    <FormControl
		      placeholder="ange din plats"
		      aria-label="plats"
		      aria-describedby="basic-addon2"
		      value={location}
		      onChange={(e) => {
			      setLocation(e.target.value);
		      }}
		    />
		    {!loadingStations && <Button type="Submit" variant="outline-secondary" id="button-addon2">Sök</Button>}
		    {loadingStations && <Button variant="primary" disabled>
			    <Spinner
			      as="span"
			      animation="grow"
			      size="sm"
			      role="status"
			      aria-hidden="true"
			    />
			    {' '}sökande ...
		  </Button>}
		      
		  </InputGroup>
			{!loadingStations && <DropdownButton
				as={ButtonGroup}
				key="Secondary"
				id={'dropdown-variants-Secondary'}
				variant={'secondary'}
				title={'Sortera efter ' + sortingMethodName}
			>
				<Dropdown.Item eventKey="0" onClick={()=>{setSortingMethod('distance'); setSortingMethodName('Distance')}}>Distans</Dropdown.Item>
				<Dropdown.Item eventKey="1" onClick={()=>{setSortingMethod('price'); setSortingMethodName('Price')}}>Pris</Dropdown.Item>
				<Dropdown.Item eventKey="2" onClick={()=>{setSortingMethod('nearestAvailableDate'); setSortingMethodName('Nearest Date')}}>Närmaste datum</Dropdown.Item>
			</DropdownButton>}
			{loadingStations && <Button variant="primary" disabled>
			    <Spinner
			      as="span"
			      animation="grow"
			      size="sm"
			      role="status"
			      aria-hidden="true"
			    />
			    {' '}läser in ...
		  </Button>}
			<LocationOnIcon fontSize='large' onClick={searchForStationsWithIp} style={{marginLeft: "20px"}} />
				
		</form>
		</div>
	);


}


export default Search;
