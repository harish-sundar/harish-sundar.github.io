import './App.css';
import HomeSection from './components/Home/Home';
import NavbarSection from './components/Navbar/Navbar';
import ExperienceSection from './components/Experience/Experience';
import SkillsSection from './components/Skills/Skills';
import ContactSection from './components/Contact/Contact';
import FooterSection from './components/Footer/Footer';
import EducationSection from './components/Education/Education';
import ProjectsSection from './components/Projects/Projects';

function App() {

  return (
    <div>
      <NavbarSection />
      <HomeSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <FooterSection />
      {/* Other components or content */}
    </div>
  );
}


export default App;
