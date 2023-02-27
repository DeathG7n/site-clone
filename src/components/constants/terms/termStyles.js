import styled from "styled-components";

export const Container = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-family: 'Poppins', sans-serif;
    p{
        font-size: 12px;
        color: #666;
    }

    h2, h3{
        font-weight: 600;
        color: #333;
    }

    ul{
        padding: 20px 30px;
        li{
            padding: 5px 10px;
            color: #666;
            font-size: 12px;
        }
    }
`