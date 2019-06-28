import React from "react";
import Top from "./Top";
import Look from "./Look";

export default function Header(props) {
	return (
		<div>
			<div className='first-page'>
				<Top color='#00000000' />
				<div className='row-e-content'>
					{/* <p className='project_description'>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged.
					</p> */}
				</div>
			</div>
			<Look />
		</div>
	);
}
