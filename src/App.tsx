import Navbar from "./Components/Navbar/Navbar.tsx";
import Hero from "./Components/Hero/Hero.tsx";
import About from "./Components/About/About.tsx";
import Service from "./Components/Services/Service.tsx";
import MyWork from "./Components/MyWork/MyWork.tsx";
import Contact from "./Components/Contact/Contact.tsx";
import Footer from "./Components/Footer/Footer.tsx";

const App = () => {
    return(
        <div>
            <Navbar/>
            <Hero/>
            <About/>
            <Service/>
            <MyWork/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App
