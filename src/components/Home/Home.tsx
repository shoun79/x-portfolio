import Mail from "../../Mail/Mail";
import About from "../About/About";
import Header from "../Header/Header";
import Social from "../Social/Social";

const Home = () => {
    return (
        <div>
            <Header />
            <About />
            <Mail />
            <Social />
        </div>
    );
};

export default Home;