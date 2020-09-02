
import React, { Component } from 'react'

export class Banner extends Component {
  render() {
    return (
      <div class="banner-area inc-dots transparent-nav large-font">
        <div id="bootcarousel" class="carousel slide animate_text" data-ride="carousel">
            <div class="carousel-inner text-left paragraph-heading text-light carousel-zoom">
                <div class="item active">
                    <div class="slider-thumb bg-fixed" style="background-image: url(assets/img/agency/4.jpg);"></div>
                    <div class="box-table shadow dark">
                        <div class="box-cell">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-9">
                                        <div class="content">
                                            <h1 data-animation="animated fadeInUp">get solution for your Business</h1>
                                            <h4 data-animation="animated fadeInUp">Expect warmly its tended garden him esteem had remove off. Effects dearest staying now sixteen nor improve.</h4>
                                            <a data-animation="animated fadeInDown" class="btn btn-light border btn-md" href="#">Learn more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="slider-thumb bg-fixed" style="background-image: url(assets/img/agency/5.jpg);"></div>
                    <div class="box-table shadow dark">
                        <div class="box-cell">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-9">
                                        <div class="content">
                                            <h1 data-animation="animated fadeInUp">Value & Build confidence</h1>
                                            <h4 data-animation="animated fadeInUp">Expect warmly its tended garden him esteem had remove off. Effects dearest staying now sixteen nor improve.</h4>
                                            <a data-animation="animated fadeInDown" class="btn btn-light border btn-md" href="#">Learn more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="slider-thumb bg-fixed" style="background-image: url(assets/img/agency/6.jpg);"></div>
                    <div class="box-table shadow dark">
                        <div class="box-cell">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-9">
                                        <div class="content">
                                            <h1 data-animation="animated fadeInUp">Business planing solution</h1>
                                            <h4 data-animation="animated fadeInUp">Expect warmly its tended garden him esteem had remove off. Effects dearest staying now sixteen nor improve.</h4>
                                            <a data-animation="animated fadeInDown" class="btn btn-light border btn-md" href="#">Learn more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a class="left carousel-control shadow" href="#bootcarousel" data-slide="prev">
                <i class="fa fa-angle-left"></i>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control shadow" href="#bootcarousel" data-slide="next">
                <i class="fa fa-angle-right"></i>
                <span class="sr-only">Next</span>
            </a>

        </div>
    </div>
    )
  }
}

export default Banner
