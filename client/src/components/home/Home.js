import About from "./About/About";
import Contact from "./Contact/Contact";
import Gallery from "./Gallery/Gallery";
import Header from "./Header/Header";
import Inquiries from "./Inquiry/Inquiries";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => (
  <>
    <Header />
    <Gallery />
    <Testimonials />
    <Services />
    <About />
    <Inquiries />
    <Contact />
  </>
)

export default Home;