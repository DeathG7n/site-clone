import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 50px;
    background-color: #002858;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 800px;
    font-family: 'Poppins', sans-serif;

    @media screen and (max-width: 900px) {
        flex-direction: column;
        gap: 10px;
        height: 70px;
        padding: 5px 0;
    }

    a{
        text-decoration: none;
        color: white;
        font-size: 13px;
        transition: all linear 1s;

        :hover{
            color: #f64803;
        }
    }

    button{
        width: 100px;
        height: 40px;
        font-size: 13px;
        color: white;
        background-color: #f64803;
        border: 2px solid #f64803;
        border-radius: 5px;
        font-weight: 700;
        transition: all linear 0.5s;

        :hover{
            background-color: #002858;
            color: #f64803;
        }
    }
`