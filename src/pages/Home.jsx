import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutMe } from "../components/AboutMe";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/projectsSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () =>{
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* {theme toggle} */}
            <ThemeToggle/>

            {/* { bg effect } */}
            <StarBackground />

            {/* { Navbar} */}
            <Navbar/>

            {/* {main content } */}
            <main>
                <HeroSection/>
                <AboutMe/>
                <SkillsSection/>
                <ProjectsSection/>
                <ContactSection/>
            </main>

            {/* {footer} */}
        </div>
    )
}