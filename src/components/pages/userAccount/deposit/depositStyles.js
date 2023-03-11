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

export const PreviewContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .preview{
        width: 60%;
        border: 1px solid;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px 0;

        @media screen and (max-width: 900px) {
            width: 100%;
        }

        @media screen and (max-width: 900px) {
            width: 90%;
            padding: 5px;
        }
        div{
            display: flex;
            width: 98%;
            height: 80%;
            flex-direction: column;
            align-self: center;
            font-size: 18px;
            border: 1px dashed #f64803;

            img{
                width: 100px;
                margin: 10px auto;
            }

            
            p{
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px dashed #f64803;
                width: 100%;
                border-collapse: collapse;

                span{
                    color: green;
                }

                @media screen and (max-width: 900px) {
                    font-size: 14px;
                    text-align: center;
                }
            }
        }
        button{
            width: 98%;
            height: 45px;
            border-radius: 5px;
            border: none;
            background-color: #f64803;
            font-size: 16px;
            margin: 20px 0 0 6px;

            @media screen and (max-width: 900px) {
                font-size: 14px;
            }
        }
    }
    .manual{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        width: 60%;
        border: 1px solid;
        padding: 10px;

        @media screen and (max-width: 900px) {
            width: 100%;
        }

        h2{
            color: yellow;

            @media screen and (max-width: 900px) {
                font-size: 13px;
                text-align: center;
            }
        }

        span{
            text-decoration: underline;

            @media screen and (max-width: 900px) {
                font-size: 11px;
                text-align: center;
            }
        }
        h3{
            @media screen and (max-width: 900px) {
                font-size: 15px;
                text-align: center;
            }
        }
        p{
            span{
                color: #28a745;
                text-decoration: none;
            }

            @media screen and (max-width: 900px) {
                font-size: 11px;
                text-align: center;
            }
        }

        


        @media screen and (max-width: 900px) {
            width: 90%;
            padding: 5px;
        }

        label{
            font-size: 14px;

            @media screen and (max-width: 900px) {
                font-size: 11px;
            }
        }

        .proof{
            width: fit-content;
            padding: 10px 50px 10px 20px;
            background-color: #17a2b8;
            border-radius: 5px;
        }
        form{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        div{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 5px;

            img{
                width: 200px;
                height: 200px;
                object-fit: cover;
            }

            #proof{
                display: none;
            }

            input{
                height: 45px;
                text-indent: 15px;
                font-size: 18px;
                background-color: #000;
                border: 1px solid #f64803;
                border-radius: 5px;
                color: #fff;

                ::placeholder{
                    font-family: "Exo", sans-serif;
                }

                @media screen and (max-width: 900px) {
                    font-size: 15px;
                }

               
            }
        }
        button{
            width: 100%;
            height: 45px;
            border-radius: 5px;
            border: none;
            background-color: #f64803;
            font-size: 16px;

            @media screen and (max-width: 900px) {
                font-size: 14px;
            }
        }
    }
`