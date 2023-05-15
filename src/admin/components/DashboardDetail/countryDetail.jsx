import styled from "styled-components"

export default function CountryDetail({ i }) {
    return (
        <Container>
            <div id="country__about">
                <img id="country__image" src={i?.flags?.svg} alt="" />
                <h4 id="country__name">{i?.common}</h4>
            </div>
            <div id="prograss">
                <div id="prograss__number" style={{ "width": `${i?.visitTotal}%` }}></div>
                <p id="percentage">{i?.visitTotal}% </p>
            </div>
        </Container>
    )
}

const Container = styled.div`
    gap: 45px;
    width: 100%;
    padding: 5px;
    display: grid;
    margin: 5px 0;
    text-align: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    
    #country__about {
        gap: 10px;
        display: flex;
        align-items: center;
    }

    #country__image {
        margin: 0;
        width: 20px;
        height: 14px;
        border-radius: 2px;
    }

    #country__image:hover {
        margin-right: 15px;
        transform: scale(3);
    }

    #country__name {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: var(--global__green);
    }

    #prograss {
        width: 100%;
        height: 20px;
        position: relative;
        border-radius: 20px;
        background: var(--white);
        border: 0.1px solid var(--global__green);
    }

    #prograss__number {
        height: 100%;
        border-radius: 20px;
        background: var(--global__green);
    }

    #percentage {
        top: 0;
        left: -55px;
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        position: absolute;
        color: var(--global__green);
    }
`