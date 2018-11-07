import React, { Component } from 'react';
import NavBar from './NavBar';
import SubMenu from './SubMenu.js'
import { Container, Grid , Menu, Input } from 'semantic-ui-react';
import myImage from './Pic/LogoMoovle_01.png';
import {Link} from 'react-router-dom'

class Result extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width='300px'>
          <Grid.Row height = '300px'>
              <Menu.Item as = {Link} to = '/' alt="complex" >
                <img src= {myImage} width = '100px' verticalAlign='middle' flide/>
              </Menu.Item>
          </Grid.Row>
          <Grid.Row height = {3}>
              <Menu.Item >

              </Menu.Item>
          </Grid.Row>

          <Grid.Row height = {3}>
            <SubMenu/>
          </Grid.Row>

        </Grid.Column>
        <Grid.Column width = "300px">
          <Grid.Row height= "300px" >
          <Menu.Item >
                <Input className='icon' icon='search' placeholder='Search...' width={10}/>
            </Menu.Item>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Result;
