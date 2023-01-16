import "./signup.css";

const Signup = () => {
	return (
		<section className='signup p-5'>
			<div className='container'>
				<div className='signup__box'>
					<div className='p-5'>
						<h3 className='text-center mb-4'>
							Sign Up
						</h3>
						<div className='row row-gap-2'>
							<div className='d-grid col-lg-6 col-12'>
								<button className='btn btn-facebook fw-semibold rounded-pill'>
									<span className='me-4'>
										<i className='fa-brands fa-facebook-f'></i>
									</span>
									<span>
										Sign In with Facebook
									</span>
								</button>
							</div>
							<div className='d-grid col-lg-6 col-12'>
								<button className='btn btn-google fw-semibold rounded-pill'>
									<span className='me-4'>
										<i className='fa-brands fa-google'></i>
									</span>
									<span>Sign In with Google</span>
								</button>
							</div>
							<br />
							<h6 className='text-center mt-3'>
								OR
							</h6>
							<form>
								<div className='mb-3'>
									<label
										for='name'
										className='form-label'>
										Name
									</label>
									<input
										type='text'
										className='form-control'
										id='name'
										placeholder='Your Name'
									/>
								</div>
								<div className='row'>
									<div className='col-lg-6 col-12'>
										<div className='mb-3'>
											<label
												for='name'
												className='form-label'>
												Name
											</label>
											<input
												type='text'
												className='form-control'
												id='name'
												placeholder='Your Name'
											/>
										</div>
									</div>
									<div className='col-lg-6 col-12'>
										<div className='mb-3'>
											<label
												for='name'
												className='form-label'>
												Name
											</label>
											<input
												type='text'
												className='form-control'
												id='name'
												placeholder='Your Name'
											/>
										</div>
									</div>
									<div className='col-lg-6 col-12'>
										<div className='mb-3'>
											<label
												for='name'
												className='form-label'>
												Name
											</label>
											<input
												type='text'
												className='form-control'
												id='name'
												placeholder='Your Name'
											/>
										</div>
									</div>
									<div className='col-lg-6 col-12'>
										<div className='mb-3'>
											<label
												for='name'
												className='form-label'>
												Name
											</label>
											<input
												type='text'
												className='form-control'
												id='name'
												placeholder='Your Name'
											/>
										</div>
									</div>
									<div className='col-lg-6 col-12'>
										<div className='mb-3'>
											<label
												for='name'
												className='form-label'>
												Name
											</label>
											<input
												type='text'
												className='form-control'
												id='name'
												placeholder='Your Name'
											/>
										</div>
									</div>
									<div className='col-lg-6 col-12'>
										<div className='mb-3'>
											<label
												for='name'
												className='form-label'>
												Name
											</label>
											<input
												type='text'
												className='form-control'
												id='name'
												placeholder='Your Name'
											/>
										</div>
									</div>
								</div>
								<button
									type='submit'
									className='d-grid col-6 btn btn-danger fw-semibold rounded-pill'>
									Register
								</button>
							</form>
							<p className='text-center mt-3'>
								Existing User?{" "}
								<span className='fw-semibold'>
									<a href='#'>Sign In</a>
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Signup;
