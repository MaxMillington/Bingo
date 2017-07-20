import React, { Component } from 'react';
import Comment from './Comment';
import style from './style';
class CommentList extends Component {
  render() {
    const commentNodes = this.props.data.map(comment => {
      return (
        <Comment author={ comment.author } key={ comment['text'] }>
          { comment.text}
        </Comment>
      )
    })
    return (
      <div style={ style.commentList }>
        { commentNodes }
      </div>
    )
  }
}
export default CommentList;