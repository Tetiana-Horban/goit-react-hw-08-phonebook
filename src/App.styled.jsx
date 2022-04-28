import styled from 'styled-components';
import images from './images/bg.png';
import homePageImg from './images/homePage.jpg';

const AppWrapper = styled.div`
  background-image: url('${images}');
  padding-top: 45px;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
`;
const HomeWrapper = styled.div`
  background-image: url('${homePageImg}');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  padding: 20px;
`;
const Container = styled.div`
  width: 75%;
  margin-top: 10%;
`;

const Title = styled.h2`
  font-size: 35px;
  font-style: italic;
  text-align: center;
  color: blue;
`;
const TitleHome = styled.h2`
  font-size: 60px;
  font-style: italic;
  text-align: center;
  color: black;
`;
export { AppWrapper, Title, HomeWrapper, Container, TitleHome };
