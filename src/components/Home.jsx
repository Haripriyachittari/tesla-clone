import React from 'react'
import styled from 'styled-components'
import Section from './Section'
  
const Home = () => {
  return (
    <Container>
      <Section
      title="Model S"
      description="Order online for Touchless Delivery"
      backgroundImg="model-s.jpg"
      leftBtnText="Customer Order"
      rightBtnText="Existing Inventory"
      />
      <Section
      title="Model Y"
      description="Order online for Touchless Delivery"
      backgroundImg="model-y.jpg"
      leftBtnText="Customer Order"
      rightBtnText="Existing Inventory"/>
         <Section
      title="Model 3"
      description="Order online for Touchless Delivery"
      backgroundImg="model-3.jpg"
      leftBtnText="Customer Order"
      rightBtnText="Existing Inventory"/>

      <Section
      title="Model X"
      description="Order online for Touchless Delivery"
      backgroundImg="model-x.jpg"
      leftBtnText="Customer Order"
      rightBtnText="Existing Inventory"/>
   

<Section
      title="Lowest Cost Solar panels in America"
      description="Money-back guarentee"
      backgroundImg="solar-panel.jpg"
      leftBtnText="Order now"
      rightBtnText="Learn more"/>

<Section
      title="Solar for New Roofs"
      description="Solar Roofs Costs Less Than a New Roof Plus Solar Panels "
      backgroundImg="solar-roof.jpg"
      leftBtnText="Order now"
      rightBtnText="Learn more"/>

      
<Section
      title="Accessories"
      backgroundImg="accessories.jpg"
      leftBtnText="Shop Now"
      />

    </Container>
  )
}

export default Home

const Container =styled.div`
height:100vh;
z-index: 1;
`
