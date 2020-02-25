import React, { Component } from 'react';
import './NavBar.scss';



class NavBar extends Component {

  componentDidMount() {


    

  }

  constructor(props) {
    super(props);
    this.state = {
      CurrentPage: "Home",
      Pages: ["Home", "Explore", "About", "Contact"],
    }
  }

  render() {

    return (


      <div class="nav-bar">

      <div class="nav">
        <ul class="nav-items">
          <li class="info-buttons">
            <a onClick={() =>{this.ChangeTo("About");}}>
              About Us
            </a>
          </li>
          <li class="info-buttons">
            <a onClick={() =>{this.ChangeTo("Contact");}}>
              Contact
            </a>
          </li>
          <li class="info-buttons">
            <a id="explore-button" onClick={() =>{this.ChangeTo("Explore");}}>
              Explore
            </a>
          </li>
        </ul>

      </div>


        <span class="swiper">
          <div class="swiper-wrapper left-swipe swiper-top">
            <span class="word-swiper">
              <text class="swipe swipe-r swipe-text-two"><span class="prevent-italicize-overlap">Unique</span></text>
            </span>
            <span class="word-swiper">
              <text class="swipe swipe-r swipe-text-four"><span class="prevent-italicize-overlap">Expressive</span></text>
            </span>
            <span class="word-swiper">
              <text class="swipe swipe-r swipe-text-six"><span class="prevent-italicize-overlap">Affordable</span></text>
            </span>
            <span class="word-swiper">
              <text class="swipe swipe-r swipe-text-eight"><span class="prevent-italicize-overlap">Shop at</span></text>
            </span>
          </div>
          
          <div class="swiper-wrapper right-swipe swiper-top">
            <span class="word-swiper">
              <text class="swipe swipe-l swipe-text-one">Beautiful</text>
            </span>
            <span class="word-swiper">
              <text class="swipe swipe-l swipe-text-three">Custom</text>
            </span>
            <span class="word-swiper">
              <text class="swipe swipe-l swipe-text-five">Trendy</text>
            </span>
            <span class="word-swiper">
              <text class="swipe swipe-l swipe-text-seven">Creations</text>
            </span>
          </div>
        </span>


        <div class="logo-wrapper swiper-top">
          <a class="logo logo-top" id="home-button"  onClick={() =>{this.ChangeTo("Home");}}>
            A<span class="ampersand-adjust-logo">{'&'}</span>K
          </a>
        </div>

        <div class="user-options" style={{'display':'none'}}>

        <a href="#0" class="button-wrapper">
          <button class="button">
            <div class="text">Log In</div>
            <svg width="81px" height="37px" viewBox="0 0 81 37" class="border">
              <polyline points="80,1 80,36 1,36 1,1 80,1" class="background"></polyline>
              <polyline points="80,1 80,36 1,36 1,1 80,1" class="hl-line"></polyline>
            </svg>
          </button>
        </a>
        
        <a href="#0" class="button-wrapper">
          <button class="button">
            <div class="text">Sign Up</div>
            <svg width="81px" height="37px" viewBox="0 0 81 37" class="border">
              <polyline points="80,1 80,36 1,36 1,1 80,1" class="background"></polyline>
              <polyline points="80,1 80,36 1,36 1,1 80,1" class="hl-line"></polyline>
            </svg>
          </button>
        </a>

        </div>

        
        <div class="socials">

        <a href="https://www.facebook.com/groups/363191717888871/" class="socials-wrapper">
          <span class="social">
            <div class="facebook"></div>
          </span>
        </a>
        

        </div>

    </div>


    );
  }

  ChangeTo = (target)  =>  {

    if(this.state.CurrentPage != EventTarget){ //Is the target a page that isn't currently selected?
      if(this.state.Pages.includes(target)){ //Is the target a valid page?

        //Hide old/current page
        if(this.state.CurrentPage == "Home")
        {
          var element = document.getElementById("Home");
          element.style.opacity = 0;
          element.style.pointerEvents = "none";
        }
        if(this.state.CurrentPage == "Contact")
        {
          var element = document.getElementById("Contact");
          element.style.left = "-120%";
        }
        if(this.state.CurrentPage == "About")
        {
          var element = document.getElementById("About");
          element.style.left = "150%";
        }
        if(this.state.CurrentPage == "Explore")
        {
          var element = document.getElementById("Explore");
          element.style.top = "150%";
        }


        //Show new page
        if(target == "Home")
        {
          var element = document.getElementById("Home");
          element.style.opacity = 1;
          this.state.CurrentPage = "Home";
          element.style.pointerEvents = "all";
        }
        if(target == "Contact")
        {
          var element = document.getElementById("Contact");
          element.style.left = "50%";
          this.state.CurrentPage = "Contact";
        }
        if(target == "About")
        {
          var element = document.getElementById("About");
          element.style.left = "50%";
          this.state.CurrentPage = "About";
        }
        if(target == "Explore")
        {
          var element = document.getElementById("Explore");
          element.style.top = "50%";
          this.state.CurrentPage = "Explore";
        }








      }
    }
  
  }

}

export default NavBar;
