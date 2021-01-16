import React, { Component } from 'react';
import image1 from '../Images/image1.jpg';
import image2 from '../Images/image2.jpg';
import ParticlesBg from 'particles-bg';
import image3 from '../Images/image3.jpg';
import doc from '../Images/doc.jpg';
import Header from '../layout/Header';
import './Home.css';
import { Link } from '@reach/router';
import Volunteers from '../volunteer/Volunteers';

class Home extends Component {
    render() {
        return (
            <>
             
            <section id="showcase">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                <div className="carousel-item carousel-image-1 active">
                    <div>
                    <div className="carousel-caption d-none d-sm-block text-right mb-5">
                        <hi className="display-3">We are here to help</hi>
                        <p className="lead">"The thing everyone should realise is that the key to happiness is being happy by yourself and for yourself."</p>
                        <a href="sign_up" className="btn btn-danger btn-lg">Sign up Now</a>
                    </div>
                    </div>
                </div>
                <div className="carousel-item carousel-image-2">
                    <div>
                    <div className="carousel-caption d-none d-sm-block mb-5">
                        <hi className="display-3">Talk to our Volunteers who will be available for you</hi>
                        <p className="lead">"Two things prevent us from happiness;living in the past and observing others."</p>
                    </div>
                    </div>
                </div>
                <div className="carousel-item carousel-image-3">
                    <div>
                    <div className="carousel-caption d-none d-sm-block text-right mb-5">
                        <hi className="display-3">The journey of a thousand miles begins with a single step.</hi>
                        <p className="lead">"Be happy, it drives people crazy"</p>
                    </div>
                    </div>
                </div>
                </div>
                <a href="#myCarousel" data-slide="prev" className="carousel-control-prev">
                <span className="carousel-control-prev-icon"></span>
                </a>
                <a href = "#myCarousel" data-slide="next" className="carousel-control-next">
                <span className="carousel-control-next-icon"></span>
                </a>
            </div>
            </section>


                        
            
            <section id="home-icons" className="py-5">
            <div className="container">
                <div className="row">
                <div className="col-md-4 mb-4 text-center">
                    <i className="fab fa-youtube fa-3x mb-2"></i>
                    <h3>Videos</h3>
                    <p>Watch the videos we have specifically chosen for you</p>
                </div>
                <div className="col-md-4 mb-4 text-center">
                    <i className="fas fa-band-aid fa-3x mb-2"></i>
                    <h3>Health Care</h3>
                    <p>Mental Health is as important as physical health, if not more.</p>
                </div>
                <div className="col-md-4 mb-4 text-center">
                    <i className="fas fa-file fa-3x mb-2"></i>
                    <h3>Discussion Forum</h3>
                    <p>Feel free to raise any kind of questions in the Discussion Forum. You can also raise questions anonymously.</p>
                </div>
                </div>
            </div>
            </section>

            
            <section id="home-heading" className="p-5">
            <div className="dark-overlay">
                <div className="row">
                <div className="col">
                    <div className="container pt-5">
                    <br/>
                    <h3>"Most people are about as happy as they make up their minds to be."</h3>
                    </div>
                </div>
                </div>
            </div>
            </section>

                        
            <section id="info" class="py-3">
            
                <div class="container">
                    
                
                    <div class="row">
                    
                    <div class="col-md-8 align-self-center">
                        <h3>Talk to our experts</h3>
                        <p>We have a team of volunteers who are active in the application. They will always be ready to listen to your concerns and will also give you good suggestions.
                        </p>
                        
                        <Link to="/volunteers" className="btn btn-outline-danger btn-lg">Learn More</Link>
                    </div>
                    <div class="col-md-4">
                        <img src={doc} alt="" class="img-fluid" />
                    </div>
                    </div>
                    

                </div>
            </section>



            

            </>
        )
    }
}


export default Home;