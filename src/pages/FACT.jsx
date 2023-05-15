import API from "../axios/axios"
import styled from "styled-components"
import { useEffect, useState } from "react"
import Welcome from "../components/Welcome"
import { allPortfolio, allTestimonial, allView } from "../axios/url"
import FactDetail from "../components/FactDetail"

export default function FACT() {
	const [testimonials, setTestimonials] = useState(0)
	const [portfolio, setPortfolio] = useState(0)
	const [view, setView] = useState(0)

	useEffect(() => {
		API.get(allTestimonial).then((res) => setTestimonials(res.data.length))
		API.get(allPortfolio).then((res) => setPortfolio(res.data.length))
		API.get(allView).then((res) => setView(res.data.length))
	}, [testimonials, portfolio, view])

	return (
		<Fact id="fact">
			<Welcome page={"This Page Fact"} location={"center"} />
				<Content>
					 <FactDetail number={100} text={"Satisfied clients"} />
					 <FactDetail number={50} text={"Satisfied clients"} />
					 <FactDetail number={70} text={"Satisfied clients"} />
					 <FactDetail number={5} text={"Satisfied clients"} />
				</Content>
		</Fact>
	)
}

const Fact = styled.section`
`

const Content = styled.div`
	top: 50%;
	left: 50%;
	gap: 20px;
	display: grid;
	position: relative;
	transform: translate(-50%, -50%);
	grid-template-columns: repeat(2, 1fr);
	

	div:nth-child(even) {
		border-left: 2px solid var(--global__green);
	}

	@media (max-width: 576px) {
		padding: 0 50px;
		grid-template-columns: repeat(1, 1fr);

		div:nth-child(even) {
			border-left: 0px solid var(--global__green);
		}

		div {
			text-align: center;
			border-bottom: 2px solid var(--global__green);
		}
	}
	/* @media (max-width: 768px) {
		display: block;

		div:nth-child(even) {
			border: none;
			margin: 50px 0;
		}
	} */
`