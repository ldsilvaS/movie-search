import styled from "styled-components";


export const HeaderContainer = styled.header`
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: space-between;
    padding: 25px 100px;
    background: #1a191b;
`

export const Title = styled.h1`
    display: flex;
    font-size: 2.2em;
    color:#FBFBFB;
    align-items: center;
    gap: 20px;
    font-weight: 600;

    a {
        color: #ff4800;
    }
`

export const Navigator = styled.nav`
    display: flex;
    align-items: center;
    

    h1 {
        margin-right: 30px;
        font-weight: 200;
        cursor: pointer;
        text-decoration: none;
        color: #FBFBFB;
    }

    a {
        color: #FBFBFB;
    }

    form {
        display: flex;
        align-items: center;
        gap: 2px;
    }

    form input {
        width: 350px;
        padding: 15px 10px;
        border-radius: 5px;
        background: #FBFBFB;
        outline: none;
        border: none;
        font-size: 1.3em;
    }

    form button {
        padding: 15px 15px;
        font-size: 1.3em;
        outline: none;
        border: none;
        border-radius: 5px;
        background: #ff4800;
        cursor: pointer;
        color: #FBFBFB;
        transition: background 0.5s;
    }

    form button:hover {
        background: #f8885c;
    }


`