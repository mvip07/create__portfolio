import { useEffect, useState } from "react"
import API from "../axios/axios"
import { allEducation, allExperience } from "../axios/url"
import Welcome from "../components/Welcome"
import styled from "styled-components"

export default function RESUME() {
    const [education, setEducation] = useState([])
    const [experience, setExperience] = useState([])
    useEffect(() => {
        API.get(allEducation).then(res => setEducation(res.data))
        API.get(allExperience).then(res => setExperience(res.data))
    }, [])

    return (
        <Resume id="resume" >
            <Welcome page={"This Page Resume"} location={"center"} />              
                <Container>
                    <Content>
                        <h2>Education</h2>
                        {
                            education.map((data) => (
                                <div key={Math.random()}>
                                    <h3 className="resume-title">{data?.educationName}</h3>
                                    <div className="resume-item">
                                        <h4>{data?.educationWhere}</h4>
                                        <h5>{data?.educationYear}</h5>
                                        <p>{data?.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </Content>
                    <Content>
                        <h2>Experience</h2>
                        {
                            experience.map((data) => (
                                <div key={Math.random()}>
                                    <h3 className="resume-title">{data?.experienceName}</h3>
                                    <div className="resume-item">
                                        <h4>{data?.experienceWhere}</h4>
                                        <h5>{data?.experienceYear}</h5>
                                        <p>{data?.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </Content>
            </Container>
        </Resume>
    )
}

const Resume = styled.section``

const Container = styled.div`
    gap: 50px;
    display: grid;
    margin-top: 100px;
    align-items: flex-start;
    justify-content: space-between;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 992px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Content = styled.div`
    h2 {
        color: var(--global__green);
    }

    .resume-title {
        font-size: 26px;
        font-weight: 700;
        margin-top: 20px;
        margin-bottom: 20px;
        color: var(--global__green);
    }

    .resume-item {
        margin-top: -2px;
        position: relative;
        padding: 0 0 20px 20px;
        border-left: 2px solid var(--global__green);
    }

    .resume-item h4 {
        font-size: 18px;
        font-weight: 600;
        line-height: 18px;
        color: var(--gray);
        margin-bottom: 10px;
        text-transform: uppercase;
    }

    .resume-item h5 {
        font-size: 16px;
        font-weight: 600;
        padding: 5px 15px;
        margin-bottom: 10px;
        color: var(--white);
        border-radius: 10px;
        display: inline-block;
        background: var(--global__green);
    }

    .resume-item::before {
        top: 0;
        left: -10px;
        width: 16px;
        height: 16px;
        position: absolute;
        border-radius: 50px;
        border: 2px solid var(--global__green);
    }
`

