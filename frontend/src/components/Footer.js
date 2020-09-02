import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer class="default-padding bg-dark text-light">
        <div class="container">
            <div class="row">
                <div class="f-items">
                    <div class="col-md-4 item">
                        <div class="f-item">
                            <h3>About</h3>
                            <p>
                                Excellence decisively nay man yet impression for contrasted remarkably. There spoke happy for you are out. Fertile how old address did showing because sitting replied six. Had arose guest visit going off child she new.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4 item">
                        <div class="f-item link">
                            <h3>Quick LInk</h3>
                            <ul>
                                <li>
                                    <a href="#"><i class="fas fa-angle-right"></i> About us</a>
                                </li>
                                <li>
                                    <a href="#"><i class="fas fa-angle-right"></i> Terms and Condition</a>
                                </li>
                                <li>
                                    <a href="#"><i class="fas fa-angle-right"></i> Compnay History</a>
                                </li>
                                <li>
                                    <a href="#"><i class="fas fa-angle-right"></i> Compnay History</a>
                                </li>
                                <li>
                                    <a href="#"><i class="fas fa-angle-right"></i> Compnay History</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 item">
                        <div class="f-item link">
                            <div class="address">
                                <ul>
                                    <li>
                                        <div class="icon">
                                            <i class="fas fa-home"></i> 
                                        </div>
                                        <div class="info">
                                            <h5>Website:</h5>
                                            <span>www.validtheme.com</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="fas fa-envelope"></i> 
                                        </div>
                                        <div class="info">
                                            <h5>Email:</h5>
                                            <span>support@validtheme.com</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="fas fa-map-marker-alt"></i> 
                                        </div>
                                        <div class="info">
                                            <h5>Address:</h5>
                                            <span>123 6th St. Melbourne, FL 32904</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <hr style="margin: 20px auto;" />
                <div class="row">
                    <div class="col-md-12" style="text-align: center;">
                            <p>&copy; Copyright 2020. All Rights Reserved by Brentech Robotics</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        )
    }
}

export default Footer
