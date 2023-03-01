import styled from "styled-components";

export const Container = styled.div`
    .button{
        width: 170px;
        height: 45px;
        border-radius: 5px;
        border: none;
        background-color: #f64803;
        font-size: 16px;
        margin-left: 1000px;

        @media screen and (max-width: 900px) {
            margin-left: 150px;
        }
    }
    section{
        margin: 30px 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 30px;

        @media screen and (max-width: 900px) {
            flex-direction: column;
        }
        
        .box{
            width: 23%;
            border: 2px solid #f64803;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
            box-shadow: -1px -1px 15px -1px #f64803;
            padding: 45px 35px;
            gap: 30px;

            @media screen and (max-width: 900px) {
                width: 90%;
            }

            button{
                width: 170px;
                padding: 15px;
                border-radius: 5px;
                border: none;
                background-color: #f64803;
                font-size: 16px;
            }
            p{
                padding: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-bottom: 1px solid #f64803;
                width: 100%;
                border-collapse: collapse;

                span{
                    font-size: 12px;
                    width: fit-content;
                    padding: 2px 5px;
                    background-color: #08b7bf;
                    border-radius: 5px;
                }
            }
            h1{
                color: #f64803;
                font-size: 30px;
            }
        }
    }
`