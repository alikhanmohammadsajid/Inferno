import "./App.css";
import Banner from "./Components/Banner";
import Brand from "./Components/Brand";
import CustomBanner from "./Components/CustomBanner";
import Navbardata from "./Components/Data/Navbardata";
import Emailbox from "./Components/Emailbox";
import Footer from "./Components/Footer";
import GroupPhotos from "./Components/GroupPhotos";
import InfernoPrint from "./Components/InfernoPrint";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Productsview from "./Components/Productsview";
import Ruggers from "./Components/Ruggers";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <header className="App-header">
      <Navbar></Navbar>
      <Banner></Banner>
      <CustomBanner></CustomBanner>
      <Productsview></Productsview>
      <Products></Products>
      <Ruggers></Ruggers>
      <Brand></Brand>
      <Testimonial></Testimonial>
      {/* <InfernoPrint></InfernoPrint> */}
      <Emailbox></Emailbox>
      <GroupPhotos></GroupPhotos>
      <Footer></Footer>
      {/* <Navbardata></Navbardata> */}
    </header>
  );
}

export default App;
