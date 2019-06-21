import React, { Component, Fragment } from "react";
import { registerSubmit } from "../../actions/User";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Top from "../user/Top";

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userDetail: {
				userName: "",
				userEmail: "",
				userContactNo: "",
				password: ""
			}
		};
	}

	handleChange = (e) => {
		this.setState({
			userDetail: {
				...this.state.userDetail,
				[e.target.name]: e.target.value
			}
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.dispatch(
			registerSubmit(this.state.userDetail, (success) => {
				if (success) {
					this.props.history.push("/login");
				}
			})
		);
	};
	render() {
		return (
			<Fragment>
				<div className='signUp_section'>
					<Top />
					<div className='signUp_form'>
						<h1>signUp</h1>
						<form onSubmit={this.handleSubmit}>
							<label for='userName'>userName</label>
							<input
								type='text'
								autoComplete='off'
								name='userName'
								onChange={this.handleChange}
							/>
							<label for='email'>email</label>
							<input
								type='text'
								autoComplete='off'
								name='userEmail'
								onChange={this.handleChange}
							/>
							<label for='contractNo'>contractNo</label>
							<input
								type='tel'
								autoComplete='off'
								name='userContactNo'
								onChange={this.handleChange}
							/>
							<label for='password'>password</label>
							<input
								autoComplete='off'
								type='password'
								name='password'
								onChange={this.handleChange}
							/>
							<button className='signUp_btn'>signUp</button>
							<Link to='/login'>
								<p>login</p>
							</Link>
						</form>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default connect(null)(Register);
