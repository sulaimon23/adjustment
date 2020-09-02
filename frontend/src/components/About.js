
import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
      <div id="about" class="about-area default-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-5 thumb">
                    <img src="assets/img/about/2.jpg" alt="Thumb" />
                </div>
                <div class="col-md-7 default info">
                    <h2>Welcome to our <br /><span>consulting agency</span></h2>
                    <p>We create environment of opportunities for <em>skill aquisition </em>in tech for teens and adult.our vision is to provide the best stem education for teens and adult, where everyone is given a sense of accomplishment in achieving their dreams,</p>
                    <p>
                        We provide the highest calibre digital media / programming technology for kids and adults,  providing conducive online environment for learning . via zoom , Google meet and other platforms
                    </p>
                    <ul>
                        <li>
                            <i class="fas fa-check-double"></i> Mtn mpulse launch 2018 & 2019
                        </li>
                        <li>
                            <i class="fas fa-check-double"></i> Data science Bootcamp Oracle Code Week Nigeria 2018 
                        </li>
                        <li>
                            <i class="fas fa-check-double"></i>Google for girls 2018 international womans day 
                        </li>
                        <li>
                            <i class="fas fa-check-double"></i>Oracle Academy : Train the teachers 2108 lagos nigeria 
                        </li>
                        <li>
                            <i class="fas fa-check-double"></i>IOT workshop for teens 2018 
                        </li>
                        <li>
                            <i class="fas fa-check-double"></i>Teen techpreneurship program 2017
                        </li>
                        <li>
                            <i class="fas fa-check-double"></i>AISEN SCHOOL HACKATON 2017
                        </li>
                        <li>
                            <i class="fas fa-check-double"></i>West African Game Exhibition Conference 2017
                        </li>
                        <li>
                            <i class="fas fa-check-double"></i>Oracle Academy student Hackaton 2017 
                        </li>
                        <li>
                            <i class="fas fa-check-double"></i>Drone Summer workshop 2017  
                        </li>
                    </ul>
                </div>
            </div>
        </div>



        <div style="margin-top: 100px;" class="fun-factor-area default-padding bottom-less text-light text-center bg-fixed shadow theme-hard" style="background-image: url(assets/img/banner/1.jpg);">
        <div class="container" >
            <div class="row">
                <div class="col-md-12">
                    <div class="col-md-3 col-sm-6 item">
                        <div class="fun-fact">
                            <i class="flaticon-favorites-button"></i>
                            <div class="timer" data-to="2330" data-speed="5000"></div>
                            <span class="medium">Positive Rating</span>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 item">
                        <div class="fun-fact">
                            <i class="flaticon-manager"></i>
                            <div class="timer" data-to="12345" data-speed="5000"></div>
                            <span class="medium">Student</span>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 item">
                        <div class="fun-fact">
                            <i class="flaticon-newsletter"></i>
                            <div class="timer" data-to="50" data-speed="5000"></div>
                            <span class="medium">Projects</span>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 item">
                        <div class="fun-fact">
                            <i class="flaticon-medal"></i>
                            <div class="timer" data-to="2348" data-speed="5000"></div>
                            <span class="medium">Graduated</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
  }
}

export default About
