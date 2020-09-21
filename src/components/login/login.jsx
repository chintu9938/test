import React from 'react';

// Bootstrap components
import { Button, Alert } from 'react-bootstrap';

// import pages
// import HeaderLogin from "./../HeaderLogin/HeaderLogin.jsx";

import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';

//Load redux and actions from reduct actions
import { connect } from 'react-redux';
import { actionLogin } from './../../actions/commonActions';

const initialValue = {
	email: '',
	password: '',
	errorMessage:""
};

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			accountLocked: false,
			passwordNotSet: false,
		};
	}

	onChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	/**
	 *
	 * @desc Login action to call login api
	 */
	loginAction(data) {
          this.props.actionLogin(data);
          if(this.props.isAuthenticated == true){
            this.props.history.push("survey")
          }else{
			this.setState({
errorMessage :"please enter correct Email_id and Password"
			})
		  }
	}

	render() {
		return (
			<div>
				{/* header */}
				{/* <HeaderLogin /> */}

				{/* login box */}
				<div className="loginBg loginContent align-items-end flex-column">
					<div className="loginBox">
						<h4>Login to your account</h4>
						{((this.props.LoginMessage != '' && this.props.LoginMessage !== undefined) ||
							this.state.LoginMessage !== undefined) && (
							<Alert variant="danger">
								{this.state.LoginMessage ? this.state.LoginMessage : this.props.LoginMessage}
							</Alert>
						)}
						{/* <Alert variant="success">Your password has been Successfully changed!</Alert> */}
						{!this.state.accountLocked && this.state.passwordNotSet == false ? (
							<Formik
								validateOnBlur={true}
								initialValues={initialValue}
								enableReinitialize={true}
								//Validation schema
								validationSchema={Yup.object().shape({
									email: Yup.string()
										.email('Please enter valid Email address.')
										.required('Please enter Email.'),
									password: Yup.string()
										.nullable()
										.trim()
										.required('Please enter Password.')
										.min(6, 'Password should be of minimum 6 character.'),
								})}
								//Form submit method
								onSubmit={(values, { setSubmitting }) => {
									// console.log('adf', values);
									this.loginAction(values);
								}}
							>
								{({ errors, values, touched }) => (
									<Form>
										<div className="form-group">
											<label className="form-label" htmlFor="email">
												Email address
											</label>
											<div className="icon-wrapper input-group">
												<Field
													type="email"
													name="email"
													type="email"
													value={values.email}
													className={
														'form-control form-control-lg' +
														(errors.email && touched.email ? ' is-invalid' : '')
													}
												></Field>
												<span className="form-control-icn"></span>
												<ErrorMessage
													name="email"
													component="div"
													className="invalid-feedback"
													style={{ display: 'block' }}
												/>
											</div>
										</div>

										<div className="form-group mb-0">
											<label className="form-label" htmlFor="password">
												Password
											</label>
											<div className="icon-wrapper input-group">
												<Field
													name="password"
													type="password"
													value={values.password}
													className={
														'form-control form-control-lg ' +
														(errors.password && touched.password ? ' is-invalid' : '')
													}
												></Field>
												<span className="form-control-icn"></span>
												<ErrorMessage
													name="password"
													component="div"
													className="invalid-feedback"
													style={{ display: 'block' }}
												/>
											</div>
										</div>

										<div className="form-group text-right">
											{/* <Button variant="link" className='pr-0 font-14 font-500' style={{ color: '#4a90e2' }} onClick={() => this.goToForgotPassword()}>Forgot Password?</Button> */}
										</div>

										<div className="form-group pt-2">
											<Button
												type="submit"
												variant="primary"
												size="lg"
												block
												className="btn-blue btn-medium"
											>
												Login
											</Button>
										</div>

										<div className="form-group pt-4 text-center mb-0">
											{this.state.errorMessage}
										</div>
									</Form>
								)}
							</Formik>
						) : (
							{
								/* <Button variant="link" className='pr-0 font-14 font-500' style={{ color: '#4a90e2' }} onClick={() => this.goToForgotPassword()}> Please Click here to reset your password.</Button> */
							}
						)}
					</div>
				</div>
			</div>
		);
	}
}

//map data to props from redux state
const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.reducer.isAuthenticated,
		loginResponse: state.reducer.loginResponse,
	};
};

//map redux action to props
export default connect(mapStateToProps, { actionLogin })(Login);
