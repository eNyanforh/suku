import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const RightSide = (props) => {
    const allHashtags = ['arts', 'climate', 'entrepreneurship', 'health', 'job', 'selfimprovement', 'socialimpact', 'sports', 'technology'];
    const defaultHashtags = ['arts', 'climate', 'health', 'job', 'technology']; // 5 predefined hashtags
    const [isHashListVisible, setIsHashListVisible] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [selectedHashes, setSelectedHashes] = useState(defaultHashtags);
    const [displayedHashtags, setDisplayedHashtags] = useState(allHashtags.slice(0, 5)); // Default to first 5 hashtags
    const hashListRef = useRef(null);
    const inputRef = useRef(null);

    const toggleHashListVisibility = () => {
        setIsHashListVisible(prev => !prev);
        if (!isHashListVisible) {
            setDisplayedHashtags(allHashtags); // Show all hashtags when list is expanded
        } else {
            setDisplayedHashtags(allHashtags.slice(0, 5)); // Show only first 5 hashtags when list is collapsed
        }
    };

    const handleClickOutside = (event) => {
        if (hashListRef.current && !hashListRef.current.contains(event.target) &&
            inputRef.current && !inputRef.current.contains(event.target)) {
            setIsHashListVisible(false);
            setDisplayedHashtags(allHashtags.slice(0, 5)); // Reset to first 5 hashtags when clicking outside
        }
    };

    const handleHashClick = (hash) => {
        setSelectedHashes(prevSelected => {
            const newSelected = new Set(prevSelected);
            if (newSelected.has(hash)) {
                newSelected.delete(hash);
            } else {
                newSelected.add(hash);
            }
            return Array.from(newSelected);
        });

        setInputValue(""); // Clear the input box after selecting a hashtag
    };

    const handleTagRemove = (hash) => {
        setSelectedHashes(prevSelected => {
            const newSelected = prevSelected.filter(item => item !== hash);
            return newSelected;
        });

        setInputValue(prevValue => {
            const newValue = new Set(prevValue.split(" "));
            newValue.delete(`#${hash}`);
            return Array.from(newValue).join(" ").trim();
        });
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <Container>
            <FollowCard>
                <Title>
                    <h2>What do you want to see?</h2>
                </Title>
                <Search onClick={toggleHashListVisibility} ref={inputRef}>
                    <InputBox>
                        <input
                            type="text"
                            placeholder="Add #hashtags"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <DropDownIcon isVisible={isHashListVisible}>
                            {isHashListVisible ? (
                                <CloseIcon>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="clear-medium" aria-hidden="true" role="none" data-supported-dps="24x24" fill="gray">
                                        <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z"></path>
                                    </svg>
                                </CloseIcon>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" data-supported-dps="16x16" fill="gray">
                                    <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path>
                                </svg>
                            )}
                        </DropDownIcon>
                    </InputBox>
                </Search>
                <HashList ref={hashListRef} className={isHashListVisible ? 'visible' : ''}>
                    {displayedHashtags.map((hash, index) => (
                        <li
                            key={index}
                            onClick={() => handleHashClick(hash)}
                            className={selectedHashes.includes(hash) ? 'selected' : ''}
                        >
                            {hash}
                        </li>
                    ))}
                </HashList>
                <FeedList>
                    {selectedHashes.map((hash, index) => ( // Show selected hashtags
                        <FeedButton key={index}>
                            #{hash}
                            {selectedHashes.length > 5 && (
                                <CloseIcon onClick={() => handleTagRemove(hash)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" width="16" height="16">
                                        <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z"></path>
                                    </svg>
                                </CloseIcon>
                            )}
                        </FeedButton>
                    ))}
                </FeedList>
            </FollowCard>
            <BannerCard>
                <img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" alt="" />
            </BannerCard>
        </Container>
    );
};

const Container = styled.div`
    grid-template: rightside;

    @media (max-width: 768px) {
        display: none;
    }
`;

const FollowCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0, 0 / 15%), 0 0 0 rgb(0 0, 0 / 20%);
    padding: 12px;
`;

const Title = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    width: 100%;
    color: rgba(0, 0, 0, 0.9);
`;

const Search = styled.div`
    margin-left: 0;
    position: relative;
    margin-top: 10px;
    cursor: pointer;
`;

const InputBox = styled.div`
    display: flex;
    align-items: center;
    position: relative;

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
`;

const DropDownIcon = styled.div`
    width: 40px;
    position: absolute;
    z-index: 1;
    top: 10px;
    right: 2px;
    border-radius: 0 2px 2px 0;
    margin: 0;
    pointer-events: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transform: ${(props) => (props.isVisible ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 0.3s ease;
`;

const HashList = styled.ul`
    margin-top: 6px;
    list-style-type: none;
    text-align: left;
    padding: 0;
    height: 200px;
    overflow-y: scroll;
    color: rgba(0, 0, 0, 0.7);
    display: none;

    &.visible {
        display: block;
    }

    li {
        padding: 10px 15px;
        cursor: pointer;

        &.selected {
            background-color: #d4e0ff;
            color: blue;
        }

        &:hover {
            background-color: #eef3e8;
        }
    }
`;

const FeedList = styled.div`
    text-align: left;
    margin: 5px 0;
    position: relative;
    font-size: 14px;
    display: flex;
    flex-wrap: wrap;
`;

const FeedButton = styled.button`
    background-color: white;
    color: rgba(0, 0, 0, 0.8);
    padding: 8px 16px;
    border-radius: 15px;
    text-align: center;
    box-sizing: border-box;
    font-weight: 600;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    max-height: 32px;
    max-width: 480px;
    text-align: center;
    outline: none;
    font-family: roboto;
    border: 2px solid #40a2d8;
    margin-right: 5px;
    margin-top: 5px;
    cursor: pointer;
    position: relative;

    &:hover {
        background-color: #eef3e8;
    }
`;

const SelectedTag = styled.div`
    display: inline-flex;
    align-items: center;
    margin-right: 5px;
    margin-bottom: 5px;
    background-color: #d4e0ff;
    color: blue;
    padding: 4px 8px;
    border-radius: 15px;
    font-size: 14px;
`;

const CloseIcon = styled.div`
    margin-left: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BannerCard = styled(FollowCard)`
    img {
        width: 100%;
        height: 100%;
    }
`;

export default RightSide;
