import Advantages from "../components/layouts/Advantages";
import Hero from "../components/layouts/hero";
import Navbar from "../components/layouts/Navbar";
import Packages from "../components/layouts/Packages";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-auto">
        <Hero />
      </div>
      <Advantages />
      <Packages />
    </div>
  );
}

export default Home;
