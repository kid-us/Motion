import "./App.css";
import WhileInView from "./components/Scroll/WhileInView";
// import WhileDrag from "./components/Gesture/WhileDrag";
// import WhileTap from "./components/Gesture/WhileTap";
// import WhileHover from "./components/Gesture/WhileHover";
// import Transition from "./components/Transition/Transition";

function App() {
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      {/* <Transition /> */}

      {/* Gestures */}

      {/* <WhileHover /> */}
      {/* <WhileTap /> */}
      {/* <WhileDrag /> */}

      {/* Scroll */}

      <WhileInView />
    </div>
  );
}

export default App;
