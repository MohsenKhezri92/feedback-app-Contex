import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AbouteIconLink from "./components/AbouteIconLink";
import AboutePage from "./pages/AboutePage";
import { FeedbackProvider } from "./context/FeedbackContext";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deletefeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackProvider>
      <Router>
        <Header text="Feedback UI" />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm handeAdd={addFeedback} />
                  <FeedbackStats />
                  <FeedbackList
                    handleDelete={deletefeedback}
                  />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutePage />} />
          </Routes>
          <AbouteIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
