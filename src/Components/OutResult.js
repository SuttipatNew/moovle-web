import React from 'react'
import { Item } from 'semantic-ui-react'

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
].join(' ')

// description[0] = description[0]

const ItemExampleDescriptions = (props) => (
  <Item.Group>
    <Item>
      <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>Cute Dog</Item.Header>
        <Item.Description>
          <p>{items}</p>
          {/* <p>Many people also have their own barometers for what makes a cute dog.</p> */}
        </Item.Description>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>Cute Dog</Item.Header>
        <Item.Description content={items} />
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
      <Item.Content header='Cute Dog' description={items} />
    </Item>
  </Item.Group>
)

export default ItemExampleDescriptions