import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    div{
        display: flex;
        gap: 20px;
        margin-left: 600px;
        button{
            width: fit-content;
            height: 45px;
            padding: 0 20px;
            border-radius: 5px;
            border: none;
            background-color: #f64803;
            font-size: 16px;
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
`