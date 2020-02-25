import React, { Component } from 'react';
import './Explore.scss';



class Explore extends Component {

  componentDidMount() {

  this.ChangePictures("Jewelry");
    

  }

  constructor(props) {
    super(props);
    this.state = {
      ItemPictures: [
        ["https://i.imgur.com/sIg5b8n.jpg", "https://i.imgur.com/ApFNLgB.jpg","https://i.imgur.com/4clndwY.jpg", "https://i.imgur.com/krsClEb.jpg"], //Jewelry
        ["https://i.imgur.com/tIBljX6.jpg","https://i.imgur.com/o1Z9yoo.jpg","https://i.imgur.com/lKCUFxb.jpg","https://i.imgur.com/bfphqGK.jpg"], //Clothes
        ["https://i.imgur.com/64wS7pE.jpg","https://i.imgur.com/mhdcnen.jpg","https://i.imgur.com/iP1uE6B.jpg","https://i.imgur.com/o4aEbPy.jpg"], //Bags
        ["https://i.imgur.com/XAqZLMu.jpg","https://i.imgur.com/CvzGq8y.jpg","https://i.imgur.com/CCLiKcK.jpg","https://i.imgur.com/5q2P2Eo.jpg"], //Beauty
        ["https://i.imgur.com/n3OcvRc.jpg","https://i.imgur.com/c1s0CVE.jpg","https://i.imgur.com/D6zSqnp.jpg","https://i.imgur.com/LceKVEG.jpg"], //Food
        ["https://i.imgur.com/GtkCdeD.jpg","https://i.imgur.com/KxVLQ3m.jpg","https://i.imgur.com/18o7P0c.jpg","https://i.imgur.com/UIxjJDi.jpg"], //Home
        ["https://i.imgur.com/qWOOD7T.jpg","https://i.imgur.com/7qzgZJ4.jpg","https://i.imgur.com/qituZYO.jpg","https://i.imgur.com/q3yVwH4.jpg"], //Tumblers
        ["https://i.imgur.com/etEswgC.jpg","https://i.imgur.com/rdiId1J.jpg","https://i.imgur.com/jMCXreD.jpg","https://i.imgur.com/nbx3LrL.jpg"], //Kids
        ["","","",""],
      ],
    }
  }

  render() {

    return (

      <div class="explore-wrapper" id="Explore">

        <div class="explore-inner">
        <div class="explore-inner-full">
          
        <div class="explore-title-wrapper">
          
          <div class="explore-title">
            EXPLORE
          </div>
          <div class="buttons-wrapper">
          <div class="buttons-container">
            <button class="button-explore" onClick={() => {this.ChangePictures("Jewelry")}}>
              <div class="text-button"  id="jewelry-button">JEWELRY</div>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="75px" height="27px" viewBox="0 0 180 60" class="border-button" >
                <polyline points="179,1 179,59 1,59 1,1 179,1" class="background"></polyline>
                <polyline points="179,1 179,59 1,59 1,1 179,1" class="button-line"></polyline>
              </svg>
            </button>
          </div>
          <div class="buttons-container">
            <button class="button-explore" onClick={() => {this.ChangePictures("Beauty")}}>
              <div class="text-button" id="beauty-button">BEAUTY</div>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1"  width="75px" height="27px"  viewBox="0 0 180 60" class="border-button" >
                <polyline points="179,1 179,59 1,59 1,1 179,1" class="background"></polyline>
                <polyline points="179,1 179,59 1,59 1,1 179,1" class="button-line"></polyline>
              </svg>
            </button>
          </div>
          <div class="buttons-container">
            <button class="button-explore" onClick={() => {this.ChangePictures("Clothes")}}>
              <div class="text-button" id="clothes-button">CLOTHES</div>
              <svg  xmlns="http://www.w3.org/2000/svg" version="1.1"  width="75px" height="27px"  viewBox="0 0 180 60" class="border-button" >
                <polyline points="179,1 179,59 1,59 1,1 179,1" class="background"></polyline>
                <polyline points="179,1 179,59 1,59 1,1 179,1" class="button-line"></polyline>
              </svg>
            </button>
          </div>
          <div class="buttons-container">
            <button class="button-explore" onClick={() => {this.ChangePictures("Home")}}>
              <div class="text-button" id="home-button">HOME</div>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1"  width="75px" height="27px"  viewBox="0 0 180 60" class="border-button" >
                <polyline points="179,1 179,59 1,59 1,1 179,1" class="background"></polyline>
                <polyline points="179,1 179,59 1,59 1,1 179,1" class="button-line"></polyline>
              </svg>
            </button>
          </div>
          <div class="buttons-container">
            <button class="button-explore"  onClick={() => {this.ChangePictures("Bags")}}>
              <div class="text-button" id="bags-button">BAGS</div>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="75px" height="27px" viewBox="0 0 180 60" class="border-button" >
                <polyline points="179,1 179,59 1,59 1,1 179,1" class="background"></polyline>
                <polyline points="179,1 179,59 1,59 1,1 179,1" class="button-line"></polyline>
              </svg>
            </button>
          </div>
          <div class="buttons-container">
            <button class="button-explore" onClick={() => {this.ChangePictures("Kids")}}>
              <div class="text-button" id="kids-button">KIDS</div>
              <svg  xmlns="http://www.w3.org/2000/svg" version="1.1"  width="75px" height="27px"  viewBox="0 0 180 60" class="border-button" >
                <polyline points="179,1 179,59 1,59 1,1 179,1" class="background"></polyline>
                <polyline points="179,1 179,59 1,59 1,1 179,1" class="button-line"></polyline>
              </svg>
            </button>
          </div>
          <div class="buttons-container">
            <button class="button-explore"  onClick={() => {this.ChangePictures("Food")}}>
              <div class="text-button" id="food-button">FOOD</div>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1"  width="75px" height="27px"  viewBox="0 0 180 60" class="border-button" >
                <polyline points="179,1 179,59 1,59 1,1 179,1" class="background"></polyline>
                <polyline points="179,1 179,59 1,59 1,1 179,1" class="button-line"></polyline>
              </svg>
            </button>
          </div>
          <div class="buttons-container">
            <button class="button-explore" onClick={() => {this.ChangePictures("Tumblers")}}>
              <div class="text-button" id="tumblers-button">TUMBLERS</div>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1"  width="75px" height="27px"  viewBox="0 0 180 60" class="border-button" >
                <polyline points="179,1 179,59 1,59 1,1 179,1" class="background"></polyline>
                <polyline points="179,1 179,59 1,59 1,1 179,1" class="button-line"></polyline>
              </svg>
            </button>
          </div>
          </div>
        </div>

        <div class="catalog-section"  id="browser-catalog">
          <div class="catalog-item" onMouseOver={this.Hovered()} onMouseOut={this.LeftHovered()} >
            <div class="catalog-img img-one" >
            </div>
          </div>
          <div class="catalog-item" onMouseOver={this.Hovered()} onMouseOut={this.LeftHovered()}>
            <div class="catalog-img img-two"></div>
          </div>
          <div class="catalog-item" onMouseOver={this.Hovered()} onMouseOut={this.LeftHovered()}>
            <div class="catalog-img img-three"></div>
          </div>
          <div class="catalog-item" onMouseOver={this.Hovered()} onMouseOut={this.LeftHovered()}>
            <div class="catalog-img img-four"></div>
          </div>

        </div>

        
        <div class="catalog-section-mobile" id="mobile-catalog">
          <div class="catalog-item" onClick={this.HoveredMobile()} >
            <div class="catalog-img img-one" >
            </div>
          </div>
          <div class="catalog-item" onClick={this.HoveredMobile()}>
            <div class="catalog-img img-two"></div>
          </div>
          <div class="catalog-item" onClick={this.HoveredMobile()}>
            <div class="catalog-img img-three"></div>
          </div>
          <div class="catalog-item" onClick={this.HoveredMobile()}>
            <div class="catalog-img img-four"></div>
          </div>

        </div>

        <div class="catalog-item-selected-container" id="preview-image-container">
          <div class="preview-press-to-close">X</div>
          <img class="catalog-item-selected" src="https://i.imgur.com/sIg5b8n.jpg" id="preview-image"  onClick={() => {this.closeEnlarged()}}></img>
        </div>

        <div class="close-preview-button" id="close-image-button"   onClick={() => {this.closeEnlarged()}}>Close</div>


        </div>



        </div>
        
        

      </div>


    );
  }




  Hovered = ()  => (e) => {
    //Make sure no others are hovered/enlarged

    

    var toClose = false;

    if(e.currentTarget.className.includes("catalog-item-hovered"))
    {
      toClose = true;
    }



    var hovered = document.getElementsByClassName("catalog-item-hovered");

    for(var x = 0; x < hovered.length; x++)
    {
      hovered[x].className = "catalog-item";
    }

    if(toClose) //then close the current instead
    {
      e.currentTarget.className = "catalog-item";
    }
    else
    {
    var onMobile = window.innerWidth;
    if(onMobile <= 650)
    {

      var imgToEnlarge = e.currentTarget.children[0].style.backgroundImage;
      var regex = /"(.*?)"/;
      var matchArray = regex.exec(imgToEnlarge);
      if (matchArray != null) {
        imgToEnlarge = matchArray[1];
      }  
      var element = document.getElementById("preview-image");
      element.src = imgToEnlarge;
      element.style.display = "block";
      
    }
    else
    {

    //enlarge current hover
    e.currentTarget.className += " catalog-item-hovered";

    const el = e.currentTarget.children[0];
    el.addEventListener("mousemove", (e) => {
      var offsetXTuned = e.offsetX/5;
      var offsetYTuned = e.offsetY/5;
      if(offsetXTuned < 0){offsetXTuned = 0;}
      if(offsetYTuned < 0){offsetYTuned = 0;}
      if(offsetXTuned > 100){offsetXTuned = 100;}
      if(offsetYTuned > 100){offsetYTuned = 100;}
      el.style.setProperty('--x', -e.offsetX + "px");
      el.style.setProperty('--y', -e.offsetY + "px");
      el.style.setProperty('background-position', 'right ' + offsetXTuned  +"%" +  ' bottom ' + offsetYTuned + "%");

    });
    }


    }

  }

  
  LeftHovered = ()  => (e) => {
    //Make sure no others are hovered/enlarged

    
    var hovered = document.getElementsByClassName("catalog-item-hovered");

    for(var x = 0; x < hovered.length; x++)
    {
      hovered[x].className = "catalog-item";
    }


  }


  HoveredMobile = ()  => (e) => {
    //Make sure no others are hovered/enlarged

    //Hide footer to not obscure view or close button
    var element = document.getElementById("footer-logo");
    if(element.style.display != "none")
    {
      element.style.display = 'none';
      var element = document.getElementById("footer-swiper");
      element.style.display = 'none';
    }


    var toClose = false;

    if(e.currentTarget.className.includes("catalog-item-hovered"))
    {
      toClose = true;
    }



    var hovered = document.getElementsByClassName("catalog-item-hovered");

    for(var x = 0; x < hovered.length; x++)
    {
      hovered[x].className = "catalog-item";
    }

    if(toClose) //then close the current instead
    {
      e.currentTarget.className = "catalog-item";
    }
    else
    {
    var onMobile = window.innerWidth;
    if(onMobile <= 650)
    {

      var imgToEnlarge = e.currentTarget.children[0].style.backgroundImage;
      var regex = /"(.*?)"/;
      var matchArray = regex.exec(imgToEnlarge);
      if (matchArray != null) {
        imgToEnlarge = matchArray[1];
      }  
      var element = document.getElementById("preview-image");
      element.src = imgToEnlarge;

      var element = document.getElementById("preview-image-container");
      element.style.display = "block";

      var element = document.getElementById("close-image-button");
      element.style.display = "block";
      
    }


    }

  }

  closeEnlarged = ()  => {
    
    var element = document.getElementById("preview-image");
    element.src = "";
    var element = document.getElementById("preview-image-container");
    element.style.display = "none";
    var element = document.getElementById("close-image-button");
    element.style.display = "none";

    
    //Show footer again after closed
    var element = document.getElementById("footer-logo");
    if(element.style.display != "block")
    {
      element.style.display = 'block';
      var element = document.getElementById("footer-swiper");
      element.style.display = 'contents';
    }

  }
  
  ChangePictures = (target)  => {
    //Make sure no others are hovered/enlarged
    var index = 0;
    var pictures = [];
    var element = "";

    
    var element = document.getElementById("preview-image-container");
    if(element.style.display != "none"){element.style.display = "none"; 
    var element = document.getElementById("preview-image");
    element.src="";
    var element = document.getElementById("close-image-button");
    element.style.display = "none";
  }

    if(target == "Jewelry"){index = 0; element = document.getElementById("jewelry-button");}
    if(target == "Clothes"){index = 1; element = document.getElementById("clothes-button");}
    if(target == "Bags"){index = 2; element = document.getElementById("bags-button");}
    if(target == "Beauty"){index = 3; element = document.getElementById("beauty-button");}
    if(target == "Food"){index = 4; element = document.getElementById("food-button");}
    if(target == "Home"){index = 5; element = document.getElementById("home-button");}
    if(target == "Tumblers"){index = 6; element = document.getElementById("tumblers-button");}
    if(target == "Kids"){index = 7; element = document.getElementById("kids-button");}

    
    var resetClass = document.getElementsByClassName("border-button-selected");

    for(var x = 0; x < resetClass.length; x++)
    {
      resetClass[x].className = "text-button";
    }

    if(element != "")
    {
      element.className += " border-button-selected";
    }

    
    var imageContainers = document.getElementsByClassName("catalog-img");

    for(var y = 0; y < imageContainers.length/2; y++)
    {
      imageContainers[y].style.backgroundImage = "url(" + this.state.ItemPictures[index][y] + ")";
      imageContainers[y+4].style.backgroundImage = "url(" + this.state.ItemPictures[index][y] + ")";
    }


  }





}

export default Explore;
