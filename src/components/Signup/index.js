import "./signup.css";

const Signup = () => {
	return (
		<section className='signup p-sm-5 px-2 py-5'>
			<div className='container'>
				<div className='signup__box'>
					<div className='p-5'>
						<h3 className='text-center mb-4'>
							Sign Up
						</h3>
						<div className='row'>
							<div className='d-grid col-lg-6 col-12'>
								<button className='btn btn-facebook fw-semibold rounded-pill'>
									<span className='me-4'>
										<i className='fa-brands fa-facebook-f'></i>
									</span>
									<span className='d-sm-none d-inline'>
										Sign In
									</span>
									<span className='d-none d-sm-inline'>
										Sign In with Facebook
									</span>
								</button>
							</div>
							<div className='d-grid col-lg-6 col-12'>
								<button className='btn btn-google fw-semibold rounded-pill'>
									<span className='me-4'>
										<i className='fa-brands fa-google'></i>
									</span>
									<span className='d-sm-none d-inline'>
										Sign In
									</span>
									<span className='d-none d-sm-inline'>
										Sign In with Google
									</span>
								</button>
							</div>
							<br />
							<h6 className='text-center mt-3'>
								OR
							</h6>
							<form>
								<div className='mb-3'>
									<label
										htmlFor='name'
										className='form-label'>
										Name
										<span className='required_star'>
											*
										</span>
									</label>
									<input
										type='text'
										className='form-control'
										id='name'
										placeholder='Your Name'
										required
									/>
								</div>
								<div className='row'>
									<div className='col-lg-6 col-12'>
										<div className='mb-3'>
											<label
												htmlFor='gender'
												className='form-label'>
												Gender
												<span className='required_star'>
													*
												</span>
											</label>
											<div className='d-flex'>
												<div className='form-check me-3'>
													<input
														className='form-check-input'
														type='radio'
														name='exampleRadios'
														id='exampleRadios1'
														value='male'
														checked
													/>
													<label
														className='form-check-label'
														htmlFor='exampleRadios1'>
														Male
													</label>
												</div>
												<div className='form-check'>
													<input
														className='form-check-input'
														type='radio'
														name='exampleRadios'
														id='exampleRadios2'
														value='female'
													/>
													<label
														className='form-check-label'
														htmlFor='exampleRadios2'>
														Female
													</label>
												</div>
											</div>
										</div>
									</div>
									<div className='col-lg-6 col-12'>
										<div className='mb-3'>
											<label
												htmlFor='name'
												className='form-label'>
												City
												<span className='required_star'>
													*
												</span>
											</label>
											<select
												className='form-select rounded-pill'
												aria-label='Default select example'
												required>
												<option selected>
													City
												</option>
												<option value='mumbai'>
													Mumbai
												</option>
												<option value='pune'>
													Pune
												</option>
												<option value='ahmedabad'>
													Ahmedabad
												</option>
											</select>
										</div>
									</div>
									<div className='col-lg-6 col-12'>
										<div className='mb-3'>
											<label
												htmlFor='phone'
												className='form-label'>
												Mobile Number
												<span className='required_star'>
													*
												</span>
											</label>
											<input
												type='tel'
												max='10'
												className='form-control'
												placeholder='Mobile or Phone'
												id='phone'
											/>
										</div>
									</div>
									<div className='col-lg-6 col-12'>
										<div className='mb-3'>
											<label
												htmlFor='email'
												className='form-label'>
												Email Address
												<span className='required_star'>
													*
												</span>
											</label>
											<input
												type='email'
												className='form-control'
												id='email'
												placeholder='Your Email'
												required
											/>
										</div>
									</div>
									<div className='col-lg-6 col-12'>
										<div className='mb-3'>
											<label
												htmlFor='password'
												className='form-label'>
												Password
												<span className='required_star'>
													*
												</span>
											</label>
											<input
												type='password'
												className='form-control'
												id='password'
												placeholder='Password'
												required
											/>
										</div>
									</div>
									<div className='col-lg-6 col-12'>
										<div className='mb-3'>
											<label
												htmlFor='confirmPassword'
												className='form-label'>
												Confirm Password
												<span className='required_star'>
													*
												</span>
											</label>
											<input
												type='password'
												className='form-control'
												id='confirmPassword'
												placeholder='Confirm Password'
												required
											/>
										</div>
									</div>
								</div>
								<button
									type='submit'
									className='d-grid offset-lg-3 mt-4 offset-2 col-lg-6 col-8 btn registerBtn fw-semibold rounded-pill'>
									Register
								</button>
							</form>
							<p className='text-center fw-semibold mt-3'>
								Existing User?{" "}
								<span>
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
