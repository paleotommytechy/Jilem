import Navbar from '../components/Navbar'
import SermonGrid from '../components/SermonGrid'
import Footer from '../components/Footer'



const Sermons: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar
        showBanner={true}
        bannerTitle="Latest Sermons"
        bannerType="page"
        currentPage="Sermons"
        currentPath="/sermons"
      />

    <main className="flex-grow-1">
      <SermonGrid />
    </main>
      <Footer />
    </div>
    
  );
};
export default Sermons;