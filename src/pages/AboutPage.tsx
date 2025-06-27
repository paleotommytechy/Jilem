import Navbar from '../components/Navbar'
import AboutPageInfo from '../components/AboutPageInfo'


const About: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar
        showBanner={true}
        bannerTitle="About Us"
        bannerType="page"
        currentPage="About Us"
        currentPath="/about"
      />

    <main className="flex-grow-1">
      <AboutPageInfo />
    </main>
      
    </div>
    
  );
};
export default About;