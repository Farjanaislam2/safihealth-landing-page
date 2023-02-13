import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Banner2 from '../Banner2/Banner2';
import Card1 from '../Card1/Card1';
import Card4 from '../Card4/Card4';
import Image from '../Image/Image';
import Packages from '../Pacages/Packages';
import Card2 from '../SpecialServices/Card2/Card2';
import SpecialServices from '../SpecialServices/SpecialServices';
import Card3 from './../Card3/Card3';
import SocialIcon from './../SocialIcon/SocialIcon';


const Home = () => {
    return (
      <div>
          <div className=''>
             <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 h-25"
          src="https://safihealth.org/public/upload/sliderImage/202212040827Physiotheraphy%20banner%201-min.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://safihealth.org/public/upload/sliderImage/202212040824Hospital-min.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://safihealth.org/public/upload/sliderImage/202212040823caregiver%20service%204%20-min.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://safihealth.org/public/upload/sliderImage/202212040821Orphanage%205-min.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
        <div className='position-static'style={{marginTop: '-20px'}}>
            <Card1></Card1>
            <Packages></Packages>
            <SpecialServices></SpecialServices>
            <Card2></Card2>
            <Banner2></Banner2>
            <Card3></Card3>
            <Image></Image>
            <Card4></Card4>
            <SocialIcon></SocialIcon>
            
        </div>
      </div>
      
      
    );
};

export default Home;