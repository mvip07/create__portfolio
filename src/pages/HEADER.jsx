import { useState } from "react"
import styled from "styled-components"

export default function HEADER({ user }) {
	const [menu, setMenu] = useState(false)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	setInterval(() => {
		setWindowWidth(window.innerWidth)
	}, 1000)

	return (
		<Header id="header">
			<About >
				<Profile>
					<img src={user?.image} alt="User Image" />
					<h1><a href="/">{user?.fullName}</a></h1>
					<SocialIcon >
						<a target="blank" href={user?.telegramLink} ><i className="fab fa-telegram-plane"></i></a>
						<a target="blank" href={user?.facabookLink} ><i className="fab fa-facebook-f"></i></a>
						<a target="blank" href={user?.instagramLink}><i className="fab fa-instagram"></i></a>
						<a target="blank" href={user?.linkedinLink} ><i className="fab fa-linkedin-in"></i></a>
					</SocialIcon>
				</Profile>

				<NavMenu >
					<ul>
						<li><a href="#about"><i className="fas fa-user"></i> <span>About</span></a></li>
						<li><a href="#fact"><i className="fa-solid fa-check"></i><span>Fact</span></a></li>
						<li><a href="#skill"><i className="fa-solid fa-brain"></i><span>Skill</span></a></li>
						<li><a href="#resume"><i className="fas fa-file"></i> <span>Resume</span></a></li>
						<li><a href="#portfolio"><i className="fas fa-portrait"></i>Portfolio</a></li>
						<li><a href="#contact"><i className="fas fa-envelope"></i>Contact</a></li>
					</ul>
				</NavMenu>

				<DownloadButton>
					<button id="global__btn__bgHas">Download CV</button>
				</DownloadButton>

				<Toggle>
					<button type="button" className="mobile-nav-toggle d-xl-none"
						onClick={() => setMenu(menu === false ? true : false)}
					>
						{
							menu === false ?
								<i className="fas fa-bars"></i>
								:
								<i className="fas fa-times"></i>
						}
					</button>
				</Toggle>
			</About>
		</Header>
	)
}

const Header = styled.header`
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    z-index: 1000;
	position: fixed;
    padding: 0 15px;
    overflow-y: auto;
    transition: all 0.5s;
    background: var(--white);
	box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
        inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
        -0.5px -0.5px 0px rgba(255, 255, 255, 1),
        0px 12px 10px -10px rgba(0, 0, 0, 0.05),
        0.5px 0.5px 0px rgba(0, 0, 0, 0.15);

	@media (max-width: 1400px) {
		width: 0;
		padding: 0;
	}
`

const Profile = styled.div`
	img {
		width: 120px;
		height: 120px;
		display: block;
		margin: 15px auto;
		border-radius: 50%;
		border: 8px solid var(--global__green);
  	}

	h1 {
		margin: 0;
		padding: 0;
		font-size: 24px;
		font-weight: 600;
		text-align-last: center;
		color: var(--global__green);
	}

	h1 a,
	h1 a:hover {
		text-decoration: none;
		color: var(--global__green);
	}
`

const SocialIcon = styled.div`
	display:  flex;
	margin-top: 25px;
	align-items: center;
	justify-content: center;

	a {
		width: 36px;
		height: 36px;
		line-height: 1;
		padding: 8px 0;
		font-size: 18px;
		transition: 0.3s;
		margin-right: 4px;
		border-radius: 50%;
		color: var(--white);
		text-align: center;
		display: inline-block;
		background: var(--global__green);
  	}

	a:hover {
		text-decoration: none;
		background: var(--white);
		color: var(--global__green);
		border: 1px solid var(--global__green);
	}
`

const NavMenu = styled.div`
    padding-top: 30px;
  
	ul li {
		list-style: none;
		position: relative;
		white-space: nowrap;
	}
  
	ul li a {
		display: flex;
		font-size: 15px;
		transition: 0.3s;
		margin-bottom: 8px;
		padding: 12px 15px;
		align-items: center;
		text-decoration: none;
		color: var(--global__green);
	}
	
	ul li a i {
		font-size: 20px;
		padding-right: 8px;
		color: var(--global__green);
	}
  
    ul li a:hover {
		color: var(--white);
		border-radius: 100px;
		background: var(--global__green);
  	}

	a:hover i {
		color: var(--white);
	}  
`

const Toggle = styled.div`
	display:  none;

	.mobile-nav-toggle {
		top: 15px;
		border: 0;
		right: 15px;
		z-index: 10000;
		position: fixed;
		font-size: 24px;
		background: none;
	}
  
	.mobile-nav-toggle i {
		width: 40px;
		height: 40px;
		color: var(--global__green);
	}
  
	.mobile-nav-active #header {
		left: 0;
	}

	@media (max-width: 1400px) {
		display: block;
	}
`

const DownloadButton = styled.div`
	left: 0;
	bottom: 0;
	position: absolute;
	width: 100% !important;
	
	button {
		width: 100% !important;
		border-radius: 0 !important;
	}
`

const About = styled.div``