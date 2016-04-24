var TravellerPage = React.createClass({
	render: function(){
		return (
			<div>
				<h1> A Traveller's Delight </h1>
				<h4> Learn more about your favourite destination spot and share your experience </h4>
				<SelectPlace />
			</div>

		)
	}
})

var SelectPlace = React.createClass({
	getInitialState: function() {
		return {showData: false}
	},
	handleChange: function () {
		this.setState({showData: true})
	},
	render: function() {
		return (
			<div>
				<label for = 'places'>Select your favourite Place </label>
				<select id = 'places' onChange = {this.handleChange} value = {this.state.showData}>
					<option> Select </option>
					<option value = "Paris"> Paris </option>
					<option value = "London"> London </option>
				</select>
				{ this.state.showData ? <DisplayPlace /> : null}
				{ this.state.showData ? <CommentBox /> : null}
			</div>
		)
	}
})

var DisplayPlace = React.createClass({
	render: function() {
		return (
			<h3> Favourite Destination Spot</h3>
		)
	}
})

var CommentBox = React.createClass({
	render: function() {
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
})


ReactDOM.render(<TravellerPage />,document.getElementById('container'))