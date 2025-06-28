import React from 'react'
import {Row, Col} from 'react-bootstrap';
import './css/AboutPageInfo.css';
import Footer from '../components/Footer'
import {FaEnvelope, FaWhatsapp} from 'react-icons/fa'

type Pastor = {
	name:string;
	position:string;
	imageUrl:string;
	description:string;

}
type PastorData={
	pastors: Pastor[];
}
const pastorData:PastorData = {
	pastors:[
	{
		name:'Oyewole Emmanuel Adebisi',
		position:'General Overseer',
		imageUrl:'/assets/pastor 2.jpg',
		description:'',
	},
	{
		name:'Oyewole Oluwaseun',
		position:'Senior Pastor',
		imageUrl:'/assets/pastor 1.jpg',
		description:'',
	},
	{
		name:'Mercy Hagin',
		position:'Prophetess',
		imageUrl:'/assets/pastor 3.jpg',
		description:'',
	},
]

}


const ContactInfo: React.FC = () => {
	return(
		<>
			<div className="mt-4 mb-0 mx-3 my-3 ">
				<img
					src='/assets/image5.jpg'
					className='card-img-top'
					alt='Random image'
				 />
			</div>
			<div className="mt-4 mx-3">
				<h3 className="fw-bold title1">A <span>Diverse</span> and <span>Inclusive</span> Community </h3>
				<p className="text-muted">At our church, we believe that the body of Christ is beautifully diverse a reflection of God’s creation. We welcome people of every background, race, age, and life story.<br/> Whether you're new to faith or have walked with God for years, you belong here. We are committed to building a community where everyone is seen, valued, and loved  just as Christ welcomes each of us with open arms.</p>
			</div>
			<div className="mt-4 mx-3">
				<h3 className="fw-bold">Our Story </h3>
				<p className="text-muted">At our church, we believe that the body of Christ is beautifully diverse a reflection of God’s creation. We welcome people of every background, race, age, and life story.<br/> Whether you're new to faith or have walked with God for years, you belong here. We are committed to building a community where everyone is seen, valued, and loved just as Christ welcomes each of us with open arms.</p>
			</div>
			<div className="mt-2 mb-4 mx-3 my-3" style={{height:'50%'}}>
				<img
					src='/assets/sermon5.jpg'
					className='card-img-top '
					alt='Random image'
					style={{height:'75%'}}
				 />
			</div>

			<div className="edit-belief text-center">
				<h6>BELIEFS THAT UNITES US</h6>
				<h2>Visit Out Sermons</h2>
				<p className='mt-4'>Our community makes us unique. They have an energy that reverberates around them. Their mission in life is to ensure the wonder in the wold is not overlooked.</p>
		        <div className="video-wrapper mt-4" onClick={() =>window.open('https://www.youtube.com/', '_blank')}>
		        	<i className='bi bi-play-circle-fill'></i>
		        </div>
		    </div>
	        <div className="our-core-values">
	          <h3 className="fw-bold">Our Core <span>Values</span></h3>
	          <p className="mt-2">Learn more about our values and our story as a church by visiting the about us page</p>
	          <div className="faq">
	            <h3>We value the Lordship of Jesus Christ!</h3><hr/>
	            <h3>We value Bible-centered Preaching and Teaching!</h3><hr/>
	            <h3>We value Prayer!</h3><hr/>
	            <h3>We value Evangelism and World Missions!</h3><hr/>
	            <h3>We value the Family!</h3><hr/>
	          </div>
	        </div>

	        {/*Pastor card*/}
	        <div className='container mt-5'>
	        	<h2 className='fw-bold mb-4'>Meet Our <span className='text-warning'>Pastors</span></h2>
	        	<p className='text-muted mb-5'></p>
	        	<div className='row'>
	        		{pastorData.pastors.map((pastor, idx)=>(
	        		<div className="col-md-6 mb-4" key={idx}>
	        			<div className="custom-card border-0">
	        				<div className="pastor position-relative">
	        					<img src={pastor.imageUrl} alt={pastor.name} className='card-img-top rounded-3' />
	        					<div className=" icon-edit position-absolute bottom-0 end-0 p-2 d-flex gap-1">
	        						<a href='https://wa.me/9028168649' target='_blank' rel='nonpener nonreferrer' className='btn'><FaWhatsapp /></a>
	        						<a href='olusegunifetomiwa@gmail.com' target='_blank' rel='nonpener nonreferrer'><FaEnvelope /></a>
	        					</div>
	        				</div>
	        				<div className="custom-card-body">
	        					<h5 className="fw-bold mb-1">{pastor.name}</h5>
	        					<h6 className="text-muted text-uppercase mb-2">{pastor.position}</h6>
	        					<p className="custom-card-text">{pastor.description}</p>
	        				</div>
	        			</div>
	        		</div>
	        		))}
	        	</div>
	        
	        </div>

			{/*footer area*/}
			<section className='py-5 text-center image-gallery' >
				<div className='py-4'>
					<h2 className='mb-2 fw-bold '>Contact With Us</h2>
					<p className='mb-4 text-muted'>Check out what we've been up to within the church and our community on our instagram page.</p>
				</div>

				{/*image Grid*/}
				<Row className='gap-0 row'>
				  {[
				  	'judah.jpg',
				  	'image5.jpg',
				  	'judah.jpg',
				  	'prayer.jpg',
				  	'image7.jpg',
				  	'baptism.jpg',

				].map((image, index) =>(
					<Col className='col' sm={4} xs={4} md={4} key={index}>
						<img
						 src={`/assets/${image}`}
						 alt={`Gallery ${index+1}`}
						 className='img-fluid shadow-sm'
						/>
					</Col>
				))}
				</Row>
			</section>
			<div className="footer-section">
	        	<Footer/>
	      	</div>

		</>
	);
};

export default ContactInfo;