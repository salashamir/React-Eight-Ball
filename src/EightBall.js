import { useState } from "react";
import chooseRandom from "./helpers";

export default function EightBall({ answers }) {
  const [currAnswer, setCurrAnswer] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const ballStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background: isClicked ? currAnswer.color : "black",
  };
  const onClickHandler = () => {
    const answer = chooseRandom(answers);
    setCurrAnswer(answer);
    setIsClicked(true);
  };
  return (
    <div onClick={onClickHandler} style={ballStyle} className="EightBall">
      <p>{isClicked ? currAnswer.msg : "Think of a question"}</p>
    </div>
  );
}
