import { useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { host } from "../../axios/url"
import { USERS } from "../../util/export__user__data"

export default function HEADER () {
    const [menu, setMenu] = useState(false)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	setInterval(() => {
		setWindowWidth(window.innerWidth)
	}, 1000)

    return (
        <Header>
            <About >
				<Profile>
					<h1><NavLink to={`/admin/${USERS?.username}`}>Hello!  {USERS?.username}</NavLink></h1>
				</Profile>

				<NavMenu >
					<ul>
						<li><NavLink to={`/admin/${USERS?.username}/about`}><i className="fas fa-user"></i> <span>About</span></NavLink></li>
						<li><NavLink to={`/admin/${USERS?.username}/fact`}><i className="fa-solid fa-check"></i><span>Fact</span></NavLink></li>
						<li><NavLink to={`/admin/${USERS?.username}/skill`}><i className="fa-solid fa-brain"></i><span>Skill</span></NavLink></li>
						<li><NavLink to={`/admin/${USERS?.username}/resume`}><i className="fas fa-file"></i> <span>Resume</span></NavLink></li>
						<li><NavLink to={`/admin/${USERS?.username}/portfolio`}><i className="fas fa-portrait"></i>Portfolio</NavLink></li>
						<li><NavLink to={`/admin/${USERS?.username}/contact`}><i className="fas fa-envelope"></i>Contact</NavLink></li>
					</ul>
				</NavMenu>

                <DownloadButton>
					<button id="global__btn__bgHas">
                        <a href={`${host}/${USERS?.username}`} target="_black" >Go To Your Website</a>		
                    </button>
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
    overflow-y: auto;
    padding: 25px 15px;
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
	h1 {
		margin: 0;
		padding: 0;
		font-size: 24px;
		font-weight: 600;
		text-align: left;
		color: var(--global__green);
	}

	h1 a {
		text-decoration: none;
		color: var(--global__green);
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

    a {
        color: var(--white);
        text-decoration: none;
    }

    button:hover a {
        color: var(--gray)
    }
`

const About = styled.div``