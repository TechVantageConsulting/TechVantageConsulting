import ReactDOM from "react-dom/client";
import "./index.scss";
import { BackToTop } from "./components/Buttons/BackToTop/backToTop";
import { Whatsapp } from "./components/Buttons/Whatsapp/whatsapp";
import { Navbar } from "./components/PageContainer/Navbar/navbar";
import { HeroSection } from "./components/PageContainer/HeroSection/heroSection";
import { Companies } from "./components/PageContainer/Companies/companies";
import { Contact } from "./components/PageContainer/Contact/contact";
import { Footer } from "./components/PageContainer/Footer/footer";
import { ServicesSection } from "./components/PageContainer/ServicesSection/servicesSection";
import { Members } from "./components/PageContainer/Members/members";
import { Projects } from "./components/PageContainer/Projects/projects";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <BackToTop />
    <Whatsapp />
    <Navbar />
    <HeroSection />
    <Companies />
    <ServicesSection />
    <Projects />
    <Members />
    <Contact />
    <Footer />
  </>
);
