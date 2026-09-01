import About from "./components/About"
import ContactSection from "./components/ContactSection"
import Hero from "./components/Hero"
import HorizontalScrollCarousel from "./components/HorizontalScrollCarousel"
import Navbar from "./components/Navbar"
import Technologies from "./components/Technologies"

const App = () => {
  return (
    <div className="overflox-x-hidden text-neutral-300 antialiased slection:bg-cyan-300 selection:text-cyan-900">
     <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
     </div>
     <div className="Container mx-auto px-8">
      <Navbar />
      <Hero />
      <h1 className="pt-[50px] pb-[100px] text-5xl font-bold text-white tracking-tight lg;mt-16 lg;text-8x w-full lg:w-1/2 pl-20">
        About Me
      </h1>
      <About />
      <h1 className="pt-[150px] text-5xl font-bold text-white tracking-tight lg;mt-16 lg;text-8x w-full lg:w-1/2 pl-20">
        Experiences & Projects
      </h1>
      <HorizontalScrollCarousel />
      <Technologies />
      <ContactSection />
     </div>
    </div>  
  )
}

export default App