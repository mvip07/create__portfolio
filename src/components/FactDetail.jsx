import { useState } from "react"
import styled from "styled-components"

export default function FactDetail({ number, text }) {

    const [count, setCount] = useState(0)

    if (number != count) setTimeout (() => setCount(count + 1), 10)

    return (
        <Box>
            <h3 id="title">{count} +</h3>
            <p id="text">{text}</p>
        </Box>
    )
}

const Box = styled.div`
	width: 100%;
  	text-align: center;	

	#title {
		font-size: 48px;
		font-weight: 600;
		line-height: 48px;
		font-style: normal;
		color: var(--global__green);
	}

	#text {
		font-size: 28px;
		font-weight: 400;
		margin-top: 24px;
		line-height: 28px;
		font-style: normal;
		color: var(--black);
		margin-bottom: 20px;
	}
`