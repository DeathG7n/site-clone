import styled from "styled-components";

export const Affiliates = styled.div`
    padding: 0 40px;
    h1{
        font-family: "Acme", Sans-serif;
        margin-top: 15px;
        text-align: center;
    }
    p{
        font-family: 'Roboto',sans-serif;
        font-weight: 300;
        font-size: 15px;
        margin-bottom: 50px;
        text-align: center;
        line-height: 130%;
    }
    span{
        display: flex;
        justify-content: center;
        gap: 40px;

        >div:first-child{
            width: 50%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            
            div{
                border-right: 5px solid #f64803;
                background-color: #ADACFFCF;
                font-size: 15px;
                font-family: 'Poppins', sans-serif;
                font-weight: 500;
                width: 45%;
                gap: 5px;
                height: 50px;
                display: flex;
                align-items: center;
                padding: 10px;
            }
        }

        >div:last-child{
            width: 45%;
    
            img{
                width: 100%;
            }
        }

    }
`