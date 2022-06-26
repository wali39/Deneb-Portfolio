import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Services from "./pages/Services";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Blogs from "./pages/BlogPage";
import ContactUs from "./pages/ContactUs";
import BlogDetails from "./pages/BlogDetailsPage";
import GetInTouch from "./components/contact/GetInTouch";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Route path="/" component={Home} exact />
        <Route path="/about" component={AboutUs} exact />
        <Route path="/services" component={Services} exact />
        <Route path="/blogs" component={Blogs} exact />
        <Route path="/contact" component={ContactUs} exact />
        <Route path="/Portfolio" component={Portfolio} exact />
        <Route path="/blogs/:id" component={BlogDetails} exact />
        <GetInTouch />
        <Footer />
      </Router>
    </>
  );
}

export default App;
