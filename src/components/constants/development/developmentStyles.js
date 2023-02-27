import styled from "styled-components";

export const Developmen = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;

    @media screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }

    >div:first-child{
        width: 48%;

        img{
            width: 100%;
        }

        @media screen and (max-width: 900px) {
            width: 90%;
        }
    }

    >div:last-child{
        width: 45%;
        padding: 20px 0 0 10px;

        @media screen and (max-width: 900px) {
            width: 90%;
        }

        h1{
            font-family: "Acme", Sans-serif;
        }
        p{
            font-family: 'Poppins',sans-serif;
            font-weight: 300;
            font-size: 14px;
            margin-bottom: 30px;
        }
        span{
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            

            div{
                width: 240px;
                display: flex;
                justify-content: center;
                gap: 20px;
                padding: 40px 10px;
                border-right: 5px solid #f64803;
                background-color: #FFB79B;
                font-size: 20px;
                font-family: 'Roboto', sans-serif;
                font-weight: 500;
            }
            
            @media screen and (max-width: 900px) {
                flex-direction: column;
                width: 90%;
                align-items: center;
            }
        }
    }
`