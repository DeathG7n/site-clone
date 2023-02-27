import styled from "styled-components";

export const Faqs = styled.div`
    h1{
        font-family: "Acme", Sans-serif;
        margin: 15px 0 30px 0;
        text-align: center;
    }
    span{
        display: flex;
        justify-content: center;
        gap: 15px;
        width: 100%;

        @media screen and (max-width: 900px) {
            flex-direction: column;
        }
    }
    section{
        width: 45%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;

        @media screen and (max-width: 900px) {
            flex-direction: column;
            width: 100%;
            align-items: center;
        }

        div{
            width: 100%;
            padding: 20px;
            display: flex;
            flex-direction: column;
            box-shadow: 0px 0px 15px -5px #000000;
            font-family: 'Poppins', sans-serif;

            @media screen and (max-width: 900px) {
                width: 95%;
                padding: 10px;
            }
            
            p{
                font-size: 16px;
                margin-bottom: 10px;
                font-weight: 600;
                display: flex;
                text-align: left;

                span{
                    width: 25px;
                }
            }

            div{
                padding: 0;
                display: none;
                box-shadow: none;
                width: 99%;
                font-size: 15px;
            }
        }
    }
`