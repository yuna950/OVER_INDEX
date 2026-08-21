import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Hero from "./pages/hero/Hero";
import Map from "./pages/map/Map";
import HeroDetail from "./pages/hero_detail/HeroDetail";
import MapDetail from "./pages/map_detail/MapDetail";

export default function Router() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/map" element={<Map />} />
        <Route path="/hero/:key" element={<HeroDetail />} />
        <Route path="/map/:key" element={<MapDetail />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
