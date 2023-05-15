import API from "../axios/axios"
import { useEffect, useState } from "react"
import { allPortfolio } from "../axios/url"
import PortfolioDetail from "../components/PortfolioDetail"
import styled from "styled-components"
import Welcome from "../components/Welcome"

export default function PORTFOLIO () {
    const [postfolio, setPortfolio] = useState([])
    useEffect(() => {
        API.get(allPortfolio).then(res => setPortfolio(res.data))
    }, [])

    let active = 0
    let items = document.body.querySelectorAll(".slider .item")

    function loadShow () {
        let stt = 0;
        items[active].style.zIndex = 1
        items[active].style.opacity = 1
        items[active].style.filter = "none"
        items[active].style.transform = "none"

        for (let i = active + 1; i < items.length; i++) {
            stt += 1
            items[i].style.zIndex = -stt
            items[i].style.filter = 'blur(5px)'
            items[i].style.opacity = stt > 2 ? 0 : 0.6 
            items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`
        }
        stt--
        for (let i = active - 1; i >= 0; i--) {
            stt++
            items[i].style.zIndex = -stt
            items[i].style.filter = 'blur(5px)'
            items[i].style.opacity = stt > 2 ? 0 : 0.6 
            items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`
        }
    }

    function Next () {
        active = active + 1 < items.length ? active + 1 : active
        loadShow()
    }

    function Back () {
        active = active - 1 >= 0 ? active - 1 : active
        loadShow()
    }

    return (
        <Portfolio id="portfolio">
            <Welcome page={"This Page Portfolio"} location={"left"} />
            <Container>
                <Slider className="slider">
                    {
                        postfolio.map((data, index) => (
                                <PortfolioDetail data={data} porLength={postfolio.length} index={index} key={index}  />
                            )
                        )
                    }
                </Slider> 

                <NextPrevButtons>
                    <button id="global__btn__bgNone" onClick={() => Back()}>
                        <i className="fa-solid fa-left-long"></i> Back
                    </button>
                    <button id="global__btn__bgNone" onClick={() => Next()}>
                        Next <i className="fa-solid fa-right-long"></i>
                    </button>
                </NextPrevButtons>
            </Container>
        </Portfolio>
    )
}

const Portfolio = styled.section``

const Container = styled.div`
    margin-top: 100px;
`

const Slider = styled.div`
    top: 0;
    left: 50%;
    width: 100%;
    height: 500px;
    padding: 20px 0;
    position: relative;
    transform: translate(-50%, 0);
`

const NextPrevButtons = styled.div`
    gap: 100px;
    display: flex;
    margin-top: 20px;
    align-items: center;
    justify-content: center;

    button {
        width: 200px;

        i {
            padding: 0 10px;
        }
    }
`