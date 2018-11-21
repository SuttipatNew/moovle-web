import React, { Component } from 'react';
import NavBar from './NavBar';
import SubMenu from './SubMenu.js'
import { Container, Grid , Menu, Input , Icon, Form, Divider, Button, GridColumn, GridRow } from 'semantic-ui-react';
import myImage from './Pic/LogoMoovle_01.png';
import {Link} from 'react-router-dom'
import SortMenu from './SortMenu';
import OutputResult from './OutputResult'
import OutResult from './OutResult'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import Pagination from './Pagination';

require('es6-promise').polyfill();
require('isomorphic-fetch');

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

class Result extends Component {
  
  constructor(props) {
    super();
    this.state = {
      text_search: getParameterByName('q'),
      catagory: "all",
      items: []
    }
  }
  
  componentDidMount(){
    this.handleSubmit()
  }
  
  state = { 
    text_search: '',
    catagory: '',
    number: 0,
    page: 0,
    totalPages: 0,
    items: [
      {
        childKey: 0,
        image: ' ',
        header: ' ',
        description: ' ',
        meta: ' ',
        extra: ' ',
        url: ' ',
      }
    ]
  }

  handleChange = (e, {  value }) => this.setState({ text_search: value })

  handleSubmit = async () => {
    const { text_search , catagory } = this.state
    const newURL = 'http://' + window.location.host + window.location.pathname + '?q=' + text_search + '&filter=' + catagory
    const href = window.location.href
    window.history.pushState(null, null, newURL)
    const items = await this.makeRequest(text_search, 1 , catagory)
    this.setState({ 
      items: items ,
      page: 1
    })
  }

  makeRequest = async (text_search, activePage , catagory) => {
    let form = ''
    if (catagory == 'all' || catagory == 'image') {
      form = "q="
    }else{
      form = "default_operator=AND&q=category:"+ catagory + "+text:"
    }
    const response = await fetch('http://localhost:9200/_search?'+ form + text_search + '&size=10&from=' + (activePage-1)*10);
    const json = await response.json();
    let items = ""
    // console.log("response: " + json.hits.hits[0]._source.images)
    if (catagory == 'image') {
      items = json.hits.hits.map(hit => ({ 
        image: hit._source.images,
        url: hit._source.url,
      }));
      // console.log(items)
      // console.log(items.forEach((data) => {
      //   // console.log('data: ',data)
      //   let images = data.image
      //   images.forEach( (image) => {
      //     // console.log('Images: ',image)
      //   })
      // }))
      // console.log(json.hits)
    }else{
      items = json.hits.hits.map(hit => ({ 
        // image: '/images/wireframe/image.png',
        header: hit._source.title,
        description: hit._source.text.substring(0, 300) + '...',
        url: hit._source.url
      }));
    }
      this.setState({
        number: parseInt(json.hits.total),
        totalPages: parseInt(json.hits.total/10) + 1 ,
        pagination: <Pagination
          totalPages={parseInt(json.hits.total/10) + 1} 
          activePage={1}
          onPageChange={this.handlePaginationChange} 
        />
      })
    return items;
  }

  handlePaginationChange = async (e, { activePage }) => {
    this.setState({
      items: [],
    });
    const { text_search, catagory } = this.state;
    const items = await this.makeRequest(text_search, activePage , catagory);
    this.setState({ 
      items: items,
      page: activePage,
      pagination: <Pagination
        totalPages={this.state.totalPages} 
        activePage={activePage}
        onPageChange={this.handlePaginationChange} 
      />
    });
  }


  routeChange(){
    window.location.hash = "search";
    }
  
  onChange_Catagory(status){
    this.setState({
      catagory: status
    }, ()=>{
      this.handleSubmit()
    }
    )

  }

  genPagination = () =>{
    if(this.state.number == 0){
      return(null)
    }else{
      return(
        <PaginationStyle>
          {this.state.pagination}
        </PaginationStyle>
      )
    }

  }


  render() {
    const { text_search, submittedItem } = this.state
    return (
        <div class="ui grid">
          <div class="row">
            <div class="three wide column" >
              <div class = 'ui hidden divider'></div>
              <Form style = {{display: 'flex',
                              justifyContent: 'center'}}>
                <Menu.Item as = {Link} to = '/' alt="complex" >
                  <img src= {myImage} width = '100px' verticalAlign='middle' flide/>
                </Menu.Item>
              </Form>
            </div>
            <div class="ten wide column" >
              <div class = 'ui hidden divider'></div>
                <Form 
                  style={{
                    width: '100%',
                  }} 
                  onSubmit={this.handleSubmit}>
                  <Form.Group 
                    style={{
                      display: 'flex',
                      justifyContent: 'left'
                    }}>
                    <Icon flipped='horizontally' size='big' disabled name='search' />
                    <Form.Input placeholder='Search..' value={ text_search } onChange={this.handleChange} width={10} />
                    <Button>
                      Search
                    </Button>
                  </Form.Group>
                  <Form.Group 
                  style={{
                    display: 'flex',
                    justifyContent: 'left'
                  }}>
                    <SortMenu 
                    catagory = {this.state.catagory}
                    changeCatagory = {this.onChange_Catagory.bind(this)} />
                  </Form.Group>
                </Form>
            </div>
          </div>
          <div class="row">
           <div class="three wide column" >
              <SubMenu />
           </div>
           <div class = "thirteen wide column">
            <div class = "row">
              <TextFont>
                  Do you find "{text_search}" ?
              </TextFont>
              <div class = 'ui hidden divider'></div>
              </div>
            <div class = "row">
              <Container>
                  <WidthContainer>
                    <OutputResult 
                    items={this.state.items} 
                    number = {this.state.number}
                    catagory = {this.state.catagory} />
                    <div style={{textAlign: "center"}}>
                      {this.genPagination()}
                    </div>
                  </WidthContainer>
              </Container>
            </div>
            </div>
          </div>
        </div>
    );
  }
}

Result.propTypes = {
  text_search: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}

export default Result;

const TextFont = styled.div`
  font-size: 1em;
`

const WidthContainer = styled.div`
  max-width: 95%;
`

const PaginationStyle = styled.div`

`
