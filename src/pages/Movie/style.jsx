import styled from "styled-components";


export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`

export const MovieContainer = styled.div`
    display: flex;
    width: 800px;
    align-items: center;
    justify-content: flex-start;
    background: transparent;
    gap: 40px;

    

`

export const ImgContainer = styled.div`
    .imageUrl {
        width: 400px;
        border-radius: 10px;
    }
`

export const TextContainer = styled.div`
    display: flex;
    height: 600px;
    padding: 30px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    border-radius: 10px;
    gap: 20px;
    background: #1a191b;

    .title {
        color: #ff4800;
        font-size: 1.8em;
    }

    .overview {
        color: #FBFBFB;
        text-align: justify;
        font-size: 1.1em;
        line-height: 1.2em;
    }

    .data {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ff4800;
        font-size: 1.8em;
        font-weight: 700;
        gap: 10px;

    }

    .data span {
        color: #FBFBFB;
    }

    .popularity {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ff4800;
        font-size: 1.8em;
        font-weight: 700;
        gap: 10px;
    }

    .popularity span {
        color: #FBFBFB;
    }

    .budget {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ff4800;
        font-size: 1.8em;
        font-weight: 700;
        gap: 10px;
    }

    .budget span {
        color: #FBFBFB;
    }

    .revenue {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ff4800;
        font-size: 1.8em;
        font-weight: 700;
        gap: 10px;
    }

    .revenue span {
        color: #FBFBFB;
    }


`