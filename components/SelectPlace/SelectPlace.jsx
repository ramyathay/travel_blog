import React, {Component} from 'react'
import DisplayPlace from '../DisplayPlace/DisplayPlace.jsx'
import CommentBox from '../CommentBox/CommentBox.jsx'
import './place.scss'

export default class SelectPlace extends React.Component{
	render() {
		// debugger -- To debug application before each render
		return (
			<div className = "Place">
				<label htmlFor='places'>Select your favourite Place </label>
				<select id = 'places' onChange = {this.props.selectPlace} >
					<option> Select </option>
					<option value = "Paris"> Paris </option>
					<option value = "London"> London </option>
				</select>
				{this.props.showPlace? <DisplayPlace placeDetails = {this.props.placeDetails}/> : null}
				{this.props.showPlace ? <CommentBox  placeId = {this.props.placeDetails.result[0].id}/> : null}
			</div>
		)
	}
}