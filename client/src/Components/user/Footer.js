import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className='Footer_section'>
			<section className='footer'>
				<div className='left_section'>
					<p>Rakkar Village, Sidhbari </p>
					<p>Kangra District</p>
					<p>Himachal Pradesh</p>
				</div>
				<div className='right_section'>
					<p>
						<Link to='#'>
							<i className='fab fa-facebook-f' />
						</Link>
					</p>
					<p>
						<Link to='#'>
							<i className='fab fa-twitter' />
						</Link>
					</p>
				</div>
			</section>
			{/* <p className='copy-right'>
				© 2019 Shopsite. All Rights Reserved | Design by Ashish
			</p> */}
		</div>
	);
};

export default Footer;
