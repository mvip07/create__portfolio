import API from "../axios/axios"
import styled from "styled-components"
import { allAbout } from "../axios/url"
import { useState, useEffect } from "react"

import Rain from "../components/Rain"

import FACT from "./FACT"
import SKILL from "./SKILL"
import ABOUT from "./ABOUT"
import HEADER from "./HEADER"
import RESUME from "./RESUME"
import CONTACT from "./CONTACT"
import PORTFOLIO from "./PORTFOLIO"
import TESTIMONIAL from "./TESTIMONIALS"


export default function MAIN () {
    const [about, setAbout] = useState([])
    const [aboutReq, setAboutReq] = useState(false)
    useEffect(() => {
        API.get(allAbout).then(res => {
            setAbout(...res.data)
            setAboutReq(true)
        })

    }, [])

    const [onlineKnow, setOnline] = useState(false)
    useEffect(() => setOnline(navigator.onLine), [onlineKnow])
    return (
        <Main>
            <Rain />
            <HEADER user={about} />
            <ABOUT user={about} />
            <FACT />
            <SKILL />
            <RESUME />
            <PORTFOLIO />
            <TESTIMONIAL />
            <CONTACT /> 
           
        </Main>
    )
}

const Main = styled.div`
    height: 100vh;
    overflow-y: scroll;
    margin-left: 300px;
    scroll-snap-type: y mandatory;

    @media (max-width: 1400px) {
		margin-left: 0;
	}
`