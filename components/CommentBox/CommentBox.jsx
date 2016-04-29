import React, {Component} from 'react'
import CommentList from '../CommentList/CommentList.jsx'


export default class CommentBox extends React.Component{
	constructor () {
		super ()
		this.state = {name: '', comment: '',all_comments: []}
	}
	handleTextChange(e) {
		this.setState({name: e.target.value})
	}
	handleTextAreaChange(e) {
		this.setState({comment: e.target.value})
	}
	componentDidMount() {
		$.ajax({
			url: 'http://localhost:5000/comments/' + this.props.placeId,
			type: 'GET',
			success: function(data) {
				this.setState({all_comments: data})
			}.bind(this),
			error: function(xhr, status, err) {
				console.log(status, err.toString());
			}.bind(this)
		})
	}
	handleSubmit(e) {
		e.preventDefault()
		var new_comment = {author: this.state.name,comment_text: this.state.comment}
		var update_comment = []
		$.ajax({
			url: 'http://localhost:5000/comments/' + this.props.placeId,
			type: 'POST',
			data: new_comment,
			success: function(data) {
				new_comment.id = data.comment_id
				update_comment = this.state.all_comments
				update_comment.push(new_comment)
				this.setState({name:'',comment: '',all_comments: update_comment})
				console.log("Successfully posted the comment",data)
			}.bind(this),
			error: function(xhr, status, err) {
				console.log(status, err.toString());
			}.bind(this)
		})
	}
	render() {
		return (
			<div>
				<h5> Traveller's records </h5>
				<CommentList data={this.state.all_comments} />
				<h5> Share your experience </h5>
				<form id = 'comments' onSubmit = {this.handleSubmit.bind(this)}>
					<label htmlFor= "name">Your Name </label>
					<input type = "text" id = "name" value = {this.state.name} onChange = {this.handleTextChange.bind(this)}/>
					<label htmlFor= "comment">Share your experience </label>
					<textarea value = {this.state.comment} onChange = {this.handleTextAreaChange.bind(this)} id = "comment" cols = "55" rows = "4" /> 
					<button type = "submit" > Post </button>
				</form>
			</div>
		)
	}
}


