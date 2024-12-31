import { useState } from "react";
import CommentForm from "./CommentForm";
import "./Comment.css";

export default function Comment() {
  const [comments, setComments] = useState([
    {
      name: "Rupesh Kumar",
      remarks: "Nice Place!",
      range: 5,
    },
  ]);
  const addNewComment = (comment) => {
    setComments((currComments) => {
      return [...currComments, comment];
    });
  };
  return (
    <>
      <div>
        <h3>All Comments</h3>
        {comments.map((comment, idx) => {
              return (
            <div key={idx}  className="comment">
              {console.log(comment.name)}
              <span>Name-{comment.name}</span>
              <br />
              <span>Comments-{comment.remarks}</span>
              <br />
              <span>Rating-{comment.range}</span>
            </div>
          );
        })}

        <CommentForm addNewComment={addNewComment} />
      </div>
    </>
  );
}
