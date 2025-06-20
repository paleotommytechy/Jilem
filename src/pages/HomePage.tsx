import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { HomePageInfo,HomePageSermon,HomePageEvent,HomePageSeniorPastor } from '../components/HomePageInfo'


const HomePage: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar
        showBanner={true}
        bannerTitle="WELCOME TO JILEM"
        bannerSubtitle="Unity people to God and people to people"
        showActionButtons={true}
        bannerType="home"
      />
      <HomePageInfo />
      <HomePageSermon />
      <HomePageEvent />
      <HomePageSeniorPastor />
      <Footer />
    </div>
  );
};
export default HomePage;