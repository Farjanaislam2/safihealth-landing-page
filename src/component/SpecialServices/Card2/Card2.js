import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const Card2 = () => {
    return (
        <div className='mt-5'>
            <h1 className='mb-3'>Safihealth News</h1>
             <CardGroup className="gap-4 shadow-lg">
        <Card className="border border-light mb-4">
          <Card.Img
            variant="top"
            src="https://safihealth.org/public/upload/blogPostImage/202212020954package%20banner%201%20(2).png"
          />
          <Card.Body>
            <Card.Title className="text-success ">
              <h5 className='d-flex justify-content-start'>why Safi health diagnostic Services</h5>
            </Card.Title>
            <Card.Text>
             <p>The vital role of diagnostic services in healthcareYou are here: HomeGeneralThe vital role of diagnostic…Diagnosis is better than Disease. The word diagnosis hasn’t probably received so much attention and acclaim as it has</p>
            </Card.Text>
            <span className='text-success d-flex justify-content-start'>Read More</span>
          </Card.Body>
          
        </Card>
        <Card Card className="border border-light mb-4">
          <Card.Img
            variant="top"
            src="https://safihealth.org/public/upload/blogPostImage/202212020954package%20banner%202%20(3).png"
          />
         <Card.Body>
            <Card.Title className="text-success ">
              <h5 className='d-flex justify-content-start'>What is Family Health?</h5>
            </Card.Title>
            <Card.Text>
             <p>What is Family Health?What is Family?Determinants of Family HealthFactors For A Healthy FamilyScope of Family Health1. Reproductive health2. Child health3. Gender issues in family4. Ageing5. Mental health6.</p>
            </Card.Text>
            <span className='text-success d-flex justify-content-start'>Read More</span>
          </Card.Body>
         
        </Card>
        <Card Card className="border border-light mb-4">
          <Card.Img
            variant="top"
            src="https://safihealth.org/public/upload/blogPostImage/202212020955pacjkage%20banner%203%20(1).png"
          />
          <Card.Body>
            <Card.Title className="text-success ">
              <h5 className='d-flex justify-content-start'>why safihealth Doctors services</h5>
            </Card.Title>
            <Card.Text>
             <p>A primary care doctor is someone who has received the necessary training that allows them to be the first point of contact when someone needs to see a healthcare professional. They are a health care professional who will make it a</p>
            </Card.Text>
            <span className='text-success d-flex justify-content-start'>Read More</span>
          </Card.Body>
         
        </Card>
      </CardGroup>
      <button className="border bg-success rounded mb-5 mt-5 p-2 text-light">
        See All News
      </button>
        </div>
    );
};

export default Card2;