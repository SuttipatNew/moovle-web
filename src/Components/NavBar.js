import React, { Component } from 'react'
import { Menu,
        Input,
        } from 'semantic-ui-react'

import myImage from './Pic/LogoMoovle_01.png';
import {Link} from 'react-router-dom'
import SubMenu from './SubMenu.js'

export default class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item as = {Link} to = '/' >
          <img src= {myImage}/>
        </Menu.Item>

        <Menu.Item>
            <Input className='icon' icon='search' placeholder='Search...' />
        </Menu.Item>
      </Menu>
      
    )
  }
}
