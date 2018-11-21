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
      // <Menu fluid widths={1} text vertical>
      //   <div class="ui internally celled grid">
      //     <div class='row'>
      //       <Menu.Item name='Movies' color='blue' active={activeItem === 'Movies'} onClick={this.handleItemClick} fitted='horizontally' as={Link} to={'/construction'}>
      //         <TextFont>
      //           Movies
      //         </TextFont>
      //       </Menu.Item>
      //     </div>
      //     <div class='row'>
      //       <Menu.Item name='Genres' color='blue' active={activeItem === 'Genres'} onClick={this.handleItemClick} fitted='horizontally' as={Link} to={'/construction'}>
      //         <TextFont>
      //           Genres
      //         </TextFont>
      //       </Menu.Item>
      //     </div>
      //     <div class='row'>
      //       <Menu.Item name='Director' color='blue' active={activeItem === 'Director'} onClick={this.handleItemClick} fitted='horizontally' as={Link} to={'/construction'}>
      //         <TextFont>
      //           Director
      //         </TextFont>
      //       </Menu.Item>
      //     </div>
      //     <div class='row'>
      //       <Menu.Item name='Studio' color='blue' active={activeItem === 'Studio'} onClick={this.handleItemClick} fitted='horizontally' as={Link} to={'/construction'}>
      //         <TextFont>
      //           Studio
      //         </TextFont>
      //       </Menu.Item>
      //     </div>
      //     <div class='row'>
      //       <Menu.Item name='Box Office' color='blue' active={activeItem === 'Box Office'} onClick={this.handleItemClick} fitted='horizontally' as={Link} to={'/construction'}>
      //         <TextFont>
      //           Box Office
      //         </TextFont>
      //       </Menu.Item>
      //     </div>
      //   </div>
      // </Menu>
      <Menu secondary vertical>
        <Menu.Item
          name='Movies'
          active={activeItem === 'Movies'}
          onClick={this.handleItemClick}
          // fitted='vertically' 
          // position = 'center'
          as={Link} 
          to={'/construction'}
        />
        <Menu.Item
          name='Genres'
          active={activeItem === 'Genres'}
          onClick={this.handleItemClick}
          // fitted='horizontally' 
          as={Link} 
          to={'/construction'}
        />
        <Menu.Item
          name='Director'
          active={activeItem === 'Director'}
          onClick={this.handleItemClick}
          as={Link} 
          to={'/construction'}
        />
        <Menu.Item
          name='Studio'
          active={activeItem === 'Studio'}
          onClick={this.handleItemClick}
          as={Link} 
          to={'/construction'}
        />
        <Menu.Item
          name='Box Office'
          active={activeItem === 'Box Office'}
          onClick={this.handleItemClick}
          as={Link} 
          to={'/construction'}
        />
    </Menu>
    )
  }
}

const TextFont = styled.div`
  font-size: 1.5em;
`
