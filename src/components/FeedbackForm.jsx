import React, { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisbaled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  function handleTextChange(e) {
    if (text === " ") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== " " && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setMessage(" ");
      setBtnDisabled(false);
    }

    setText(e.target.value);
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* @todo - rating select component */}
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            value={text}
            onChange={handleTextChange}
          />
          <Button type="submit" isDisabled={btnDisbaled}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
