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
        <Menu text>
          {/* <Menu.Item header>Sort By</Menu.Item> */}
          <Menu.Item
            name='movies'
            color='red'
            active={activeItem === 'movies'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='news'
            color='red'
            active={activeItem === 'news'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='cast'
            color='red'
            active={activeItem === 'cast'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='image'
            color='red'
            active={activeItem === 'image'}
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