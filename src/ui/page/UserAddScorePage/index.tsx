import {Link, useNavigate, useParams} from "react-router-dom";
import React, {ChangeEvent, useEffect, useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import {addScore, adduserStoryResource, getUserStory, loadUserStory} from "../../../resource/UserStoryResource";
import {UserStoryData} from "../../../data/UserStoryData";
import {TeamResponseData} from "../../../data/TeamResponseData";
import './index.css';
import activeStory from './activestory.png';


type Props = {
    email: string
}

type Params = {
    userStoryId: string;
}

export default function UserAddScorePage(props: Props) {

    const [userStoryData, setUserStoryData] = useState<UserStoryData | undefined | null>(undefined);
    const [teamResponse, setTeamResponse] = useState<TeamResponseData | undefined | null>(undefined);
    const [userEmail, setUserEmail] = useState<string>();

    let navigate = useNavigate();
    const params = useParams<Params>();
    const [score, setScore] = useState<string>("");

    const onLoadUserStoryDetailedData = (data: UserStoryData | null) => {
        setUserStoryData(data);
    }

    const onLoadTeamResponseData = (data: TeamResponseData | null) => {
        setTeamResponse(data);
    }

    useEffect(() => {
        if (params.userStoryId) {
            getUserStory(params.userStoryId, onLoadUserStoryDetailedData)
            const email = sessionStorage.getItem("userEmail");
            setUserEmail(email!);
        } else {
            navigate("/404")
        }
    }, [teamResponse])

    const handleScore = (event: any) => {
        setScore(event.target.value);
    }

    const handleSubmit = () => {
        {
            (userStoryData) ?
                addScore(userStoryData.UserStory_id, userEmail, score, onLoadTeamResponseData) :
                <div>Loading</div>
        }
    }

    return (
        <>
            <div className={"whole-page"}>
                <Container className={"inner-container-score-page"}>
                    <div className={"top-banner"}><img className={"active-story-image"} src={activeStory}/></div>
                    <div className={"content-part"}>
                        {(userStoryData) ?
                            <form id="login-form">
                                <div className={"user-story-box"}>
                                    <div><span id={"user-no"}>User Story No:{userStoryData.UserStory_id}</span></div>
                                    <div><span
                                        id={"user-story-content"}>Details:{userStoryData.UserStory_description}</span>
                                    </div>
                                </div>
                                <label id={"story-point-box"} htmlFor="username">Please Enter Your Story Point</label>
                                <Form.Select onChange={handleScore} aria-label="select Score">
                                    {/*<option>Open this select menu</option>*/}
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="5">5</option>
                                    <option value="8">8</option>
                                    <option value="13">13</option>
                                    <option value="no idea">no idea</option>
                                    <option value="resign">resign</option>
                                </Form.Select>
                                <Button id={"submit-button"} onClick={handleSubmit}>Submit</Button>
                                <div className={"submitted-story-point"}>Submitted Story Point:
                                    {
                                        (teamResponse) ?
                                            teamResponse.teammateScoreList.map((value, index) => (
                                                <div
                                                    className={"each-score"}>{value.teamMemberAddress} rated: {value.score}</div>

                                            ))
                                            : <div></div>}
                                </div>

                            </form>
                            : <div>Waiting for response...</div>
                        }
                    </div>
                </Container>
            </div>
        </>
    )
}