import Navbar from '../components/Navbar'
import ContactInfo from '../components/ContactInfo'


const Contact: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar
        showBanner={true}
        bannerTitle="Contact"
        bannerType="page"
        currentPage="Contact"
        currentPath="/contact"
      />

    <main className="flex-grow-1">
      <ContactInfo />
    </main>
      
    </div>
    
  );
};
export default Contact;