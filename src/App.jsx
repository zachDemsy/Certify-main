import "./App.css";
import { About, CTA, Footer, HowItWork, Navbar, Team, Welcome } from "./components";

function App() {
  return (
    <div className="w-[100%] h-[100vh] md:px-8 md:py-4 px-4 py-2 max-w-[1940px]">
      <Navbar />
      <Welcome />
      <About />
      <HowItWork />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
