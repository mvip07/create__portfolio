import styled from "styled-components"
import Welcome from "../components/Welcome"

export default function ABOUT({ user }) {
    return (
        <About id="about">
            <Welcome page={"This Page About"} location={"left"} />

            <AboutFlex id="about__flex">
                <AboutUser>
                    <h1 id="title">I'm <span id="text__green">{user?.fullName}</span> <br /> {user?.job}</h1>
                    <p id="information">{user?.description}</p>

                    <AboutUserMore className="row">
                        <ul>
                            <li><i className="fa-solid fa-cake-candles"></i> <strong>Birthday:</strong> {user?.birthday}</li>
                            <li><i className="fa-solid fa-briefcase"></i> <strong>Job:</strong> {user?.job}</li>
                            <li><i className="fa-solid fa-phone"></i><strong>Phone:</strong> {user?.phone}</li>
                            <li><i className="fa-solid fa-city"></i> <strong>City:</strong> {user?.city}</li>
                            <li><i className="fa-solid fa-people-group"></i> <strong>Age:</strong> {user?.age}</li>
                            <li><i className="fa-solid fa-bars-progress"></i> <strong>Degree:</strong> {user?.degree}</li>
                            <li><i className="fa-solid fa-envelope"></i> <strong>Email:</strong> {user?.email}</li>
                            <li><i className="fa-solid fa-face-smile"></i> <strong>Interesting:</strong> {user?.interesting}</li>
                        </ul>
                    </AboutUserMore>
                </AboutUser>

                <AboutImage>
                    <img id="img" src={user?.image} alt="" />
                    <div id="bg__green"></div>
                </AboutImage>
            </AboutFlex>
        </About>
    )
}

const About = styled.section`
`

const AboutFlex = styled.div`
	gap: 50px;
    width: 100%;
    height: 100%;
  	display: flex;
  	align-items: center;
  	justify-content: space-between;

	@media (max-width: 1024px) {
        display: block;
        margin-top: 100px;
        text-align: center;
	}

	@media (max-width: 992px) {
	
	}

	@media (max-width: 600px) {
	}
`

const AboutUser = styled.div`
	#title {
		font-size: 58px;
		font-weight: 600;
		line-height: 70px;
		font-style: normal;
		color: var(--black);
	}

	#text__green {
		color: var(--global__green);
	}

	#information {
		font-size: 16px;
		font-weight: 400;
		line-height: 150%;
		font-style: normal;
		color: var(--gray);
	}

	@media (max-width: 1200px) {
		#title {
			font-size: 35px;
		}
	}

	@media (max-width: 992px) {
		margin: 20px 0;
		text-align: center;
	}

	@media (max-width: 420px) {
		#title {
			font-size: 25px;
		}
	}

`

const AboutUserMore = styled.div`
    margin-top: 20px;
    
    ul {
        list-style: none;
    }

    ul li {
        padding-bottom: 10px;
    }

    ul i {
        font-size: 20px;
        padding-right: 2px;
        color: var(--global__green);
    }

    ul strong {
        color: var(--global__green);
    }
`

const AboutImage = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 100px 0;
    background: var(--global__green);

	img {
		width: 500px;
		height: 500px;
        border-radius: 100px 0;
	}

    @media (max-width: 1024px) {
        top: 0%;
        left: 50%;
        position: relative;
        transform: translate(-50%, 0%);

        img {
            border-radius: 0;
            text-align: center;
        }
    }

    @media (max-width: 576px) {
        width: 100%;

        img {
            width: 100%;
        }
    }
`