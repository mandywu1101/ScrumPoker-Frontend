export type TeamResponseData = {
    userStoryId: string;
    description: string;
    teammateScoreList: teammateScore[];
}

export type teammateScore = {
    teamMemberAddress: string;
    score: string
}

