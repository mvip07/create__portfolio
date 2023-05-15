import HEADER from "./HEADER";
import DASHBOARD from "./DASHBOARD";
import styled from "styled-components";

export default function ADMINMAIN () {
    return (
        <AdminMain>
            <HEADER />
            <DASHBOARD />
        </AdminMain>
    )
}

const AdminMain = styled.div`
    height: 100vh;
    margin-left: 300px;
    scroll-snap-type: y mandatory;

    @media (max-width: 1400px) {
		margin-left: 0;
	}
`