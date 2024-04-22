import styled from "styled-components"

export const MovieContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    text-align: center;
    background: #1a191b;
    padding: 15px 10px;

    .imageUrl {
        width: 300px;
        border-radius: 15px;
        margin-bottom: 10px;
    }

    .title {
        color: #FBFBFB;
        margin-bottom: 20px;
        font-size: 1.3em;
        font-weight: 600;
        letter-spacing: 1.5px;
    }

    .average {
        margin-bottom: 10px;
        font-size: 1.5em;
        color: #fcd600;
    }

    .average .text_average {
        color: #FBFBFB;
    }

    a {
        padding: 10px 100px;
        font-size: 1.3em;
        outline: none;
        border: none;
        border-radius: 5px;
        background: #ff4800;
        cursor: pointer;
        color: #FBFBFB;
        transition: background 0.5s;
    }

    a:hover {
        background: #f8885c;
    }


`