import Hero from "./Hero";
import Navbar from "./Navbar";
import Search from "./Search";

export default function Header() {
    return (
        <header className=" w-screen">
            <Navbar />
            <Hero />
            <Search />
        </header>
    )
}
