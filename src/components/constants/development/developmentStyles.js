import styled from "styled-components";

export const Developmen = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;

    >div:first-child{
        width: 48%;

        img{
            width: 100%;
        }
    }

    >div:last-child{
        width: 45%;
        padding: 20px 0 0 10px;

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
                padding: 40px 30px;
                border-right: 5px solid #f64803;
                background-color: #FFB79B;
                font-size: 20px;
                font-family: 'Roboto', sans-serif;
                font-weight: 500;
            }
        }
    }
`