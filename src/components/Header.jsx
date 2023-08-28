import Hero from "./Hero";
import Search from "./Search";

export default function Header({ reference }) {
    return (
        <header className=" px-3 laptop:px-7 desktop:px-20">
            <Hero />
            <div ref={reference}>
                <Search />
            </div>
        </header>
    )
}
