import { connect } from "react-redux";
import styled from "styled-components";
import { signOutAPI } from "../actions";

const LeftSide = (props) => {
    const user = props.user || {}; // Default to an empty object
    const email = user.email ? user.email.split('@')[0] : "No email provided";

    return (
        <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackground />
                    <Photo>
                        <a>
                            <img src={user.photoURL || "images/user.png"} alt="User" />
                        </a>
                    </Photo>
                    <Link>
                        {user.displayName || "Full Name"}
                        <p>{email}</p>
                    </Link>
                    <a>
                        <EditProfileText>Edit Profile</EditProfileText>
                    </a>
                </UserInfo>
            </ArtCard>
            <CommunityCard>
                <a>
                    <span>Profile views</span>
                    <span>0</span>
                </a>
            </CommunityCard>
            <SignOut onClick={() => props.signOut()}>
                <a>
                    <span>Log out</span>
                    <span><img src="/images/logout.png" alt="Log out" /></span>
                </a>
            </SignOut>
        </Container>
    );
};

const Container = styled.div`
    grid-area: leftside;

    @media (max-width: 768px) {
        display: none;
    }
`;

const ArtCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    transition: box-shadow 0.3s ease;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const CardBackground = styled.div`
    background: url("/images/card-bg.svg") no-repeat center center;
    background-size: cover;
    height: 60px;
    margin: -10px -10px 0;
    border-radius: 5px 5px 0 0;
`;

const Photo = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background-color: white;
    border: 3px solid #40a2d8;
    margin: -40px auto 15px;
    border-radius: 50%;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        border-color: #134b70;
    }
`;

const UserInfo = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 20px 16px 20px;
    word-wrap: break-word;
    word-break: break-word;
`;

const Link = styled.div`
    font-size: 22px;
    line-height: 1.4;
    color: rgba(0, 0, 0, 0.9);
    font-weight: 700;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: -10px;

    p {
        font-weight: 400;
        color: rgba(0, 0, 0, 0.6);
        font-size: 18px;
        margin-top: 5px;
    }
`;

const EditProfileText = styled.div`
    color: #0a66c2;
    margin-top: 6px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        color: #40a2d8;
        text-decoration: underline;
    }
`;

const CommunityCard = styled(ArtCard)`
    text-align: left;
    display: flex;
    background-color: #f9f9f9;

    a {
        padding: 15px;
        font-size: 18px;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: inherit;
    }

    &:hover {
        background-color: #e3f2fd;
    }
`;

const SignOut = styled(CommunityCard)`
    background-color: #2a629a;
    color: #fff;
    cursor: pointer;
    font-weight: bold;

    img {
        width: 22px;
        margin-left: 10px;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &:hover {
        background-color: #134b70;
        color: white;
    }
`;

const mapStateToProps = (state) => ({
    user: state.userState.user,
});

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftSide);
