import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import axios from 'axios';
import CommentForm from './CommentForm';
import style from './style';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  }

  loadCommentsFromServer = () => {
    axios.get(this.props.url)
      .then(res => {
        this.setState({ data: res.data });
      })
  }
  handleCommentSubmit = (comment) => {
    let comments = this.state.data;
    comment.id = Date.now();
    let newComments = comments.concat([comment]);
    this.setState({ data: newComments });
    axios.post(this.props.url, comment)
      .catch(err => {
        console.error(err);
        this.setState({ data: comments });
      });
  }

  render() {
    return (
      <div style={ style.commentBox }>
        <h2>Comments:</h2>
        <CommentList data={ this.state.data }/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    )
  }
}

CommentBox.propTypes = {
  url: PropTypes.string,
  pollInterval: PropTypes.number
}

export default CommentBox;