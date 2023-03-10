import styled from "styled-components";
import Bit from '../../assets/bitcoin.jpeg'

export const Topbar = styled.div`
    width: 100vw;
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
    position: relative;

    @media screen and (max-width: 900px) {
        justify-content: flex-start;
        padding: 0 20px;
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
            color: #fff;
            transition: all linear 0.2s;
            :hover{
                color: #f64803;
            }

            @media screen and (max-width: 900px) {
                padding: 10px 20px;
                border-bottom: 1px solid #555;
                font-size: 12px;
                color: #000;
            }
        }

        @media screen and (max-width: 800px) {
            display: none;
            flex-direction: column;
            width: 100%;
            border: 1px solid;
            justify-content: center;
            position: absolute;
            top: 60px;
            left: 0;
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
        right: 20px;
        top: 10px;

        :active{
            background-color: #f64803;
        }

        @media screen and (max-width: 900px) {
            display: flex;
            justify-content: center;
            align-items: center;
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

    @media screen and (max-width: 900px) {
        width: 90%;
    }
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
        div{
            display: flex;
            .country-code{
                width: 15%;
                height: 50px;
                background-color: #f64803;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 19px;
                color: #fff;
                font-weight: 300;
            }
        }
        .mobile{
            width: 85%;
            border-top-left-radius: 0px;
            border-bottom-left-radius: 0px;
        }
        input, select{
            color: #fff;
            height: 50px;
            border-radius: 5px;
            background-color: transparent;
            border: 1px solid #f64803;
            text-indent: 20px;
            font-size: 17px;
            font-family: "Roboto", sans-serif;
            
            option{
                color: #000;
            }

            :focus{
                outline: 1px solid #f64803;
                border: none;
            }
        }
        .agree{
            :focus{
                outline: none;
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
            align-items: center;
            gap: 12px;
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
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 200px;
    gap: 30px;
    background-image: linear-gradient(to right, rgb(0,0,0), rgba(0,0,0,0.5));
    div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        img{ 
            width: 300px;

            @media screen and (max-width: 900px) {
                margin-left: 120px;
            }
        }
        ul{
            list-style-type: none;
            display: flex;
            justify-content: center;
            gap: 30px;
            width: 30%;

            li{
                color: #fff;
                font-family: "Josefin Sans", sans-serif;
                font-size: 20px;
                cursor: pointer;

                @media screen and (max-width: 900px) {
                    font-size: 14px
                }
            }

            @media screen and (max-width: 900px) {
                width: 90%;
            }
            
        }
    }
    
    p{
        width: 100%;
        height: 60px;
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