import "./footer.css";
import mastercard from "../../assets/master-card.svg";
import visa from "../../assets/visa.svg";

const Footer = () => {
	return (
		<section className='footer'>
			<div className=' py-5 container'>
				<div className='row'>
					<div className='col-lg-4 col-12'>
						<h2>YOUR LOGO</h2>
						<p>
							Your Logo is our B2B platform where
							we believe in spinning modern day
							tales of success. Established in the
							early 2000's, we are a team of
							visionaries...
							<span>
								<a href='#'>Read More &gt;&gt;</a>
							</span>
						</p>
						<br />
						<div className='contact_details'>
							<span className='mb-2'>
								<i class='fa-solid fa-envelope'></i>
								{"  "}
								support@yourlogo.com
							</span>
							<span>
								<i class='fa-solid fa-phone'></i>{" "}
								+91 9819082345
							</span>
						</div>
					</div>
					<div className='col-lg-2 col-md-6 col-6'>
						<ul className=''>
							<li>
								<h6>About Us</h6>
							</li>
							<li>
								<a href='#'>Our Story</a>
							</li>
							<li>
								<a href='#'>Our Mission</a>
							</li>
							<li>
								<a href='#'>Our Vision</a>
							</li>
							<li>
								<a href='#'>Our Core Values</a>
							</li>
							<li>
								<a href='#'>Teams</a>
							</li>
							<li>
								<a href='#'>Our Clients</a>
							</li>
							<li>
								<a href='#'>Testimonials</a>
							</li>
						</ul>
					</div>
					<div className='col-lg-2 col-md-6 col-6'>
						<ul>
							<li>
								<h6>My Account</h6>
							</li>
							<li>
								<a href='#'>Sign Up</a>
							</li>
							<li>
								<a href='#'>Sign In</a>
							</li>
							<li>
								<a href='#'>Recently Viewed</a>
							</li>
						</ul>
					</div>
					<div className='col-lg-2 col-md-6 col-6'>
						<ul>
							<li>
								<h6>Customer Service</h6>
							</li>
							<li>
								<a href='#'>Contact Us</a>
							</li>
							<li>
								<a href='#'>Privacy Policy</a>
							</li>
							<li>
								<a href='#'>Terms & Conditions</a>
							</li>
							<li>
								<a href='#'>FAQ</a>
							</li>
						</ul>
					</div>
					<div className='col-lg-2 col-md-6 col-6'>
						<ul>
							<li>
								<h6>Relevant Link</h6>
							</li>
							<li>
								<a href='#'>Find Ring Size</a>
							</li>
							<li>
								<a href='#'>
									Exclusive Collection
								</a>
							</li>
							<li>
								<a href='#'>Rings</a>
							</li>
							<li>
								<a href='#'>Earings</a>
							</li>
							<li>
								<a href='#'>Braclets & Bangles</a>
							</li>
							<li>
								<a href='#'>Events</a>
							</li>
						</ul>
					</div>
				</div>
				<hr />
				<div className='row'>
					<div className='col-lg-4 col-12  text-start social_links'>
						<span>
							<i class='fa-brands fa-facebook-f'></i>
						</span>
						<span>
							<i class='fa-brands fa-instagram'></i>
						</span>
						<span>
							<i class='fa-brands fa-linkedin-in'></i>
						</span>
						<span>
							<i class='fa-brands fa-whatsapp'></i>
						</span>
						<span>
							<i class='fa-solid fa-video'></i>
						</span>
						<span>
							<i class='fa-solid fa-envelope'></i>
						</span>
					</div>
					<div className='col-lg-4 col-12  d-flex justify-content-center align-items-center'>
						<p>Copyright yourlogo.com @ 2023</p>
					</div>
					<div className='col-lg-4 col-12 text-end card_images'>
						<div className=''>
							<img
								src={mastercard}
								className='me-3 footer__image'
								alt='Master Card'
							/>
							<img
								src={visa}
								className='footer__image'
								alt='Visa'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
