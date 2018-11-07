import React, { Component } from 'react';
import NavBar from './NavBar';
import SubMenu from './SubMenu.js'
import { Container, Grid , Menu, Input , Icon, Form, Divider, Button } from 'semantic-ui-react';
import myImage from './Pic/LogoMoovle_01.png';
import {Link} from 'react-router-dom'
import SortMenu_2 from './SortMenu_2';
import OutputResult from './OutputResult'
import styled from 'styled-components'
require('es6-promise').polyfill();
require('isomorphic-fetch');


class Result extends Component {
  
  state = { 
    text_search: '',
    items: [
      {
        childKey: 0,
        image: '/images/wireframe/image.png',
        header: 'Header',
        description: 'Description',
        meta: 'Metadata',
        extra: 'Extra',
      },
      {
        childKey: 1,
        image: '/images/wireframe/image.png',
        header: 'Header',
        description: 'Description',
        meta: 'Metadata',
        extra: 'Extra',
      },
    ]
  }

  handleChange = (e, {  value }) => this.setState({ text_search: value })

  handleSubmit = () => {
    const { text_search } = this.state
    fetch('http://localhost:9200/_search?q= '+ text_search)
    .then((response) => {
      if (response.status >= 400) {
          throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then((stories) => {
        const items = stories.hits.hits.map(hit => ({ 
          image: '/images/wireframe/image.png',
          header: hit._source.title,
          description: hit._source.text,

        }));
        this.setState({ items: items })
      });
  }

  handleClick = () => {
    console.log("Hello World")
    fetch('http://localhost:9200/_search?q=brad%20pitt')
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(stories) {
        console.log(stories);
    });
  }

  routeChange(){
    window.location.hash = "search";
    }
  
  render() {
    const { text_search, submittedItem } = this.state
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
                    <Form.Input placeholder='Search..' value={ text_search } onChange={this.handleChange} width={10} />
                    <Button onClick={this.handleClick}>
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
                <OutputResult items={this.state.items} />
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