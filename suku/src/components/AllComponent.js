import React, { useState } from 'react';
import styled from 'styled-components';

const All = styled.div`
    flex: 1;
    padding: 10px;
    text-align: left;
    color: rgba(0, 0, 0, 0.9);
    width: 40%;
    font-size: 15px;

    p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;  // Limits to two lines
    }
`;

const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 35px;
    padding-right: 50px;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    max-width: 80%;
    max-height: 80%;
    overflow-y: auto; // Ensures scrolling if content overflows
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
    text-overflow: none;
    font-size: 18px;
    transition: opacity 0.3s ease, transform 0.3s ease;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transform: ${({ isVisible }) => (isVisible ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.9)')};

    p {
        display: block;
        -webkit-line-clamp: unset; // Remove line clamping in the modal
        line-height: 1.8;
        letter-spacing: 0.2px;
    }
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transition: opacity 0.3s ease;
`;

const ReadMoreButton = styled.button`
    background-color: transparent;
    border: none;
    color: gray;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    padding:0;
    margin-bottom:10px;
    &:hover {
        text-decoration: underline;
        
    }
`;

const ActiveHashtags = styled.ul`
    color: blue;
    font-weight: bold;
    list-style-type: none; // Removes bullet points
    padding: 0; // Removes padding
    margin-bottom: 10px; 

    li {
        display: inline;
        margin-right: 10px;
    }
`;

const CloseButton = styled.button`
    background-color: white;
    color: black;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 35px;
    position: absolute;
    top: 10px;
    right: 10px;

    &:hover {
        svg {
            fill: black;
        }
    }
`;

const SharedImg = styled.div`
    margin-top: 8px;
    width: 100%;
    display: block;
    position: relative;

    img {
        object-fit: contain;
        width: 100%;
        height: auto;
        border-radius: 10px;
    }
`;

const Comments = styled.div`
    margin-top: 0;
   

   
`;

const CommentBox = styled.div`
    margin-left: 0;
    position: relative;
    margin-top:5px;

    & > div {
        text-align: left;
        input {
            border: none;
            box-shadow: none;
            background-color: #eef3e8;
            border-radius: 20px;
            color: rgba(0, 0, 0, 0.9);
            width: 100%;
            padding: 0 40px 0 12px;
            line-height: 1.75;
            font-weight: 400;
            font-size: 14px;
            height: 34px;
            border-color: #dce6f1;
            box-sizing: border-box;
        }
    }
`;

const DropDownIcon = styled.div`
    width: 40px;
    position: absolute;
    z-index: 1;
    top: 10px;
    right: 2px;
    border-radius: 0 2px 2px 0;
    margin: 0;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CloseIcon = styled(DropDownIcon)`
    right: 20px;

    svg {
        width: 16px;
        opacity: 0;
    }
`;

const Title = styled.div`
    display: inline-flex;
    justify-content: space-between;
    font-size: 14px;
    width: 100%;
    color: rgba(0, 0, 0, 0.9);
   
     h3{
    margin:0;
    padding:0;

    span{
    color:gray;
    }
    }
`;

const About = styled.div`
    display: ${({ isHidden }) => (!isHidden ? 'block' : 'none')};
    
    margin-bottom:4px;

    h3 {
        padding: 0;
        margin: 0;
    }
`;

const CommentList = styled.ul`
    height: ${({ isHidden }) => (!isHidden ? '130px' : '100%')};
   
    margin-top: 5px;
    list-style-type: none;
    text-align: center;
    color: gray;
    overflow-y: auto;
`;

const AllComponent = () => {
    const [comments, setComments] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isHidden, setHidden] = useState(false);
    const [isFocused, setFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const content = "For the first time, I was invited to attend Namibia's Sustainable Awards. I was among the top three nominees in two categories of the Sustainable Development Awards 2024: Pioneering Journalism in Digital Media and Women and Youth in Sustainable Development. I did not win any of the awards but I am very honored to have made it to the top three nominees in two categories. It was great to see and talk to the people I admire at the event. I felt a sense of fulfillment and inclusion because my own people recognized my work. Congratulations to all the #nominees and to the #winners who scooped the trophies, your work spoke for itself! 🎉 I am because we are! Let's walk this road of Sustainable development together! #Achievement2024 #sustainability #sustainablefuture ";

    const handleReadMoreClick = () => {
        setModalVisible(true);
    };

    const handleInputFocus = () => {
        setHidden(true);
        setFocused(true);
    };

    const handleInputBlur = () => {
        setHidden(false);
        setFocused(false);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <All>
            <About isHidden={isHidden}>
                <p>{content.length > 225 ? content.slice(0, 225) + '...' : content}</p>
                {content.length > 225 && (
                    <ReadMoreButton onClick={handleReadMoreClick}>Read more...</ReadMoreButton>
                )}
                <ActiveHashtags>
                    <li>#technology</li>
                    <li>#arts</li>
                    <li>#jobs</li>
                </ActiveHashtags>
                
            </About>

            <Comments>
                <Title>
                    <h3>Comments <span>0</span></h3>
                </Title>
                <CommentBox>
                    <div>
                        <input
                            type="text"
                            placeholder="Make a comment"
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            onChange={handleInputChange}
                            value={inputValue}
                        />
                    </div>
                    <DropDownIcon>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Layer_1"
                            data-name="Layer 1"
                            viewBox="0 0 24 24"
                            width="14"
                            height="14"
                            fill={inputValue ? "blue" : "gray"}
                        >
                            <path d="m.172,3.708C-.216,2.646.076,1.47.917.713,1.756-.041,2.951-.211,3.965.282l18.09,8.444c.97.454,1.664,1.283,1.945,2.273H4.048L.229,3.835c-.021-.041-.04-.084-.057-.127Zm3.89,9.292L.309,20.175c-.021.04-.039.08-.054.122-.387,1.063-.092,2.237.749,2.993.521.467,1.179.708,1.841.708.409,0,.819-.092,1.201-.279l18.011-8.438c.973-.456,1.666-1.288,1.945-2.28H4.062Z" />
                        </svg>
                    </DropDownIcon>
                    <CommentList isHidden={!isFocused}>
                        {comments.length > 0 ? (
                            comments.map((comment, index) => (
                                <li key={index}>{comment}</li>
                            ))
                        ) : (
                            <li>No comments yet</li>
                        )}
                    </CommentList>
                    <CloseIcon>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            id="clear-medium"
                            aria-hidden="true"
                            role="none"
                            data-supported-dps="24x24"
                            fill="gray"
                        >
                            <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z" />
                        </svg>
                    </CloseIcon>
                </CommentBox>
            </Comments>

            <Overlay isVisible={isModalVisible} onClick={() => setModalVisible(false)} />
            <Modal isVisible={isModalVisible}>
                <p>{content}</p>
                <ActiveHashtags>
                    <li>#technology</li>
                    <li>#arts</li>
                    <li>#jobs</li>
                </ActiveHashtags>
                <SharedImg>
                    <a>
                        <img src="/images/ketone.jpg" alt="" />
                    </a>
                </SharedImg>
                <Title>
                <h3>Comments <span>0</span></h3>
                </Title>
                <CommentBox>
                    <div>
                        <input
                            type="text"
                            placeholder="Make a comment"
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            onChange={handleInputChange}
                            value={inputValue}
                        />
                    </div>
                    <DropDownIcon>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Layer_1"
                            data-name="Layer 1"
                            viewBox="0 0 24 24"
                            width="14"
                            height="14"
                            fill={inputValue ? "blue" : "gray"}
                        >
                            <path d="m.172,3.708C-.216,2.646.076,1.47.917.713,1.756-.041,2.951-.211,3.965.282l18.09,8.444c.97.454,1.664,1.283,1.945,2.273H4.048L.229,3.835c-.021-.041-.04-.084-.057-.127Zm3.89,9.292L.309,20.175c-.021.04-.039.08-.054.122-.387,1.063-.092,2.237.749,2.993.521.467,1.179.708,1.841.708.409,0,.819-.092,1.201-.279l18.011-8.438c.973-.456,1.666-1.288,1.945-2.28H4.062Z" />
                        </svg>
                    </DropDownIcon>
                    <CommentList isHidden={!isFocused}>
                        {comments.length > 0 ? (
                            comments.map((comment, index) => (
                                <li key={index}>{comment}</li>
                            ))
                        ) : (
                            <li>No comments yet</li>
                        )}
                    </CommentList>
                    <CloseIcon>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            id="clear-medium"
                            aria-hidden="true"
                            role="none"
                            data-supported-dps="24x24"
                            fill="gray"
                        >
                            <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z" />
                        </svg>
                    </CloseIcon>
                </CommentBox>
                <CloseButton onClick={() => setModalVisible(false)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="clear-medium"
                        aria-hidden="true"
                        role="none"
                        data-supported-dps="24x24"
                        fill="gray"
                        width="35"
                        height="35"
                    >
                        <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z" />
                    </svg>
                </CloseButton>
            </Modal>
        </All>
    );
};

export default AllComponent;
