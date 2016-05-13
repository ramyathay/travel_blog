import React, {Component} from 'react'
import cookie from 'react-cookie';
//import reactMixin from 'react-mixin'

//import LocalStorageMixin from 'react-localstorage'
import { Router, Route, Link, browserHistory} from 'react-router'
import SelectPlace from '../SelectPlace/SelectPlace.jsx'
import ShowTripPlan from '../ShowTripPlan/ShowTripPlan.jsx'
import './header.scss'


export default class Traveller_Page extends React.Component {

	constructor() {
		super()
		this.state = {showPlace: false,place: '',placeDetails: [],trip_plan: cookie.load('plan_trip'),showTripItenary: false}
	}
	
	getPlaceDetails(e) {
		$.ajax({
			url: 'http://localhost:5000/places/' + e.target.value,
			dataType: 'json',
			type: 'GET',
			success: function(data) {
				this.setState({placeDetails: data,showPlace: true})
				console.log("results are",this.state.placeDetails)
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(status, err.toString());
			}.bind(this)
		})
	};
	showTripPlan() {
		this.setState({showTripItenary: true})
	}
	addPlaceToItenary(places) {
		this.setState({trip_plan: places})
	}
	closeItenary() {
		this.setState({showTripItenary: false})
	}
	render() {
		console.log("Trip details",this.state.trip_plan)
    return (
		<div className = "header">
			<h1> A Traveller's Delight </h1>
			<h4 id = "sub-heading"> Learn more about your favourite destination spot and share your experience </h4>
			<div>
				{this.state.showTripItenary ? <ShowTripPlan places = {this.state.trip_plan} closeItenary = {this.closeItenary.bind(this)}/> : null}
				<SelectPlace selectPlace = {this.getPlaceDetails.bind(this)}  placeDetails = {this.state.placeDetails} showPlace = {this.state.showPlace}  showTripPlan = {this.showTripPlan.bind(this)} addPlaceToItenary = {this.addPlaceToItenary.bind(this)}/>	
			</div>
			
		</div>

		)
  	}
}

//reactMixin(Traveller_Page.prototype, LocalStorageMixin);