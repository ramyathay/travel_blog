import React from 'react';
import ReactDOM from 'react-dom';

export default class TouristSpot extends React.Component{
	constructor() {
		super()
		this.state = {place: []}
	}
	componentDidMount() {
		$.ajax({
			url: 'http://tour-pedia.org/api/getPlaceDetails?id=' + this.props.params.placeId,
			dataType: 'json',
			type: 'GET',
			success: function(data) {
				console.log("Requested place  data is",data)
				this.setState({place: data})
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(status, err.toString());
			}.bind(this)
		})
	}
	render() { 
		return (
			<div>
				<li><a href = "/"> Back</a></li>
				<p> {this.state.place.name} </p>
				<p>Located at : {this.state.place.address} </p>
				<p>Contact no. : {this.state.place.international_phone_number} </p>
				<img src = {this.state.place.icon} alt = {this.state.place.name} />
				<p>Website : <a href = {this.state.place.website}> {this.state.place.website} </a></p>
			</div>
		)
	}
}


// <li><a href = {"/places/" + this.props.params.place }> Back</a></li>