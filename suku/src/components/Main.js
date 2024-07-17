import { connect } from "react-redux";
import styled from "styled-components";

const Main = (props)=> (
    <Container>
        <ShareBox>
            <div>
                {props.user && props.user.photoURL ? (<img src={props.user.photoURL} alt=""/>):
                <img src="/images/user.png" />}
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="compose-small" aria-hidden="true" role="none" data-supported-dps="16x16" fill="currentColor">
                        <path d="M15 2.53a1.51 1.51 0 01-.44 1L9.15 9 6 10l1-3.12 5.44-5.44A1.5 1.5 0 0115 2.53zM12 11a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h3V2H5a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3V8h-2z"></path>
                    </svg>
                    Start a post</button>
            </div>

            <div>
                <button>
                    <img src="/images/photo-icon.svg" alt="" />
                    <span>Photo</span>
                </button>

                <button>
                    <img src="/images/video.png" alt="" />
                    <span>Video</span>
                </button>

                <button>
                    <img src="/images/event-icon.svg" alt="" />
                    <span>Event</span>
                </button>

                <button>
                    <img src="/images/article-icon.svg" alt="" />
                    <span>Write article</span>
                </button>
            </div>
        </ShareBox>
        <Article>
            <SharedActor>
                <a>
                    {props.user && props.user.photoURL ? (<img src={props.user.photoURL} alt=""/>) :
                    <img src="/images/user.png" alt="" />}
                    <div>
                        <span>Title</span>
                        <span>Info</span>
                        <span>Date</span>
                    </div>
                </a>
                <button>
                    <span>...</span>
                </button>
            </SharedActor>
            <Description>
                Description
                <SharedImg>
                    <a>
                        <img src="/images/ketone.jpg" alt=""/>
                    </a>
                </SharedImg>
                <SocialCounts>
                    <li>
                        <button>
                            <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt=""/>
                            <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt=""/>
                            <span>75</span>
                        </button>
                    </li>
                    <li>
                        <a>
                            2 comments
                        </a>
                    </li>
                </SocialCounts>
                <SocialActions>
                <button>
                    <img src="/images/like.svg" alt=""/>
                    <span>Like</span>
                </button>
                <button>
                    <img src="/images/comment.svg" alt=""/>
                    <span>Comments</span>
                </button>
                <button>
                    <img src="/images/repost.svg" alt=""/>
                    <span>Share</span>
                </button>
                <button>
                    <img src="/images/send.svg" alt=""/>
                    <span>Send</span>
                </button>
                </SocialActions>
            </Description>
        </Article>
    </Container>
)

const Container = styled.div`
grid-area:main;
`;

const CommonCard = styled.div`
text-align:center;
overflow:hidden;
margin-bottom:8px;
background-color:#fff;
border-radius:5px;
position: relative;
border:none;
box-shadow: 0 0 0 1px rgba(0 0 0/15%), 0 0 0 rgb(0 0 0/ 20%);
`;

const ShareBox = styled(CommonCard)`
display:flex;
flex-direction: column;
color: #958b7b;
margin: 0 0 8px;
background-color:white;

div{
button{
outline:none;
color: rgba(0, 0, 0, 0.6);
font-size:14px;
line-height:1.5;
min-height:48px;
background: transparent;
border:none;
display:flex;
align-items:center;
font-weight:bold;
}

&:first-child{
display:flex;
align-items:center;
padding:8px 16px 0px 16px;

svg{
display:none;
}


img{
width:48px;
border-radius:50%;
margin-right:8px;
}

button{
margin: 4px 0;
flex-grow:1;
border-radius:35px;
padding-left:15px;
border: 1px solid rgba(0, 0, 0, 0.1);
background-color:white;
}
}

&:nth-child(2) {
display:flex;
flex-wrap:wrap;
justify-content: space-around;
padding-bottom:4px;

button{
img{
margin: 0 4px 0 -2px;
width:24px;
}

span{
color:rgba(0, 0, 0, 0.6);
}
}
}
}
`;

const Article = styled(CommonCard)`
padding:0;
margin: 0 0 8px;
overflow: visible;
`;

const SharedActor = styled.div`
padding-right: 40px;
flex-wrap: nowrap;
padding: 12px 16px 0px;
margin-bottom: 8px;
align-items:center;
display:flex;
overflow:hidden;

img{
border-radius:50%;
}

a{
margin-right: 12px;
flex-grow:1;
overflow:hidden;
display:flex;
text-decoration:none;

img{
width: 48px;
height: 48px;
// border-radius:50%;
// margin-bottom:10px;
}

& > div{
display:flex;
flex-direction:column;
flex-grow:1;
flex-basis:0;
margin-left:8px;
overflow:hidden;

span{
text-align:left;
&:first-child {
font-size: 14pt;
font-weight:700;
color: rgba(0, 0, 0, 1);
}

&:nth-child(n+1){
font-size: 12px;
color: rgba(0, 0, 0, 0.6);
}
}
}
}

button {
position:absolute;
background:transparent;
right:12px;
top:0;
border:none;
outline:none;
padding:none;
;

span{
margin:0;
letter-spacing:2px;
font-weight:bold;
font-family:"Arial Rounded";
font-size:20px;
padding-top:0;
margin:0;
}
}
`;

const Description = styled.div`
padding: 0 16px;
overflow:hidden;
color: rgba(0, 0, 0, 0.9);
font-size: 14px;
text-align: left;
`;

const SharedImg = styled.div`
margin-top:8px;
width:100%;
display:block;
position:relative;
background-color: #f9fafb;

img{
object-fit:contain;
width:100%;
height:100%;
}
`;

const SocialCounts = styled.ul`
width:100%;
margin:auto;
line-height:1.3;
display:flex;
justify-content:space-between;
align-items:center;
overflow:auto;
padding: 8px 0;
border-bottom: 1px solid #e9e5df;
list-style:none;

li{
margin-right: 5px;
font-size:12px;
color:rgba(0, 0, 0, 0.6);

button{
display:flex;
border:none;
background:transparent;
text-align:left;
padding:0;
color:rgba(0, 0, 0, 0.6);

}
`;

const SocialActions = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin:0;
min-height:40px;
padding:4px 8px;

button{
display:inline-flex;
align-items:center;
padding:8px;
color: rgba(0, 0, 0, 0.6);
font-weight:600;
border:none;
background-color:transparent;

img{
width:24px;
margin-right:5px;
}
}
`;

const mapStateToProps = (state) => {
    return{
    user: state.userState.user,
    }
    
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect (mapStateToProps, mapDispatchToProps)(Main)