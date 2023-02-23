import styled from "styled-components";
import Bit from '../../assets/bitcoin.jpeg'
import Back from '../../assets/back.jpeg'

export const Container = styled.div`
    background-image: url(${Back})
    // background-repeat: none;
    // background-size: 1500px 1500px;
`

export const Topbar = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    padding: 0 90px 0 70px;
    position: sticky;
    top: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 100;
    border-bottom: 1px solid #ddd;

    ul{
        width: 60%;
        list-style-type: none;
        display: flex;
        justify-content: space-evenly;
        font-weight: 300;
        font-size: 16px;

        li{
            color: #fff;
            transition: all linear 0.2s;
            :hover{
                color: #f64803;
            }
        }
    }

`
export const Form = styled.div`
    border: 1px solid;
    margin: 30px auto;
    width: 41%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    background-color: #555;
    .header{
        width: 100%;
        border-bottom: 2px solid #f64803;
        background-image: url(${Bit});
        div{
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.7);
            padding: 30px 30px 45px 30px;
        }

        h1{
            font-size: 45px;
            line-height: 50px;
            width: 60%;
            color: #fff;
            font-weight: 500;
            font-family: "Josefin Sans", sans-serif;
            margin-bottom: 10px;

            span{
                color: #f64803;
            }
        }
        p{
            font-size: 20px;
            color: #fff;
            font-family: "Josefin Sans", sans-serif;
        }
    }
    form{
        font-family: "Josefin Sans", sans-serif;
        display: flex;
        flex-direction: column;
        padding: 30px 30px 45px 30px;
        gap: 20px;
        background-color: black;
        label{
            color: #fff;
        }
        input{
            height: 50px;
            border-radius: 5px;
            background-color: transparent;
            border: 1px solid #f64803;
            text-indent: 20px;
            font-size: 17px;
            font-family: "Roboto", sans-serif;
            color: #fff;

            :focus{
                outline: 1px solid #f64803;
                border: none;
            }
        }
        .button{
            background-color: #f64803;
            width: fit-content;
            padding: 15px 25px;
            border-radius: 5px;
            font-size: 18px;
            border: none;
            font-weight: 200;
            text-indent: -10%;
        }
        .code{
            height: 45px;
            width: 100%;
            background-color: #003;
        }
        .foot{
            display: flex;
            justify-content: space-between;
            color: #fff;

            span{
                color: #f64803;
            }
        }
    }
`

export const ErrorText = styled.span`
    color: red;
    font-size: 12px;
    font-weight: 900;
`

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    background-image: linear-gradient(to right, rgb(0,0,0), rgba(0,0,0,0.5));
    img{ 
        width: 300px;
    }
    ul{
        list-style-type: none;
        display: flex;
        justify-content: center;
        gap: 30px;
        width: 30%;
        margin-left: -50px;
        margin-bottom: 155px;

        li{
            color: #fff;
            font-family: "Josefin Sans", sans-serif;
            font-size: 20px;
            cursor: pointer;
        }
    }
    p{
        width: 100%;
        height: 50px;
        background-color: #000;
        color: #fff;
        font-size: 19px;
        display: flex;
        align-items: center;
        padding-left: 15px;
        
        span{
            color: #f64803;
            padding-left: 5px;
        }
    }
`