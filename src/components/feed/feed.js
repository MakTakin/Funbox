import React from "react";
import styled from 'styled-components'
import backcat from '../../images/cat.png'
import backcatdis from '../../images/catdis.png'

const FeedBtn = styled.button`
    width:320px;
    margin-top:20px;
    font-family: Trebuchet MS;
    font-size:14px;
    height: 480px;
    color: #666666;
    border: 4px solid #1698d9;
    background: ${props => props.disabled ? `url(${backcatdis})` : `url(${backcat})`}  
                #FFFFFF left bottom no-repeat;
    display:flex;
    flex-direction:column;
    padding: 20px 10px 10px 45px;
    position:relative;
    outline: none;
    border-radius: 14px;
    clip-path: polygon(14.7% 0, 100% 0, 100% 100%, 0 100%, 0 9.7%);
    &:hover {
        cursor: pointer;
        border: 4px solid #2ea8e6;
        &:before {
            border-top: 45px solid #2ea8e6;
        }
    }  
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        border-top: 45px solid #1698d9; 
        border-right: 45px solid transparent;
    } 
    &:disabled {
        border: 4px solid #b3b3b3;
        background-color: #f2f2f2;
        color: #d4d4d4;
        & > h1,h2 {
            color: #d4d4d4;
        }
        & > .selected {
            background:#b3b3b3;
        }
        &: hover  > .selected {
            background:#b3b3b3;
        }
        &:before {
            border-top-color: #b3b3b3;
        }
    }
    & > span {
        font-size: 16px;
    }    
    ${
    props => {
        if (props.selected && props.selectedHeader) {
            return `
            border: 4px solid #d91667;
            &:hover {
                border: 4px solid #d91667;
                &:before {
                    border-top-color: #d91667;
                }
            }
            &:hover > span {
                color:#d91667;
            }
            & > .selected {
                background:#d91667;
            }
            &:before {
                border-top-color: #d91667;
            }
            `
        }
        if (props.selected) {
            return `
            border: 4px solid #d91667;
            &:hover {
                border: 4px solid #d91667;
                &:before {
                    border-top-color: #d91667;
                }   
            }
            & > .selected {
                background:#d91667;
            }
            &:before {
                border-top-color: #d91667;
            }
            `
        } else {
            return `
            &:hover > .selected {
                background:#2ea8e6;
            }
            `
        }
        }
    }
`
const StyledH1 = styled.h1`
    color: black;
    margin: 10px 0 0 0;
    font-size: 48px;
`
const StyledH2 = styled.h2`
    color: black;
    margin:0 0 15px 0;
    font-size: 24px;
`
const Round = styled.div`
    width:81px;
    height:81px;
    border-radius:50%;
    background: #1698d9;
    color: white;
    font-size: 42px;
    display:flex;
    align-self: flex-end;
    margin-top: auto;
    flex-direction: column;
    justify-content: center;
    & > span {
        font-size: 21px;
    } 
`

const CaptionDiv = styled.div`
    font-size:13px;
    margin-top:${props => props.selected ? '14px' : '15px'};
    margin-bottom:5px;
    text-align:center;
    color: ${props => props.disabled ? '#ffff66' : '#FFF'};
    & > button {
        border: none;
        padding:0;
        background:transparent;
        outline: none;
        color: #2489bc;
        border-bottom: 1px dashed #2489bc;
        &:hover {
            cursor: pointer;
        }        
    }
`

const Feed = ({...props}) => {

    return (
        <div>
            <FeedBtn
                selected={props.feed.selected}
                selectedHeader={props.feed.selectedHeader}
                disabled={props.feed.disabled}
                onClick={() => props.selectFeed(props.feed.id)}
                onMouseEnter={() => props.selectFeedEnter(props.feed.id)}
                onMouseLeave={() => props.selectFeedLeave(props.feed.id)}
            >
                {   (!props.feed.selected) ?
                    <span>{props.feed.header.default}</span> :
                    (!props.feed.selectedHeader) ?
                    <span>{props.feed.header.default}</span> :
                    <span>{props.feed.header.selected}</span>
                }
                <StyledH1>{props.feed.name}</StyledH1>
                <StyledH2>{props.feed.taste}</StyledH2>
                <div>{props.feed.portion}</div>
                <div>{props.feed.present}</div>
                <div>{props.feed.client}</div>
                <Round className='selected'>
                    <div>{props.feed.size}</div>
                    <span>кг</span>
                </Round>
            </FeedBtn>
            {(props.feed.disabled) ?
                <CaptionDiv
                    selected={props.feed.selected}
                    disabled={props.feed.disabled}
                >
                    {props.feed.caption.ended}
                </CaptionDiv> :
            (!props.feed.selected) ?
                <CaptionDiv selected={props.feed.selected}>
                        Чего сидишь? Порадуй котэ,&nbsp;
                        <button onClick={() => props.selectFeed(props.feed.id)}>купи.</button>
                </CaptionDiv > :
                <CaptionDiv selected={props.feed.selected}>
                        {props.feed.caption.selected}
                </CaptionDiv>
            }
        </div>
    )
}
export default Feed