import React, { Component } from 'react';
import NavBar from './NavBar';
import SubMenu from './SubMenu.js'
import { Container, Grid , Menu, Input , Icon, Form, Divider, Button } from 'semantic-ui-react';
import myImage from './Pic/LogoMoovle_01.png';
import {Link} from 'react-router-dom'
import SortMenu_2 from './SortMenu_2';
import OutputResult from './OutputResult'
import styled from 'styled-components'



class Result extends Component {
  
  state = { item: ''}

  handleChange = (e, { item, value }) => this.setState({ [item]: value })

  handleSubmit = () => {
    const { item } = this.state

    this.setState({ submittedItem: item })
  }

  routeChange(){
    window.location.hash = "search";
    }
  
  render() {
    const { item, submittedItem } = this.state
    return (
        <div class="ui grid">
          <div class="row">
            <div class="three wide column" >
              <div class = 'ui hidden divider'></div>
              <Form style = {{display: 'flex',
                              justifyContent: 'center'}}>
                <Menu.Item as = {Link} to = '/' alt="complex" >
                  <img src= {myImage} width = '100px' verticalAlign='middle' flide/>
                </Menu.Item>
              </Form>
            </div>
          {/* <Grid.Row height = {3}>
              <Menu.Item >

              </Menu.Item>
          </Grid.Row>

          <Grid.Row height = {3}>
            <SubMenu/>
          </Grid.Row> */}
            <div class="ten wide column" >
              <div class = 'ui hidden divider'></div>
                <Form 
                  style={{
                    width: '100%',
                  }} 
                  onSubmit={this.handleSubmit}>
                  <Form.Group 
                    style={{
                      display: 'flex',
                      justifyContent: 'left'
                    }}>
                    <Icon flipped='horizontally' size='big' disabled name='search' />
                    <Form.Input placeholder='Search..' item='item' value={ item } onChange={this.handleChange} width={10} />
                    <Button
                    style={{ 
                      backgroundColor: '#B50000',
                      color: 'white' 
                      }} 
                    content='SEARCH'
                   as = {Link}
                   to = '/search'>
                   Search
                    </Button>
                  </Form.Group>
                  <Form.Group 
                  style={{
                    display: 'flex',
                    justifyContent: 'left'
                  }}>
                    <SortMenu_2 />
                  </Form.Group>
                </Form>
            </div>
          </div>
          <div class="row">
           <div class="three wide column" >
              <SubMenu />
           </div>
           <div class = "thirteen wide column">
            <div class = "row">
              <TextFont>
                  Do you find 
              </TextFont>
              <div class = 'ui hidden divider'></div>
              </div>
            <div class = "row">
              <Container>
                <OutputResult />
              </Container>
            </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Result;

const TextFont = styled.div`
  font-size: 1em;
`