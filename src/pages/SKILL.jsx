import styled from "styled-components";
import SKILL_DETAIL from "../components/SkillDetail";
import Welcome from "../components/Welcome";

export default function SKILL() {
    return (
        <Skill id="skill">
            <Welcome page={"This Page Skill"} location={"right"} />
            <Progress>
                <SKILL_DETAIL progress__value={90} progress__text={"HTML"} />
                <SKILL_DETAIL progress__value={91} progress__text={"CSS"} />
                <SKILL_DETAIL progress__value={92} progress__text={"SASS"} />
                <SKILL_DETAIL progress__value={93} progress__text={"Bootstrap5"} />
                <SKILL_DETAIL progress__value={94} progress__text={"JavaScript"} />
                <SKILL_DETAIL progress__value={95} progress__text={"ReactJs"} />
                <SKILL_DETAIL progress__value={96} progress__text={"NodeJs"}/>
                <SKILL_DETAIL progress__value={97} progress__text={"Redux"} />
                <SKILL_DETAIL progress__value={98} progress__text={"Python"} />
                <SKILL_DETAIL progress__value={99} progress__text={"Python"} />
                <SKILL_DETAIL progress__value={100} progress__text={"Python"} />
            </Progress>
        </Skill>
    )
}

const Skill = styled.section``

const Progress = styled.div`
    gap: 20px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

    div {
        top: 50%;
        left: 50%;
        position: relative;
        transform: translate(-50%, -50%);
    }
`