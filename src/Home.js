/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from "react"
import emailjs from '@emailjs/browser'


function Home ()
{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_2y4oasj', 'template_vsv067o', form.current, 'dcw9k39cI7d6PsmwR')
          .then((result) => {
              alert('Your appointment has been successfully booked.');
              const nameval = document.getElementById('form');
              nameval.reset();

          }, (error) => {
              console.log(error.text);
          });
      };


    return (
        <>
            <div>
                {/* Start top bar */}
                <div className="main-top">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6">
                        <div className="left-top">
                        <a className="new-btn-d br-2" href="#appointment"><span>Book Appointment</span></a>
                        <div className="mail-b"><a href="#contact"><i className="fa fa-envelope-o" aria-hidden="true" /> healthlab2023@gmail.com</a></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="wel-nots">
                        <p>Welcome to Our Health Lab!</p>
                        </div>
                        
                    </div>
                    </div>
                </div>
                </div>
                {/* End top bar */}

                {/* Start header */}
                <header className="top-header">
                    <nav className="navbar header-nav navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-wd" aria-controls="navbar-wd" aria-expanded="false" aria-label="Toggle navigation">
                        <span />
                        <span />
                        <span />
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbar-wd">
                        <ul className="navbar-nav">
                            <li><a className="nav-link" href="#home">Home</a></li>
                            <li><a className="nav-link" href="#about">About Us</a></li>
                            <li><a className="nav-link" href="#services">Services</a></li>
                            <li><a className="nav-link" href="#appointment">Appointment</a></li>
                            <li><a className="nav-link" href="#gallery">Gallery</a></li>
                            <li><a className="nav-link" href="#team">Doctor</a></li>
                            <li><a className="nav-link" href="#blog">Blog</a></li>
                            <li><a className="nav-link" href="#contact">Contact</a></li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                </header>
                {/* End header */}
                {/* Start Banner */}
                <div className="ulockd-home-slider">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="pogoSlider" id="js-main-slider">
                        <div className="pogoSlider-slide" data-transition="fade" data-duration={1500} style={{backgroundImage: 'url(images/slider-01.jpg)'}}>
                            <div className="lbox-caption pogoSlider-slide-element">
                            <div className="lbox-details">
                                <h1>Welcome to Health Lab</h1>
                                <p>Your health is our priority, and our website is your gateway to a healthier future. </p>
                                <a href="#contact" className="btn">Contact Us</a>
                            </div>
                            </div>
                        </div>
                        <div className="pogoSlider-slide" data-transition="fade" data-duration={1500} style={{backgroundImage: 'url(images/slider-02.jpg)'}}>
                            <div className="lbox-caption pogoSlider-slide-element">
                            <div className="lbox-details">
                                <h1>We are Expert in The Field of Health Lab</h1>
                                <p>Provide accurate and reliable laboratory testing and analysis.</p>
                                <a href="#appointment" className="btn">Appointment</a>
                            </div>
                            </div>
                        </div>
                        <div className="pogoSlider-slide" data-transition="fade" data-duration={1500} style={{backgroundImage: 'url(images/slider-03.jpg)'}}>
                            <div className="lbox-caption pogoSlider-slide-element">
                            <div className="lbox-details">
                                <h1>We are providing Free Medicines for Poor Peoples</h1>
                                <p>Providing free medicine to poor people is a compassionate and impactful way to contribute to the well-being of those who are less fortunate and might not have access to essential medicines.</p>
                                <a href="#contact" className="btn">Contact Us</a>
                            </div>
                            </div>
                        </div>
                        </div>{/* .pogoSlider */}
                    </div>
                    </div>
                </div>
                {/* End Banner */}
                {/* Start About us */}
                <div id="about" className="about-box">
                    <div className="about-a1">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12">
                            <div className="title-box">
                            <h2>About Us</h2>
                            <p>Leading Integrated Healthcare Services Provider in India </p>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="row align-items-center about-main-info">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <h2> Welcome to Health Lab </h2>
                                <p> </p>
                                <p> </p>
                                <a href="#" className="new-btn-d br-2">Read More</a>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="about-m">
                                <ul id="banner">
                                    <li>
                                    <img src="images/about-img-01.jpg" alt />
                                    </li>
                                    <li>
                                    <img src="images/about-img-02.jpg" alt />
                                    </li>
                                    <li>
                                    <img src="images/about-img-03.jpg" alt />
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* End About us */}
                {/* Start Services */}
                <div id="services" className="services-box">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="title-box">
                            <h2>Discover the Online Appointment!</h2>
                            <p>Find the best doctors, clinics & hospitals in the city nearest to you. </p>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="owl-carousel owl-theme">
                            <div className="item">
                            <div className="serviceBox">
                                <div className="service-icon"><i className="fa fa-h-square" aria-hidden="true" /></div>
                                <h3 className="title">Find Doctor</h3>
                                <p className="description">
                                With more than 1000+ doctors and on mission to provide best care Health Care Service
                                </p>
                                <a href="#" className="new-btn-d br-2">Read More</a>
                            </div>
                            </div>
                            <div className="item">
                            <div className="serviceBox">
                                <div className="service-icon"><i className="fa fa-heart" aria-hidden="true" /></div>
                                <h3 className="title">Emergency</h3>
                                <p className="description">
                                Any time doctor 24x7 available for emergency case, read for more information
                                </p>
                                <a href="#" className="new-btn-d br-2">Read More</a>
                            </div>
                            </div>
                            <div className="item">
                            <div className="serviceBox">
                                <div className="service-icon"><i className="fa fa-hospital-o" aria-hidden="true" /></div>
                                <h3 className="title">Book Appointment</h3>
                                <p className="description">
                                Choose any available date for your medical checkup and book your slot.
                                </p>
                                <a href="#" className="new-btn-d br-2">Read More</a>
                            </div>
                            </div>
                            <div className="item">
                            <div className="serviceBox">
                                <div className="service-icon"><i className="fa fa-stethoscope" aria-hidden="true" /></div>
                                <h3 className="title">VIEW DOCTOR</h3>
                                <p className="description">
                                Share your health concern here and we shall assign you a top doctor across the North East.
                                </p>
                                <a href="#" className="new-btn-d br-2">Read More</a>
                            </div>
                            </div>
                            <div className="item">
                            <div className="serviceBox">
                                <div className="service-icon"><i className="fa fa-wheelchair" aria-hidden="true" /></div>
                                <h3 className="title">Regular Checkup</h3>
                                <p className="description">
                                Regular checkup for all patients available on Monday, Tuesday, Friday, Sunday.
                                </p>
                                <a href="#" className="new-btn-d br-2">Read More</a>
                            </div>
                            </div>
                            <div className="item">
                            <div className="serviceBox">
                                <div className="service-icon"><i className="fa fa-plus-square" aria-hidden="true" /></div>
                                <h3 className="title">Health Insurance</h3>
                                <p className="description">
                                This insurance that covers medical expenses that arise due to an illness.
                                </p>
                                <a href="https://www.hdfcergo.com/campaigns/buy-optima-secure?&utm_source=google_search&utm_medium=cpc&utm_campaign=Health_Search_Core_Neev-Phrase_Funnel_Aware_Conversion_Transitions_V1&utm_adgroup=Medical-Mediclaim-Insurance&adid=632971424550&utm_term=medical%20insurance%20policy&utm_network=g&utm_matchtype=p&utm_device=c&utm_location=1007828&utm_sitelink={sitelink}&utm_placement=&ci=googlesearch&SEM=1&gad=1&gclid=Cj0KCQjw5f2lBhCkARIsAHeTvlhJm8N44Kwn_a2nN4xASZAY6nGeTUppQNETfb2roKNh5bQ0EVoBmYoaAnYWEALw_wcB" className="new-btn-d br-2" target="_blank" rel="noreferrer">Read More</a>
                            </div>
                            </div>
                            <div className="item"> 
                            <div className="serviceBox">
                                <div className="service-icon"><i className="fa fa-medkit" aria-hidden="true" /></div>
                                <h3 className="title">Medicine</h3>
                                <p className="description">
                                Our doorstep delivery service is available in India across 1000+ villages and 1200+ cities. 
                                </p>
                                <a href="#" className="new-btn-d br-2">Read More</a>
                            </div>
                            </div>
                            <div className="item">
                            <div className="serviceBox">
                                <div className="service-icon"><i className="fa fa-user-md" aria-hidden="true" /></div>
                                <h3 className="title">Online Consulting</h3>
                                <p className="description">
                                A virtual consultation between a doctor and a patient by means of a video call software or app.
                                </p>
                                <a href="#" className="new-btn-d br-2">Read More</a>
                            </div>
                            </div>
                            <div className="item">
                            <div className="serviceBox">
                                <div className="service-icon"><i className="fa fa-ambulance" aria-hidden="true" /></div>
                                <h3 className="title">Ambulance Service</h3>
                                <p className="description">
                                Emergency calls are made regarding pregnant women or a number of conditions. 
                                </p>
                                <a href="#" className="new-btn-d br-2">Read More</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>			
                    </div>
                </div>
                {/* End Services */}
                {/* Start Appointment */}
                <div id="appointment" className="appointment-main">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="title-box">
                            <h2>Appointment</h2>
                            <p>Online Appointment, Phone-in Appointment, Walk-in Appointment with Token. </p>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                        <div className="well-block">
                            <div className="well-title">
                            <h2>Book an Appointment</h2>
                            </div>
                            <form ref={form} onSubmit={sendEmail} id="form">
                            {/* Form start */}
                            <div className="row">
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="name">Name</label>
                                    <input id="name" name="name" type="text" placeholder="Name" className="form-control input-md" />
                                </div>
                                </div>
                                {/* Text input*/}
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="email" required>Email</label>
                                    <input id="email" name="email" type="email" placeholder="E-Mail" className="form-control input-md" />
                                </div>
                                </div>
                                {/* Text input*/}
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="date">Preferred Date</label>
                                    <input id="date" name="date" type="date" placeholder="Preferred Date" className="form-control input-md" />
                                </div>
                                </div>
                                {/* Select Basic */}
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="time">Preferred Time</label>
                                    <select id="time" name="time" className="form-control">
                                    <option value="8:00 AM to 9:00 AM">8:00 AM to 9:00 AM</option>
                                    <option value="9:00 AM to 10:00 AM">9:00 AM to 10:00 AM</option>
                                    <option value="10:00 AM to 1:00 AM">10:00 AM to 1:00 AM</option>
                                    <option value="02:00 PM to 3:00 PM">02:00 PM to 3:00 PM</option>
                                    <option value="03:00 PM to 04:00 PM">03:00 PM to 04:00 PM</option>
                                    <option value="04:00 PM to 05:00 PM">04:00 PM to 05:00 PM</option>
                                    </select>
                                </div>
                                </div>
                                {/* Select Basic */}
                                <div className="col-md-12">
                                <div className="form-group">
                                    <label className="control-label" >Department</label>
                                    <select id="dept" name="dept" className="form-control">
                                    <option value="Choose Department">Choose Department</option>
                                    <option value="Anesthesiology">Anesthesiology</option>
                                    <option value="Ayurvedic">Ayurvedic</option>
                                    <option value="Gynecologist">Gynecologist/Obstetrician</option>
                                    <option value="Dermatologist">Dermatologist</option>
                                    <option value="Orthology">Orthology</option>
                                    <option value="Dentist">Dentist</option>
                                    
                                    </select>
                                </div>
                                </div>

                                <div className="col-md-12">
                                <div className="form-group">
                                    <label className="control-label">Doctor Name</label>
                                    <select id="app" name="app" className="form-control">
                                    <option value="Choose Name">Choose Name</option>
                                    <option value="Dr.K Sinha">Dr.K Sinha</option>
                                    <option value="Dr.Amrita Singh">Dr.Amrita Singh</option>
                                    <option value="Dr.Varun Kr Singh">Dr.Varun Kr Singh</option>
                                    <option value="Dr.Kristana">Dr.Kristana</option>
                                    <option value="Dr.Tanu Verma">Dr.Tanu Verma</option>
                                    </select>
                                </div>
                                </div>

                                {/* Button */}
                                <div className="col-md-12">
                                <div className="form-group">
                                    
                                    <button id="singlebutton" name="singlebutton" type="submit" value='send' className="new-btn-d br-2">Make An Appointment</button>
                                    
                                </div>
                                </div>
                            </div>
                            </form>

                            
                            {/* form end */}

                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                        <div className="well-block">
                            <div className="well-title">
                            <h2>Why Appointment with Us</h2>
                            </div>
                            <div className="feature-block">
                            <div className="feature feature-blurb-text">
                                <h4 className="feature-title">24/7 Hours Available</h4>
                                <div className="feature-content">
                                <p>Providing 24/7 appointments, you can cater to urgent cases that require immediate attention and ensure that patients receive timely care. </p>
                                </div>
                            </div>
                            <div className="feature feature-blurb-text">
                                <h4 className="feature-title">Experienced Staff Available</h4>
                                <div className="feature-content">
                                <p>Highly skilled and experienced staff ensures quality healthcare, expertise in diagnostics, and compassionate patient care, promoting positive outcomes.</p>
                                </div>
                            </div>
                            <div className="feature feature-blurb-text">
                                <h4 className="feature-title">Low Price &amp; Fees</h4>
                                <div className="feature-content">
                                <p>Affordable rates and transparent fees make healthcare accessible, easing financial burdens and fostering better health outcomes for all.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* End Appointment */}
                {/* Start Gallery */}
                <div id="gallery" className="gallery-box">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="title-box">
                            <h2>Gallery</h2>
                            <p>Health Care at Our Hospital</p>
                        </div>
                        </div>
                    </div>
                    <div className="popup-gallery row clearfix">
                        <div className="col-md-3 col-sm-6">
                        <div className="box-gallery">
                            <img src="images/gallery-01.jpg" alt />
                            <div className="box-content">	
                            <h3 className="title">Checkup</h3>
                            <ul className="icon">
                                <li><a href="images/gallery-01.jpg"> <i className="fa fa-picture-o" aria-hidden="true" /></a></li>								
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                        <div className="box-gallery">
                            <img src="images/gallery-02.jpg" alt />
                            <div className="box-content">
                            <h3 className="title">Prescription</h3>
                            <ul className="icon">
                                <li><a href="images/gallery-02.jpg"> <i className="fa fa-picture-o" aria-hidden="true" /></a></li>								
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3 col-sm-6">					
                        <div className="box-gallery">
                            <img src="images/gallery-03.jpg" alt />
                            <div className="box-content">
                            <h3 className="title">Care</h3>							
                            <ul className="icon">
                                <li><a href="images/gallery-03.jpg"> <i className="fa fa-picture-o" aria-hidden="true" /></a></li>								
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                        <div className="box-gallery">
                            <img src="images/gallery-04.jpg" alt />
                            <div className="box-content">	
                            <h3 className="title">Doctor</h3>
                            <ul className="icon">
                                <li><a href="images/gallery-04.jpg"> <i className="fa fa-picture-o" aria-hidden="true" /></a></li>								
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                        <div className="box-gallery">
                            <img src="images/gallery-05.jpg" alt />
                            <div className="box-content">							
                            <h3 className="title">X-Ray</h3>
                            <ul className="icon">
                                <li><a href="images/gallery-05.jpg"> <i className="fa fa-picture-o" aria-hidden="true" /></a></li>								
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3 col-sm-6">					
                        <div className="box-gallery">
                            <img src="images/gallery-06.jpg" alt />
                            <div className="box-content">
                            <h3 className="title">Dental Checkup</h3>
                            <ul className="icon">
                                <li><a href="images/gallery-06.jpg"> <i className="fa fa-picture-o" aria-hidden="true" /></a></li>								
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                        <div className="box-gallery">
                            <img src="images/gallery-07.jpg" alt />
                            <div className="box-content">
                            <h3 className="title">Doctor Discussion</h3>
                            <ul className="icon">
                                <li><a href="images/gallery-07.jpg"> <i className="fa fa-picture-o" aria-hidden="true" /></a></li>								
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                        <div className="box-gallery">
                            <img src="images/gallery-08.jpg" alt />
                            <div className="box-content">		
                            <h3 className="title">Lab</h3>
                            <ul className="icon">
                                <li><a href="images/gallery-08.jpg"> <i className="fa fa-picture-o" aria-hidden="true" /></a></li>								
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* End Gallery */}
                {/* Start Team */}
                <div id="team" className="team-box">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="title-box">
                            <h2>Our Doctor</h2>
                            <p>India's best online appointment scheduling platform. </p>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                        <div className="our-team">
                            <div className="pic">
                            <img src="images/img-1.jpg" alt />
                            </div>
                            <div className="team-content">
                            <h3 className="title">Dr.Amrita Singh</h3>
                            <span className="post">Senior Gaeonologist</span>
                            <ul className="social">
                                <li><a href="#"> <i className="fa fa-facebook" aria-hidden="true" /></a></li>
                                <li><a href="#"> <i className="fa fa-twitter" aria-hidden="true" /></a></li>
                                <li><a href="#"> <i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                                <li><a href="#"> <i className="fa fa-youtube-play" aria-hidden="true" /></a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                        <div className="our-team">
                            <div className="pic">
                            <img src="images/img-2.jpg" alt />
                            </div>
                            <div className="team-content">
                            <h3 className="title">Dr.Varun Kumar Singh</h3>
                            <span className="post">Senior Neurologist, Dean</span>
                            <ul className="social">
                                <li><a href="#"> <i className="fa fa-facebook" aria-hidden="true" /></a></li>
                                <li><a href="#"> <i className="fa fa-twitter" aria-hidden="true" /></a></li>
                                <li><a href="#"> <i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                                <li><a href="#"> <i className="fa fa-youtube-play" aria-hidden="true" /></a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                        <div className="our-team">
                            <div className="pic">
                            <img src="images/img-3.jpg" alt />
                            </div>
                            <div className="team-content">
                            <h3 className="title">Dr.Kristana</h3>
                            <span className="post">Senior Heart Specialist</span>
                            <ul className="social">
                                <li><a href="#"> <i className="fa fa-facebook" aria-hidden="true" /></a></li>
                                <li><a href="#"> <i className="fa fa-twitter" aria-hidden="true" /></a></li>
                                <li><a href="#"> <i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                                <li><a href="#"> <i className="fa fa-youtube-play" aria-hidden="true" /></a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* End Team */}
                {/* Start Blog */}
                <div id="blog" className="blog-box">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="title-box">
                            <h2>Blog</h2>
                            <p>We use an integrated approach instead of working with only one sector beacuse poverty is multidimentional</p>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="blog-inner">
                            <div className="blog-img">
                            <img className="img-fluid" src="images/blog-img-01.jpg" alt />
                            </div>
                            <div className="item-meta">
                            <a href="#"><i className="fa fa-comments-o" /> 6 Comment </a>
                            <a href="#"><i className="fa fa-user-o" /> Admin</a>
                            <span className="dti">25 January 2023</span>
                            </div>
                            <h2>Medical Prescription</h2>
                            <p>Treatment is safe, effective, and appropriate for the patient's specific health condition.</p>
                            <a className="new-btn-d br-2" href="#">Read More <i className="fa fa-angle-double-right" aria-hidden="true" /></a>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="blog-inner">
                            <div className="blog-img">
                            <img className="img-fluid" src="images/blog-img-02.jpg" alt />
                            </div>
                            <div className="item-meta">
                            <a href="#"><i className="fa fa-comments-o" /> 5 Comment </a>
                            <a href="#"><i className="fa fa-user-o" /> Admin</a>
                            <span className="dti">10 March 2023</span>
                            </div>
                            <h2>Neurological Patients</h2>
                            <p>The most effective treatment will depend on factors such as the diagnosis, severity of the condition and individual responses to treatments.</p>
                            <a className="new-btn-d br-2" href="#">Read More <i className="fa fa-angle-double-right" aria-hidden="true" /></a>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="blog-inner">
                            <div className="blog-img">
                            <img className="img-fluid" src="images/blog-img-03.jpg" alt />
                            </div>
                            <div className="item-meta">
                            <a href="#"><i className="fa fa-comments-o" /> 8 Comment </a>
                            <a href="#"><i className="fa fa-user-o" /> Admin</a>
                            <span className="dti">18 July 2023</span>
                            </div>
                            <h2>Orthopedic Patients</h2>
                            <p>Patients to be in good health and well-mannered, it's essential to consider both physical and emotional well-being</p>
                            <a className="new-btn-d br-2" href="#">Read More <i className="fa fa-angle-double-right" aria-hidden="true" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* End Blog */}
                {/* Start Contact */}
                <div id="contact" className="contact-box">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="title-box">
                            <h2>Contact us</h2>
                            <p>. </p>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-xs-12">
                        <div className="contact-block">
                            <form id="contactForm">
                            <div className="row">
                                <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required data-error="Please enter your name" />
                                    <div className="help-block with-errors" />
                                </div>                                 
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" placeholder="Your Email" id="email" className="form-control" name="name" required data-error="Please enter your email" />
                                    <div className="help-block with-errors" />
                                </div> 
                                </div>
                                <div className="col-md-12">
                                <div className="form-group">
                                    <input type="text" placeholder="Your number" id="number" className="form-control" name="number" required data-error="Please enter your number" />
                                    <div className="help-block with-errors" />
                                </div> 
                                </div>
                                <div className="col-md-12">
                                <div className="form-group"> 
                                    <textarea className="form-control" id="message" placeholder="Your Message" rows={8} data-error="Write your message" required defaultValue={""} />
                                    <div className="help-block with-errors" />
                                </div>
                                <div className="submit-button text-center">
                                    <button className="btn btn-common" id="submit" type="submit">Send Message</button>
                                    <div id="msgSubmit" className="h3 text-center hidden" /> 
                                    <div className="clearfix" /> 
                                </div>
                                </div>
                            </div>            
                            </form>
                        </div>
                        </div>
                        <div className="col-lg-12 col-xs-12">
                        <div className="left-contact">
                            <h2>Contact</h2>
                            <div className="media cont-line">
                            <div className="media-left icon-b">
                                <i className="fa fa-location-arrow" aria-hidden="true" />
                            </div>
                            <div className="media-body dit-right">
                                <h4><a href="https://www.google.com/maps" target="_blank">Address</a></h4>
                                <p>Fleming 196 Woodside Circle 700100,Kolkata, West Bengal</p>
                            </div>
                            </div>
                            <div className="media cont-line">
                            <div className="media-left icon-b">
                                <i className="fa fa-envelope" aria-hidden="true" />
                            </div>
                            <div className="media-body dit-right">
                                <h4><a href="https://www.google.com/mail" target="_blank">Email</a></h4>
                                <a href="#">healthlab2023@gmail.com</a>
                            </div>
                            </div>
                            <div className="media cont-line">
                            <div className="media-left icon-b">
                                <i className="fa fa-volume-control-phone" aria-hidden="true" />
                            </div>
                            <div className="media-body dit-right">
                                <h4>Phone Number</h4>
                                <a href="#">+91 9865903412</a><br />
                                <a href="#">+91 7763887501</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* End Contact */}
                {/* Start Subscribe */}      
                <div className="subscribe-box">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="subscribe-inner text-center clearfix">
                            <h2>Subscribe</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <form action="#">
                            <div className="form-group">
                                <input className="form-control-1" id="email-1" name="email" placeholder="Email Address" required type="text" />
                            </div>
                            <div className="form-group">
                                <button  className="new-btn-d br-2" >
                                Subscribe
                                </button>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* End Subscribe */}
                {/* Start Footer */}
                <footer className="footer-box">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <p className="footer-company-name">All Rights Reserved. © 2023 <a href="#">Health Lab</a> Design By : <a>RAJ TILAK</a></p>
                        </div>
                    </div>
                    </div>

                    {/* <div className="right-top">
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                            <li><a href="https://youtu.be/WOyJL6sD0_4" target="_blank"><i className="fa fa-youtube-play" aria-hidden="true" /></a></li>
                        </ul>
                        </div> */}



                </footer>
                </div>

        </>
    )
}

export default Home