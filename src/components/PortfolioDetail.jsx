import styled from "styled-components"

export default function PortfolioDetail ({ data, index, porLength }) {
    return (
        <Item className="item">
            <Top>
                <img src={`${data?.image}`} alt="portfolio"/>
                <span>{index + 1} / {porLength}</span>
            </Top>
            <Text>
                <h1>Slider 1</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, vitae!</p>
            </Text>

            <LinkButtons>
                <a href={data?.githubUrl} target="_block">
                    <button id="global__btn__bgHas">
                        <i className="fa-brands fa-github"></i> Click    
                    </button>
                </a>
                <a href={data?.serverUrl} target="_block">
                    <button id="global__btn__bgHas">
                        <i className="fa-solid fa-link"></i>Click
                    </button>
                </a>
            </LinkButtons>
        </Item>
    )
}

const Item = styled.div`
    top: 0px;
    width: 300px;
    height: 100%;
    transition: .5s;
    position: absolute;
    text-align: center;
    border-radius: 20px;
    left: calc(50% - 150px);
    background: var(--white);
    color: var(--global__green);
    box-shadow: var(--global__shadow);
`

const Top = styled.div`
    img {
        width: 100%;
        height: 200px;
        border-radius: 20px 20px 0 0;
    }

    span {
        top: 0px;
        right: 0px;
        width: 60px;
        height: 50px;
        padding: 16px 0;
        font-size: 13px;
        font-weight: 500;
        text-align: center;
        font-style: normal;
        position: absolute;
        transition: .7s all;
        color: var(--white);
        border-radius: 0 20px 0 0;
        background: var(--global__green);
    }
`

const Text = styled.div``

const LinkButtons = styled.div`
    bottom: 0;
    width: 100%;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: space-between;

    a {
        width: 100%;
        color: var(--global__green);
    }

    button {
        width: 100%;

        i {
            padding: 0 8px;
        }
    }

    a:first-child {
        button {
            border-radius: 0 0 0 20px !important;
            border-right: 1px solid var(--white) !important;
        }
    }

    a:last-child {
        button {
            border-radius: 0 0 20px 0 !important;
            border-left: 1px solid var(--white) !important;
        }
    }
`