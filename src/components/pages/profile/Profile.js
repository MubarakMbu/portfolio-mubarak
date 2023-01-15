import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Profile() {
	return (
		<div>
			<div className='card'>
				<div className='card-image'>
					<img className='activator' src={process.env.PUBLIC_URL + '/images/mubarak.jpg'} alt='John Doe' />
					<Link className='btn-floating halfway-fab waves-effect waves-light red'>
						<i className='material-icons activator'>more_vert</i>
					</Link>
				</div>
				<div className='card-content'>
					<span className='card-title activator grey-text text-darken-4' style={{margin: '3%'}}>
					Software Developer
					</span>
					<p style={{margin: '7%'}}>Full Stack Developer</p>
				</div>
				<div className='card-reveal'>
					<span className='card-title grey-text text-darken-4'>
						Follow Me
						<i className='material-icons right'>close</i>
					</span>
					<p className='flex-container'>
						<a href='https://www.linkedin.com/in/mubarak-h/'><i className='fab fab__icon fa-linkedin grey-text text-darken-4 social_style'></i></a>
						<a href='https://www.instagram.com/mubarak_mbu/'><i className='fab fab__icon fa-instagram grey-text text-darken-4 social_style'></i></a>
						<a href='https://github.com/MubarakMbu'><i className='fab fab__icon fa-github grey-text text-darken-4 social_style'></i></a>
					</p>
				</div>
			</div>
		</div>
	);
}
