import AboutSection from "./components/AboutSection"
import EmailSection from "./components/EmailSection"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-28 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <EmailSection />
      </div>
    </main>
  )
}
