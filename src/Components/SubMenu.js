import React, { Component } from 'react'
import { Input, Label, Menu, Form } from 'semantic-ui-react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';

export default class SubMenu extends Component {
  state = { activeItem: 'inbox' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    <Menu secondary vertical>
      <Menu.Item
        name='Movies'
        active={activeItem === 'Movies'}
        onClick={this.handleItemClick}
        // fitted='vertically' 
        // position = 'center'
        as={Link} 
        to={'/construction'}
        style={{textAlign: 'center'}}
      />
      <Menu.Item
        name='Genres'
        active={activeItem === 'Genres'}
        onClick={this.handleItemClick}
        // fitted='horizontally' 
        as={Link} 
        to={'/construction'}
        style={{textAlign: 'center'}}
      />
      <Menu.Item
        name='Director'
        active={activeItem === 'Director'}
        onClick={this.handleItemClick}
        as={Link} 
        to={'/construction'}
        style={{textAlign: 'center'}}
      />
      <Menu.Item
        name='Studio'
        active={activeItem === 'Studio'}
        onClick={this.handleItemClick}
        as={Link} 
        to={'/construction'}
        style={{textAlign: 'center'}}
      />
      <Menu.Item
        name='Box Office'
        active={activeItem === 'Box Office'}
        onClick={this.handleItemClick}
        as={Link} 
        to={'/construction'}
        style={{textAlign: 'center'}}
      />
    </Menu>
    )
  }
}

const TextFont = styled.div`
  font-size: 1.5em;
`
