import { HomeWrapper, TitleHome, Container } from 'App.styled';
import React from 'react';

const HomePage = () => {
  return (
    <HomeWrapper>
      <Container>
        <TitleHome>Welcome to the main page of the phonebook!</TitleHome>
      </Container>
    </HomeWrapper>
  );
};
export default HomePage;
