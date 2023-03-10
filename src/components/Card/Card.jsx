import { useState, useEffect } from 'react';

import { CardProfile, Logo, Picture, AvatarImg, FrameAvatar, Tweet, Followers, Btn } from "./Card.styled";
import { LogoIcon } from "../image/logo";
import avatarhansel from '../image/avatarhansel.png';

const formatNumber = (str) => {
        return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
    
export const Card = () => {
    
    const [following, setFollowing] = useState(() => {
        const storeFollowing = localStorage.getItem('following');
        return storeFollowing === 'true' ? true : false;
    });
    
    const [followers, setFollowers] = useState(() => { 
        const storeFollowers = localStorage.getItem('followers');
        return storeFollowers ? parseInt(storeFollowers) : 100500;
    }); 
    
    useEffect(() => {
        localStorage.setItem('following', following);
        localStorage.setItem('followers', followers);
    }, [following, followers]);

    const handleClick = () => {
        if (following) {
            setFollowing(false);
            setFollowers(prevFolowers => prevFolowers - 1);
        }else { 
            setFollowing(true);
            setFollowers(prevFolowers => prevFolowers + 1);
    }
    
  };
        
    return (
        <CardProfile>           
            <Logo>
            <LogoIcon/>
            </Logo>
            <Picture></Picture>
            <FrameAvatar>
                <AvatarImg src={avatarhansel} width="62" height="62" alt="avatar"/>
            </FrameAvatar>
            <Tweet>777 tweets</Tweet>
            <Followers><span style={{marginRight:"10px"}}>{formatNumber(followers)}</span>Followers</Followers>
            <Btn
                type="button"
                onClick={handleClick} style={{backgroundColor: following ? "#5CD3A8" : "#EBD8FF"}}
                aria-label="follow">                
                {following ? "Following" : "Follow"}</Btn>
        </CardProfile>
    )
}