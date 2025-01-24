import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

function App() {
  const Name = "Mohsen";

  return (
    <>
      <Header text="Feedback UI" />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;
