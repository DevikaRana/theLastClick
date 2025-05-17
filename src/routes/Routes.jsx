import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";


const Home = lazy(() => import("../pages/Home"));
const Blog = lazy(() => import("../pages/Blog"));
const Page = lazy(() => import("../pages/Page"));
const Portfolio = lazy(() => import("../pages/Portfolio"));
const About = lazy(() => import("../pages/About"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const GallerySlider = lazy(() => import("../components/GallerySlider"));
const CreativePhtography = lazy(() => import("../pages/CreativePhtography"));

function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/" element={<GallerySlider slideIndex={0} />} />
          <Route path="/wedding" element={<Home />} /> {/* Home route */}
          <Route path="/blog" element={<Blog/>} />
          <Route path="/page" element={<Page />} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} /> {/* ✅ Fixed Contact route */}
          <Route path="/explore-creative-photography" element={<CreativePhtography />} /> 
          <Route path="/wedding" element={<GallerySlider slideIndex={0} />} />
          <Route path="/engagement" element={<GallerySlider slideIndex={1} />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
