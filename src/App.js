import React, { Component } from 'react';
import './App.css';
import Item from './Item'


class App extends Component{
  state={
    list:[ 
      {
       category: 'All',
        item: []
      },
      {
      category: 'Iphone',
      item:[
        {
          name:'Iphone X',
          price:700,
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        },
        {
          name:'Iphone 12',
          price:1300,
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        },
        {
          name:'Iphone SE',
          price:400,
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        }
      ]
    },
    {
      category: 'Samsung',
      item:[
        {
          name:'Samsung S20',
          price:800,
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        },
        {
          name:'Samsung S7',
          price:300,
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        }
      ]
    },
    {
      category: 'One Plus',
      item:[
        {
          name:'One Plus 7',
          price:1000,
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        },
        {
          name:'One Plus 5t',
          price:300,
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        }
      ]
    }
  ],
  activeList:[]

  }

  componentDidMount() {
    this.combineArrs()
  }

  combineArrs = () => {
    let arry = [];
    for(var i = 0; i < this.state.list.length; i++) {
      arry = arry.concat(this.state.list[i].item);
    }
    this.setState({activeList: arry});
  }

  clickHandler=(category)=>{

    if(category === 'All') {
      this.combineArrs();
    } else {
      this.state.list.map((e)=>{
        if(category===e.category){
          this.setState({activeList:e.item})
       }
      })
    }
  
  }



  render(){

  return (
    <div className="App">
      <h1>Cart filter</h1>
      <div className='menu-links'>
    {
      this.state.list.map((e,i)=>{
        return(
      <a title={e.category} href="#" key={i} onClick={()=>this.clickHandler(e.category)}>{e.category}</a>)
      })
    }
    </div>

    {
      this.state.activeList.map((e,i)=>{
        return(
          <Item key={i} name={e.name} price={e.price} desc={e.desc} />
        )
      })
    }
    </div>
 
  );
  }
}

export default App;
