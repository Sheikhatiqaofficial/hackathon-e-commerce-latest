import Ceramic from "./components/Ceramic";
import Feature from "./components/Feature";
import Herosection from "./components/Herosection";
import Popular from "./components/Popular";
import Promotion from "./components/Promotion";
import Signup from "./components/Signup";
import Topnav from "./components/Topnav";



export default function Home() {
  return (
    <div>
      <Topnav />
      <Herosection />
      <Feature />
      <Ceramic />
      <Popular />
      <Signup />
      <Promotion />

    </div>
  );
}
