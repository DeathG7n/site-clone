import styled from "styled-components";

export const Securit = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;

    @media screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
    >div:first-child{
        width: 45%;

        img{
            width: 100%;
        }

        @media screen and (max-width: 900px) {
            width: 90%;
        }
    }

    > div:last-child{
        width: 45%;
        display: flex;
        flex-direction: column;

        @media screen and (max-width: 900px) {
            width: 90%;
        }

        h1{
            font-family: "Acme", Sans-serif;
            margin-bottom: 15px;
        }
        p{
            font-family: 'Poppins',sans-serif;
            font-weight: 300;
            font-size: 14px;
            margin-bottom: 50px;
        }

        >div{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0px 0px 15px -5px rgb(0 0 0 / 50%);
            margin-bottom: 20px;

            :hover{
                box-shadow: 0px 0px 15px -4px black;
            }


            div:first-child{
                width: 20%;
                height: 90%;
                display: flex;
                justify-content: center;
                align-items: center;
                
                .circle{
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background-color: #BAE6F9;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                }
            }
            div:last-child{
                width: 80%;
                padding: 30px 40px 0 0;
            }

            h2{
                font-family: 'Roboto', sans-serif;
                font-size: 20px;
                margin-bottom: 10px;
            }
        }
    }

`