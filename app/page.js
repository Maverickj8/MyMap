import Image from "next/image";
import Nav from "./Nav/page";
import HomePage from "./Homepage/page";

export default function Home() {
  return (
    <header className="bg-black h-full">
    <Nav />
    <HomePage />
    </header>
  );
}
