import "./signin.css";

const Signin = () => {
	return (
		<section className='signin p-sm-5 px-2 py-5'>
			<div className='container'>
				<div className='signin__box'>
					<div className='p-5'>
						<h3 className='text-center mb-4'>
							Sign In
						</h3>
						<div className='row'>
							<div className='d-grid col-12 mb-3'>
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
							<div className='d-grid col-12'>
								<button className='btn btn-google fw-semibold rounded-pill'>
									<span className='me-4 '>
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
										htmlFor='email'
										className='form-label'>
										Email
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
								<div>
									<p className='text-end text-black fw-semibold mt-3'>
										<span>
											<a href='#'>
												Forgot Password?
											</a>
										</span>
									</p>
								</div>
								<button
									type='submit'
									className='d-grid mt-4 col-12 btn registerBtn fw-semibold rounded-pill'>
									Sign In
								</button>
							</form>
							<p className='text-center fw-semibold mt-3'>
								New User?{" "}
								<span>
									<a href='#'>
										Create an Account
									</a>
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Signin;
