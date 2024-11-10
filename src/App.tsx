import About from "./sections/About";
import Expertise from "./sections/Expertise";
import Project from "./sections/Project";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";

import { ReactLenis } from "lenis/react";

function App() {
    return (
        <ReactLenis root>
            <div className="cursor-default">
                <div className="bg-[url('./assets/background.png')] bg-dark text-white bg-cover bg-no-repeat px-8 md:px-16">
                    <About />
                    <Expertise />
                    <Project />
                    <Contact />
                </div>
                <div className='fixed bottom-10 w-full'>
                    <Navbar />
                </div>
            </div>
        </ReactLenis>
    );
}

export default App;
