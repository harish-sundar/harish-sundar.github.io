import './App.css';
import EducationSection from './components/Education';
import HomeSection from './components/Home';
import NavbarSection from './components/Navbar';
import ExperienceSection from './components/Experience';
import SkillsSection from './components/Skills';
import ContactSection from './components/Contact';
import FooterSection from './components/Footer';
import NewEducationSection from './components/NewEducation';
import ProjectsSection from './components/Projects';

function App() {

  return (
    <div>
      <NavbarSection />
      <HomeSection />
      <NewEducationSection />
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
