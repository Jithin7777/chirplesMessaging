import React, { useEffect, useState } from "react";
import { Image, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { getAllUser } from "../service/APIs/allAPIs";
import { useNavigate } from "react-router-dom";

const Setting = ({ session }) => {
  const navigate = useNavigate();
  const [Data, setData] = useState([]);

  const fetchUserData = async () => {
    const result = await getAllUser();
    setData(result.data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const mainUser = Data.find((i) => i.id === session);

  return (
    <div className="p-3 p-lg-5 w-100">
      <h3 className="mb-5 mt-3">
        <i className="bi bi-gear text-primary me-2"></i>Setting
      </h3>
      <div className="bg-body p-3 p-lg-5">
        <ListGroup>
          <ListGroupItem className="d-flex flex-column flex-lg-row gap-3 align-items-center">
            {mainUser ? (
              <>
                <Image
                  roundedCircle
                  src={mainUser.userImg}
                  style={{ width: "8rem", aspectRatio: "1/1" }}
                />
                <h1 className="d-flex flex-column gap-0">
                  {mainUser.name}
                  <span className="h3">{mainUser.id}</span>
                </h1>
              </>
            ) : (
              <p></p>
            )}
          </ListGroupItem>
          <ListGroupItem className="d-flex flex-row align-items-center">
            <p className="m-0">Logout from Chirples</p>
            <Button
              variant="primary"
              className="ms-auto"
              onClick={() => {
                navigate("/");
              }}
            >
              Sign Out
            </Button>
          </ListGroupItem>
        </ListGroup>
      </div>
    </div>
  );
};

export default Setting;