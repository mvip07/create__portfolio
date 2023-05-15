import styled from "styled-components"


export default function Rain () {

    const color = ["#F9F047", "#0DB760", "#0047FF", "#24FF00", "#4D4D4D", "#FF0000"]
    
    function moment () {
        const snow = document.createElement("div")
        const rains = document.querySelector(".rains")
        snow.classList.add("rain")
    
        // snow.style.opacity = Math.random()
        snow.style.left = Math.floor(Math.random() * 100) + "%"
        snow.style.animationDuration = Math.random() * 3 + 2 + "s"
        snow.style.background = color[Math.floor(Math.random() * color.length)]
        rains.append(snow)
    
        setInterval(() => {
            snow.remove()
        }, 2000)
    
    }

    setInterval(() => moment(), 700)
    
    return (
        <Content className="rains"></Content>
    )
}

const Content = styled.div`
    .rain {
        top: -20px;
        width: 10px;
        height: 10px;
        z-index: -100;
        position: fixed;
        border-radius: 50%;
        animation: fall 10s linear forwards;

        @keyframes fall {
            to {
                transform: translateY(100vh);
            }
        }
    }
`