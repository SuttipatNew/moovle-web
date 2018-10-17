import React, { Component } from 'react';
import 
  { Grid,
    Button,
    Container,
    Form,
  } from 'semantic-ui-react'
import styled from 'styled-components'

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
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Input placeholder='Search..' item='item' value={ item } onChange={this.handleChange} />
                </Form.Group>
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
  /* text-align: center;
  display: flex;
  flex-direction: column; */
`