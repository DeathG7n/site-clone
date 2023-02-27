import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    padding: 0 90px 0 70px;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 100;
    border-bottom: 1px solid #ddd;

    @media screen and (max-width: 900px) {
        flex-direction: column;
        height: 60px;
    }


    ul{
        width: 60%;
        list-style-type: none;
        display: flex;
        justify-content: space-evenly;
        font-weight: 300;
        font-size: 16px;

        li{
            transition: all linear 0.2s;
            :hover{
                color: #f64803;
            }

            @media screen and (max-width: 900px) {
                padding: 10px 20px;
                border-bottom: 1px solid #555;
                font-size: 12px;
            }
        }

        @media screen and (max-width: 900px) {
            display: none;
            flex-direction: column;
            width: 100%;
            border: 1px solid;
            justify-content: center;
            position: absolute;
            top: 60px;
            background-color: #fff;
            color: #000;
        }
    }

    .menu{
        display: none;
        background-color: #000;
        padding: 10px 10px;
        border-radius: 5px;
        position: absolute;
        right: 10px;
        top: 10px;

        @media screen and (max-width: 900px) {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

`