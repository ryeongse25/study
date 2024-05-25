import { useState } from "react";
import { callGPT } from "./api/gpt";
import logo from "./assets/logo.png";
import styled from "styled-components";
import DiaryInput from "./components/DiaryInput";
import DiaryDisplay from "./components/DiaryDisplay";

const dummyData = JSON.parse(`
{ "title": "코딩에서의 도전", "thumbnail": "https://source.unsplash.com/1600x900/?coding", "summary": "코딩 강의 후 버그 해결에 대한 고민", "emotional_content": "오늘은 코딩 강의를 듣고 프로젝트에서 버그가 많이 발생해서 고민했어. 스택오버플로에서 해결책을 찾아봤지만 안 돼서 결국 gpt를 통해 해결했어. 하지만 이렇게 해결하는 것이 내 개발 실력에 도움이 될지 걱정돼.", "emotional_result": "나는 새로운 기술을 도입함으로써 문제를 해결하는데 성공했지만, 개발 역량 향상에 대한 불안감을 느꼈다. 이는 내 자아에 대한 불확실성과 자신감 부족을 나타낼 수 있다.", "analysis": "우리는 새로운 기술을 터득함으로써 성장할 수 있지만, 자신의 능력에 대한 의심은 항상 도전적인 과제일 수 있습니다. '자신에게 주어진 한계는, 그가 그것을 느끼는 한, 그의 한계가 될 것이다.' - 마하트마 간디", "action_list": ["자기계발을 위해 새로운 기술에 도전해보세요.", "자신의 능력을 믿고 노력해 나가세요.", "실패와 불안에 대한 대처법을 찾아보고 극복해보세요."] }
`);

function App() {
  const [data, setData] = useState(dummyData);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (userInput) => {
    try {
      setIsLoading(true);
      const message = await callGPT({
        prompt: `${userInput}`,
      });
      setData(JSON.parse(message));
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AppContainer>
        <AppTitle>
          심리상담사 GPT, AI 회고록{" "}
          <img src={logo} width={"100px"} alt="logo" />
        </AppTitle>
        <DiaryInput isLoading={isLoading} onSubmit={handleSubmit} />
        {/* <button onClick={handleClickAPICall}>GPT API</button> */}
        <DiaryDisplay data={data} isLoading={isLoading}></DiaryDisplay>
      </AppContainer>
    </>
  );
}

export default App;

const AppContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
`;

const AppTitle = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 35px;
  text-align: center;
  font-family: "Noto Serif KR";
`;
