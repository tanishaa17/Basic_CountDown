import "./styles.css";
// import Timer from "./Components/Timer";
import ToggleTimer from "./Components/ToggleTimer";

export default function App() {
  return (
    <div className="App">
      {
        <>
          {/* <Timer /> */}
          <ToggleTimer />
        </>
      }
    </div>
  );
}
