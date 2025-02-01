import React, { Children } from "react";
import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ Children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item is from context",
      rating: 10,
    },
  ]);
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
      }}
    >
      {Children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext
