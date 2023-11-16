import React from "react";
import { Button } from "react-bootstrap";

const MessageBubble = ({ sender, content }) => {
  return (
    <div className="d-flex flex-row align-items-center mb-4 ">
      <div className="d-flex flex-column" style={{ order: sender ? "0" : "1" }}>
        <div className="d-flex flex-row ">
          <div
            className={`${
              sender
                ? "border border-3 border-primary"
                : "bg-primary text-white"
            } p-2 rounded`}
            style={{ order: sender ? "0" : "1" }}
          >
            {content}
          </div>
          {/* <i
            className="bi bi-three-dots m-2 align-self-center"
            data-bs-toggle="collapse"
            data-bs-target={`#${mID}`}
          ></i> */}
        </div>
        {/* <div className="collapse" id={mID}>
          <div className="d-flex flex-column">
            <div className={`mt-1 ${sender ? "text-start" : "text-end"}`}>
              <Button title="Copy" variant="light">
                <i className="bi bi-copy"></i>
              </Button>
              <Button title="Delete" variant="danger">
                <i className="bi bi-trash"></i>
              </Button>
            </div>
          </div>
        </div> */}
      </div>
      <p
        className={`${sender ? "ms-auto text-end" : "me-auto"} m-0`}
        style={{ width: "20rem" }}
      ></p>
    </div>
  );
};

export default MessageBubble;