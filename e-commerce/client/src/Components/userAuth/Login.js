import React, { Component, Fragment } from "react";
import { login } from "../../actions/User";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Top from "../user/Top";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userDetail: {
				userName: "",
				password: ""
			}
			// token: localStorage.getItem("userToken") || ""
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
		if (!this.state.userDetail.userName || !this.state.userDetail.password) {
			return alert("Please enter username and password.");
		}
		e.preventDefault();
		this.props.dispatch(
			login(this.state.userDetail, (response) => {
				if (response) {
					// console.log(response, "asdfghjkl");
					// this.setState({ token: response.user._id });
					localStorage.setItem("userToken", response._id);
					this.props.history.push("/shop");
				}
			})
		);
	};
	render() {
		return (
			<Fragment>
				<div className='form_section'>
					<Top color='9eb2c9' />
					<div className='login_form'>
						<form onSubmit={this.handleSubmit}>
							<h1>Login</h1>
							<label className='userName'>userName</label>
							<input
								type='text'
								autoComplete='off'
								name='userName'
								onChange={this.handleChange}
							/>
							<label className='password'>password</label>
							<input
								type='password'
								autoComplete='off'
								name='password'
								onChange={this.handleChange}
							/>
							<button className='login_btn'>login</button>
							<Link to='/register'>
								<p>signUp</p>
							</Link>
						</form>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default connect(null)(Login);
