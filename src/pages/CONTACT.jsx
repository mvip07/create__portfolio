import { useState } from "react"
import API from "../axios/axios"
import { comeimages, send } from "../axios/firebaseSend"
import { createTestimonial } from "../axios/url"
import styled from "styled-components"
import Welcome from "../components/Welcome"

export default function CONTACT() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [image, setImage] = useState("")
    const [validates, setValiDates] = useState(0)

    function TestimonialSubmit() {
        send(image)
        setTimeout(() => {
            if (
                name.trim() !== "" &&
                email.trim() !== "" &&
                subject.trim() !== "" &&
                message.trim() !== ""
            ) {
                API.post(createTestimonial, {
                    "name": name,
                    "email": email,
                    "subject": subject,
                    "message": message,
                    "image": image === "" ? null : comeimages,
                }).then(res => {
                    alert("Sucessfull")
                }).catch(err => alert("Error"))
            }
        }, 3000)
    }

    return (
        <Contact id="contact">
            <Welcome page={"This Page Contact"} location={"center"}/>
            <Title>
                <h2 id="contact__title" >Let’s Discuss Your Project</h2>
                <p id="contact__text">Let’s make something new, different and more meaningful or make thing more visual or conceptual</p>
            </Title>
            <AboutInformation>
                <Call>
                    <CallBox>
                        <Icon>
                            <i className="fa-solid fa-phone"></i>
                        </Icon>
                        <Name>
                            <h4 id="call__name">Call me</h4>
                            <p id="call__value">+998 91 166 21 25</p>
                        </Name>
                    </CallBox>
                    <CallBox>
                        <Icon>
                            <i className="fa-solid fa-envelope"></i>
                        </Icon>
                        <Name>
                            <h4 id="call__name">Email me</h4>
                            <p id="call__value">Ozodov Mirafzal</p>
                        </Name>
                    </CallBox>
                    <CallBox>
                        <Icon>
                            <i className="fa-solid fa-location-dot"></i>
                        </Icon>
                        <Name>
                            <h4 id="call__name">Address</h4>
                            <p id="call__value">Zakigonj, Sylhet, Bangladesh.</p>
                        </Name>
                    </CallBox>
                </Call>
                <InputGroup>
                    <FlexInput>
                            <input type="text" placeholder="Full name" />
                            <input type="text" placeholder="Your email" />
                    </FlexInput>
                    <FlexInput>
                            <input type="phone" placeholder="Phone Number" />
                            <input type="text" placeholder="Your Job" />
                    </FlexInput>

                    <BlockTextarea>
                        <textarea placeholder="Message"></textarea>
                    </BlockTextarea>

                    <Buttons>
                        <UploadImage>
                            <input type="file" id="file" />

                            <label htmlFor="file">
                                <i className="fa-solid fa-upload"></i> 
                            </label>
                        </UploadImage>
                        <SendButton>
                            <button>Submit Message</button>
                        </SendButton>
                    </Buttons>
                    
                </InputGroup>
            </AboutInformation>
        </Contact>
    )
}

const Contact = styled.section``

const Title = styled.div`
    margin-top: 100px;
    text-align: center;

    #contact__title {
        font-size: 40px;
        font-weight: 600;
        line-height: 54px;
        font-style: normal;
        margin: 10px 0 24px 0;
        color: var(--global__green);
    }
`

const AboutInformation = styled.div`
    gap: 54px;
    display: flex;
    margin-bottom: 10px;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 992px) {
        display: block;
    }
`

const Call = styled.div`
    margin-top: 65px;
`

const CallBox = styled.div`
    gap: 18px;
    display: flex;
    margin: 36px 0;
    align-items: center;
`

const Icon = styled.div`
    width: 56px;
    height: 56px;
    padding: 15px 0;
    text-align: center;
    color: var(--white);
    border-radius: 12px;
    background-color: var(--global__green);

    i {
        font-size: 23px;
    }
`

const Name = styled.div`
    #call__name {
        font-size: 16px;
        font-weight: 400;
        color: #92929D;
        line-height: 14px;
        font-style: normal;
        margin-bottom: 16px;
        font-family: 'Inter';
    }

    #call__value {
        font-size: 16px;
        font-weight: 500;
        line-height: 18px;
        color: var(--gray);
        font-style: normal;
        font-family: 'Inter';
        letter-spacing: 0.005em;
    }

`

const InputGroup = styled.div`
    margin-top: 65px;
/* #92929D */
    input::placeholder, textarea::placeholder {
        font-size: 16px;
        font-weight: 400;
        color: var(--gray);
        font-style: normal;
        letter-spacing: 0.1px;
    }
`

const FlexInput = styled.div`
    gap: 24px;
    display: flex;
    margin: 24px 0;
    align-items: center;
    justify-content: space-between;
    /* #BEC0BF */
    input, textarea {
        width: 100%;
        padding: 16px 24px;
        border-radius: 8px;
        background: var(--white);
        border: 0.3px solid var(--gray);
    }

    input:focus {
        outline: none;
        border: 2px solid var(--global__green);
    }

    @media (max-width: 576px) {
        display: block;

        input {
            margin: 12px 0;
        }
    }
`

const BlockTextarea = styled.div`
    textarea {
        width: 100%;
        resize: none;
        height: 170px;
        padding: 24px;
        border-radius: 8px;
        background: var(--white);
        border: 0.3px solid var(--gray);
    }

    textarea:focus {
        outline: none;
        border: 2px solid var(--global__green);
    }


`

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const UploadImage = styled.div`
    input[type=file] {
	    display: none;
    }

    label {
        border: none;
        display: block;
        margin-top: 20px;
        font-weight: 500;
        line-height: 150%;
        font-style: normal;
        color: var(--white);
        border-radius: 12px;
        padding: 16px 20px;
        font-family: 'Inter';
        background: var(--global__green);
    }
`

const SendButton = styled.div`
    button {
        border: none;
        font-size: 16px;
        margin-top: 20px;
        font-weight: 500;
        line-height: 150%;
        font-style: normal;
        padding: 16px 20px;
        color: var(--white);
        border-radius: 12px;
        font-family: 'Inter';
        background: var(--global__green);
    }
`