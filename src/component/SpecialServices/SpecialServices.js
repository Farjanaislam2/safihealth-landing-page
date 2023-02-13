import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const SpecialServices = () => {
    return (
        <div>
            <h3>Our Special Service</h3>
            <div className='mt-4'>
            <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://safihealth.org/public/upload/subcategoryImage/202212021049telemedicine%20(3).png"
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://safihealth.org/public/upload/subcategoryImage/202301020315banner%209.jpg"
          alt="Second slide"
        />

    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://safihealth.org/public/upload/subcategoryImage/202301020316banner%2010.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://safihealth.org/public/upload/subcategoryImage/202212021048health%20plane.png"
          alt="Third slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://safihealth.org/public/upload/subcategoryImage/202301020527banner%2011.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
            </div>
        </div>
    );
};

export default SpecialServices;