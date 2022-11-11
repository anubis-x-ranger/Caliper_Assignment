import React from 'react'
import styled from 'styled-components';

const Wrap=styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/assets/${props.bgImg}")`};
`
const ItemText = styled.div`
  background-color: #ffffff75;
  color:#7d0bcf;
  margin:auto;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: #060080;
  height: 40px;
  width: 256px;
  color: #F7A4A4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color:black ;
`;
const Section = ({ title,description,leftBtnText,rightBtnText,backgroundImg}) => {
  return (
      <Wrap bgImg={backgroundImg}>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
        <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>

      </Wrap>    
  )
}

export default Section