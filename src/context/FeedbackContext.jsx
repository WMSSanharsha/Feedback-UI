import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is the first item",
      rating: 8,
    },
    {
      id: 2,
      text: "Another item in the list",
      rating: 7,
    },
    {
      id: 3,
      text: "This is yet another item",
      rating: 9,
    },
    {
      id: 4,
      text: "Fourth item example",
      rating: 6,
    },
    {
      id: 5,
      text: "Final item in the list",
      rating: 10,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedBack = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(
        feedback.filter((item) => {
          return item.id !== id;
        })
      );
    }
  };

  const updateFeedback = (id, upItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...upItem } : item))
    );
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedBack,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
