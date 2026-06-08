import { useEffect } from "react";

import { useGlobalContext } from "@/contexts/GlobalContext";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import MainContent from "@/components/MainContent";
import Loading from "./components/Loading/Loading";

function App() {
  const { state } = useGlobalContext();

  useEffect(() => {}, [state]);

  return (
    <>
      <Navbar />
      {state.isLoading ? <Loading /> : <MainContent />}

      <Footer />
    </>
  );
}

export default App;
