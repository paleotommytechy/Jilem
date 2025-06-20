import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/HomePageInfo.css'; 
import eventImage from '../assets/sermon1.jpg';


type Sermon = {
  id: number;
  title: string;
  title2: String;
  image: string;
  };

const sermons: Sermon[] = [
  {
    id: 1,
    title: 'LEARN',
    title2: 'About Our Church',
    image: '/src/assets/sermon1.jpg',
  },
  {
    id: 2,
    title: 'WORSHIP',
    title2: 'View Service Times',
    image: '/src/assets/sermon2.jpg',

  },
  {
    id: 3,
    title: 'GET INVOLVED',
    title2: 'Upcoming Events',
    image: '/src/assets/sermon4.jpg',

  },
  {
    id: 4,
    title: 'GIVE',
    title2: 'Donate to the Church',
    image: '/src/assets/sermon3.jpg',
  },
  ];


const HomePageInfo: React.FC = () => {
  return (
    <>
      <div className="first-section w-100 py-3 px-3 text-center text-white">

        <div className="container-fluid  my-5 text-center text-white">
          <div className='first-card-full py-3 px-3 mx-auto '>
            <h2 className='mt-6' >Your Next Steps</h2>
            <h6 className='mt-6'>No matter where you are in the faith journey, there is always a next step</h6>
            <div className='container my-5'>
            <div className="row gy-2 gx-1">
              {sermons.map((sermon) => (
                <div className="col-6 col-sm-4 col-lg-3 mb-0 d-flex justify-content-center" key={sermon.id}>
                  <div
                    className="card h-1000 text-white position-relative shadow-sm"
                    style={{
                      backgroundImage: `url(${sermon.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderRadius: '20px',
                      height: '300px',
                      overflow: 'hidden',
                      maxWidth: '100%',
                    }}
                  >
                    {/* Overlay */}
                    <div
                      className="position-absolute w-100 h-100"
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        borderRadius: '20px',
                        padding: '1rem',

                      }}
                    >
                      {/* Top-left title */}
                      <h5 className="position-absolute" style={{ top: '1rem', left: '1rem' }}>
                        {sermon.title}
                      </h5>

                      {/* Center-bottom title2 */}
                      <div
                        className="position-absolute text-center w-100"
                        style={{ bottom: '2rem' }}
                      >
                        <h6 className="text-title2">{sermon.title2}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>

           
          </div>
        </div>   
      
      <div className="section w-100 py-3 px-3 text-center text-white">

        <div className="container-fluid  my-5 text-center text-white">
          <div className='card-full py-3 px-3 mx-auto '>
            <small>A LIFE OF PURPOSE</small>
            <h4 className='mt-5'>Overwhelmed by the gift of salvation we have found in Jesus,<br/>we have a heart for authentic worship in the local church.</h4>
            

            <div className="overlay-image">
              {<img
                src='/src/assets/sermon1.jpg'
                className="overlay-image"
                alt="overlay-image"
                style={{ objectFit: 'cover', height: '150px' }}
              />}
              
            </div>
          </div>
        </div>   
      </div>
     </div>
      <div className="space"></div>     
    </>
  );
};

const HomePageSermon: React.FC = () => {
  return (
    <>
      
      <div className="sermon-section w-100  py-0 px-3">
        <div className="container-fluid my-3 px-0 ">
            <div className='sermon-card-full py-0 px-0 mx-auto '>
              <div
                className="w-100 h-1000 text-white position-relative shadow-sm  "
                style={{
                  backgroundImage: `url('/src/assets/sermon1.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '20px',
                  width: '100vh',
                  height: '60vh',
                  overflow: 'hidden',
                  maxWidth: '100%',
                }}>
                  <div className='d-flex flex-column align-items-start justify-content-center h-100'>
                    <div className='px-3 py-0 mb-2'>
                      <small>LATEST SERMON</small>
                    </div>

                    <div className=' px-3 py-3 '>
                      <h1>God's Eternal Purpose<br/>and Will</h1>
                    </div>


                  <div className="d-flex justify-content-center  gap-3 mt-4 flex-wrap">
                      <button
                        className="btn"
                        style={{
                          backgroundColor: 'orange',
                          color: 'black',
                          borderRadius: '25px',
                          padding: '10px 20px',
                          border: 'none',
                          fontWeight: 'bold',
                          marginLeft: '50px',
                        }}
                      >
                        Watch Semon
                      </button>
                      <button
                        className="btn"                      style={{
                          backgroundColor: 'white',
                          color: 'black',
                          borderRadius: '25px',
                          padding: '10px 20px',
                          border: 'none',
                          fontWeight: 'bold',
                        }}
                      >
                        All Sermons
                      </button>
                    </div>
                  </div>
                </div>
            </div>
          </div> 
      </div>
      
      {/*underneath div*/}
     
      <div className="sermon-section-expand position-realtive w-100 px-3">
        <div className="container-fluid my-3 px-0 ">
        </div>
      
      </div>
      
      
    </>
   );
};

const HomePageEvent: React.FC = () => {
  return (
    <>
      <div className="container event py-5">
        <div className="text-uppercase text-muted small fw-bold mb-2">Featured Event</div>
        <h1 className="fw-bold display-5">JILEM Fire Conference Starts</h1>
        <p className="text-secondary mb-4">August 22 @ 10:00pm - 6:00am</p>
        <p className="fs-5">This purpose of this conference is to fellowship together and partner with Holy Spirit</p>

        <div className="d-flex gap-3 my-4">
          <Link className="btn btn-purple px-4" to="/">View Event</Link>
          <Link className="btn edit-btn-dark px-4" to="/">More Event</Link>
        </div>

        <div className="mt-5">
          <img src={eventImage} className="img-fluid rounded-top-img shadow"/>
        </div>
      </div>
    </>
   );
};

const HomePageSeniorPastor: React.FC = () => {
  return (
    <>
      <div className="purple-section">
        <div className="pastor-name">Oyewole Isaac</div>
        <div className="pastor-title">Senior Pastor</div>
        <p className="mt-3">Our church was founded in 1999 with a vision to bring the message of hope and salvation through Jesus Christ to our local community. What began as a small gathering of faithful believers in a modest space has grown into a vibrant, Spirit-filled congregation rooted in love, prayer, and service.<br/>Over the years, God has guided us through seasons of growth and transformation. Through dedicated leadership, passionate worship, and a heart for outreach, we have continued to impact lives both locally and globally.<br/>Today, our church stands as a beacon of faith, welcoming people from all walks of life to experience God's grace. We remain committed to preaching the gospel, making disciples, and living out Christ's love in everything we do.<br/>To God be the glory for all He has done and continues to do in our midst.</p>
        <div className="video-wrapper mt-4">
          <video className="img-fluid rounded shadow"
            width="640"
            height="360"
            controls
            src="https://www.youtube.com/embed/OaXP-QwtX-U"
      >
        <img src={eventImage} className="img-fluid rounded shadow"/>
      </video>
        </div>
      </div>
      <div className="what-to-expect">
          <h2 className="fw-bold">What to Expect</h2>
          <p className="mt-2">Learn more about our values and our story as a church by visiting the about us page</p>
          <div className="faq">
            <h3>What are your gathering like?</h3><hr/>
            <h3>What are your gathering like?</h3><hr/>
            <h3>What are your gathering like?</h3><hr/>
            <h3>What are your gathering like?</h3><hr/>
            <h3>What are your gathering like?</h3><hr/>
          </div>
      </div>
      
    </>
   );
};

const HomePageStories: React.FC = () => {
  return (
    <>
    </>
   );
};

const HomePageContact: React.FC = () => {
  return (
    <></>
   );
};


export {HomePageInfo, HomePageSermon, HomePageEvent, HomePageSeniorPastor, HomePageStories, HomePageContact};