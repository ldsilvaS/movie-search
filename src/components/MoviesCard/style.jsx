import styled from "styled-components"

export const MovieContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    text-align: center;
    background: #302e33;
    padding: 10px 0px;

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

    .avarage {
        margin-bottom: 10px;
        font-size: 1.5em;
        color: #fcd600;
    }


`