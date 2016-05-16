import React, {Component} from 'react'

export default class TouristPlacesWrapper extends React.Component{
	render() {
		return (
			<TouristPlaces place = {this.props.place_name}  addPlaceToItenary = {this.props.addPlaceToItenary} />
		) 
	}
}