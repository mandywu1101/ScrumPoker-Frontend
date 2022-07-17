import {Link, useNavigate} from "react-router-dom";
import React, {ChangeEvent, useEffect, useState} from "react";
import {Button, Container, Card, Form} from "react-bootstrap";
import {adduserStoryResource, getUserStory} from "../../../resource/UserStoryResource";
import ScrumPoker from "../../component/ScrumPoker";
import './index.css';
import memo from './memo.png';
import profileImage from './profile-user.png';
import createnewstory from './createnewstory.png';

type Props = {
    email: string
}

export default function CreateUserStoryPage(props: Props) {
    let navigate = useNavigate();

    const [userStoryNo, setUserStoryNo] = useState<string>(" ");
    const [userStory, setUserStory] = useState<string>(" ");
    const [userEmail, setUserEmail] = useState<string>();

    const onUserStoryNoChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setUserStoryNo(event.target.value);
    }

    const onUserStoryChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        setUserStory(event.target.value);
    }

    const handleSubmit = () => {
        adduserStoryResource(userStoryNo, props.email, userStory)
        navigate("/LoadUserStoryPage");
    }

    useEffect(() => {
        const email = sessionStorage.getItem("userEmail");
        setUserEmail(email!);
    }, [])


    return (
        <>
            <div className={"whole-page"}>
                <Container className={"inner-container"}>
                    <div className={"image-Left"}><img className={"create-user-icon"} src={createnewstory}/></div>
                    <div className="create-user-form">
                        <div className="userstory-form">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className={"title"}><img className={"profile-icon"} src={profileImage}/>{userEmail}</Form.Label>
                                    <form id="user-story-form">
                                        <Card.Title>User Story No: </Card.Title >
                                        <input id="userStoryNo" type="text" name="userStory" value={userStoryNo}
                                               onChange={onUserStoryNoChange}
                                               placeholder={"#"}/>
                                        <br/>
                                        <br/>
                                        <Card.Title>Please Enter Your User Story: </Card.Title>
                                        <textarea id="text-box" name="userStory" value={userStory}
                                               onChange={onUserStoryChange}
                                               placeholder={"As a ..."}/>
                                    </form>
                                    <Button onClick={handleSubmit}>Submit</Button>
                                </Form.Group>

                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}