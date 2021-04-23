import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function FrontScreen() {
  

  return (
  <div>
    <div className="homeage">
        <div className="flex1">
            <div className="logo"><img src="/images/popAmealIcons/LOGO.png"  height="200px" width="300px"/></div>
            <div id="social-icons">
                 <ul>
                    <a href="#"><i className="fa fa-youtube"></i></a>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
        
                 </ul>  
           </div>
                
        </div>

        <div className ="flex2">
                <div className="left">
                    <div ><h1 className="title1">POP A MEAL</h1></div>
                    <div><h3  className="title2">Your favorite restaurant delivered <br/> to you free</h3></div>

                     <div className="start-here">
                     <Link to="/home"><h5 className="here">CLICK HERE TO START ORDERING MEALS</h5></Link>
                     </div>

                     <div className="deli-free"><p >Delivery is free not just for your first order but for every other one.</p></div>      
                </div> 
                <div className="right-food">
                      <div className="right-img">
                        <div><img  className="spoon" src="/images/popAmealIcons/nasi-briyani-mutton.jpg" height="400px" width="400px"/></div>
                      </div> 
                </div> 
        </div>              
                                 
                   
         <div className="flex3">
                  <div className= "reqCont">
                        <div className="req-menu"><a href="menu.html">REQUEST A MENU</a></div>
                   
                       <div><h6  className="menu-free">Get our printed menu delivered to you free</h6></div>
                  </div>
                  <div className="bottom007">
                            <ul className="bottom-image">
                                {/* <li className="ice"><div><img  className="ice" src="/images/latest-pics/ice-kacang.jpg" height="250px" width="400px"/></div></li> */}
                                <li className="yo"><div><img  className="yo" src="/images/latest-pics/burger-restaurant.jpg" height="250px" width="400px"/></div></li>
                                <li className="fan"><div><img  className="fan" src="/images/latest-pics/burger-restaurant-2.jpg" height="250px" width="400px"/></div></li>
                                <li className="yummy"><div><img  className="yummy" src="/images/popAmealIcons/fries-restaurant.jpg" height="250px" width="400px"/></div></li>
                            </ul>
                   </div>    
                   
        </div>    
         
    </div>

    <section id="about">
        <div>
            <h2 className="title-text">Meals Category</h2>
        </div>
        <div className="about-center">

            <article className="about">
                <div className="about-icon">
                <i className="fa fa-cutlery"></i></div>
                    <div className="about-text">
                        <h2 className="about-subtitle">Sea Foods</h2>
                        <p className ="about-info">Lorem ipsum dolor sit amet 
                            consectetur adipisicing elit. Cupiditate </p>
                </div>
            </article>


            <article className="about">
                    <div className="about-icon">
                        <i className="fa fa-cloud"></i></div>
                        <div className="about-text">
                            <h2 className="about-subtitle">African Dishes</h2>
                            <p className ="about-info">Lorem ipsum dolor sit amet 
                                consectetur adipisicing elit. Cupiditate </p>
                    </div>
            </article>



            <article className="about">
                    <div className="about-icon">
                        <i className="fa fa-shopping-basket"></i></div>
                        <div className="about-text">
                            <h2 className="about-subtitle">Grill Fish</h2>
                            <p className ="about-info">Lorem ipsum dolor sit amet 
                                consectetur adipisicing elit. Cupiditate </p>
                    </div>
            </article>

             <article className="about">
                    <div className="about-icon">
                        <i className="fa fa-leaf"></i></div>
                        <div className="about-text">
                            <h2 className="about-subtitle">Organic Foods</h2>
                            <p className ="about-info">Lorem ipsum dolor sit amet 
                                consectetur adipisicing elit. Cupiditate </p>
                    </div>
            </article>

            <article className="about">
                    <div className="about-icon">
                        <i className="fa fa-coffee"></i></div>
                        <div className="about-text">
                            <h2 className="about-subtitle">Healthy Food</h2>
                            <p className ="about-info">Lorem ipsum dolor sit amet 
                                consectetur adipisicing elit. Cupiditate </p>
                    </div>
            </article>
            
            <article className="about">
                    <div className="about-icon">
                        <i className="fa fa-spoon"></i></div>
                        <div className="about-text">
                            <h2 className="about-subtitle">Grill Fish</h2>
                            <p className ="about-info">Lorem ipsum dolor sit amet 
                                consectetur adipisicing elit. Cupiditate </p>
                    </div>
            </article>

           

        </div>

    </section>

  

    <section className="menu" id="menu">
        <article className="menu-image1"></article>
        <article className="menu-text">
            <div className="menu-text-center">
                    <div className="first">
                            <div className="bike"><img src="/images/popAmealIcons/3.png" height="130px" width="180px"/></div>
                            <div><h1>ABOUT US</h1></div>
                            <p>
                                We are a service delivery company with the focus on delivering your meal of choice from your choice
                                restaurant without breaking a sweat when you place your order from our physical menu or from our website

                            </p>
                    </div>  
            </div>

            <div className="second">
                   
                </div>
        </article>
    </section>


    <section className="menu2" id="menu">
            <article className="menu-image2"></article>
            <article className="menu-text">
                <div className="menu-text-center">
                        <div className="first">
                                <div className="bike"><img src="/images/popAmealIcons/3.png" height="130px" width="180px"/></div>
                                <div><h1>BENEFITS</h1></div>
                                <div className="benefit-content">
                                        <div className="restBene">
                                            <h3>As a Restaurant</h3>
                                            <ol>
                                                <li>We help to increase your sales</li>
                                                <li>We give your restaurant the deserved awareness and attension</li>
                                                <li>Making your physical Menu available in 5,000 homes and offices.</li>
                                            </ol>
                                        </div>
                                        <div className="customerBene" >
                                                <h3>As a Customer</h3>
                                                <ol>
                                                    <li>Fast and efficient delivery of your choice meal for free</li>
                                                    <li>Having the feel of restaurant with the help of our physical menu in your homes and offices</li>
                                                    <li>Easy and efficient meal ordering method</li>
                                                </ol>
                                        </div>
                                
                                </div>
                        </div>  
                </div>
    
        
            </article>
        </section>

    <div className="away">

        <div className ="about2">              
            <div className= "partner">
                <div><img  className="spoon" src="/images/popAmealIcons/12.png" height="15px" width="250px"/></div>
                <div ><h5 className="become">Become A Partner Restaurant</h5></div>
                <div><p className="create-new">Create new revenue stream for your <br/>business and reach new customers by <br/>partnering with us</p></div>
                <div className="foot "><a href="#">FOR PARTNERSHIP</a></div>
            </div>  

            <div className="printMenu">
                <div><img  className="spoon" src="/images/popAmealIcons/13.png" height="150px" width="250px"/></div>
                <div ><h5 className="become">Request a printed menu</h5></div>
                <div><p className="create-new">Our printed menu are designed to help you <br/>relive the experience of restaurant <br/>dinning at the comfort of your home</p></div>
                <div className="foot "><a href="menu.html">REQUEST A MENU</a></div>
                </div>

            <div className="advertise">
                <div><img  className="speaker" src="/images/popAmealIcons/14.png" height="150px" width="250px"/></div>
                <div ><h5 className="become">Advertise with us</h5></div>
                <div><p className="create-new">Got a product you want the world<br/> to know about? then advertise<br/> with us</p></div>
                <div className="foot "> <Link to="/contact">Contact Us</Link></div>
            </div>  

        </div>   

        
    </div>
   </div>

  );
}
