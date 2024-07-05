import io from "socket.io-client";
import { styled } from "styled-components";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ReactRecorder from "../components/report/ReactRecorder";

const socket = io.connect("localhost:8000");

const GoBackBtn = styled.div`
  top: 15px;
  left: 15px;
  color: white;
  position: absolute;
  cursor: pointer;
`;

const Report = () => {
  const stopRecording = async (blobURL) => {
    const response = await fetch(blobURL);
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    console.log(blobURL, arrayBuffer);

    // arrayBuffer로 잘 변환되었는지 테스트용 코드
    // const newBlob = new Blob([arrayBuffer], { type: 'audio/webm' });
    // const newBlobURL = URL.createObjectURL(newBlob);
    // console.log(newBlobURL);

    socket.emit("send", arrayBuffer);
  };

  useEffect(() => {
    socket.on("message", (data) => {
      console.log(data);
    });
  }, []);

  return (
    <>
      <GoBackBtn onClick={() => (window.location.href = "/")}>
        <h3>
          <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: "10px" }} />
          메인 페이지
        </h3>
      </GoBackBtn>
      <ReactRecorder stopRecording={stopRecording} />
    </>
  );
};

export default Report;
