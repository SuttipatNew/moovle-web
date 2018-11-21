import React,{ Component }  from 'react'
import { Item, ItemGroup } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export default class OutputResult extends Component{
  items = [
    {
      childKey: 0,
      image: '/images/wireframe/image.png',
      header: 'Header',
      description: 'Description',
      meta: 'Metadata',
      extra: 'Extra',
      url: 'Url'
    },
    {
      childKey: 1,
      image: '/images/wireframe/image.png',
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

  genWebPage = () => {
    let ItemProps = ''
  
  if(this.props.number == 0){
    return(
      "Search not found!!!"
    )
  }else if(this.props.catagory == 'image'){
    return(
      this.props.items.map(item => {
        // console.log(item.image)
        return (
        <Item>
          {
            item.image && item.image.map(url => <Item.Image size= 'small' src={url} as= 'a' href={item.url}></Item.Image>)
          }
        </Item>
      )})
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
          {this.genWebPage()}
        </div>
        )
  }
} 