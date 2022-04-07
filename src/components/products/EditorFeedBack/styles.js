import styled from 'styled-components';


const EditorFeedBackStyles  = styled.div`
    width: 100%;
    margin: 4rem 0;
    text-align: center;
`;

const FeedBackMessage = styled.figcaption`
    font-size: 1.75rem;
    font-weight: 600;
    color: #11DABC;
`;

const FeedBack = styled.figure`

`;

const FeedBackOption = styled.footer`
    margin-top: 1.5rem;
        button{
            margin: .5rem;
            width: fit-content;
            :hover {
            background-color:#11D9BA;
            color:#FFF;
            box-shadow:  inset 3px 2px 5px 0 rgba(255, 255, 255, .5), rgba(104, 139, 255, 0.1) 7px 3px 10px, rgba(0,0,0, 0.1) 7px 5px 10px;
            }
        }
`;


export {EditorFeedBackStyles, FeedBack, FeedBackMessage, FeedBackOption}