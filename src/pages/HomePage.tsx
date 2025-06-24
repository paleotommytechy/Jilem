import Navbar from '../components/Navbar'
import { HomePageInfo,HomePageSermon,HomePageEvent,HomePageSeniorPastor,HomePageStories,HomePageContact } from '../components/HomePageInfo'


const HomePage: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar
        showBanner={true}
        bannerTitle="WELCOME TO JILEM"
        bannerSubtitle="Uniting people to God and people to people"
        showActionButtons={true}
        bannerType="home"
      />
      <HomePageInfo />
      <HomePageSermon />
      <HomePageEvent />
      <HomePageSeniorPastor />
      <HomePageStories />
      <HomePageContact />
    </div>
  );
};
export default HomePage;