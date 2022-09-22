import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormComment extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    //gửi dữ liệu lên redux
    const action = {
      type: 'HANDLE_SUBMIT',
      payload: this.props.commentInfo,
    };
    this.props.dispatch(action);
  };
  handleChange = (e) => {
    const { id, value } = e.target;
    //gửi dữ liệu lên redux
    const action = {
      type: 'HANDLE_CHANGE',
      payload: {
        id: id,
        value: value,
      },
    };
    this.props.dispatch(action);
  };
  render() {
    let { name, content } = this.props.commentInfo;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <p>Name</p>
          <input
            value={name}
            id="name"
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <p>Content</p>
          <input
            value={content}
            id="content"
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group mt-2">
          <button className="btn btn-success">Comment</button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              const action = {
                type: 'UPDATE_COMMENT',
              };
              this.props.dispatch(action);
            }}
          >
            Update
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  commentInfo: state.commentReducer.commentInfo,
});

export default connect(mapStateToProps)(FormComment);
