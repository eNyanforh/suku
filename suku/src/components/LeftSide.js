import { connect } from "react-redux";
import styled from "styled-components";
import { signOutAPI } from "../actions";

const LeftSide =(props)=>{
    return(
        <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackground/>
                        <Photo>
                        <a>
                        {props.user && props.user.photoURL ? (<img src={props.user.photoURL} alt=""/>):
                            <img src="images/user.png"/>}
                              </a>
                        </Photo>
                        <Link>{props.user ? props.user.displayName : "Full Name"}
                        <p>{props.user.email}</p>
                        </Link>
                  
                    <a>
                        <EditProfileText>
                           Edit Profile
                        </EditProfileText>
                    </a>
                </UserInfo>
            </ArtCard>
            <CommunityCard>
                <a>
                    <span>
                        Profile views
                    </span>
                    <span>
                        0
                    </span>
                </a>
            </CommunityCard>

            <SignOut onClick={() => props.signOut()}>
                <a>
                    <span>
                       Log out
                    </span>
                    <span>
                        <img src="/images/logout.png"/>
                    </span>
                   
                </a>
            </SignOut>
        </Container>
    )
}

const Container = styled.div`
grid-area: leftside;

@media (max-width:768px) {
display:none;
}
`;

const ArtCard = styled.div`
text-align:center;
overflow:hidden;
margin-bottom:8px;
background-color:#fff;
border-radius:5px;
transition:box-shadow 83s;
position:relative;
border:none;
box-shadow: 0 0 0 1px rgb(0 0 0/ 15%), 0 0 0 rgb(0 0 0/20%);
`;

const UserInfo = styled.div`
border-bottom: 1px solid rgba(0, 0, 0, 0.15);
padding: 12px 12px 16px;
word-wrap: break-word;
word-break: break-word;
`;
const CardBackground = styled.div`
background:url("/images/card-bg.svg");
background-position: center;
background-size: 462px;
height:54px;
margin: -12px -12px 0;
`;
const Photo = styled.div`
width:70px;
height:70px;
display:flex;
justify-content:center;
align-items:center;
box-sizing:border-box;
background-color:white;
border: 2px solid white;
margin:-38px auto 12px;
border-radius:50%;

img{
width:60px;
height:60px;
border:2p solid red;
border-radius:50%;
}
`;
const Link = styled.div`
font-size:20px;
line-height: 1.5;
color: rgba(0, 0, 0, 0.9);
font-weight:600;
overflow:hidden;
white-space:nowrap;
 text-overflow: ellipsis;
 margin-top:-12px;

 p{
 font-weight:400;
 color: rgba(0, 0, 0, 0.6);
 font-size:16px;

 }
`;
const EditProfileText = styled.div`
color: #0a66c2;
margin-top:4px;
font-size:14px;
line-height:1.33;
font-weight:bold;

&:hover{
color:#40A2D8
}
`;

const CommunityCard = styled(ArtCard)`
text-align:left;
display:flex;
background-color:white;
color:rgba(0,0,0, 0.6);

&:hover{
    cursor:pointer;
    color:#40A2D8;
}
a{
padding:12px;
font-size:16px;
font-weight:bold;
display:flex;
justify-content:space-between;
align:center;
width:100%;
height:100%;

}

`
const SignOut = styled(CommunityCard)`
background-color:#2A629A;
color:#fff;
cursor:pointer;
font-weight:bold;

img{
width:21px;
}


&:hover{
background-color:#134B70;
color:white;
}
`;

const mapStateToProps = (state) =>{
    return {
        user: state.userState.user,
    }
};

const mapDispatchToProps = (dispatch) =>({
    signOut: () => dispatch(signOutAPI()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LeftSide);