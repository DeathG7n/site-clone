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
        flex-wrap: wrap;
        gap: 30px;

        @media screen and (max-width: 900px) {
            flex-direction: column;
        }
        
        .box{
            width: 48%;
            height: 210px;
            border: 2px solid #f64803;
            border-radius: 5px;
            display: flex;
            gap: 70px;
            box-shadow: -1px -1px 15px -1px #f64803;

            @media screen and (max-width: 900px) {
                width: 90%;
                flex-direction: column;
                gap: 0;
                height: auto;
            }

            img{
               width: 100px;
               height: 100px;
               margin: 20px;
            }
            div{
                display: flex;
                width: 60%;
                height: 80%;
                flex-direction: column;
                align-self: center;
                font-size: 18px;

                @media screen and (max-width: 900px) {
                    width: 90%;
                    height: auto;
                }
                
                p{
                    height: 33%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px dashed #f64803;
                    width: 100%;
                    border-collapse: collapse;

                    @media screen and (max-width: 900px) {
                        padding: 10px;
                    }

                    button{
                        width: 90%;
                        height: 45px;
                        border-radius: 5px;
                        border: none;
                        background-color: #f64803;
                        font-size: 16px;
                    }
                }
            }
        }
    }
`