import styled from "styled-components"

export default function Welcome ({page, location}) {
    return (
        <Container id="welcome__page" location={location} >{page}</Container>
    )
}

const Container = styled.span`
    top: 20px;
    display: block;
    font-size: 20px;
    padding: 4px 2px;
    font-weight: 500;
    line-height: 145%;
    position: absolute;
    font-style: normal;
    border-radius: 50%;
    color: var(--global__green);
    border: 1px solid var(--global__green);
    ${location => location.location == "left" ? `left: 50px;` : location.location == "right" ? `right: 50px;` : "left: 50%; transform: translate(-50%);"};
`