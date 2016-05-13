import React, {Component} from 'react'


export default class ShowTripPlan extends React.Component{
	render() {
		console.log(this.props.places)
		return (
			<div>
				<button onClick = {this.props.closeItenary}> Close</button>
				{Object.keys(this.props.places).map(function(i) {
					return 	<div key = {i} id = "selected_places">
								<p><strong> {this.props.places[i].name} </strong></p>
								<p>{this.props.address}</p>
							</div>
				},this)}
			</div>
		)
	}

}
