import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import styled from "styled-components"
import API from "../axios/axios"

export default function LOGIN () {

    const NAVIGATE = useNavigate()
    const [seePassword, setSeePassword] = useState(true)
    const [login, setLogin] = useState({email: "", password: ""})

    function handle (e) {
        setLogin({...login, [e.target.name]: e.target.value})
    }

    function Submit () {
        API.post("/user/login", login)
            .then(res => localStorage.setItem("users__data", JSON.stringify( res.data)))
            .catch(err => console.log(err))
    }

    return (
        <Login>
            <Title>
                <h2>Log In</h2>
            </Title>

            <InputGroup>
                <Input>
                    <label htmlFor="email">Email</label>
                    <div id="pos__relative">
                        <input type="email" id="email" name="email" placeholder="Enter your Email" onChange={(e) => handle(e)}/>
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                </Input>

                <Input>
                    <label htmlFor="password">Password</label>
                    <div id="pos__relative">
                        <input type={`${seePassword === true ? "text" : "password"}`} id="password" name="password" placeholder="Enter your Password" onChange={(e) => handle(e)}/>
                        {
                            seePassword === false ? 
                                <i className="fa-solid fa-lock" onClick={() => setSeePassword(true)} /> 
                                    :
                                <i className="fa-solid fa-lock-open" onClick={() => setSeePassword(false)} />
                        }
                        
                    </div>
                </Input>
            </InputGroup>

            <ForgetPassword>
                <p><NavLink to="/forget/password">Forget Password ?</NavLink></p>
            </ForgetPassword>

            <ButtonGroup>
                <button id="global__btn__bgHas" onClick={() => NAVIGATE("/")} >Back</button>
                <button id="global__btn__bgHas" onClick={() => Submit()}>Continue</button>
            </ButtonGroup>

            <BackSignIn>
                <p>Do not an have account <NavLink to="/register">Sign In </NavLink></p>
            </BackSignIn>
        </Login>
    )
}

const Login = styled.section`
    width: 500px;
    height: 100%;
    margin: 100px auto;
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
`

const InputGroup = styled.div``

const Input = styled.div`
    width: 100%;
    margin: 10px 0;


    #pos__relative {
        position: relative;

        input {
            width: 100%;
            margin: 6px 0;
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
    }

    label {
        margin: 14px 0;
        font-size: 16px;
        font-weight: 500;
        text-align: right;
        line-height: 18px;
        color: var(--gray);
        font-style: normal;
        letter-spacing: 0.005em;
    }

    i {
        top: 20px;
        left: 90%;
        z-index: 1;
        font-size: 20px;
        position: absolute;
    }
   
`

const ForgetPassword = styled.div`
    p {
        margin: 14px 0;
        font-size: 16px;
        font-weight: 500;
        text-align: right;
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
        text-align: center;
        color: var(--gray);
        font-style: normal;
        letter-spacing: 0.005em;

        a {
            color: blue;
            text-decoration: none;
        }
    }
`