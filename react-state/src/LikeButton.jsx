import { useState } from "react";

export default function LikeButton() {
  let [click, setClickButton] = useState(false);
  let [count, setCount] = useState(0);

  let toggleButton = () => {
    setClickButton(!click);
    setCount(count+=1);
  };

  return (
    <div>
    <p>Count={count}</p>
      <p onClick={toggleButton}>{click ? (<i className="fa-solid fa-heart"></i>):(<i className="fa-regular fa-heart"></i>) }</p>
    </div>
  );
}
