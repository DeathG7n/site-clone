import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #0f131280;
    display: flex;
    justify-content: center;
    padding-top: 50px;
    box-sizing: border-box;
    position: fixed;
    z-index: 1000;
`

export const Box = styled.div`
    width: 450px;
    height: fit-content;
    background-color: #393d46;
    border-radius: 5px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (max-width: 900px) {
        width: 90%;
    }

    .head{
        padding: 15px 20px;
        border-bottom: 1px solid #fff;
        font-weight: 600;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;

        p:last-child{
            cursor: pointer;
        }
    }
    label{
        font-size: 14px;
        font-family: "Josefin Sans", sans-serif;
        margin-left: 20px;
    }

    .input{
        padding: 0 20px;
        display: flex;
        margin-bottom: 10px;
        input{
            width: 85%;
            height: 50px;
            border-radius: 5px;
            background-color: transparent;
            border: 1px solid #f64803;
            text-indent: 20px;
            font-size: 17px;
            color: #fff;
            font-family: 'Exo', sans-serif;
            border-top-right-radius: 0px;
            border-bottom-right-radius: 0px;
    
            :focus{
                outline: 1px solid #f64803;
                border: none;
            }
        }
        span{
            width: 15%;
            height: 50px;
            background-color: #f64803;
            color: #555;
            display: flex;
            justify-content: center;
            align-items: center;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    }
    .buttons{
        width: 100%;
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        padding: 20px;
        border-top: 1px solid #fff;

        button{
            width: fit-content;
            padding: 15px 30px;
            border-radius: 5px;
            border: none;
            font-size: 16px;
            font-family: 'Exo', sans-serif;
            background-color: #dc3545;
        }
        button:last-child{
            background-color: #f75c1e;
        }
    }
`