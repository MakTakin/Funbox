import React from 'react';
import styled from 'styled-components'
import background from './images/background.png'
import ListFeed from "./components/list-feed/list-feed";

const Container = styled.div`
    color:white;
    margin:0 auto;
    display:flex;
    flex-direction: column;
    background-position: center center;
    background-image: url(${background});
    background-size: cover;
    background-attachment: fixed;
    @media(min-width: 960px) {
        height:100vh;
    }
`

const Header = styled.header`
    align-self: center;
    font-family: 'Exo 2', sans-serif;
    font-size: 36px;
    margin-top: 45px;
    @media(max-width: 768px) {
        font-size: 30px;
        margin-top: 30px;
    };
    @media(max-width: 430px) {
        font-size: 24px;
        margin-top: 20px;
    };
`

function App() {
  return (
    <Container>
      <Header>Ты сегодня покормил кота?</Header>
        <ListFeed/>
    </Container>
  );
}
export default App;
