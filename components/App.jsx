import { createRoot } from "react-dom/client";
import Header from "./Header.jsx";
import Showcase from "./Showcase.jsx";
import Icons from "./Icons.jsx";
// import Main from "./Main.jsx";
import Houses from "./Houses.jsx";
import Reviews from "./Reviews.jsx";
import FAQs from "./FAQs.jsx";
import Footer from "./Footer.jsx";
import MainSection from "./MainSection .jsx";



const App = () => {
  return(
    <div>
      <Header />
      <Showcase />
      <Icons />
      <MainSection />
      <Houses />
      <Reviews />
      <FAQs />
      <Footer />
    </div>
  );
    
  
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
