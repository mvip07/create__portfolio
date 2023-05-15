import { useState } from "react";
import API from "../axios/axios"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

export default function REGISTER () {

    const [register, setRegister] = useState({
        email: "",
        rol: "user",
        block: false,
        username: "",
        password: "",
        confirm__password: "",
        device: [navigator?.userAgent],
    })

    function handle (e) {
        setRegister({...register, [e.target.name]: e.target.value})
    }

    function Submit () {
        API.post("/user/register", register)
            .then(res => console.log(res))
    }


    return (
        <Register>
            <Title>
                <h2>Set up your account</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
            </Title>
            <InputGroup>
                <input onChange={(e) => handle(e)} type="email" name="email" placeholder="Enter your Email" />
                <input onChange={(e) => handle(e)} type="text" name="username" placeholder="Enter your Username" />
                <input onChange={(e) => handle(e)} type="password" name="password" placeholder="Enter your Password" />
                <input onChange={(e) => handle(e)} type="password" name="confirm__password" placeholder="Enter your Confirm Password" />
            </InputGroup>

            <ButtonGroup>
                <button id="global__btn__bgHas">Back</button>
                <button id="global__btn__bgHas" onClick={() => Submit()}>Continue</button>
            </ButtonGroup>

            <BackSignIn>
                <p>Already have an account <NavLink to="/login">Sign In </NavLink></p>
            </BackSignIn>
        </Register>
    )
}

const Register = styled.section`
    width: 500px;
    height: 100%;
    margin: 50px auto;
    border-radius: 20px;
    background: var(--white);
    border: 2px solid var(--global__green);
`

const Title = styled.div`
    text-align: center;

    h2 {
        margin: 10px 0;
        font-size: 40px;
        font-weight: 600;
        line-height: 54px;
        font-style: normal;
        color: var(--global__green);
    }
    
    p {
        margin: 14px 0;
        font-size: 16px;
        font-weight: 500;
        line-height: 18px;
        color: var(--gray);
        font-style: normal;
        letter-spacing: 0.005em;
    }
`

const InputGroup = styled.div`
    input {
        width: 100%;
        margin: 12px 0;
        padding: 16px 24px;
        border-radius: 8px;
        background: var(--white);
        border: 0.3px solid var(--gray);  
        
        &::placeholder {
            font-size: 16px;
            font-weight: 400;
            color: var(--gray);
            font-style: normal;
            letter-spacing: 0.1px;
        }

        &:focus {
            outline: none;
            border: 2px solid var(--global__green);
        }
    }
`

const ButtonGroup = styled.div`
    gap: 24px;
    display: flex;
    margin-bottom: 15px;
    align-items: center;
    justify-content: space-evenly;

    button {
        width: 100%;
    }
`

const BackSignIn = styled.div`
    border-top: 1.2px solid var(--global__green);

    p {
        margin: 14px 0;
        font-size: 16px;
        font-weight: 500;
        line-height: 18px;
        color: var(--gray);
        font-style: normal;
        letter-spacing: 0.005em;

        a {
            color: blue;
            text-decoration: none;
        }
    }
`