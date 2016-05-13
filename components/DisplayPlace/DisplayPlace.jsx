import React, {Component} from 'react'
import TouristPlaces from '../TouristPlaces/TouristPlaces.jsx'
import './displayPlace.scss'

export default class DisplayPlace extends React.Component{
	render() {
		return (
			<div className = "place_details"> 
				<h2 id = "place_name">{this.props.placeDetails.result[0].place_name} </h2>
				<img src = {this.props.placeDetails.result[0].image_location} alt = {this.props.placeDetails.result[0].place_name}/>
				<p id = "description"><i> {this.props.placeDetails.result[0].place_description} </i></p>	
				<TouristPlaces place = {this.props.place_name}  addPlaceToItenary = {this.props.addPlaceToItenary}/> 
			</div>
		)
	}
}