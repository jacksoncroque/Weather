import { useEffect } from "react";

import { useGlobalContext } from "@/contexts/GlobalContext";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import MainContent from "@/components/MainContent";

function App() {
  const { state } = useGlobalContext();

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <Navbar />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
