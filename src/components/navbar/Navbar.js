import React, { Component } from 'react';
//import 'materialize-css/dist/css/materialize.min.css';
import { HashLink as Link } from 'react-router-hash-link';
export default class Navbar extends Component {
	render() {
		const scrollWithOffset = (el, offset) => {
			const elementPosition = el.offsetTop - offset;
			window.scroll({
			  top: elementPosition,
			  left: 0,
			  behavior: "smooth"
			});}
		return (
			<div >
				<div className='navbar-fixed'>
				<nav className='light-blue darken-2'>
					<div className='container'>
						<div className='nav-wrapper'>
							<a className='brand-logo' href='/'>Mubarak</a>
							<Link data-target='side-nav' className='sidenav-trigger'>
								<i className='material-icons'>menu</i>
							</Link>
							<ul className='right hide-on-med-and-down '>
								<li>
									<Link to='/#skills'  scroll={el => scrollWithOffset(el, 50)}>
										Skills
									</Link>
								</li>
								<li>
									<Link to='/#experiences' scroll={el => scrollWithOffset(el, 50)}>
										Experiences
									</Link>
								</li>
								
								<li>
									<Link  to='/#portfolios' scroll={el => scrollWithOffset(el, 50)}>
										Portfolios
									</Link>
								</li>
								<li>
									<Link to='/#education' scroll={el => scrollWithOffset(el, 50)}>
										Education
									</Link>
								</li>
								<li>
									<Link to='/#certifications' scroll={el => scrollWithOffset(el, 50)}>
										 Certifications
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				</div>
				<ul className='sidenav' id='side-nav'>
					<li>
						<a className='brand-logo' href='/'><i class="fa-solid fa-house"></i> Home</a>
					</li>
					<li>
						<Link to='/#skills' scroll={el => scrollWithOffset(el, 50)}>
							<i class='fas fa-copy'></i> Skills
						</Link>
					</li>
					<li>
						<Link to='/#experiences' scroll={el => scrollWithOffset(el, 50)}>
							<i class="fa-solid fa-user-tie"></i> Experiences
						</Link>
					</li>
					<li>
						<Link to='/#portfolios' scroll={el => scrollWithOffset(el, 50)}>
						<i class='fas fa-address-card'></i> Portfolios
						</Link>
					</li>
					<li>
						<Link to='/#education' scroll={el => scrollWithOffset(el, 50)}>
							<i class='fas fa-graduation-cap'></i> Education
						</Link>
					</li>
					<li>
						<Link to='/#certifications' scroll={el => scrollWithOffset(el, 50)}>
						<i class="fa-sharp fa-solid fa-certificate"></i> Certifications
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}
