import styled from "styled-components";

const RightSide = (props) => {
    return(
        <Container>
            <FollowCard>
                <Title>
                    <h2>What do you want to see?</h2>
                </Title>
                <Search>
                <div>
                    <input type="text" placeholder="Add #hashtags"/>
                </div>
                <DropDownIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" data-supported-dps="16x16" fill="gray">
                                        <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path>
                                    </svg>
                </DropDownIcon>

                <CloseIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="clear-medium" aria-hidden="true" role="none" data-supported-dps="24x24" fill="gray">
  <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z"></path>
</svg>
                </CloseIcon>
            </Search>
            <HashList>
                <li>arts</li>
                <li>climate</li>
                <li>enterpreneurship</li>
                <li>health</li>
                <li>job</li>
                <li>selfimprovement</li>
                <li>socialimpact</li>
                <li>sports</li>
                <li>technology</li>
            </HashList>

                <FeedList>
                    <button>
                        #technology
                    </button>
                    <button>
                        #jobs
                    </button>
                    <button>
                        #arts
                    </button>

                    <button>
                        #socialimpact
                    </button>
                    <button>
                        #university
                    </button>
                    <button>
                        #enterpreneur
                    </button>
                    <button>
                        #health
                    </button>
                </FeedList>
                
            </FollowCard>
            <BannerCard>
                <img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" alt=""/>
            </BannerCard>
        </Container>
    )
}

const Container = styled.div`
grid-template:rightside;

@media (max-width:768px) {
display:none;
}
`;

const FollowCard = styled.div`
text-align:center;
overflow:hidden;
margin-bottom:8px;
background-color:#fff;
border-radius:5px;
position:relative;
border:none;
box-shadow: 0 0 0 1px rgb(0 0 0/15%), 0 0 0 rgb(0 0 0/20%);
padding:12px;
`;

const Title = styled.div`
display:inline-flex;
align-items:center;
justify-content:space-between;
font-size:16px;
width:100%;
color: rgba(0, 0, 0, 0.9);
`;

const Search = styled.div`
margin-left:0;
position:relative;
margin-top:10px;


& > div {

text-align:left;
input{
border:none;
box-shadow:none;
background-color:#eef3e8;
border-radius:20px;
color:rgba(0, 0, 0, 0.9);
width:100%;
padding:0 40px 0 12px;
line-height:1.75;
font-weight:400;
font-size:14px;
height:34px;
border-color:#dce6f1;
box-sizing:border-box;
}
}
`;
const DropDownIcon = styled.div`
width:40px;
position:absolute;
z-index:1;
top:10px;
right:2px;
border-radius:0 2px 2px 0;
margin:0;
pointer-event:none;
display:flex;
justify-content:center;
align-items:center;
`;

const CloseIcon = styled(DropDownIcon)`
right: 20px;

svg{
width:16px;
opacity:0;
}
`
const FeedList = styled.div`
text-align:left;
margin:5px 0;
position: relative;
font-size: 14px;
button {
background-color:white;
color: rgba(0, 0, 0, 0.8);
padding:8px 16px;
border-radius:15px;
text-align:center;
box-sizing: border-box;
font-weight: 600;
display: inline-flex;
justify-content:center;
align-items:center;
max-height:32px;
max-width:480px;
text-align: center;
outline:none;
font-family:roboto;
border:2px solid #40A2D8;
margin-right:5px;
margin-top:5px;
cursor:pointer;

&:hover{
background-color:#eef3e8;
}
}
}
`;

const Recommendation = styled.div`
color: #0a66c2;
display:flex;
align-items:center;
font-size:14px;
`;

const BannerCard = styled(FollowCard)`
img {
width:100%;
height:100%;
}
`;

const HashList = styled(BannerCard)`
margin-top:6px;
display:none;
list-style-type:none;
text-align:left;
padding:0;
height:200px;
overflow-y:scroll;
color:rgba(0, 0, 0, 0.7);


li{
padding:10px 15px;

&:hover{
background-color:#eef3e8;
}
}

`

export default RightSide;