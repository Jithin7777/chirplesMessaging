import { useEffect, useState } from "react";
import { Button, Card, Form, Image, InputGroup } from "react-bootstrap";
import MessageBubble from "./MessageBubble";
import { useDispatch, useSelector } from "react-redux";
import { addToMessage, fetchMessages } from "../redux/messageSlice";
import uniqid from "uniqid";
import { addMessage } from "../service/APIs/allAPIs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MessageSpace = ({ closeSpace, uname, name, img, session }) => {
  const messageData = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const [IPData, setIPData] = useState({
    id: "",
    senderName: "",
    reciverName: "",
    content: "",
  });

  const { allMessages, loading, error } = messageData;

  const messageDraft = (e) => {
    let { value } = e.target;

    setIPData({
      ...IPData,

      senderName: session,
      reciverName: uname,
      content: value,
    });
    console.log(IPData);
  };

  const handleSend = async () => {
    let uid = uniqid();
    setIPData({ ...IPData, id: uid });
    const { content } = IPData;
    if (content === "") {
      toast.warning("No message entered", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    } else {
      const result = await addMessage(IPData);
      if (result.status >= 200 && result.status < 300) {
        // dispatch(addToMessage(result));
        return result.status;
      }
    }
  };

  useEffect(
    () => {
      dispatch(fetchMessages());
    },
    // eslint-disable-next-line
    [handleSend]
  );

  return (
    <Card className="rounded-0 border-0 h-100">
      <Card.Header className="bg-primary rounded-0">
        <div className="d-flex flex-row gap-3 align-items-center">
          <Image
            src={img}
            style={{ width: "3rem", aspectRatio: "1/1", objectFit: "cover" }}
            roundedCircle
          />
          <div className="d-flex flex-column" data-bs-theme="dark">
            <h5 className="m-0 text-white">{name}</h5>
            <h6 className="m-0 text-muted">{uname}</h6>
          </div>
          <Button variant="light" className="ms-auto" onClick={closeSpace}>
            <i className="bi bi-x-lg"></i>
          </Button>
        </div>
      </Card.Header>
      <Card.Body className="overflow-y-scroll">
        {loading && <div>{loading}</div>}
        {error && <div>{error}</div>}
        {allMessages?.length > 0 &&
          allMessages
            ?.filter(
              (m) =>
                (m.senderName === session && m.reciverName === uname) ||
                (m.senderName === uname && m.reciverName === session)
            )
            .map((message) => (
              <MessageBubble
                sender={message.senderName === session ? false : true}
                content={message.content}
                mID={message.id}
              />
            ))}
      </Card.Body>
      <Card.Footer className="rounded-0">
        <InputGroup>
          <Form.Control
            type="text"
            className="border-5 border-end-0 border-primary"
            placeholder="Enter message here"
            name="messageD"
            onChange={(e) => messageDraft(e)}
          />
          <Button variant="primary" onClick={handleSend}>
            <i className="bi bi-send-fill"></i>
          </Button>
        </InputGroup>
      </Card.Footer>
      <ToastContainer />
    </Card>
  );
};

export { MessageSpace };