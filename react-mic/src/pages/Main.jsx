import { useState } from "react";
import { Container } from "../components/CommonStyles";
import Header from "../components/header/Header";
import Body from "../components/main/Body";
import Menu from "../components/main/Menu";

const Main = () => {
    const [category, setCategory] = useState('대시보드');

    const chooseCategory = (category) => {
        setCategory(category);
    }

    return <>
        <Header />
        <Container>
            <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                <Menu category='대시보드' onClickFunction={chooseCategory} />
                <Menu category='신고현황' onClickFunction={chooseCategory} />
                <Menu category='공지사항' onClickFunction={chooseCategory} />
            </div>
        </Container>
        <Body category={category} />
    </>
}

export default Main;