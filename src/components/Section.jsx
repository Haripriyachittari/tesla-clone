import React from 'react'
import styled from 'styled-components'




const Section = ({title, description,backgroundImg,leftBtnText,rightBtnText}) => {
  return (
    <Wrap bgImg={backgroundImg}>
       
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
        </ItemText>
       
      
      <Buttons>
     s

      <ButtonGroup>
        <LeftButton>
         {leftBtnText}
        </LeftButton>
        {rightBtnText &&
        <RightButton>
         {rightBtnText}
        </RightButton>}
      </ButtonGroup>
     
      <DownArrow>
        <img src='/images/down-arrow.svg' alt={title}/>
      </DownArrow>
      </Buttons>
      
    
    </Wrap>
  )
}

export default Section;


const Wrap =styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    background-image: ${(props)=>`url("/images/${props.bgImg}")`};
`
const ItemText=styled.div`
    padding-top:15vh;
    text-align: center;
`
const Buttons=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ButtonGroup=styled.div`
display:flex;
align-items: center;
justify-content:center;
flex-wrap:wrap ;
margin-bottom: 5px;
`;

const LeftButton=styled.div`
background-color: rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display: flex;
align-items:center;
justify-content: center;
border-radius: 2rem;
text-transform:uppercase;
opacity:0.85;
font-size:12px;
cursor: pointer;
margin:8px;


`;

const DownArrow=styled.div`

height:40px;
margin:20px;
width:50px;
animation: animateDown infinite 1.5s;
    
`
const RightButton=styled(LeftButton)`
background-color:white;
color:black;
opacity: 0.65;
`;
