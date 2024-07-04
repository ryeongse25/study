import { useState, useEffect } from "react";
import { ReactMic } from "react-mic";

import styled from 'styled-components'
import { FullContainer } from "../CommonStyles";

const BtnBorder = styled.button`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid black;
    background-color: white;
    cursor: pointer;
`

const Circle = styled.div`
    width: 50px;
    height: 50px;
    margin: 0 auto;
    border-radius: 50%;
    background-color: red;
`

const Square = styled.div`
    width: 50px;
    height: 50px;
    margin: 0 auto;
    background-color: red;
`

const ReactRecorder = ({stopRecording}) => {
    const [voice, setVoice] = useState(false);
    const [start, setStart] = useState(false);

    const onStop = (blob) => {
        stopRecording(blob.blobURL)
    }

    useEffect(() => {
        if (start) {
            console.log('ing')
            setVoice(true);
            setTimeout(() => setVoice(false), 5000);
        } else {
            setVoice(false)
        }
    }, [start, voice])

    return <>
        <FullContainer>
            <div style={{textAlign: 'center'}}>
                <h3 style={{marginBottom: '10px'}}>통신 중...</h3>
                <h4>녹음이 종료되면 신고 내역이 자동으로 전송됩니다.</h4>
                <ReactMic record={voice} onStop={onStop}/>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    {!start ? 
                        <BtnBorder onClick={() => setStart(true)}>
                            <Circle />
                        </BtnBorder> : 
                        <BtnBorder onClick={() => setStart(false)}>
                            <Square />
                        </BtnBorder>
                    }
                </div>
            </div>
        </FullContainer>
    </>
}

export default ReactRecorder;