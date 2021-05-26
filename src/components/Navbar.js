import { useHistory } from "react-router";
import styled from "styled-components";

export default function Navbar(){
    const history = useHistory();
    const pushToMyPosts = () => history.push("/my-posts");
    return(
        <Box>
            <div onClick={pushToMyPosts}><h1>My posts</h1></div>
            <div><h1>My likes</h1></div>
            <div><h1>Logout</h1></div>
        </Box>
    );
}

const Box = styled.nav`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 72px;
    right: 0;
    height: 109px;
    width: 130px;
    background-color: #171717;
    color: #FFF;
    font-size: 17px;
    border-bottom-left-radius: 20px;
    animation-name: menu;
    animation-duration: 1s;
    z-index: 1;

    @keyframes menu {
        0%   {right:0px; top:0px;}
        100% {right:0px; top:72px;}
    }

    div{
        width: 100%;
        height: calc(100vh/3);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .2s linear;
        cursor: pointer;

        :nth-child(3n){
            border-bottom-left-radius: 20px;
        }

        :hover{
            background-color: #3d3d3d;
        }

        :hover:nth-child(3n){
            background-color: #b33232;
        }
    }
`;
