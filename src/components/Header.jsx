import React, { useState } from 'react'
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSClice';
import { useSelector } from 'react-redux';

const Header = () => {
    const cars = useSelector(selectCars);
   
    const [nav,setNav]=useState(false);
    const handleClick=()=>{
        setNav(!nav);
    }
  return (
    <Container>
        <a href='/'>
      <img src='/images/logo.svg' alt='/'/>
      </a>
      <Menu>
        {cars.map((car,index)=>
        <a key={index} href='/'>{car}</a>
        )}
      
      </Menu>
      <RightMenu>
        <a href='/'>Shop</a>
        <a href='/'>Account</a>
      <CustomMenu onClick={handleClick}/>
      </RightMenu>
      <BurgerNav show={nav}>
        <CloseWrap>
        <CustomClose onClick={handleClick}/>
        </CloseWrap>
        
        {cars.map((car,index)=>
        <li><a key={index} href='/'>{car}</a></li>
        )}
        <li><a href='/'>Insurance</a></li>
        <li><a href='/'>CyberTruck</a></li>
        <li><a href='/'>Roadaster</a></li>
        <li><a href='/'>Semi</a></li>
        <li><a href='/'>Charging</a></li>
      
        <li><a href='/'>Commercial Energy</a></li>
        
        <li><a href='/'>Find Us</a></li>
        <li><a href='/'>Support</a></li>
   
        
        
      </BurgerNav>
    </Container>
  )
}

export default Header;

const Container= styled.div`
min-height: 60px;
position:fixed;
top:0;
right:0;
left:0;
display:flex;
align-items: center;
justify-content: space-between;
padding:20px;
z-index:1

    
`

const Menu=styled.div`
     display:flex;
     align-items: center;
     justify-content: center;
     flex:1;
     
     
     a{
        font-weight: 600;
        text-transform:uppercase;
        margin-right: 10px;
     }
     @media screen and  (max-width:768px){
        display:none;
     }

`;

const RightMenu=styled.div`
display: flex;
align-items: center;

a{
        font-weight: 600;
        text-transform:uppercase;
        padding:0 10px;
     }
`
const CustomMenu=styled(MenuIcon)`
cursor: pointer;
`;
const BurgerNav =styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
width:300px;
background-color: white;
list-style: none;
padding:20px;
display:flex;
flex-direction: column;
text-align:start;
transform: ${props=> props.show ?'translateX(0)':'translateX(100%)'};
transition: transform 0.2s ease-in-out;
li{
    font-weight: bold;
    padding:15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
}
`
const CustomClose=styled(CloseIcon)`
    cursor: pointer;
`
const CloseWrap=styled.div`
    display: flex;
    justify-content: flex-end;
`