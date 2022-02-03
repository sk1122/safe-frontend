import { useEffect } from "react";
import "./App.css";
import Content from "./Content";
import bg from './bg.png'

function App() {
  const css = 'bg-text md:-m-[5vh] lg:-m-[10vh] xl:-m-[15vh] 2xl:-m-[25vh]'

  useEffect(() => {
    document.title = 'Finterra'
  }, [])

  return (
    <>
      <div className="w-full h-full">
        <img src={bg} className="w-full h-full select-none absolute" alt="" />
        <div className="w-full h-screen bg">
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
            <Content />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
