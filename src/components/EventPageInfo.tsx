import React from 'react'
import './css/EventPageInfo.css';

type Event = {
  id: number;
  month_year: string;
  day: string;
  full_date_time: String;
  image: string;
  title: string;
  location: string
  link: string;
  };

const events: Event[] = [
  {
    id: 1,
    month_year: 'JULY 2025',
  	day: 'SUN 6',
  	full_date_time: 'JUly 6, 2025 @ 8:00am - 12:00pm',
  	image: '/assets/image3.jpg',
  	title: 'Glorious Sunday Service',
  	location: 'Church 350 5th Ave, Lagos, Nigeria',
  	link: '/events',
    
  },
  {
    id: 2,
    month_year: 'JULY 2025',
  	day: 'WED 2',
  	full_date_time: 'July 2, 2025 @ 5:00pm - 7:00pm',
  	image: '/assets/epignosis.jpg',
  	title: 'Weekly Bible Study Service ',
  	location: 'Church 350 5th Ave, Lagos, Nigeria',
  	link: '/events',
    
  },
  {
    id: 3,
    month_year: 'JULY 2025',
  	day: 'FRI 4',
  	full_date_time: 'July 4, 2025 @ 10:00pm - 3:00am',
  	image: '/assets/sermon2.jpg',
  	title: 'Night of Wonders ',
  	location: 'Church 350 5th Ave, Lagos, Nigeria',
  	link: '/events',
    
  },

 
  ];
const EventPageInfo: React.FC = () => {
	return(
		<>
		  <nav className="navbar navbar-dark bg-transparent  w-100  py-3 px-3">
		  	<div className="container-fluid d-flex justify-content-between align-items-center">
		  		<div >
		  			<h6 style={{fontSize:'14px'}} className='text-muted '>Upcoming </h6>
		  		</div>
		  		<div></div>
		  	</div>
		  </nav>
		  {events.map((event) => (
		  <div key={event.id}>
		   <div className="container-fluid d-flex  align-items-center">
		  	<div className='small'><small className='fw-bold'>{event.month_year}</small></div>
		  	<div className='w-100'><hr/></div>
		  </div>
		  <div className='container'>

		  	<div className='custom-card border-0  overflow-hidden mt-4 mx-auto w-100 '>
		  		<img 
              src={event.image}
              className="mx-auto  d-block w-100 "
              style={{height:'240px',  objectFit:'cover'}}
              />
              <div className="custom-card-body">
              	 <small className="text-muted">{event.full_date_time}</small>
              </div>
              <div className="custom-card-title fw-bold">
              	<h6 >{event.title}</h6>
              </div>
              <div className="custom-card-body ">
              	<small className='text-muted'>{event.location}</small>
              </div>

		  	</div>
		  </div>
		  </div>
		  
		  ))}
		  <hr className='d-flex justify-content-center align-items-center' style={{width:'95%',marginLeft:'10px'}}/>
		  <div className="control container-fluid d-flex justify-content-between align-items-center">
		  	<div className="text-muted">&lt; Previous</div>
		  	<div className="text-center text-warning">Today</div>
		  	<div className="text-muted">Next &gt;</div>
		  </div>
		  <button className='custom-button btn btn-primary rounded-4  mx-2 my-2 mb-4'>Subscribe to calendar</button>
		</>
	);
};

export default EventPageInfo;