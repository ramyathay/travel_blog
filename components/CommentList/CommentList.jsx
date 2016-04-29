import React, {Component} from 'react'

export default class CommentList extends React.Component{
	render() {
		var all_comments = this.props.data.map(function(comment){
		return (
			<div>
				<p key = {comment.id}> {comment.author}  -  {comment.comment_text} - {comment.posted_at}</p> 
			</div>
			)
		})
		return (
			<div>
				{all_comments}
			</div>
		)
	}
}