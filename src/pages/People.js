import React, { useEffect } from "react";
import { Form, Row } from "react-bootstrap";
import PeopleTile from "../components/PeopleTile";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, searchUser } from "../redux/userSlice";

const People = ({ session }) => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { allUsers, loading, error } = userData;

  useEffect(
    () => {
      dispatch(fetchUsers());
    },
    // eslint-disable-next-line
    []
  );
  return (
    <div className="w-100 m-0 overflow-y-scroll">
      <div className="bg-body-tertiary sticky-top p-3 p-lg-5">
        <h3 className="my-3 my-lg-2">
          <i className="bi bi-people text-primary me-2"></i>People
        </h3>
        <Form.Control
          type="text"
          placeholder="Search for people by username"
          className="border-primary border-4"
          onChange={(e) => dispatch(searchUser(e.target.value))}
        />
      </div>
      <Row className="m-3 m-lg-5">
        {loading && <div>{loading}</div>}
        {error && <div>{error}</div>}
        {allUsers?.length > 0 &&
          allUsers
            ?.filter((user) => user.id !== session)
            .map((user) => (
              <PeopleTile
                nameVal={user.name}
                userNameVal={user.id}
                ppic={user.userImg}
                key={user}
                sessionRef={session}
              />
            ))}
      </Row>
    </div>
  );
};

export default People;