import styled from "styled-components";

export const Choices = styled.div`
    padding: 50px 0;
    h1{
        font-family: "Acme", Sans-serif;
        text-align: center;
        margin-bottom: 15px;
    }
    p{
        text-align: center;
        font-family: 'Poppins',sans-serif;
        font-weight: 300;
        font-size: 14px;
        margin-bottom: 20px;
        padding: 0 20px;
    }
    span{
        display: grid;
        grid-template-columns: repeat(4,260px);
        grid-gap: 10px;
        padding: 30px 30px 20px 30px;
        justify-content: center;

        @media screen and (max-width: 900px) {
            display: flex;
            flex-direction: column;
        }
        
        div{
            padding: 180px 20px 0 15px;
            border: 1px solid;
            background-color: darkblue;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            h2{
                text-align: left;
                font-size: 20px;
                color: #f64803;
                font-family: 'Roboto', sans-serif;
            }
            p{
                text-align: left;
                padding: 0;
                color: #fff;
            }
        }
    }
`