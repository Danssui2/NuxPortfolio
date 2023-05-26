import React, { useEffect } from "react";
import Index from "./pages/Index";
import LoadingScreen from "./components/LoadingScreen";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  // Library Initialyze
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 30,
      offset: 3,
      disable: false,
    });
    Aos.refresh();
  }, []);

  return (
    <>
      <LoadingScreen />
      <Index />
    </>
  );
}

export default App;
