import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    section{
        display: flex;
        gap: 20px;
        margin-left: 600px;

        @media screen and (max-width: 900px) {
            margin-left: 0;
            gap: 5px;
        }
        button{
            width: fit-content;
            height: 45px;
            padding: 0 20px;
            border-radius: 5px;
            border: none;
            background-color: #f64803;
            font-size: 16px;
            @media screen and (max-width: 900px) {
                padding: 0 5px;
            }
        }
    }
    table{
        width: 100%;
        border-collapse: collapse;
        margin: 40px 0;
        box-shadow: -1px 5px 15px -5px #f64803;
        
        thead{
            background-color: #f64803;

            td:first-child{
                border-left-top-radius: 10px;
            }
            td:last-child{
                border-right-top-radius: 10px;
            }
        }
        td{
            padding: 12px 15px ;
            font-size: 14px;
            color: #000;
        }
        tbody td{
            color: #fff;
            background-color: #000;
            border-radius: 10px;
        }
    }
    main{
        margin-top: 20px;
        width: 90%;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 5px 0;
        background-color: #101113;
        align-self: center;

        p{
            padding: 10px 20px;
            font-size: 12px;
            display: flex;
            justify-content: space-between;
            border-top: 1px solid #3e3e3e;
            color: #fff;

            .id{
                color: #0000ff;
            }

            span{
                .wallet{
                    width: fit-content;
                    padding: 2px 5px;
                    background-color: #08b7bf;
                    border-radius: 5px;
                }
            }

            
        }
        p:first-child{
            border-top: none;
        }
    }
`