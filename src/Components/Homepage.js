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
              Moovle!
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
                <Form.Button color='red' content='Search' />
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