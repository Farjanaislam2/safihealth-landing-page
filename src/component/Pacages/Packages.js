import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

const Packages = () => {
  return (
    <div className="mt-5">
      <h1 className="text-center mb-5 border-bottom  border-2 ms-5 me-5 ps-5 pe-5">
        Our Packages
      </h1>
      <CardGroup className="gap-4 shadow-lg">
        <Card className="border border-light mb-4">
          <Card.Img
            variant="top"
            src="https://safihealth.org/public/upload/subcategoryImage/202212021114blog%20banner3.png"
          />
          <Card.Body>
            <Card.Title className="text-success ">
              <h3>Daily Doctor Home visit package</h3>{" "}
            </Card.Title>
            <Card.Text>
              <h2>
                Cost: <span className="text-success">4000 BDT tk</span>{" "}
              </h2>
            </Card.Text>
            <p className="justify-content-start">Qty:</p>
            <div className="d-flex gap-3 mb-4 justify-content-center">
              <input className="w-25" type="number" name="number" value="" />
              <Button variant="success">Success</Button>
              <Button variant="outline-success">Success</Button>
            </div>
            <Button variant="outline-success">SEE PACKAGE DETAILS</Button>
            <h6></h6>
          </Card.Body>
          <span>* See package details for currency conversion.</span>
        </Card>
        <Card Card className="border border-light mb-4">
          <Card.Img
            variant="top"
            src="https://safihealth.org/public/upload/subcategoryImage/202212021113blog%20banner%202.png"
          />
          <Card.Body>
            <Card.Title className="text-success ">
              <h3>Safi health yearly family package</h3>{" "}
            </Card.Title>
            <Card.Text>
              <h2>
                Cost: <span className="text-success"> 90.00 BDT tk</span>{" "}
              </h2>
            </Card.Text>
            <p>Qty:</p>
            <div className="d-flex gap-3 mb-4 justify-content-center">
              <input className="w-25" type="number" name="number" value="" />
              <Button variant="success">Success</Button>
              <Button variant="outline-success">Success</Button>
            </div>
            <Button variant="outline-success">SEE PACKAGE DETAILS</Button>
          </Card.Body>
          <span>* See package details for currency conversion.</span>
        </Card>
        <Card Card className="border border-light mb-4">
          <Card.Img
            variant="top"
            src="https://safihealth.org/public/upload/subcategoryImage/202212021113blog%20banner%20(1).png"
          />
          <Card.Body>
            <Card.Title className="text-success ">
              <h3>full body checkup in Safi health</h3>{" "}
            </Card.Title>
            <Card.Text>
              <h2>
                Cost: <span className="text-success">Cost : 3000 tk</span>{" "}
              </h2>
            </Card.Text>
            <p>Qty:</p>
            <div className="d-flex gap-3 mb-4 justify-content-center">
              <input className="w-25" type="number" name="number" value="" />
              <Button variant="success">Success</Button>
              <Button variant="outline-success">Success</Button>
            </div>
            <Button variant="outline-success">SEE PACKAGE DETAILS</Button>
          </Card.Body>
          <span>* See package details for currency conversion.</span>
        </Card>
      </CardGroup>
      <button className="border bg-success rounded mb-5 mt-5 p-2 text-light">
        See All Packages
      </button>
    </div>
  );
};

export default Packages;
