import React, { Component } from 'react';
import './Footer.scss';



class Footer extends Component {

  componentDidMount() {


    

  }

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (


        <div class="footer" id="footer">
          <a class="created-by">
            Created by Macon Holliman
          </a>
          
        <span class="swiper" id="footer-swiper">
          <div class="swiper-wrapper left-swipe swiper-left-mobile">
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
          
          <div class="swiper-wrapper right-swipe swiper-right-mobile">
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


        <div class="logo-wrapper logo-bottom-mobile" id='footer-logo'>
          <a class="logo"  onClick={() =>{this.ChangeTo("Home");}}>
            A<span class="ampersand-adjust-logo">{'&'}</span>K
          </a>
        </div>
          <div class="date">&copy;2020</div>
        </div>


    );
  }


  ChangeTo = (target)  =>  {

    var element = document.getElementById("home-button");
    element.click("Home");
          
  
  
    
    }

}

export default Footer;
