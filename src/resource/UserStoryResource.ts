import axios, {AxiosResponse} from "axios";
import {UserStoryData} from "../data/UserStoryData";
import {TeamResponseData} from "../data/TeamResponseData";


export function adduserStoryResource(userStoryNo: string, email: string, userStory: string) {
    axios.post('http://localhost:8080/public/userStory', {
        UserStory_id: userStoryNo,
        TeamMember_Address: email,
        UserStory_description: userStory
    }).catch((error) => {
        console.log(error.message)

    })
}

export function loadUserStory(onLoadUserStoryDetailData: (inData: UserStoryData[] | null) => void) {
    axios.get(`http://localhost:8080/public/userStory`).then((response: AxiosResponse<UserStoryData[]>) => {
        onLoadUserStoryDetailData(response.data)
    }).catch((error) => {
        console.log(error.message)
    })
}

export function getUserStory(userStoryId: string, onLoadUserStoryDetailedData : (data: UserStoryData | null) => void) {
    axios.get(`http://localhost:8080/public/userStory/${userStoryId}`).then((response: AxiosResponse<UserStoryData>) => {
        onLoadUserStoryDetailedData(response.data)
    }).catch((error) => {
        console.log(error.message)
    })
}

export function addScore(userStoryId: string, email: string | undefined, score: string, onLoadTeamResponseData: (data: (TeamResponseData | null)) => void) {
    axios.put(`http://localhost:8080/public/userStory/${userStoryId}/${email}/${score}`).then((response: AxiosResponse<TeamResponseData>) => {
        onLoadTeamResponseData(response.data)
    }).catch((error) => {
        console.log("somethingwrong")
    })
}
