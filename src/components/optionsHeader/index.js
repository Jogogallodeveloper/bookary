import styled from 'styled-components';

const OptionsContainer = styled.ul`
  display: flex;
`;

const OptionContainer = styled.li`
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

const textOptions = ['CATEGORIES', 'FAVORITES', 'MY WISH LIST'];

function OptionsHeader() {
  return (
    <OptionsContainer className="options">
      {textOptions.map((text) => (
        <OptionContainer className="option" key={text}>
          <p>{text}</p>
        </OptionContainer>
      ))}
    </OptionsContainer>
  );
}

export default OptionsHeader;
