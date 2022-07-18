import {Link, Route, useNavigate} from "react-router-dom";
import React, {ChangeEvent, useEffect, useState} from "react";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {adduserStoryResource, loadUserStory} from "../../../resource/UserStoryResource";
import {UserStoryData} from "../../../data/UserStoryData";
import UserAddScorePage from "../UserAddScorePage";
import ScrumPoker from "../../component/ScrumPoker";
import profileImage from "../CreateUserStoryPage/profile-user.png";
import memo from './memo.png';
import userstorycatalog from './userstorycatalog.png';
import './index.css';


export default function LoadUserStoryPage() {
    const [userStoryData, setUserStoryData] = useState<UserStoryData[] | undefined | null>(undefined);
    let navigate = useNavigate();
    const [userEmail, setUserEmail] = useState<string>();

    const onLoadUserStoryDetailData = (data: UserStoryData[] | null) => {
        setUserStoryData(data);
    }

    useEffect(() => {
        loadUserStory(onLoadUserStoryDetailData)
        const email = sessionStorage.getItem("userEmail");
        setUserEmail(email!);
    }, [userStoryData])


    return (
        <>
            <div className={"whole-page"}>
                <Container className={"inner-container-user-story"}>
                    <div className={"top-bar"}><img className={"scrum-image"} src={userstorycatalog}/></div>
                    <div className={"user-story-catalog"}>
                        <Container className={"userStory-container"}>
                            <Row xs={1} md={2} lg={3} className="g-4">
                                {(userStoryData) ?
                                    userStoryData.map((value, idx) => (
                                        <Col>
                                            <Card className={"each-card"}>
                                                <Card.Body>
                                                    <img className={"memo-image"} src={memo}/>
                                                    <Card.Title>User Story No.{value.UserStory_id}</Card.Title>
                                                    <Card.Text>
                                                        Details: {value.UserStory_description}
                                                    </Card.Text>
                                                    <Link to={`/UserAddScorePage/${value.UserStory_id}`}><Button
                                                        variant="primary">Add
                                                        Score</Button></Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )) : <div>Loading...</div>}
                            </Row>
                            

                            <div className={"add-story-button"}>
                            <Link to={`/CreateUserStoryPage`}><Button id={"add-user-story"}>Add User Story</Button></Link>
                            </div>
                        </Container>

                    </div>
                </Container>
            </div>
        </>
    )
}


{/*{*/
}
{/*    (userStoryData) ?*/
}
{/*        userStoryData.map((value, index) => (*/
}
{/*            <Card>*/
}
{/*                <Card.Header>Featured</Card.Header>*/
}
{/*                <Card.Body>*/
}
{/*                    <Card.Title>{value.UserStory_id}</Card.Title>*/
}
{/*                    <Card.Text>*/
}
{/*                        {value.UserStory_description}*/
}
{/*                    </Card.Text>*/
}
{/*                    <Link to={`/UserAddScorePage/${value.UserStory_id}`}><Button*/
}
{/*                        variant="primary">Add*/
}
{/*                        Score</Button></Link>*/
}
{/*                </Card.Body>*/
}
{/*            </Card>*/
}

{/*            // <Container key={index} className={"inner-container-userstory"}>*/
}
{/*            //*/
}
{/*            // </Container>*/
}
{/*        ))*/
}
{/*        /!*        : <div>Loading...</div>}*!/*/
}
{/*    </div>*/
}