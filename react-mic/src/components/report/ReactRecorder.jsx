import { useState, useEffect } from "react";
import { ReactMic } from "react-mic";

import styled from "styled-components";
import { FullContainer } from "../CommonStyles";

const RecordBox = styled.div`
  width: 550px;
  height: 350px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 25px;
  border-radius: 20px;
  color: #db0948;
  background-color: #d9d9d9;
`;

const BtnBorder = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 auto;
  border-radius: 50%;
  background-color: red;
`;

const Square = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 auto;
  background-color: red;
`;

const ReactRecorder = ({ stopRecording }) => {
  const [voice, setVoice] = useState(false);
  const [start, setStart] = useState(false);

  const onStop = (blob) => {
    stopRecording(blob.blobURL);
  };

  useEffect(() => {
    if (start) {
      console.log("ing");
      setVoice(true);
      setTimeout(() => setVoice(false), 5000);
    } else {
      setVoice(false);
    }
  }, [start, voice]);

  return (
    <>
      <FullContainer>
        <div>
          <RecordBox>
            <div>
              <h4 style={{ marginBottom: "40px" }}>
                정확한 접수를 위해 시작과 마침 버튼을 눌러주세요.
              </h4>
              <div
                style={{ width: "300px", overflow: "hidden", margin: "0 auto" }}
              >
                <ReactMic
                  record={voice}
                  onStop={onStop}
                  backgroundColor="#d9d9d9"
                />
              </div>
            </div>
          </RecordBox>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {!start ? (
              <BtnBorder onClick={() => setStart(true)}>
                <Circle />
              </BtnBorder>
            ) : (
              <BtnBorder onClick={() => setStart(false)}>
                <Square />
              </BtnBorder>
            )}
          </div>
        </div>
      </FullContainer>
    </>
  );
};

export default ReactRecorder;
