import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/HomePageInfo.css'; 
import eventImage from '/assets/banner.jpg';
import eventImage2 from '/assets/image5.jpg';
import Footer from '../components/Footer'


type Sermon = {
  id: number;
  title: string;
  title2: String;
  image: string;
  link: string;
  };

const sermons: Sermon[] = [
  {
    id: 1,
    title: 'LEARN',
    title2: 'About Our Church',
    image: '/assets/sermon1.jpg',
    link: '/about'
  },
  {
    id: 2,
    title: 'WORSHIP',
    title2: 'View Service Times',
    image: '/assets/sermon2.jpg',
    link: 'contact'

  },
  {
    id: 3,
    title: 'GET INVOLVED',
    title2: 'Upcoming Events',
    image: '/assets/judah.jpg',
    link: '/events'
  },
  {
    id: 4,
    title: 'GIVE',
    title2: 'Donate to the Church',
    image: '/assets/image6.jpg',
    link: '/donate'
  },
  ];

const slides = [
  {
    title: "PARAKLETOS : The Holy Spirit Our Comforter",
    date: "June 23, 2025",
    badge: "Gospel",
    image: "/assets/image5.jpg",
    link: "/blog"
  },
  {
    title: "THE POWER OF FAITH IN TROUBLED TIMES",
    date: "June 25, 2025",
    badge: "Faith",
    image: "/assets/image7.jpg",
    link: "/blog"
  },
  {
    title: "THE POWER IN PRAISE",
    date: "July 1, 2025",
    badge: "Gratitude",
    image: "/assets/judah.jpg",
    link: "/blog"
  },
  {
    title: "THE DOCTRINE OF BAPTISMS",
    date: "June 20, 2025",
    badge: "Doctrine",
    image: "/assets/baptism.jpg",
    link: "/blog"
  },
  {
    title: "EPIGNOSIS: The Knowledge of Christ",
    date: "July 2, 2025",
    badge: "Doctrine",
    image: "/assets/epignosis.jpg",
    link: "/blog"
  },
  {
    title: "TEACH US TO PRAY: The power of Prayer",
    date: "July 3, 2025",
    badge: "Doctrine",
    image: "/assets/prayer.jpg",
    link: "/blog"
  },
 
]


const HomePageInfo: React.FC = () => {
  return (
    <>
      <div className="mt-5 text-center">
        <h3 className='text-dark'>Ever believer was created to belong to a community. It was never God's heart for us to do this life alone.</h3>
        <div className="mt-5 fade-in">
          <img src={eventImage} className="img-fluid rounded-top-img shadow"/>
        </div>
      </div>
      <div className='mt-4 mx-3'>
        <p className='text-muted fw-bold ' style={{fontSize:'12px'}}>WELCOME TO OUR CHURCH</p>
        <h3 className='fw-bold'>Empowered by God to reach others for Christ</h3>
        <p className='text-muted'>Our Community make us unique. They have an energy that reverberates around them. Their mission in life is to ensure the wonder in the world is not overlooked.</p>
        <Link className="more-btn-modern btn px-4 fade-in" to="/about">More About Us</Link>
      </div>

      <div className="first-section w-100 py-3 px-3 text-center text-white">
        <div className="container-fluid  my-5 text-center text-white">
          <div className='first-card-full py-3 px-3 mx-auto '>
            <h2 className='mt-6' >Your Next Steps</h2>
            <h6 className='mt-6'>No matter where you are in the faith journey, there is always a next step</h6>
            <div className='container my-5'>
            <div className="row gy-3 gx-0" >
              {sermons.map((sermon) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-0 d-flex justify-content-center" key={sermon.id} onClick={()=> window.location.href= sermon.link}>
                  <div
                    className="card w-100 text-white position-relative shadow-sm"
                    style={{
                      backgroundImage: `url(${sermon.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderRadius: '20px',
                      height: '300px',
                      overflow: 'hidden',
                      maxWidth: '100%',
                      animation: 'fadeIn 1.2s ease-in-out',
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
                src='/assets/image4.jpg'
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
                  backgroundImage: `url('/assets/logos.jpg')`,
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


                  <div className=" d-flex justify-content-center gap-3 mt-4 flex-wrap">
                      <Link
                        className="btn btn-modern"
                        style={{
                          backgroundColor: 'orange',
                          color: 'black',
                          borderRadius: '25px',
                          padding: '10px 20px',
                          border: 'none',
                          fontWeight: 'bold',
                          marginLeft: '50px',
                        }}
                        to='/sermon'
                      >
                        Watch Sermon
                      </Link>
                      <Link
                        className="btn btn-modern "
                        style={{
                          backgroundColor: 'white',
                          color: 'black',
                          borderRadius: '25px',
                          padding: '10px 20px',
                          border: 'none',
                          fontWeight: 'bold',
                        }}
                        to='/sermon'
                      >
                        All Sermons
                      </Link>
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
          <Link className="btn btn-purple px-4 fade-in" to="/event">View Event</Link>
          <Link className="btn edit-btn-dark px-4 fade-in" to="/event">More Event</Link>
        </div>

        <div className="mt-5 fade-in">
          <img src={eventImage2} className="img-fluid rounded-top-img shadow"/>
        </div>
      </div>
    </>
   );
};

const HomePageSeniorPastor: React.FC = () => {
  const [show, setShow] = useState(false);
  const videoId = "OaXP-QwtX-U"; // Random YouTube video of a pastor preaching
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <>
      <div className="purple-section">
        <div className="pastor-name">Apostle (Dr) Oyewole Emmanuel Adebisi</div>
        <div className="pastor-title">General Overseer</div>
        <p className="mt-3">Jesus Is Lord Evangelistic Mission(JILEM) was divinely founded by Apostle(Dr) Oyewole Emmanuel Adebisi in January 1998, with the first inaugral service held in the second week of Feburary 1998.
        <br/>The mission began humbly in an unfinished building to Mr. Odunlade Nathaniel, a goldsmith inOwode Market, located behind Bukoye Block Industries, Ijagbo, Oyun Local Government, Kwara State, Nigeria.
        <br/><br/>Present at the foundation were a few faithful brethren, including Brother Oyewole Oluwafemi Joshua, as well as earlier supporters like Brother Ogunsola Michael Adebisi. The first service was held from 9:00 AM to 12:30 PM, with 9 souls inattendance, and a humble offering of &#8358;1.30.<br/><br/>From these small beginnings, God has graciously expanded the mission, reaching cities, towns, villages, and even nations, touching countless lives with the gospel of Christ.</p>
        <div className="video-wrapper mt-4">
                {/* Thumbnail */}
            <img
              src={thumbnailUrl}
              alt="Video thumbnail"
              className="img-fluid rounded shadow"
              style={{ cursor: 'pointer' }}
              onClick={() => setShow(true)}
            />

            {/* Modal */}
            {show && (
              <div
                className="modal d-block"
                tabIndex={-1}
                onClick={() => setShow(false)}
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.9)',
                }}
              >
                <div
                  className="modal-dialog modal-lg modal-dialog-centered"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="modal-content">
                    <div className="modal-body p-0">
                      <div className="ratio ratio-16x9">
                        <iframe
                          src={`https://www.youtube.com/watch?v=H0fSp7qVZZ8`}
                          title="Pastor Preaching"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

        </div>
      </div>
      <div className="what-to-expect">
          <h2 className="fw-bold">What to Expect</h2>
          <p className="mt-2">Learn more about our values and our story as a church by visiting the about us page</p>
          <div className="faq">
            <h3>What are your gathering like?</h3><hr/>
            <h3>What happens when i visit?</h3><hr/>
            <h3>What should i bring?</h3><hr/>
            <h3>How should i dress?</h3><hr/>
            <h3>Can i invite people to come with?</h3><hr/>
            <h3>What if we didn't answer your question?</h3><hr/>
          </div>
      </div>
      
    </>
   );
};

const HomePageStories: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
  }, 12000);

  return () => clearInterval(interval); // cleanup
}, [slides.length]);
  const currentSlide = slides[currentIndex];
  const prevSlide = () => setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentIndex((currentIndex + 1) % slides.length);


  return (
    <>
      <div className="container py-4">
        <div className="mb-5">
          <h2 className="fw-bold">Stories & Articles</h2>
          <p className="text-muted fst-italic">...and inspiration in God</p>

          <div className='custom-card border-0  overflow-hidden mt-4 mx-auto w-100'>
            <img 
              src={currentSlide.image} 
              className="mx-auto d-block w-100 rounded-4"
              style={{height:'220px', objectFit:'cover'}}
              />
            <div className="custom-card-body text-center">
              <div className="d-flex justify-content-center align-items-center gap-4 mb-2">
                <span className="badge btn-purple">{currentSlide.badge}</span>
                <small className="text-muted">{currentSlide.date}</small>
              </div>
              <h5 className="custom-card-title fw-bold">{currentSlide.title}</h5>
              <Link className="text-decoration-none text-dark" to="{currentSlide.link}">Read More</Link>
              {/*arrows*/}
              <div className="d-flex justify-content-center text-center gap-3 mt-4">
                <button className="btn  rounded-circle fw-bold custom-purple-btn" onClick={prevSlide}>&lt;</button>
                <button className="btn btn-outline-secondary rounded-circle fw-bold custom-purple-btn" onClick={nextSlide}>&gt;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
   );
};

const HomePageContact: React.FC = () => {
  return (
    <>
      <div className="contact-section w-100 px-3">
        <div className="container-fluid my-3 px-0 ">
            <div className='contact-card-full text-center'>
              <div
                className="w-100 text-white position-relative shadow-sm  "
                style={{
                  backgroundImage: `url('/assets/sermon2.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '20px',
                  width: '100vh',
                  height: '60vh',
                  overflow: 'hidden',
                  maxWidth: '100%',
                }}>
                  <div className='d-flex flex-column align-items-center justify-content-center text-center h-100'>
                    <h3>Join Us at Church</h3>
                    <p>Experience God'spresence at church this Sunday</p>
                  <div className="d-flex justify-content-center mt-2 flex-wrap">
                    <Link to='/contact' className="btn btn-modern">Get Directions
                      </Link>
                  </div>
                  <div className="mt-4">
                    <p className="mb-1">Monday-Thursday<br/><strong>9am-5pm</strong></p>
                    <p className="mb-0">Sunday<br/><strong>8:30am-11:30pm & 6pm</strong></p>
                  </div>
                  </div>
                </div>
            </div>
          </div> 
      </div>
      <div className="contact-section-expand">
        <Footer/>
      </div>
    </>
   );
};


export {HomePageInfo, HomePageSermon, HomePageEvent, HomePageSeniorPastor, HomePageStories, HomePageContact};