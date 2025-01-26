import "./App.css";
import WhileTap from "./components/Gesture/WhileTap";
// import WhileHover from "./components/Gesture/WhileHover";
// import Transition from "./components/Transition/Transition";

function App() {
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      {/* <Transition /> */}
      {/* Gestures */}
      {/* <WhileHover /> */}
      <WhileTap />
    </div>
  );
}

export default App;
