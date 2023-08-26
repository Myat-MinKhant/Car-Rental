import Hero from "./Hero";
import Search from "./Search";

export default function Header() {
    return (
        <header className=" px-3 laptop:px-7 desktop:px-20">
            <Hero />
            <Search />
        </header>
    )
}
