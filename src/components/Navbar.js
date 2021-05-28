import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export default function Navbar(){
    const history = useHistory();
    function logOut(){
        localStorage.clear();
        history.push("/");
    }

    return(
        <Box>
            <Link to="/my-posts">
                <div><h1>My posts</h1></div>
            </Link>
            <Link to="/my-likes">
                <div><h1>My likes</h1></div>
            </Link>
            <em className="logout">
                <div onClick={logOut}><h1>Logout</h1></div>
            </em>
        </Box>
    );
}

const Box = styled.nav`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 72px;
    right: 0;
    height: 130px;
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
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .2s linear;
        cursor: pointer;
        margin-top: 11px;
        padding-top: 5px;
        padding-bottom: 5px;

        h1 {
            font-family: Lato, sans-serif;
            font-weight: 700;
            font-size: 17px;
        }

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