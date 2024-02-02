import './App.css';
import './responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaPhoneAlt, FaBars, FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { GiMonsteraLeaf, GiFarmTractor, GiGreenhouse, GiFarmer } from "react-icons/gi";


import { useState } from 'react';
import { Container, Row, Col, Button, Offcanvas, NavDropdown } from 'react-bootstrap';
// import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

const slider1 = {
  loop: true,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 1,
    },
    700: {
      items: 1,
    },
    1000: {
      items: 1,

    }
  }
}
const slider2 = {
  loop: true,
  margin: 10,
  dots: false,
  nav: false,
  center: true,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 1,
    },
    700: {
      items: 1,
    },
    1000: {
      items: 1,

    }
  }
}
const slider3 = {
  loop: true,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 2,
    },
    1000: {
      items: 3,

    }
  }
}
const slider4 = {
  loop: true,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 2,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 4,

    }
  }
}
function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      {/* ====================================top header start================================ */}
      <header>
        <div className='top_hd background'>
          <Container>
            <Row>
              <Col xl={2} lg={3}>
                <div className='tophd_1 d-flex'>
                  <a><FaPhoneAlt></FaPhoneAlt></a>
                  <p>1-800-1234-5671</p>
                </div>
              </Col>
              <Col xl={2} lg={3}>
                <div className='tophd_1 d-flex'>
                  <a><IoMdMail></IoMdMail></a>
                  <p>info@demolink.org</p>
                </div>
              </Col>
              <Col xl={8} lg={6}>
                <div className='tophd_1 d-flex'>
                  <a><FaLocationDot></FaLocationDot></a>
                  <p>2130 Fulton Street San Diego, CA 94117-1080 USA</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ==========================top header end============================= */}

        {/* ==============================logo header start========================== */}
        <div className='logo_hd'>
          <Container>
            <Row>
              <Col lg={4}>
                <div className='logo_left d-lg-block d-none'>
                  <img src={require('./image/logo1.png')}></img>
                </div>
              </Col>
              <Col lg={8}>
                <div className='logo_right d-lg-block d-none'>
                  <div className="logo_menu">
                    <a>Home</a>
                    <a>About</a>
                    <a>Produce</a>
                    <a>Blog</a>
                    <a>Pages</a>
                    <a>Contacts</a>
                    <a><IoSearchOutline></IoSearchOutline></a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <Container fluid="lg">
            <Row>
              <Col sm={1} xs={2} className="res_btn1 d-lg-none d-xs-block">
                <Button onClick={handleShow}>
                  <a><FaBars></FaBars></a>
                </Button>
                <Offcanvas className="" show={show} onHide={handleClose}>
                <div className='responsive_off'>
                <div><a>Home</a></div>
                <div><a>About</a></div>
                <div><a>Produce</a></div>
                <div><a>Blog</a></div>
                <div><a>Pages</a></div>
                <div><a>Contacts</a></div>
                </div>
                </Offcanvas>
              </Col>
              <Col xs={4}>
                <div className='logo_2_res d-lg-none'>
                  <img src={require('./image/logo1.png')}></img>
                </div>
              </Col>
              <Col xs={6}>
                <div className='dropdown1 d-lg-none'>
                  <div className='hd_icon'>
                    <a><IoSearchOutline></IoSearchOutline></a>
                  </div>
                  <div className='navdropdown1'>
                    <NavDropdown>
                      <NavDropdown.Item>
                        <div className='d-flex'>
                          <a><FaPhoneAlt></FaPhoneAlt></a>
                          <p>1-800-1234-5671</p>
                        </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <div className='d-flex'>
                          <a><IoMdMail></IoMdMail></a>
                          <p>info@demolink.org</p>
                        </div>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* ==============================logo header end========================== */}
      </header>

      <OwlCarousel id="s1" className='owl-theme' fade autoplay={true} {...slider1}>
        <div class='item'>
          <div className='sl_1'>
          <img src={require('./image/slider1_1.jpg')}></img>
          </div>
          <div className='sl_1_info'>
            <h2>Feeding a Growing World</h2>
            <p>Adipiscing inciderint est in. Ius nusquam oportere et, ius ea mazim</p>
            <div className='sl_btn'><a>READ 3 TO 4 CHANGLOG</a></div>
          </div>
        </div>
        <div class='item'>
        <div className='sl_1'>
          <img src={require('./image/slider1_2.jpg')}></img>
          </div>
          <div className='sl_1_info'>
            <h2>Feeding a Growing World</h2>
            <p>Adipiscing inciderint est in. Ius nusquam oportere et, ius ea mazim</p>
            <div className='sl_btn'><a>READ 3 TO 4 CHANGLOG</a></div>
          </div>
        </div>
        <div class='item'>
        <div className='sl_1'>
          <img src={require('./image/slider1_3.jpg')}></img>
          </div>
          <div className='sl_1_info'>
            <h2>Feeding a Growing World</h2>
            <p>Adipiscing inciderint est in. Ius nusquam oportere et, ius ea mazim</p>
            <div className='sl_btn'><a>READ 3 TO 4 CHANGLOG</a></div>
          </div>
        </div>
      </OwlCarousel>

      {/* ==========================slider 1 end========================= */}

      {/* ===========================section 1 start========================= */}
      <div className='sec_1 space'>
        <Container>
          <Row>
            <Col lg={6}>
              <OwlCarousel className='owl-theme' autoplay={true} {...slider2}>
                <div class='item' data-hash="4">
                  <img src={require('./image/slider2_4.jpg')}></img>
                </div>
                <div class='item' data-hash="2">
                  <img src={require('./image/slider2_2.jpg')}></img>
                </div>
                <div class='item' data-hash="3">
                  <img src={require('./image/slider2_3.jpg')}></img>
                </div>
                <div class='item' data-hash="1">
                  <img src={require('./image/slider2_1.jpg')}></img>
                </div>
              </OwlCarousel>
              <div className='slider_2'>
                <center className='px-xl-5'>
                  <a href="#4" class="active"><img class="a" src={require('./image/slider2_4.jpg')} alt=""></img></a>
                  <a href="#2" class="active"><img class="a" src={require('./image/slider2_2.jpg')} alt=""></img></a>
                  <a href="#3" class="active"><img class="a" src={require('./image/slider2_3.jpg')} alt=""></img></a>
                  <a href="#1" class="active"><img class="a" src={require('./image/slider2_1.jpg')} alt=""></img></a>
                </center>
              </div>
            </Col>
            <Col lg={6}>
              <div className='sec_2_right'>
                <h4>Founded in 1999</h4>
                <h1>Our farm</h1>
                <h3>Who we are</h3>
                <ul class="sec_2_menu">
                  <li><a>ABOUT US</a></li>
                  <li><a>WHY CHOOSE US</a></li>
                  <li><a>OUR MISSION</a></li>
                </ul>
                <div class="vr_line"></div>
                <p>Chicken Good is a 100% American, family-owned and operated company, providing fresh shell eggs and egg products to supermarkets, restaurants and food manufacturers.</p>
                <div className='btn'><a>READ MORE</a></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>


      {/* ===========================section 1 end========================= */}


      {/* ==============================section 2 start========================= */}
      <div className='sec_2 space text-md-center text-center'>
        <Container>
          <Row>
            <Col lg={3} sm={6}>
              <div className='sec_item1'>
                <a><GiMonsteraLeaf></GiMonsteraLeaf></a>
                <h3>Natural feed</h3>
                <p>We use the best feeds with essential nutrients to raise the best chickens and turkeys.</p>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className='sec_item1'>
                <a><GiFarmTractor></GiFarmTractor></a>
                <h3>Natural feed</h3>
                <p>We use the best feeds with essential nutrients to raise the best chickens and turkeys.</p>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className='sec_item1'>
                <a><GiGreenhouse></GiGreenhouse></a>
                <h3>Natural feed</h3>
                <p>We use the best feeds with essential nutrients to raise the best chickens and turkeys.</p>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className='sec_item1'>
                <a><GiFarmer></GiFarmer></a>
                <h3>Natural feed</h3>
                <p>We use the best feeds with essential nutrients to raise the best chickens and turkeys.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* ==============================section 2 end========================= */}

      {/* ===================================section 3 start======================= */}
      <div className='sec_3 space'>
        <Container>
          <Row>
            <div className='sec3_hd text-center'>
              <div className='sec_hd_1'>What we offer</div>
              <div className='sec_hd_2'>Our Products</div>
            </div>
            <Col lg={3} sm={6}>
              <div className='sec3_item1'>
                <img src={require('./image/sec_3_1.png')}></img>
                <h1>VEGETABLES</h1>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className='sec3_item1'>
                <img src={require('./image/sec_3_2.png')}></img>
                <h1>GRAIN AND OILSEED</h1>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className='sec3_item1'>
                <img src={require('./image/sec_3_3.png')}></img>
                <h1>FRUITS AND NUTS</h1>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className='sec3_item1'>
                <img src={require('./image/sec_3_4.png')}></img>
                <h1>TOBACCO</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* ===================================section 3 end======================= */}

      {/* ==========================section 4 start=============================== */}
      <div className='sec_4 space'>
        <Container>
          <div className='sec4_hd text-center'>
            <div className='sec_hd_1'>Latest News</div>
            <div className='sec_hd_2'>Our Blog</div>
          </div>
          <OwlCarousel id="s3" className='owl-theme' autoplay={true} {...slider3}>
            <div class='item'>
              <div className='sld_3'>
                <div className='img_3'>
                  <img src={require('./image/slider3_1.jpg')}></img>
                </div>
                <div className='sec4_info'>
                  <a>August 9,2021</a>
                  <h2>Can a Smoothie Supercharge Your Day?</h2>
                  <p>Most of us would agree – mornings are hectic. Getting yourself and possibly others ready for the day ahead may...</p>
                </div>
              </div>
            </div>
            <div class='item'>
              <div className='sld_3'>
                <div className='img_3'>
                  <img src={require('./image/slider3_2.jpg')}></img>
                </div>
                <div className='sec4_info'>
                  <a>August 9,2021</a>
                  <h2>How to Make Your Breakfast Easy and Yummy</h2>
                  <p>Combining milk and fruits is the best solution for your daily meal, whether it’s breakfast, lunch, or any other...</p>
                </div>
              </div>
            </div>
            <div class='item'>
              <div className='sld_3'>
                <div className='img_3'>
                  <img src={require('./image/slider3_3.jpg')}></img>
                </div>
                <div className='sec4_info'>
                  <a>August 9,2021</a>
                  <h2>Tips from Our Team: Making Yoghurts with Fresh Fruits</h2>
                  <p>Most of us would agree  Getting yourself and possibly others ready for the day ahead may...</p>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </Container>
      </div>
      {/* ==========================section 4 end=============================== */}

      {/* ==========================section 5 start=============================== */}
      <div className='sec_5 space'>
        <Container>
          <div className='sec4_hd text-center'>
            <div className='sec_hd_1'>Latest News</div>
            <div className='sec_hd_2'>Our Blog</div>
          </div>
          <OwlCarousel id="s4" className='owl-theme' autoplay={true} {...slider4}>
            <div class='item'>
              <div className='sld_4 text-center'>
                <div className='img_5'>
                  <img src={require('./image/slider4_1.jpg')}></img>
                </div>
                <div className='sl4_info'>
                  <a>Rebecca Martinez</a>
                  <p>Rebecca is the Founder and CEO of Livedrink</p>
                </div>
                <div className='sl4_icon'>
                  <a><FaFacebookF></FaFacebookF></a>
                  <a><FaTwitter></FaTwitter></a>
                  <a><FaInstagram></FaInstagram></a>
                  <a><FaGooglePlusG></FaGooglePlusG></a>
                </div>
              </div>
            </div>
            <div class='item'>
              <div className='sld_4 text-center'>
                <div className='img_5'>
                  <img src={require('./image/slider4_2.jpg')}></img>
                </div>
                <div className='sl4_info'>
                  <a>Peter McMillan</a>
                  <p>Peter is the Head of Livedrink’s Supply Chain</p>
                </div>
                <div className='sl4_icon'>
                  <a><FaFacebookF></FaFacebookF></a>
                  <a><FaTwitter></FaTwitter></a>
                  <a><FaInstagram></FaInstagram></a>
                  <a><FaGooglePlusG></FaGooglePlusG></a>
                </div>
              </div>
            </div>
            <div class='item'>
              <div className='sld_4 text-center'>
                <div className='img_5'>
                  <img src={require('./image/slider4_3.jpg')}></img>
                </div>
                <div className='sl4_info'>
                  <a>Jane Smith</a>
                  <p>Jane Smith is our leading Customer Care specialist.</p>
                </div>
                <div className='sl4_icon'>
                  <a><FaFacebookF></FaFacebookF></a>
                  <a><FaTwitter></FaTwitter></a>
                  <a><FaInstagram></FaInstagram></a>
                  <a><FaGooglePlusG></FaGooglePlusG></a>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='sld_4 text-center'>
                <div className='img_5'>
                  <img src={require('./image/slider4_4.jpg')}></img>
                </div>
                <div className='sl4_info'>
                  <a>Sam Williams</a>
                  <p>Sam is our expert in domestic Sales Management.</p>
                </div>
                <div className='sl4_icon'>
                  <a><FaFacebookF></FaFacebookF></a>
                  <a><FaTwitter></FaTwitter></a>
                  <a><FaInstagram></FaInstagram></a>
                  <a><FaGooglePlusG></FaGooglePlusG></a>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </Container>
      </div>

      {/* ==========================section 5 end=============================== */}

      {/* ==============================footer start============================ */}
      <div className='footer space'>
        <Container>
          <Row>
            <Col xl={4} >
              <div className='ft_hd1'>GALLERY</div>
              <div className='ft_img'>
                <img src={require('./image/f_1.jpg')}></img>
                <img src={require('./image/f_2.jpg')}></img>
                <img src={require('./image/f_3.jpg')}></img>
                <img src={require('./image/f_4.jpg')}></img>
                <img src={require('./image/f_5.jpg')}></img>
                <img src={require('./image/f_6.jpg')}></img>
              </div>
            </Col>
            <Col xl={4} md={6}>
              <div className='ft_hd1 py-sm-4 py-5'>QUICK LINKS</div>
              <div className='ft_2 d-flex'>
                <div className='ft_item1'>
                  <div className='d-flex py-1'>
                    <div className='ft_shape'></div>
                    <div><a>Our Team</a></div>
                  </div>
                  <div className='d-flex py-1'>
                    <div className='ft_shape'></div>
                    <div><a>New Products</a></div>
                  </div>
                  <div className='d-flex py-1'>
                    <div className='ft_shape'></div>
                    <div><a>Top Sellers</a></div>
                  </div>
                  <div className='d-flex py-1'>
                    <div className='ft_shape'></div>
                    <div><a>About Us</a></div>
                  </div>
                  <div className='d-flex py-1'>
                    <div className='ft_shape'></div>
                    <div><a>FAQ</a></div>
                  </div>
                  <div className='d-flex py-1'>
                    <div className='ft_shape'></div>
                    <div><a>Contact Us</a></div>
                  </div>
                </div>
                <div className='ft_item2'>
                  <div className='d-flex py-1'>
                    <div className='ft_shape'></div>
                    <div><a>Smoothies</a></div>
                  </div>
                  <div className='d-flex py-1'>
                    <div className='ft_shape'></div>
                    <div><a>Energy Bowls</a></div>
                  </div>
                  <div className='d-flex py-1'>
                    <div className='ft_shape'></div>
                    <div><a>Juices</a></div>
                  </div>
                  <div className='d-flex py-1'>
                    <div className='ft_shape'></div>
                    <div><a>Ingredients</a></div>
                  </div>
                  <div className='d-flex py-1'>
                    <div className='ft_shape'></div>
                    <div><a>Delivery</a></div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={4} md={6}>
              <div className='px-3 py-sm-4 py-5'>
                <div className='ft_hd1'>GET IN TOUCH</div>
                <div className='ft_item2 d-flex'>
                  <a><FaLocationDot></FaLocationDot></a>
                  <p>523 Sylvan Ave, 5th Floor Mountain View, CA 94041 USA</p>
                </div>
                <div className='ft_item2 d-flex'>
                  <a><FaPhoneAlt></FaPhoneAlt></a>
                  <p>+1 (844) 123 456 78</p>
                </div>
                <div className='ft_item2 d-flex'>
                  <a><IoMdMail></IoMdMail></a>
                  <p>info@demolink.org</p>
                </div>
                <div className='ft_icon'>
                  <a><FaFacebookF></FaFacebookF></a>
                  <a><FaTwitter></FaTwitter></a>
                  <a><FaInstagram></FaInstagram></a>
                  <a><FaGooglePlusG></FaGooglePlusG></a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ==============================footer end============================== */}
      {/* ==============================last footer===================== */}
      <div className='lt_ft text-center'> 
        <a>© 2023 AgroFarm. Privacy Policy. Design by Zemez</a>
      </div>
      {/* ==============================last footer===================== */}



    </div>
  );
}

export default App;
