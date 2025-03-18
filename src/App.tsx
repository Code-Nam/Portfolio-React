import About from "./sections/About";
import Expertise from "./sections/Expertise";
import Project from "./sections/Project";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";

import { ReactLenis } from "lenis/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
    return (
        <>
            <ReactLenis root>
                <div className='cursor-default'>
                    <main className="bg-[url('./assets/background.webp')] bg-dark text-white bg-cover bg-no-repeat px-8 md:px-16">
                        <About />
                        <Expertise />
                        <Project />
                        <Contact />
                    </main>
                    <nav className='fixed bottom-10 w-full'>
                        <Navbar />
                    </nav>
                    <footer className='bg-purple flex text-white justify-around py-2'>
                        <p>&copy; 2025 Annam TRAN</p>
                        <p>All rights reserved</p>
                    </footer>
                </div>
            </ReactLenis>
            <SpeedInsights />
        </>
    );
}

export default App;
