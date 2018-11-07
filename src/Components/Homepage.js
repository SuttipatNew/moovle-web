import React, { Component } from 'react';
import 
  { Grid,
    Button,
    Container,
    Icon,
    Form,
  } from 'semantic-ui-react'
import styled from 'styled-components';

import SortMenu from './SortMenu';
import {Link} from 'react-router-dom';
require('es6-promise').polyfill();
require('isomorphic-fetch');

class Homepage extends Component {
  state = { item: ''}

  handleChange = (e, { item, value }) => this.setState({ [item]: value })

  handleSubmit = () => {
    const { item } = this.state

    this.setState({ submittedItem: item })
  }

  handleClick = () => {
    console.log("Hello World")
    fetch('https://api.github.com/users/bnoly2b4l')
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
    const { item, submittedItem } = this.state
    return (
      <Container>
        <Layout>
          <Grid centered>
            <Grid.Row>
              <TextFont>
                Moovle
              </TextFont>
            </Grid.Row>
            <Grid.Row>
              <Form 
                style={{
                  width: '75%',
                }} 
                onSubmit={this.handleSubmit}>
                <Form.Group 
                  style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                  <Icon flipped='horizontally' size='big' disabled name='search' />
                  <Form.Input placeholder='Search..' item='item' value={ item } onChange={this.handleChange} width={10} />
                </Form.Group>
                <SortMenu />
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
                </Form>
            </Grid.Row>
          </Grid>
          <Button onClick={this.handleClick}>
              YAYAA
          </Button>
        </Layout>
      </Container>
    );
  }
}

export default Homepage;

const Layout = styled.div`
  padding-top: 20em;
  text-align: center;
`
const TextFont = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 6em;
  padding: 0 0 0.2em 0; 
  color: #B50000;
`