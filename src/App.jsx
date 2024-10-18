import "./App.css";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Team from "./sections/Team";

function App() {
  return (
    <main className="overflow-hidden">
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
