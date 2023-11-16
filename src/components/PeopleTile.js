import React from "react";
import { Col, Image } from "react-bootstrap";
const PeopleTile = ({ nameVal, userNameVal, ppic, sessionRef }) => {
  return (
    <Col lg={4} md={6} xs={12}>
      <div className="d-flex gap-3 mb-4 align-items-center bg-body p-3">
        <Image
          src={ppic}
          style={{
            objectFit: "cover",
            width: "5rem",
            height: "5rem",
          }}
          roundedCircle
        />
        <div>
          <h4 className="text-primary">{nameVal}</h4>
          <h6>{userNameVal}</h6>
        </div>
      </div>
    </Col>
  );
};

export default PeopleTile;