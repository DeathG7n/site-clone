import styled from "styled-components";

export const Plans = styled.div`
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
    }
    span{
        display: flex;
        justify-content: center;
        gap: 15px;


        > div{
            width: 270px;
            background-color: #eee;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0px 0px 30px 0px;
            position: relative;
            overflow: hidden;

            > div{
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 10px 60px;
                background-color: red;
                transform: rotate(45deg);
                position: absolute;
                top: 20px;
                right: -40px;
                text-transform: uppercase;
                font-weight: 500;
                font-family: 'Roboto', sans-serif;
                font-size: 13px;
            }

            h2{
                padding: 20px 10px;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                text-transform: uppercase;
                font-family: 'Roboto', sans-serif;
                background-color: #666;
                color: #fff;
            }
            h1{
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 69px;
                font-family: 'Roboto', sans-serif;
                color: #666;
                margin-top: 30px;
                span{
                    font-size: 35px;
                    margin: 0;
                    padding: 0;
                }
            }
            ul{
                list-style-type: none;
                display: flex;
                flex-direction: column;
                margin-bottom: 10px;
                li{
                    color: #666;
                    font-family: 'Roboto', sans-serif;
                    padding: 15px 0;
                    border-bottom: 2px solid #ddd;
                    margin: 0 20px;
                    font-size: 15px;
                }
                li:last-child{
                    border: none;
                }
            }
            button{
                width: 130px;
                height: 50px;
                border: 1px solid #f64803;
                background-color: #f64803;
                color: #fff;
                border-radius: 5px;
                font-family: 'Roboto', sans-serif;
                font-weight: 500;
                font-size: 16px;
                margin-bottom: 20px;
            }
            p{
                font-size: 12px;
                font-family: 'Roboto', sans-serif;
                color: #666;
            }
        }
    }
`