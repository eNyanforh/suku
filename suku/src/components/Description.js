import React, { useState } from 'react';
import styled from 'styled-components';

// Description Component
const Description = ({ text }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <DescriptionContainer>
            <p className={isExpanded ? 'expanded' : 'truncated'}>
                {text}
            </p>
            <button onClick={toggleExpand}>
                {isExpanded ? 'See less' : 'See more'}
            </button>
        </DescriptionContainer>
    );
};

const DescriptionContainer = styled.div`
    position: relative;
    padding: 0 16px;
    color: rgba(0, 0, 0, 0.9);
    font-size: 14px;
    text-align: left;

    p {
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;

        &.truncated {
            display: -webkit-box;
            -webkit-line-clamp: 2; /* Limits the text to 2 lines */
            -webkit-box-orient: vertical;
        }

        &.expanded {
            display: block;
            -webkit-line-clamp: unset;
            -webkit-box-orient: unset;
        }
    }

    button {
        position: absolute;
        bottom: 0;
        right: 0;
        background: transparent;
        border: none;
        color: #0073b1;
        font-size: 14px;
        cursor: pointer;
        padding: 8px 0;
        margin: 8px 0;
    }
`;

export default Description;
