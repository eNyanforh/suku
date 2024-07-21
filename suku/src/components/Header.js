import { connect } from "react-redux";
import styled from "styled-components";
import { signOutAPI } from "../actions";


const Header = (props) => {
    return(
        <Container>
           <Content>
            <Logo>
                <a href="/home">
                <img src="/images/camplight.png" alt=""/>
                </a>
            </Logo>
            <Search>
                <div>
                    <input type="text" placeholder="Search"/>
                </div>
                <SearchIcon>
                    <img src="/images/search-icon.svg" alt=""/>
                </SearchIcon>
            </Search>
            <Nav>
                <NavListWrap>
                    <NavList className="active">
                        <a href="/home">
                        <img src="/images/house-fill.svg" alt=""/>
                            <span>Home</span>
                        </a>
                    </NavList>
                    <NavList>
                        <a href="/network">
                        <img src="/images/user-fill.svg" alt=""/>
                            <span>Network</span>
                        </a>
                    </NavList>
                    <NavList>
                        <a>
                        <img src="/images/star-fill.svg"/>
                            <span>Opportunities</span>
                        </a>
                    </NavList>
                    <NavList>
                        <a>
                        <img src="/images/envelope-fill.svg" alt=""/>
                            <span>Chats</span>
                        </a>
                    </NavList>
                    <NavList>
                        <a>
                        <img src="/images/bell-fill.svg" alt=""/>
                            <span>Notifications</span>
                        </a>
                    </NavList>

                    {/* <User>
                        <a>
                            {props.user && props.user.photoURL ? (<img src={props.user.photoURL} alt=""/>):
                            <img src="/images/user.png" alt=""/>}
                            <span>Me
                            <img src="/images/down-icon.svg" alt=""/>
                            </span>
                        </a>
                        <SignOut onClick={() => props.signOut()}>
                            <a>Sign out</a>
                        </SignOut>
                    </User> */}
                    <Learn>
                        <a>
                        <img src="/images/graduation-cap.gif" alt=""/>
                                {/* <span>Learn
                                <img src="/images/down-icon.svg" alt=""/>
                            </span> */}
                        </a>
                    </Learn>
                </NavListWrap>
                </Nav>
           </Content>
        </Container>
    )
};

const Container = styled.div`
background-color:white;
position:fixed;
left:0;
top:0;
border-bottom:1px solid rgba(0, 0, 0, 0.08);
padding:0;
width:100vw;
z-index:100;
`;
const Content = styled.div`
display:flex;
align-items:center;
margin:0 auto;
min-height:100%;
max-width:1128px;
`;

const Logo = styled.div`
margin-right:8px;
margin-top:3px;
font-size: 32px;
img{
width:38px;
margin-right:7px;
}

a{
display:flex;
justify-content:center;
align-items:center;
text-decoration:none;
color:#0B60B0;
font-weight:bold;
}
`
const Search = styled.div`
opacity:1;
flex-grow:1;
position:relative;


& > div {
max-width:280px;

input{
border:none;
box-shadow:none;
background-color:#eef3e8;
border-radius:20px;
color:rgba(0, 0, 0, 0.9);
width:300px;
padding:0 8px 0 40px;
line-height:1.75;
font-weight:400;
font-size:14px;
height:34px;
border-color:#dce6f1;
vertical-align:text-top;
}
}
`;
const SearchIcon = styled.div`
width:40px;
position:absolute;
z-index:1;
top:10px;
left:2px;
border-radius:0 2px 2px 0;
margin:0;
pointer-event:none;
display:flex;
justify-content:center;
align-items:center;
`;

const Nav = styled.div`
margin-left: auto;
display:block;
@media (max-width: 768px) {
position:fixed;
left:0;
bottom:0;
background:white;
width:100%;
}
`;

const NavListWrap = styled.ul`
display:flex;
flex-wrap: nowrap;
list-style-type:none;
cursor:pointer;

.active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9); 
    }
span{
color:black;
}

    &:hover{
    background-color:white;
    }
  }
`;
const NavList = styled.li`
display:flex;
align-items:center;

 &:hover {
      background-color:rgba(0, 0, 0, 0.1);
      border-radius:5px;
      transition-duration:250ms;
      }
    
a{
display:flex;
align-items:center;
background:transparent;
flex-direction:column;
font-size:12px;
font-weight:400;
justify-content:center;
line-height:1.5;
min-height:52px;
position:relative;
min-width:80px;
text-decoration:none;

span{
color: rgba(0, 0, 0, 0.6);
font-weight:600;
display:flex;
align-items:center;
}

@media (max-width:768px) {
min-width:70px;
}
}
`;

const SignOut = styled.div`
position:absolute;
top:45px;
background-color:#fff;
border-radius:0px 0px 5px 5px;
width:100px;
height:40px;
// font-size:16px;
transition-duration: 167ms;
text-align:center;
color:black;
display:none;
`;

const User = styled(NavList)`
background-color:white;
a > img {
width:26px;
height:26px;
border-radius:50%;
}
span {
display:flex;
align-items:center;
font-size:12px;
}

&:hover {
background-color:white;
${SignOut}{
align-items:center;
display:flex;
justify-content:center;
}
}

`;
const Learn = styled(User)`
border-left: 1px solid rgba(0, 0, 0, 0.08);

a > img{
border-radius:0;
margin-bottom:0;
width:50px;
height:50px;
background-color:red;
}

&:hover{
opacity:0.7;
}
`;

const mapStateToProps = (state) =>{
    return{
        user: state.userState.user,
    }
};

const mapDispatchToProps = (dispatch) =>({
    signOut: () => dispatch(signOutAPI()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);