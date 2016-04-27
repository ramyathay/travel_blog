import React from 'react';
import ReactDOM from 'react-dom';

 
class Traveller_Page extends React.Component {
  render() {
    return (
		<div>
			<h1> A Traveller's Delight </h1>
			<h4> Learn more about your favourite destination spot and share your experience </h4>
			<SelectPlace />
		</div>

		)
  	}
}
class SelectPlace extends React.Component{
	constructor() {
		super()
		this.state = {showData: false,place: '',placeDetails: [],caller: 'Me',inputValue: ''}
	};
	handleChange(e) {
		this.setState({showData: true,place: e.target.value})
		$.ajax({
			url: 'http://localhost:5000/places/' + e.target.value,
			dataType: 'json',
			type: 'GET',
			success: function(data) {
				this.setState({placeDetails: data})
				console.log("results are",data)
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(status, err.toString());
			}.bind(this)
		})
	};
	handleClick() {
		this.setState({caller: this.state.inputValue})
	}
	handleInputData(e) {
		this.setState({inputValue: e.target.value})
	}
	render() {
		debugger
		return (
			<div>
				<label for = 'places'>Select your favourite Place </label>
				<select id = 'places' onChange = {this.handleChange.bind(this)} value = {this.state.place}>
					<option> Select </option>
					<option value = "Paris"> Paris </option>
					<option value = "London"> London </option>
				</select>
				{  <DisplayPlace  person={this.state.caller} handleClick = {this.handleClick.bind(this)} handleInputData = 
				{this.handleInputData.bind(this)}/>}
				{  <CommentBox /> }
			</div>
		)
	}
}

class DisplayPlace extends React.Component{
	render() {
		return (
			<div>
				<h4> Favourite Destination Spot</h4> 
				<h4> {this.props.person}</h4>
				<form>
					<input type = "text"  onChange = {this.props.handleInputData} />
					<button  type = "submit" onClick = {this.props.handleClick}> Update caller </button>
				</form>
			</div>
		)
	}
}

class CommentBox extends React.Component{
	render() {
		return (
			<div>
				<h3> Share your experience </h3>
				<form id = 'comments'>
					<input type = 'text' placeholder = 'Your Name' />
					<input type = 'text' placeholder = 'Your Comment' />
					<input type = 'submit' value = 'Post'/>
				</form>
			</div>
		)
	}
}


ReactDOM.render(<Traveller_Page />,document.getElementById('container'))