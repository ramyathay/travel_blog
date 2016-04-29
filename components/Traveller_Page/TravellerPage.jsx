import React, {Component} from 'react'
import SelectPlace from '../SelectPlace/SelectPlace.jsx'
import './header.scss'


export default class Traveller_Page extends React.Component {
	constructor() {
		super()
		this.state = {showPlace: false,place: '',placeDetails: []}
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
	render() {
    return (
		<div className = "header">
			<h1> A Traveller's Delight </h1>
			<h4 id = "sub-heading"> Learn more about your favourite destination spot and share your experience </h4>
			<div>
				<SelectPlace selectPlace = {this.getPlaceDetails.bind(this)}  placeDetails = {this.state.placeDetails} showPlace = {this.state.showPlace} />
			</div>
			
		</div>

		)
  	}
}