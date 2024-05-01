import About from "./sections/About";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="bg-[url('./assets/background.png')] bg-dark bg-cover bg-no-repeat">
            <About/>
            <Navbar/>
        </div>
    );
}

export default App;
