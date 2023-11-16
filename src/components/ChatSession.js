import { useState } from "react";
import { Image, Offcanvas } from "react-bootstrap";
import { MessageSpace } from "./MessageSpace";

const ChatSession = ({ username, name, img, sessionRef }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow(true);
  return (
    <>
      <div
        onClick={toggleShow}
        className="d-flex flex-row align-items-center gap-3 border-bottom border-3 border-primary-subtle p-3 bg-card-body"
      >
        <Image
          src={img}
          style={{ width: "5rem", height: "5rem", objectFit: "cover" }}
          roundedCircle
        />
        <div className="d-flex flex-column">
          <h5 className="text-primary m-0">{name}</h5>
          <h6>{username}</h6>
        </div>
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        backdrop={false}
        placement="end"
        className="w-MS user-select-none"
      >
        <Offcanvas.Body className="p-0">
          <MessageSpace
            closeSpace={handleClose}
            name={name}
            uname={username}
            img={img}
            session={sessionRef}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ChatSession;