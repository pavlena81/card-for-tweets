import { CardProfile, AvatarImg, FrameAvatar, Tweet, Followers } from "./Card.styled"


export const Card = () => {
    
    return (
        <CardProfile>
            <FrameAvatar>
                <AvatarImg />
            </FrameAvatar>
            <Tweet>777 tweets</Tweet>
            <Followers>Followers</Followers>
        </CardProfile>
    )
}