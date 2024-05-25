import { useState } from "react";
import { Title } from "./CommonStyles";
import styled from "styled-components";

const DiaryInput = ({ isLoading, onSubmit }) => {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleClick = () => {
    if (!userInput) {
      alert("일과를 적어주세요.");
      return;
    }
    onSubmit(userInput);
    setUserInput("");
  };

  return (
    <>
      <Title>오늘의 일</Title>
      <textarea
        cols="70"
        rows="5"
        value={userInput}
        onChange={handleUserInput}
        placeholder="오늘 일어난 일들을 간단히 적어주세요."
      ></textarea>
      <br />
      <ButtonContainer>
        <button onClick={handleClick}>GPT 회고록을 작성해줘!</button>
      </ButtonContainer>
    </>
  );
};

export default DiaryInput;

const ButtonContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
`;
