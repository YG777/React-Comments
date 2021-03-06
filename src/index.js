import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href=" " className="avatar">
          <img alt="avatar" src={faker.image.avatar()}/>
        </a>
        <div className="content">
          <a href=" " className="author">
            SAM
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00 am</span>
          </div>
          <div className="text">I like your blog</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
