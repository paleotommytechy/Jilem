import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

type NavbarProps = {
  showBanner?: boolean;
  bannerTitle?: string;
  bannerSubtitle?: string;
  showActionButtons?: boolean;
  bannerType?: 'home' | 'page';
  currentPage?: string;
  currentPath?: string;
};


const Navbar: React.FC<NavbarProps> = ({
  showBanner = false,
  bannerTitle = '',
  bannerSubtitle = '',
  showActionButtons = false,
  bannerType = '',
  currentPage = '',
  currentPath = '',
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [activeButton, setActiveButton] = useState<'inPerson' | 'online' | null>(null);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const menuStyle: React.CSSProperties = {
    backgroundColor: hover || sidebarOpen ? 'orange' : 'mediumpurple',
    borderRadius: '50%',
    width: '45px',
    height: '45px',
    padding: '10px',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-transparent position-absolute top-0 w-100 z-3 py-3 px-3">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link className="navbar-brand text-white logo-jilem" to="/">JILEM</Link>

          <button
            style={menuStyle}
            className="d-lg-none"
            onClick={toggleSidebar}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            <i className="bi bi-list fs-4"></i>
          </button>

          <div className="d-none d-lg-flex">
            <ul className="navbar-nav ms-auto d-flex flex-row align-items-center gap-3">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/pages">Pages</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sermons">Sermons</Link></li>
              <li className="nav-item"><a className="nav-link" href="#"><i className="bi bi-facebook"></i></a></li>
              <li className="nav-item"><a className="nav-link" href="#"><i className="bi bi-instagram"></i></a></li>
              <li className="nav-item"><button className="btn btn-outline-warning ms-2">Give!</button></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
       {sidebarOpen && (
        <div
          className="mobile-sidebar position-fixed top-0 end-0 vh-100 shadow-lg z-3 p-4"
          style={{
            width: '260px',
            borderTopRightRadius: '20px',
            borderBottomRightRadius: '20px',
            transition: 'transform 0.3s ease-in-out',
            color: 'white',
          }}
        >
          <button
            className="btn text-dark position-absolute top-0 end-0 m-3"
            onClick={toggleSidebar}
          >
            <i className="bi bi-x-lg fs-4"></i>
          </button>

          <nav className="mobile-navbar mt-5">
            <ul className="navbar-nav d-flex flex-column gap-3">
              <li className="nav-item link-to-page">
               <Link className="nav-link text-white" to="/" onClick={toggleSidebar}>🏠 Home</Link>
              </li>
              <li className="nav-item link-to-page">
                <Link className="nav-link text-white" to="/about" onClick={toggleSidebar}>🙏 About Us</Link>
              </li>
              <li className="nav-item link-to-page">
                <Link className="nav-link text-white" to="/sermons" onClick={toggleSidebar}>🎙️ Sermons</Link>
              </li>
              <li className="nav-item link-to-page">
                <Link className="nav-link text-white" to="/events" onClick={toggleSidebar}>📅 Events</Link>
              </li>
              <li className="nav-item link-to-page">
                <Link className="nav-link text-white" to="/donate" onClick={toggleSidebar}>💝 Donations</Link>
              </li>
              <li className="nav-item link-to-page">
                <Link className="nav-link text-white" to="/contact" onClick={toggleSidebar}>✉️ Contact</Link>
              </li>
              <li className="nav-item link-to-page">
                <Link className="nav-link text-white" to="/blog" onClick={toggleSidebar}>📰 Blog</Link>
              </li>
              <li className="nav-item d-flex gap-3 mt-4">
                <a className="text-purple fs-5" href="https://facebook.com" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
                <a className="text-orange fs-5" href="https://instagram.com" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
              </li>
              <li className="nav-item mt-4">
                <button
                  className="btn w-100 text-white"
                  style={{
                    background: 'linear-gradient(to right, #a855f7, #fb923c)',
                    borderRadius: '10px',
                    padding: '10px 15px',
                    fontWeight: 'bold',
                  }}
                >
                  Give Now
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Dynamic Banner */}
      {showBanner && (
        <header
          className="text-white"
          style={{
            backgroundImage: `url('/src/assets/sermon1.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '75vh',
            maxHeight: '500px',
            position: 'relative',
            borderBottomLeftRadius: '20px',
            borderBottomRightRadius: '20px',
            display: 'flex',
            alignItems: bannerType === 'home' ? 'center' : 'flex-end',
            justifyContent: bannerType === 'home' ? 'center' : 'flex-start',
            padding: bannerType === 'page' ? '0 2rem 2rem' : '0',
            textAlign: bannerType === 'home' ? 'center' : 'left',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url('/assets/sermon1.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(1.5px)',
              zIndex: 0,
              borderBottomLeftRadius: '20px',
              borderBottomRightRadius: '20px',
            }}
          ></div>

          <div className="container px-3" style={{ position: 'relative', zIndex: 1 }}>
            {bannerType === 'home' && (
              <>
                <h1 className="fw-bold text-uppercase" style={{ fontSize: '2rem' }}>
                  {bannerTitle}
                </h1>
                {bannerSubtitle && <p className="bannerSubtitle fst-italic fs-5 mt-2">{bannerSubtitle}</p>}
                {showActionButtons && (
                  <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
                    <button
                      className="btn"
                      onClick={() => setActiveButton('inPerson')}
                      style={{
                        backgroundColor: activeButton === 'inPerson' ? 'white' : 'orange',
                        color: 'black',
                        borderRadius: '25px',
                        padding: '10px 20px',
                        border: 'none',
                        fontWeight: 'bold',
                      }}
                    >
                      Join in Person
                    </button>
                    <button
                      className="btn"
                      onClick={() => setActiveButton('online')}
                      style={{
                        backgroundColor: activeButton === 'online' ? 'orange' : 'white',
                        color: 'black',
                        borderRadius: '25px',
                        padding: '10px 20px',
                        border: 'none',
                        fontWeight: 'bold',
                      }}
                    >
                      Watch Online
                    </button>
                  </div>
                )}
              </>
            )}

            {bannerType === 'page' && (
              <>
                <h1 className="display-4 fw-bold">{bannerTitle}</h1>
                <p>
                  <Link to="/" className="text-white fw-bold text-decoration-none fs-6">HOME</Link>
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                  <Link to={currentPath || "#"} className="text-white fw-bold text-decoration-none fs-6">
                    {currentPage?.toUpperCase()}
                  </Link>
                </p>
              </>
            )}
          </div>
        </header>
      )}

    </>
  );
};

export default Navbar;
