import React, { useState } from "react";
import styles from "./Commentwindow.module.css";
function Commentwindow() {
  const [comment, setComment] = useState([]);

  const showComment = () => {
    const commentss = document.querySelector("textarea").value;
    setComment([...comment, commentss]);
  };

  return (
    <div className={styles.bodd}>
      <div style={{ border: "" }}>
        Comment Here!!
        <div style={{ border: "" }}>
          <textarea name="" id="" cols="50" rows="20"></textarea>
          <div>
            <button onClick={showComment}>Submit</button>
          </div>
          {comment.map((com, i) => {
            console.log(i);
            return <div>{comment[comment.length - i - 1]}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
export default Commentwindow;
