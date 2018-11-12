import React from 'react'
import { Item } from 'semantic-ui-react'
import styled from 'styled-components'

const items = [
  {
    childKey: 0,
    image: '/images/wireframe/image.png',
    header: 'Header',
    description: 'Description',
    meta: 'Metadata',
    extra: 'Extra',
  },
  {
    childKey: 1,
    image: '/images/wireframe/image.png',
    header: 'Header',
    description: 'Description',
    meta: 'Metadata',
    extra: 'Extra',
  },
]

const ItemProps = (props) => <Item.Group items={props.items} />

export default ItemProps