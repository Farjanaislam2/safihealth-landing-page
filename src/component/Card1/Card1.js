import React from 'react';

const Card1 = () => {
    return (
        <div className='d-lg-flex d-md-none d-none position-relative'>
            <div className='col-4 bg-success'>
                <img className='w-auto mt-5 p-2 border rounded-circle' src="https://safihealth.org/public/frontend/assets/img/icons/chart.png" alt=""/>
                <h1 className='text-light'>Book Appointment</h1>
            </div>
            <div className='col-4 bg-secondary'>
                <img className='w-auto mt-5 p-2 border rounded-circle' src="https://safihealth.org/public/frontend/assets/img/icons/consult-a-doctor.png" alt=""/>
            <h1>Send Inquiry</h1>
            </div>
            <div className='col-4'style={{background:"brown"}}>
                <img className='w-auto mt-5  p-2 border rounded-circle' src="https://safihealth.org/public/frontend/assets/img/icons/doctor.png" alt=""/>
            <h1>Find a Doctor</h1> 
            </div>
        </div>
    );
};

export default Card1;