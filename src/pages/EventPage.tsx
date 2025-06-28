import Navbar from '../components/Navbar'
import EventPageInfo from '../components/EventPageInfo';
import Footer from '../components/Footer'


const Event: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar
        showBanner={true}
        bannerTitle="Event"
        bannerType="page"
        currentPage="Event"
        currentPath="/events"
      />

    <main className="flex-grow-1">
      <EventPageInfo />
    </main>
      <Footer />
    </div>
    
  );
};
export default Event;