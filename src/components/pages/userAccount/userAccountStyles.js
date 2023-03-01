import styled from "styled-components";
import Bit from '../../assets/bitcoin.jpeg'
import Back from '../../assets/back.jpeg'


export const Container = styled.div`
    width: 100vw;
    // background-image: url(${Back});
    background-color: black;
    color: #fff;
    font-family: 'Exo', sans-serif;
`

export const TopBar = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    position: sticky;
    top: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 100;
    gap: 5px;
    border-bottom: 1px solid rgba(255,255,255,0.2);

    img{
        margin-top: 15px;
    }

    ul{
        width: 60%;
        list-style-type: none;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-weight: 300;
        font-size: 16px;
        gap: 30px;

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

        li{
            color: #fff;
            transition: all linear 0.2s;
            position: relative;
            height: 50px;
            margin-top: 30px;

            @media screen and (max-width: 900px) {
                display: flex;
                align-items: center;
                padding: 10px 20px;
                border-bottom: 1px solid #555;
                font-size: 12px;
                color: #000;
                height: auto;
                margin-top: 0;
            }
            :hover{
                color: #f64803;
            }
            :hover .dropDown{
                display: block;
            }
            div{
                display: none;
                position: absolute;
                top: 45px;
                left: -30px;
                width: 200px;
                border: 1px solid #fff;
                border-radius: 5px;
                background-color: #f64803;
                ol{
                    list-style-type: none;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 10px 0 5px 0;

                    li{
                        font-size: 14px;
                        border-top: 1px dashed #fff;
                        padding: 10px 0 15px 0;
                        text-indent: 20px;
                        margin-top: 0;

                        :hover{
                            color: #fff;
                            text-decoration: underline;
                        }
                    }
                    li:first-child{
                        border: none;
                    }
                }
            }
        }
    }

    .menu{
        display: none;
        background-color: #fff;
        padding: 10px 10px;
        border-radius: 5px;
        position: absolute;
        right: 10px;
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

export const Hero = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 30px;
    gap: 10px;

    h1{
        font-family: "Josefin Sans", sans-serif;
    }

    p{
        display; flex;
        align-items: flex-end;
        font-size: 16px;
    }
`
export const Body = styled.div`
    margin: 0px 50px 20px 50px;
    padding: 30px 0;

    @media screen and (max-width: 900px) {
        margin: 20px;
    }
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