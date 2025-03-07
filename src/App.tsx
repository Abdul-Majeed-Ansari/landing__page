import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NewsSection from "./components/NewsSection";
import TrendingSection from "./components/TrendingSection";


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrendingSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;