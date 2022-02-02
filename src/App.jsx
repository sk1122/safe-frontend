import "./App.css";
import Content from "./Content";

function App() {
  return (
    <div className="bg-gradient-to-tl from-blue-900  via-black to-black w-full h-screen overflow-hidden">
      <div className="text-white w-full h-1/3 select-none -mt-44">
        <div className="bg-text">SAFE</div>
      </div>
      <div className="text-white w-full h-1/3 select-none">
        <div className="bg-text">SAFE</div>
      </div>
      <div className="text-white w-full h-1/3 select-none">
        <div className="bg-text">SAFE</div>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
        <Content />
      </div>
    </div>
  );
}

export default App;
