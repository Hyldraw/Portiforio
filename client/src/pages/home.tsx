import Navigation from "../components/navigation";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="font-inter bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen relative overflow-hidden transition-colors duration-500">
      {/* Subtle green background pattern for entire site */}
      <div className="fixed inset-0 opacity-0 dark:opacity-5 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/5 via-transparent to-portfolio-accent/10"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-portfolio-accent/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-32 left-10 w-48 h-48 bg-portfolio-accent/5 rounded-full blur-3xl animate-float" style={{ animationDuration: '10s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-portfolio-accent/3 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '15s' }}></div>
      </div>
      
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
