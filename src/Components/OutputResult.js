import React from 'react'
import { Item, ItemGroup } from 'semantic-ui-react'
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

const ItemProps = (props) => (
  <div>
    <Item.Group>
    {
      props.items.map(item => (
        <Item>
          <Item.Image size='small' src={item.image} />

          <Item.Content>
            <Item.Header as='a'>{item.header}</Item.Header>
            <Item.Description>
              <p>{item.description}</p>
            </Item.Description>
          </Item.Content>
        </Item>
      ))
    }
    </Item.Group>
  </div>
)


export default ItemProps