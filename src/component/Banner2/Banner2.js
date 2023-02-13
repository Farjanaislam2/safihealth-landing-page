import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

const Banner2 = () => {
  return (
    <div
      className="d-flex flex-lg-row flex-column
      "
    >
      <div className="col-md-6">
        <img
          src="https://safihealth.org/public/upload/categoryImage/202212021142p1%20(1).png"
          alt=""
        />
        <div>
          <Button
            className="w-25"
            style={{ marginTop: "-80px", marginLeft: "50px" }}
            variant="success"
          >
            See Details
          </Button>
        </div>
      </div>
      <div className="col-md-6">
        <img
          src="https://safihealth.org/public/upload/categoryImage/202212021141p2%20(1).png"
          alt=""
        />
        <div>
          <Button
            className="w-25"
            style={{ marginTop: "-80px", marginLeft: "100px" }}
            variant="success"
          >
            See Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
