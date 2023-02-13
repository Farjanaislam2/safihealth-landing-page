import React from "react";
import Button from 'react-bootstrap/Button';


const Card4 = () => {
  return (
    <div>
      <div className="d-lg-flex d-sm-none d-none gap-1">
        <div className="col-2 bg-success "></div>
        <div className="col-2 card1  bg-success">
          <img
            className="p-2 mt-5"
            src="https://safihealth.org/public/frontend/assets/img/icons/phone.png"
            alt=""
          />
          <p className="text-light">16652</p>
          <p className="text-light">
            <span>Emergencies - Appointments - Ambulance</span>{" "}
          </p>
          <span className="text-light">Available 24 hours every day</span>
        </div>
        <div className="col-2 bg-success">
          <img
            className="p-2 mt-5"
            src="https://safihealth.org/public/frontend/assets/img/icons/emergency.png"
            alt=""
          />
          <p className="text-light">Call Safihealth</p>
          <p className="text-light">
            <span> 16652</span>
          </p>
          <span className="text-light">Available 24 hours every day</span>
        </div>
        <div className="col-2 bg-success">
          <img
            className="p-2 mt-5"
            src="https://safihealth.org/public/frontend/assets/img/icons/pin.png"
            alt=""
          />
          <p className='text-light'>16652</p>
<p className='text-light'><span>
Subscribe to our Newsletter</span> </p>
<Button variant="outline-light">Sign Up Now</Button>
        </div>
        <div className="col-2 bg-success">
          <img
            className="p-2 mt-5"
            src="https://safihealth.org/public/frontend/assets/img/icons/mail.png"
            alt=""
          />
          <p className="text-light">16652</p>
          <p className="text-light">
            <span>Map and Directions</span>
          </p>
          <Button variant="outline-light">Get Direction</Button>
        </div>
        <div className="col-2 bg-success"></div>
      </div>
    </div>
  );
};

export default Card4;
