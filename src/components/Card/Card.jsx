import { CardProfile, Logo, Picture, AvatarImg, FrameAvatar, Tweet, Followers, Btn } from "./Card.styled";
import { LogoIcon } from "../image/logo";


export const Card = () => {
    
    return (
        <CardProfile>
            {/* <Logo>
            <LogoIcon/>
            </Logo> */}
            <Picture></Picture>
            <FrameAvatar>
                <AvatarImg />
            </FrameAvatar>
            <Tweet>777 tweets</Tweet>
            <Followers>Followers</Followers>
            <Btn>Follow</Btn>
        </CardProfile>
    )
}