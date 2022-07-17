import {Link, useNavigate} from "react-router-dom";
import React, {ChangeEvent, createContext, useContext, useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import BasicNav from "../../component/ScrumPoker";
import UserAddScorePage from "../UserAddScorePage";
import Navbar from "../../component/ScrumPoker";
import ScrumPoker from "../../component/ScrumPoker";
import TextLinkExample from "../../component/ScrumPoker";
import FillExample from "../../component/ScrumPoker";
import './index.css';


type Props = {
    email: string
    setEmail: (email: string) => void
}

export default function LoginPage(props: Props) {
    let navigate = useNavigate();

    const onLoginAddressChange = (event: ChangeEvent<HTMLInputElement>): void => {
        props.setEmail(event.target.value);
    }

    const handleLogin = () => {
        navigate("/CreateUserStoryPage");
    }

    sessionStorage.setItem("userEmail", props.email);

    return (
        <>
            <div className={"whole-page"}>
                <Container className={"inner-container"}>
                    <div className={"imageLeft"}><ScrumPoker/></div>
                    <div className="login">
                        <Form className={"login-form"}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className={"title"}>Login to Scrum Poker</Form.Label>
                                <br/>
                                <Form.Label className={"email-label"}>Please Enter Your Email</Form.Label>
                                <Form.Control id="username" type="text" name="email" value={props.email}
                                              onChange={onLoginAddressChange}
                                              placeholder={"Email Address"}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            </Form.Group>
                            <div className={"button"}>
                            <Button onClick={handleLogin}>Create User Story</Button>
                            <Link to={`/LoadUserStoryPage`}><Button>Browse All User
                                Story</Button></Link>
                            </div>
                        </Form>
                    </div>
                </Container>
            </div>
        </>
    )
}