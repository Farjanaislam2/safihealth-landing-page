import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Card3 = () => {
    return (
        <div>
            <h1 className='mt-5 mb-5'>Safihealth Blogs</h1>
            <div>
            <CardGroup className="gap-4 shadow-lg">
        <Card className="border border-light mb-4">
          <Card.Img
            variant="top"
            src="https://safihealth.org/public/upload/blogPostImage/202212021104blog%20banner%20(1).png"
          />
          <Card.Body>
            <Card.Title className="text-success ">
              <h5 className='d-flex justify-content-start'>A HEARTFELT MISSION</h5>
            </Card.Title>
            <Card.Text>
             <p>Safi Health is a unique healthcare company in the country.&nbsp;Shafi Health Limited has been providing various types of health services all over Dhaka for the past 4 years. At present they have experience of providing more than</p>
            </Card.Text>
            <span className='text-success d-flex justify-content-start'>Read More</span>
          </Card.Body>
          
        </Card>
        <Card Card className="border border-light mb-4">
          <Card.Img
            variant="top"
            src="https://safihealth.org/public/upload/blogPostImage/202212021103blog%20banner3.png"
          />
         <Card.Body>
            <Card.Title className="text-success ">
              <h5 className='d-flex justify-content-start'>A HEARTFELT MISSION</h5>
            </Card.Title>
            <Card.Text>
             <p>Safi Health is a unique healthcare company in the country.&nbsp;Shafi Health Limited has been providing various types of health services all over Dhaka for the past 4 years. At present they have experience of providing more than</p>
            </Card.Text>
            <span className='text-success d-flex justify-content-start'>Read More</span>
          </Card.Body>
         
        </Card>
        <Card Card className="border border-light mb-4">
          <Card.Img
            variant="top"
            src="https://safihealth.org/public/upload/blogPostImage/202212021103blog%20banner%202%20(1).png"
          />
          <Card.Body>
            <Card.Title className="text-success ">
              <h5 className='d-flex justify-content-start'>A HEARTFELT MISSION</h5>
            </Card.Title>
            <Card.Text >
             <p className='d-flex justify-content-start'>Safi Health is a unique healthcare company in the country.&nbsp;Shafi Health Limited has been providing various types of health services all over Dhaka for the past 4 years. At present they have experience of providing more than</p>
            </Card.Text>
          <span className='text-success d-flex justify-content-start '>Read More</span>
          </Card.Body>
         
        </Card>
      </CardGroup>
            </div>
            <button className="border bg-success rounded mb-5 mt-5 p-2 text-light">
        See All Article
      </button>
        </div>
    );
};

export default Card3;