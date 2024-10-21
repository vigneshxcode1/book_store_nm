import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./compoents/Navbar/Navbar.jsx";
import Headerimage from "./compoents/headertitle/Headerimage.jsx";
import Bestseller from "./compoents/main_compoents/bestseller/bestseller.jsx";
import Offer from "../src/compoents/main_compoents/offers/Offers.jsx";
import Fantasy from "../src/compoents/main_compoents/fantasy/fantasy.jsx"
import Nonfiction from "../src/compoents/main_compoents/non-fiction/nonfiction.jsx"
import Footer from "./compoents/footer/footer.jsx";



function App() {
  return (
    <>
      <Navbar />
      <Headerimage />
      <Bestseller />
      <Offer />
      <Fantasy/>
      <Nonfiction/>
      <Footer/>
    </>
  );
}

export default App;
