import styled from "styled-components"

export default function ADMIN__ABOUT () {
    return (
        <AdminAbout>
            <Title>
                <h2>My About</h2>
                <p>Hello, user, user - your account information.</p>
            </Title>
            <InputGroup>
                <Input>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" name="email" placeholder="Update your an account" />
                </Input>
                <Input>
                    <label htmlFor="username">Your Username</label>
                    <input type="text" name="username" placeholder="Update your an account" />
                </Input>
                <Input>
                    <label htmlFor="role">Your Role</label>
                    <input type="email" name="role" disabled="true" placeholder="Update your an account" />
                </Input>
                <Input>
                    <label htmlFor="block">Your Access</label>
                    <input type="text" name="block" disabled="true" placeholder="Update your an account" />
                </Input>
                <Input>
                    <label htmlFor="password">Your Password</label>
                    <input type="text" name="password" disabled="true" placeholder="Update your an account" />
                </Input>
                <Input>
                    <label htmlFor="date">Your </label>
                    <input type="email" placeholder="Update your an account" />
                </Input>
            </InputGroup>
        </AdminAbout>
    )
}

const AdminAbout = styled.section``

const Title = styled.div``

const InputGroup = styled.div``

const Input = styled.div``