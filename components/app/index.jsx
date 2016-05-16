import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router'
import { Router, Route, Link, browserHistory} from 'react-router'
import Traveller_Page from '../Traveller_Page/TravellerPage.jsx'
import SelectPlace from '../SelectPlace/SelectPlace.jsx'
import DisplayPlace from '../DisplayPlace/DisplayPlace.jsx'
import TouristPlaces from '../TouristPlaces/TouristPlaces.jsx'
import TouristSpot from '../TouristSpot/TouristSpot.jsx'
import TouristPlacesWrapper from '../TouristPlaces/TouristPlacesWrapper.jsx'


ReactDOM.render(<Router history={browserHistory}>
    <Route path="/" component={Traveller_Page}>
    </Route>
    <Route path = '/places/:placeId' component = {TouristSpot} >
    </Route>
    <Route path = '/places/:place' handler = {TouristPlacesWrapper} >
    </Route>
    
  </Router>,document.getElementById('container'))


  



