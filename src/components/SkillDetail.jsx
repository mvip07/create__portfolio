import { useState } from "react"
import styled from "styled-components"

export default function SKILL_DETAIL({ progress__value, progress__text }) {
    const [count, setCount] = useState(0)

    function k () {
        if (progress__value != count) setTimeout(() => setCount(count + 1), 50)

        return count
    }

    return (
        <Circle>
            <Outer>
                <Inner>
                    <Number>
                        {k()} %
                    </Number>
                </Inner>

                <Title>
                    {progress__text}
                </Title>
            </Outer>

            <Svg progress__value={progress__value}>
                <circle 
                    cx="75" cy="75" r="65" 
                    strokeLinecap="round"
                    style={{
                        "strokeDashoffset": 410 - 410 * (k() / 100)
                    }}
                />
            </Svg>
        </Circle>
    )
}

const Circle = styled.div`
    width: 150px;
    height: 150px;
    margin: 40px 0;
    position: relative;
`

const Outer = styled.div`
    width: 150px;
    height: 150px;
    padding: 20px;
    border-radius: 50%;
    box-shadow:  6px 10px -1px rgba(0, 0, 0, 0.15),
        -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
`

const Inner = styled.div`
    width: 110px;
    height: 110px;
    text-align: center;
    border-radius: 50%;
    box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
        inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
        -0.5px -0.5px 0px rgba(255, 255, 255, 1),
        0px 12px 10px -10px rgba(0, 0, 0, 0.05),
        0.5px 0.5px 0px rgba(0, 0, 0, 0.15);
`

const Number = styled.div`
    font-size: 30px;
    font-weight: 600;
    font-style: normal;
    text-align: center;
    color: var(--global__green);
`

const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
    font-weight: 600;
    font-style: normal;
    text-align: center;
    color: var(--global__green);
`

const Svg = styled.svg`
    top: 0;
    left: 0;
    width: 150px;
    position: absolute;

    circle {
        fill: none;
        stroke-width: 20px;
        stroke-dasharray: 410;
        stroke-dashoffset: -410;
        stroke: var(--global__green);
    }
`