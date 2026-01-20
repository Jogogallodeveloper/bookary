import Input from '../input';
import styled from 'styled-components';
import { useState } from 'react';

const SearchContainer = styled.section`
  background-image: linear-gradiente(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 86px 0;
  height: 270px;
  width: 100%;
`;
const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

function Search() {
  const [textTyped, setTextTyped] = useState('');
  return (
    <SearchContainer>
      <Title>Not sure where to start ?</Title>
      <SubTitle>Find here your next read </SubTitle>
      <Input
        placeholder="Pleas type hear your next book"
        onBlur={(event) => setTextTyped(event.target.value)}
      />
      <p>{textTyped}</p>
    </SearchContainer>
  );
}

export default Search;
