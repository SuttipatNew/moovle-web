import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import styled from 'styled-components'

export default class SortMenu extends Component {
  state = { activeItem: "" }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.props.changeCatagory(name)
  }

  constructor(props) {
    super();
    this.state = {
      activeItem: props.catagory
    }
  }

  render() {
    const { activeItem } = this.state

    return (
      <Layout>
        <Menu text>
          {/* <Menu.Item header>Sort By</Menu.Item> */}
          <Menu.Item
            name='all'
            color='red'
            active={activeItem === 'all'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='movie'
            color='red'
            active={activeItem === 'movie'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='series'
            color='red'
            active={activeItem === 'series'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='news'
            color='red'
            active={activeItem === 'news'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='person'
            color='red'
            active={activeItem === 'person'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='image'
            color='red'
            active={activeItem === 'image'}
            onClick={this.handleItemClick}
          />
        <Menu.Item
            name='review'
            color='red'
            active={activeItem === 'review'}
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