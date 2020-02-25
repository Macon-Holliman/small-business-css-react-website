import React, { Component } from 'react';
import './Home.scss';



class Home extends Component {

  componentDidMount() {


    

  }

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (
      <div class="content-wrapper" id="Home">

        <div class="site-title">
          A<span class="ampersand-adjust">{'&'}</span>K

          <div class="sub-site-title">
            Creations
              
          </div>

        </div>

        <button class="button-lg"  onClick={() =>{this.ChangeTo("Explore");}}>
          <div class="text-lg">EXPLORE</div>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="180px" height="60px" viewBox="0 0 180 60" class="border-lg">
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="background"></polyline>
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line"></polyline>
          </svg>
        </button>

      </div>

    );
  }


  ChangeTo = (target)  =>  {

  var element = document.getElementById("explore-button");
  element.click("Explore");
        


  
  }

  ToggleDate = (day) => () => {
  }


  OpenFile = () => (e) =>  {
    
  
  }







}

export default Home;
