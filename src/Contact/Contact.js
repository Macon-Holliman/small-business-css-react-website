import React, { Component } from 'react';
import './Contact.scss';



class Contact extends Component {

  componentDidMount() {


    

  }

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (

      <div class="contact-wrapper" id="Contact">

        
        <div class="contact-title-wrapper">
        <div class="contact-title">
          Contact Us
            
        </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d4806.420002661456!2d-89.87919774410639!3d31.58858477434875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d31.5883935!2d-89.8794326!5e0!3m2!1sen!2sus!4v1581760461224!5m2!1sen!2sus" width="1140" height="410" frameborder="0"  style={{'border':'0'}}  allowfullscreen=""></iframe>
        
        

        <div class="contact-row">
          <div class="contact-box">

            <div class="contact-item">
              <div class="contact-picture">
                <img class="contact-picture-inner" src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"></img>
              </div>
              <div class="contact-inner-title">
                Phone
              </div>
              <div class="contact-text">
                (601) 792-0361
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-picture">
                <img class="contact-picture-inner" src="https://cdn2.iconfinder.com/data/icons/map-pins-and-navigation-solid/32/zone_area_location_map_pin_address_origin_address_chek_point-512.png"></img>
              </div>
              <div class="contact-inner-title">
                Address
              </div>
              <div class="contact-text">
              1245 N Frontage Rd<br/>
              Prentiss, MS 39474
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-picture"> 
                <img class="contact-picture-inner" src="https://cdn4.iconfinder.com/data/icons/cv-resume-2/32/mail2-512.png"></img>
              </div>
              <div class="contact-inner-title">
                Email
              </div>
              <div class="contact-text">
              aandkcreationsms@gmail.com
              </div>
            </div>

          </div>
        </div>

      </div>


    );
  }


  UpdateCalender = () => {


      
  }

  ToggleDate = (day) => () => {
  }


  OpenFile = () => (e) =>  {
    
  
  }







}

export default Contact;
