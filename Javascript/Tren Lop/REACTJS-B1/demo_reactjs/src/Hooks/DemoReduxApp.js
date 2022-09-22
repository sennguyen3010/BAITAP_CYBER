import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentAction } from '../redux/actions/FakebookActions';

export default function DemoReduxApp() {
  //useSelector thay cho mapStatetoProps
  //   let comments = useSelector((state) => state.FakeBookReducer.comments);
  //   console.log(comments);

  let comments = useSelector((state) => state.FakeBookreducer.comments);
  //   console.log(comments);

  let dispatch = useDispatch();

  // Lấy thông tin người dùng nhập vào
  let [userComment, setUserComment] = useState({
    name: '',
    content: '',
    avatar: '',
  });

  //   console.log('userComment', userComment);
  const handleChange = (e) => {
    let { value, name } = e.target;

    setUserComment({
      ...userComment,
      [name]: value,
    });
  };

  const handleComment = (e) => {
    e.preventDefault();

    let usComment = {
      ...userComment,
      avatar: `https://i.pravatar.cc/150?u=${userComment.name}`,
    };

    // let action = {
    //   type: 'add_comment',
    //   userComment: usComment,
    // };
    dispatch(addCommentAction(usComment));
  };

  return (
    <div className="container">
      <h3>Fakebook App</h3>
      <div className="card text-left">
        <div className="card-header">
          {comments.map((comment, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-2">
                  <img src={comment.avatar} alt="img" style={{ height: 60 }} />
                </div>
                <div className="col-10">
                  <h6 className="text-danger">{comment.name}</h6>
                  <p>{comment.content}</p>
                </div>
              </div>
            );
          })}
        </div>
        <form className="card-body" onSubmit={handleComment}>
          <div className="form-group">
            <h4 className="card-title">Name</h4>
            <input
              className="form-control"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <h4 className="card-title">Content</h4>
            <input
              className="form-control"
              name="content"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-success">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
