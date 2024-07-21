import { connect } from "react-redux";
import styled from "styled-components";

const Main = (props)=> (
    <Container>
        <ShareBox>
            <div>
                {props.user && props.user.photoURL ? (<img src={props.user.photoURL} alt=""/>):
                <img src="/images/user.png" />}
                <button>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="compose-small" aria-hidden="true" role="none" data-supported-dps="16x16" fill="currentColor">
                        <path d="M15 2.53a1.51 1.51 0 01-.44 1L9.15 9 6 10l1-3.12 5.44-5.44A1.5 1.5 0 0115 2.53zM12 11a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h3V2H5a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3V8h-2z"></path>
                    </svg>
                    </span>
                    Write something important...</button>
            </div>
            <div>
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" fill="#E06847" width="20" height="20">
  <path d="m0,22v-12c0-2.209,1.791-4,4-4h0v16c0,1.105-.895,2-2,2h0C.895,24,0,23.105,0,22ZM24,5v14c0,2.761-2.239,5-5,5H5.444c.345-.591.556-1.268.556-2V5c0-2.761,2.239-5,5-5h8c2.761,0,5,2.239,5,5Zm-14,3h2c.552,0,1-.448,1-1v-2c0-.552-.448-1-1-1h-2c-.552,0-1,.448-1,1v2c0,.552.448,1,1,1Zm10,10h-10c-.552,0-1,.448-1,1h0c0,.552.448,1,1,1h10c.552,0,1-.448,1-1h0c0-.552-.448-1-1-1Zm0-4h-10c-.552,0-1,.448-1,1h0c0,.552.448,1,1,1h10c.552,0,1-.448,1-1h0c0-.552-.448-1-1-1Zm0-4h-10c-.552,0-1,.448-1,1h0c0,.552.448,1,1,1h10c.552,0,1-.448,1-1h0c0-.552-.448-1-1-1Zm0-4h-4c-.552,0-1,.448-1,1h0c0,.552.448,1,1,1h4c.552,0,1-.448,1-1h0c0-.552-.448-1-1-1Z"/>
</svg>

                    <span>Write an article</span>
                </button>
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20" fill="#40A2D8"><path d="m0,19c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5v-9H0v9Zm8.397-3.323h2.247l.596-2.283c.094-.362.419-.614.792-.621.373.007.698.259.792.621l.596,2.283h2.247c.452,0,.731.354.731.676,0,.379-.264.698-.566.866l-1.564.87.694,1.893c.134.367.013.778-.299,1.013h0c-.319.24-.759.237-1.075-.007l-1.556-1.203-1.556,1.203c-.316.244-.756.247-1.075.007h0c-.312-.235-.433-.646-.299-1.013l.694-1.893-1.564-.87c-.302-.168-.566-.487-.566-.866,0-.321.279-.676.731-.676Zm15.603-8.677v1H0v-1C0,4.243,2.243,2,5,2h1v-1c0-.552.448-1,1-1s1,.448,1,1v1h8v-1c0-.552.448-1,1-1s1,.448,1,1v1h1c2.757,0,5,2.243,5,5Z"/></svg>
                    <span>Share an event</span>
                </button>
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" fill="#C79E0C" width="22" height="22">
  <path d="M19.777,7.819h-.413V2.916c0-.438-.29-.821-.708-.94C14.053,.674,9.947,.674,5.344,1.976c-.419,.119-.708,.502-.708,.94V7.819h-.413c-1.431,0-2.594,1.166-2.594,2.6v.837c0,2.338,1.896,4.24,4.228,4.24h1.813c.31,.21,.639,.395,.985,.554,.519,.237,.787,.824,.638,1.395l-.671,2.556h-1.715c-.828,0-1.5,.672-1.5,1.5s.672,1.5,1.5,1.5h10.186c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5h-1.715l-.671-2.555c-.149-.572,.119-1.159,.638-1.396,.347-.158,.676-.344,.985-.554h1.813c2.331,0,4.228-1.902,4.228-4.24v-.837c0-1.434-1.163-2.6-2.594-2.6ZM3.629,11.256v-.837c0-.331,.267-.6,.594-.6h.414c.009,1.326,.399,2.595,1.086,3.672-1.166-.07-2.093-1.046-2.093-2.236Zm16.742,0c0,1.19-.927,2.166-2.093,2.236,.687-1.077,1.077-2.346,1.086-3.672h.414c.327,0,.594,.269,.594,.6v.837Z"/>
</svg>
                    <span>Add an archievement</span>
                </button>
                
                {/* <button>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="rgba(0,0,0,0.6)">
                                    <path d="M10 10h4v4h-4v-4zm0 11h4v-4h-4v4zm-7-7h4v-4H3v4zm0 7h4v-4H3v4zM3 7h4V3H3v4zm14 7h4v-4h-4v4zm0-11v4h4V3h-4zm-7 4h4V3h-4v4zm7 14h4v-4h-4v4z"></path>
                                </svg>
                    <span>Hire</span>
                </button> */}
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
margin: 0 0 8px;
background-color:white;
cursor:pointer;

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
font-weight:600;
font-family:roboto;
cursor:pointer;


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
background-color:transparent;

&:hover{
background-color:#eef3e8;
}
}
}

&:nth-child(2) {
display:flex;
flex-wrap:wrap;
justify-content: space-between;
padding-bottom:4px;
padding-left:15px;
padding-right:15px;
padding-top:0;
line-height:0;
box-sizing:border-box;


button{
border-radius:5px;

&:hover{
background-color:#eef3e8;
}
span{
color:rgba(0, 0, 0, 0.6);
}
svg{
margin: 0 4px 0 -2px;
width:24px;
}

// &:hover{
// svg{
// fill:#0a66c2;
// }
// span{
// color:#0a66c2;
// }
// }

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