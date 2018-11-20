import React,{ Component }  from 'react'
import { Item, ItemGroup } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export default class OutputResult extends Component{
  items = [
    {
      childKey: 0,
      // image: '/images/wireframe/image.png',
      header: 'Header',
      description: 'Description',
      meta: 'Metadata',
      extra: 'Extra',
      url: 'Url'
    },
    {
      childKey: 1,
      // image: '/images/wireframe/image.png',
      header: 'Header',
      description: 'Description',
      meta: 'Metadata',
      extra: 'Extra',
      url: 'Url'
    },
  ]

  // state = { catagory: "" }

  // constructor(props) {
  //   super();
  //   this.state = {
  //     catagory: props.catagory
  //   }
  // }

  genImage = () => {
    let ItemProps = ''
  if(this.props.catagory == 'image'){
    return(
      this.props.items.map(item => (
        <Item>
          <Item.Image  src={item.image} as= 'a'
                    href={item.url}/>
        </Item>
      ))
    )
  }else{
    return(
          <Item.Group>
          {
            this.props.items.map(item => (
              <Item>
                {/* <Item.Image size='small' src={item.image} /> */}

                <Item.Content>
                  <Item.Header 
                    as= 'a'
                    href={item.url}
                  >
                    {item.header}
                  </Item.Header>
                  <Item.Description>
                    <p>{item.description}</p>
                  </Item.Description>
                </Item.Content>
              </Item>
            ))
          }
          </Item.Group>
      )
    }
  }
 
  render(){
      return(
        <div>
          {this.genImage()}
        </div>
        )
  }
} 