import styled from 'styled-components';
import picture from '../image/picture.png';
import avatarhansel from '../image/avatarhansel.png';

export const CardProfile = styled.div`
position: relative;
top: 80px;
width: 380px;
height: 460px;
display: flex;
flex-direction:column;
margin: 0 auto;
 
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius: 20px;
`
export const Logo = styled.div`
position: absolute;
display: flex;
justify-content: flex-start;
align-items: flex-start;
margin-top: 20px;
margin-left:20px;

color: rgba(255, 255, 255, 0,3);
width: 76px;
height: 22px;
`

export const Picture = styled.div`
position: absolute;
background-image: url('${picture}');
left: 36px;
top: 28px;
width: 306px;
height: 168px;
z-index: 1;
`
export const FrameAvatar = styled.div`
display: flex;
justify-content: center;
align-items: center;  

margin:0 auto;
width: 80px;
height: 80px;
background: #EBD8FF;
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
border-radius: 50%;
margin-bottom: 26px;
margin-top: 178px;
position: relative;

&::before {
  content: "";
  position: absolute;
  left: -150px;
  top: 40px;
  display: block;
  width: 151px;
  height: 8px;
  background: #EBD8FF;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
}

&::after {
  content: "";
  position: absolute;
  left: 79px;
  top: 40px;
  display: block;
  width: 151px;
  height: 8px;
  background: #EBD8FF;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
}
`


export const AvatarImg = styled.img`
width: 62px;
height: 62px;

margin:0 auto;
border-radius: 50%;
background:  url('${avatarhansel}'), #5736A3 no-repeat center center fixed;
`
export const Tweet = styled.p`
margin: 0;
margin:0 auto;
margin-bottom: 16px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
color: #EBD8FF;
`
export const Followers = styled.p`
margin: 0;
margin:0 auto;
margin-bottom: 26px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
color: #EBD8FF;

`
export const Btn = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin:0 auto;

border: none;
padding: 0px;
width: 196px;
height:50px;
border-radius: 10px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 1,22;
text-transform: uppercase;

color: #373737;

background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

cursor: pointer;
`