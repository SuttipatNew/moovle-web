import React, { Component } from 'react';
import 
  { Grid,
    Button,
    Container,
    Icon,
    Form,
  } from 'semantic-ui-react'
import styled from 'styled-components'

import SortMenu from './SortMenu';

class Homepage extends Component {
  state = { item: ''}

  handleChange = (e, { item, value }) => this.setState({ [item]: value })

  handleSubmit = () => {
    const { item } = this.state

    this.setState({ submittedItem: item })
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
                  className='button'
                  content='SEARCH' />
              </Form>
            </Grid.Row>
          </Grid>
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
// const ButtonStyle = styled.div`
//   background-color: #B50000;
//   color: white;
// `