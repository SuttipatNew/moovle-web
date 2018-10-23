import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import styled from 'styled-components'

export default class SortMenu extends Component {
  state = { activeItem: 'closest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Layout>
        <Menu text size = 'large'>
          {/* <Menu.Item header>Sort By</Menu.Item> */}
          <Menu.Item
            name='News'
            color='red'
            active={activeItem === 'News'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Casting'
            color='red'
            active={activeItem === 'Casting'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Layout>
    )
  }
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
`