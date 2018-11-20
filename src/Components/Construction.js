import React, { Component } from 'react'
import { Container} from 'semantic-ui-react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import myImage from './Pic/Construction.jpg';

class Construction extends Component {
  render() {
    return(
        <Container>
          <img src= {myImage} width = '100%' height = '100%' flide/>
        </Container>
      )
    }
}
export default Construction;
