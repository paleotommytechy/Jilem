import React from 'react'
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import './css/ContactInfo.css';
import Footer from '../components/Footer';

const ContactInfo: React.FC = () => {
	return(
		<>
		<div className='container py-5'>
			<h2 className='mb-4 fw-bold'>Contact Information</h2>
			<p className="text-muted">If you are ready to join our community, you can leave your contacts.</p>
			<div className='mb-4 '>
				<h5 className='fw-bold'>Address:</h5>
				<p>123 Church Avenue <br/>Lagos, Nigeria</p>

				<h6 className='fw-bold'>Service Times:</h6>
				<p>Saturdays 4pm <br/>Sundays 9am & 4pm</p>
			</div>

			<div className='mb-5'>
				<h5 className='fw-bold'>Location Map</h5>
				<div className='ratio ratio-16x9'>
					<iframe
					 src="https://www.google.com/maps?q=7.3775,3.9470&output=embed"
					 allowFullScreen
					 loading='lazy'
					 title='Church Location'
					></iframe>
				</div>
			</div>
			<div className="shadow-sm">
				<img
					src='/assets/image5.jpg'
					className='card-img-top'
					alt='Random image'
				 />
			</div>

			<Container className='py-5'>
				<section className='mb-5'>
					<h2 className='mb-3 fw-bold'>Ask a Question</h2>
					<p className="text-muted">If you have any question, you can contact us. Please, fill out the form below.</p>

					<Form>
						<Form.Group className='mb-3' controlId='formName'>
							<Form.Label className='labelEdit text-muted'>NAME</Form.Label>
							<Form.Control type='text'  className='controlEdit'></Form.Control>
						</Form.Group>

						<Form.Group className='mb-3' controlId='formEmail'>
							<Form.Label className='labelEdit text-muted'>E-MAIL</Form.Label>
							<Form.Control type='email'  className='controlEdit'></Form.Control>
						</Form.Group>

						<Form.Group className='mb-3' controlId='formMessage'>
							<Form.Label className='labelEdit text-muted'>YOUR MESSAGE</Form.Label>
							<Form.Control as='textarea' rows={5} className='controlEdit'></Form.Control>
						</Form.Group>



						<Button className="labelButton" variant='primary' style={{background:'#7C4DFF', borderRadius:"25px"}}>Send Message</Button>
					</Form>
				</section>

				
			</Container>		
		</div>
		<section className='py-5 text-center image-gallery' >
			<div className='py-4 '>
				<h2 className='mb-2 fw-bold'>Contact With Us</h2>
				<p className='mb-4 text-muted'>Check out what we've been up to within the church and our community on our instagram page.</p>
			</div>

			{/*image Grid*/}
			<Row className='gap-0 row'>
			  {[
			  	'judah.jpg',
			  	'image5.jpg',
			  	'judah.jpg',
			  	'sermon4.jpg',
			  	'sermon2.jpg',
			  	'sermon1.jpg',

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