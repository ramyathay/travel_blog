import React, {Component} from 'react'
import { Router, Route, Link} from 'react-router'
import cookie from 'react-cookie';
import Update from 'react-addons-update'

import './Tourist_place.scss'

export default class TouristPlaces extends React.Component{
	constructor() {
		super()
		this.state = {tourist_places: [],plan_trip: {},bookmarked: {}}
	}
	componentWillMount() {
		var url = 'http://tour-pedia.org/api/getPlaces?location=' + this.props.place + '&category=attraction'
		$.ajax({
			url: url,
			dataType: 'json',
			type: 'GET',
			success: function(data) {
				console.log("Tourist places are",data)
				this.setState({tourist_places: data})
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(status, err.toString());
			}.bind(this)
		})
	}
	addPlace(place) {
		this.setState({plan_trip: cookie.load('plan_trip')})
		if (!this.state.plan_trip.hasOwnProperty(place.name)) {
			if (this.state.plan_trip) {
				//ES6:- To add a computed property as an object key , just place it in []
				var new_place = Update(this.state.plan_trip,{$merge: {[place.name]: place}})
				var bookmarked_place = Update(this.state.bookmarked,{$merge: {[place.id]: true}})
			}
			else {
				this.setState({plan_trip: place})
				var bookmarked_place = Update(this.state.bookmarked,{$merge: {[place.id]: true}})
				var new_place = place
			}
			
			cookie.save('plan_trip',new_place,{path: '/'})
			this.props.addPlaceToItenary(new_place);
			this.setState({plan_trip: new_place,bookmarked: bookmarked_place})
		}	
	}
	render() {
		console.log("Cookie set values",this.state.plan_trip)
		return (
			<div className = "tourist_places"> 
				<h5><strong> Tourist Attractions </strong></h5>
				{this.state.tourist_places.map(function(place,i) {
					return  <div key = {i} id = "tourist_spot">
								<li key = {i}><Link to = {'/places/'+ place.id} > <i>{place.name}</i></Link></li>
								<button onClick = {this.addPlace.bind(this,place)}> Add Place </button>
								{this.state.bookmarked[place.id] ? <p>&#10038;</p> : null}
							</div>
				},this)}	
			</div>
		)
	}
}








