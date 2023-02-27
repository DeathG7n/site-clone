import styled from "styled-components";

export const Reasons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin-top: 80px;
    margin-bottom: 100px;
    position: relative;

    @media screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
    

    >div:first-child{
        width: 45%;

        @media screen and (max-width: 900px) {
            width: 90%;
        }

        h1{
            font-family: "Acme", Sans-serif;
            margin-bottom: 15px;
        }
        
        ul{
            list-style-type: none;
            width: 100%;
            display: flex;
            position: relative;

            @media screen and (max-width: 900px) {
                flex-direction: column;
            }
            .answer{
                width: 100%;
                position: absolute;
                top: 70px;
                left: 0;

                @media screen and (max-width: 900px) {
                    display: none;
                }
            }
        }
        li{
            border: 1px solid #f64803;
            padding: 10px 10px 20px 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 17px;
            width: 150px;
            color: #15386F;
            font-family: 'Roboto', sans-serif;
            cursor: pointer;
            position: relative;

            p{
                text-decoration: underline;
            }

            @media screen and (max-width: 900px) {
                width: 100%;
                align-items: flex-start;
                flex-direction: column;
            }

            .ans{
                display: none;
                width: 100%;
                border: none;
                text-decoration: none;
                color: 

                @media screen and (max-width: 900px) {
                    
                }
            }
        }
        div{
            font-family: 'Roboto', sans-serif;
            color: #000000;
            font-size: 15px;
            font-weight: 100;
            width: 529px;
            height: 90px;
            border: 1px solid #f64803;
            border-top: none;
            padding: 10px 40px 20px 10px; 
        }
    }
    >div:last-child{
        width: 45%;
        font-family: 'Poppins', sans-serif;

        @media screen and (max-width: 900px) {
            width: 90%;
        }

        ul{
            list-style-type: none;
            width: 100%;
            display: flex;
            border-radius: 5px;
        }
        li{
            width: 25%;
            border: 1px solid rgba(34, 34, 34, 0.3);
            padding: 5px 30px;
            background-color: #cb3e06;
            cursor: pointer;

            @media screen and (max-width: 900px) {
                padding: 5px 10px;
                font-size: 12px;
            }
        }
        div{
            border: 1px solid rgba(34, 34, 34, 0.3);
            border-top: none;
            width: 528px;

            @media screen and (max-width: 900px) {
                width: 100%;
            }


            div{
                width: 100%;
                padding: 15px 10px;
                border-bottom: 1px solid rgba(34, 34, 34, 0.3);
                background-color: #f64803;
                font-size: 14px;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                gap: 20px;

                p:nth-child(2){
                    margin-right: auto;
                }

                img{
                    width: 20px;
                }
            }
            div:first-child{
                padding-top: 20px;
            }
        }
    }
`