import React, { Component } from 'react';
import
  { Grid,
    Button,
    Container,
    Icon,
    Form,
  } from 'semantic-ui-react'
import styled from 'styled-components';
import myImage from './Pic/LogoMoovle_01.png';
import SortMenu from './SortMenu';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

require('es6-promise').polyfill();
require('isomorphic-fetch');

class Homepage extends Component {
  state = { item: ''}

  handleChange = (e, { item, value }) => {
    this.setState({ [item]: value })
  }

  handleChangeState = () => {
    this.props.changeText(this.state.item)
  }

  handleSubmit = () => {
    const { text_search } = this.state

    this.setState({ submittedItem: text_search })
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
      <Container>
        <Layout>
          <Grid centered>
            <Grid.Row>
              <img src= {myImage} width = '210px' height = '210px' verticalAlign='middle' flide/>
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
                  <Form.Input placeholder='Search..' item='item' value={ text_search } onChange={this.handleChange} width={10} />
                </Form.Group>
                  <SortMenu />
                   <Button
                   onClick = {this.handleChangeState}
                    content='SEARCH'
                   as = {Link}
                   to = '/search'>
                   Search
                  </Button>
                </Form>
            </Grid.Row>
          </Grid>
          {/* <Button onClick={this.handleClick}>
              API
          </Button> */}
        </Layout>
      </Container>
    );
  }
}

export default Homepage;

Homepage.propTypes = {
  changeText: PropTypes.function
}

const Layout = styled.div`
  padding-top: 5em;
  text-align: center;
`
const TextFont = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 6em;
  padding: 0 0 0.2em 0;
  color: #B50000;
`
const Ellipsis = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

// const ButtonStyle = styled.div`
//   background-color: #B50000;
//   color: white;
// `
