import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Profile from '../../components/pages/profile/Profile';
import About from '../../components/pages/about/About';
import Skills from '../../components/pages/skills/Skills';
import Experiences from '../../components/pages/experiences/Experiences';
import Certifications from '../../components/pages/certifications/Certifications';
import Portfolios from '../../components/pages/portfolios/Portfolios';
import Education from '../../components/pages/education/Education';
import Footer from '../../components/pages/Footer'

export default class Home extends Component {
	render() {
		return (
			<section>
				<Navbar />
				<div className='container'>
					<div className='row'>
						<div className='col s12 m4 l3'>
							<Profile />
						</div>
						<div className='col s12 m8 l9'>
							<About />
							<Skills />
							<Experiences />
							<Portfolios />
							<Education/>
							<Certifications/>
						</div>
					</div>
				</div>
				<Footer/>
			</section>
		);
	}
}
