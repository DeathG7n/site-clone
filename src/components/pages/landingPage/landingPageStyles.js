import styled from "styled-components";

export const Marquee = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    bottom: 0;

    z-index: 200;

    .marquee{
        width: 100%;
        background-color: #f64803;
        white-space: nowrap;
        overflow: hidden;

        div{
            color: #000;
            padding: 10px 0;
            animation: animate 150s linear infinite;
            padding-left: 10%;
            display: flex;
            gap: 20px;
            align-items: center;

            p{
                font-family: 'Poppins', sans-serif;
                display: flex;
                align-items: center;
                gap: 10px;
                img{
                    width: 20px;
                }

                .name{
                    font-weight: 600;
                }
            }
        }
    }

    @keyframes animate{
        100%{
            transform : translate(-100%, 0)
        }
    }

`
export const Body = styled.div`
    margin: 0px 50px 20px 50px;
    padding: 30px 0;
    border: 1px solid #eee;

    .table{
        @media screen and (max-width: 900px) {
            width: 100vw;
            overflow: scroll;
        }
    }

    @media screen and (max-width: 900px) {
        margin: 0;
        overflow-x: hidden;
    }
`

export const Button = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    gap: 10px;
    padding: 10px;
    margin-bottom: 50px;

    div{
        width: 100px;
        height: 50px;
        border: 1px solid #eee;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ddd;
        font-size: 15px;
        font-family: 'Poppins', sans-serif;
        cursor: no-drop;

        @media screen and (max-width: 900px) {
            width: 45%;
        }
    }

    @media screen and (max-width: 900px) {
        justify-content: center;
    }
`

export const Table = styled.table`
    font-family: 'Poppins', sans-serif;
    width: 100%;
    border-collapse: collapse;
    position: relative;

    td, th{
        padding: 12px 5px 12px 5px;
        border: 1px solid #ddd;
        text-align: center;
        font-size: 14px;
    }
    tbody td{
        color: #aaa;
        height: 60px;
        border-left: none;
        border-right: none;
        div{
            display: flex;
            flex-direction: column;
            gap: 5px;

            span{
                display: flex;
                align-items: center;
                gap: 5px;
            }
            p{
                text-transform: uppercase;
                font-weight: 600;
            }

            img{
                width: 20px;
            }
        }
    }
    th: nth-child(2){
        @media screen and (max-width: 900px) {
            position: sticky;
            left: 10px;
            background-color: #fff;
        }
    }
    tr td:nth-child(2){
        text-align : left;
        width: fit-content;
        border-left: 1px solid #ddd;
        border-right: 2px solid #ddd;
        background-color: #fff;
        

        @media screen and (max-width: 900px) {
            position: sticky;
            left: 10px;
        }
    }
    tbody tr:nth-child(odd){
        background-color: #f5f5f5;
    }
    @media screen and (max-width: 900px) {
        margin: 0;
        overflow-x: scroll;
    }
    
`
export const Box = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
    margin-top: 60px;

    section{
        width: 100vw;
        height: 100vh;
        background: #0f131280;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        position: fixed;
        z-index: 100;
       marquee{
            position: sticky;
            top:0;
        } 
    }
    

    div{
        background-color: #010128;
        width: 265px;
        border-right: 5px solid #f64803;
        padding: 20px 20px 40px 20px;

        h1{
            font-size: 20px;
            padding:0;
            margin-bottom: 15px;
        }
        h2{
            font-size: 40px;
            color: #fff;
            font-family: 'Roboto', sans-serif;
            display: flex;
            align-items: center;
            gap: 5px;
            margin-bottom: 10px;
        }
        h2~p{
            font-size: 15px;
            margin-bottom: 10px;
            font-family: 'Roboto', sans-serif;
        }
        p{
            font-size: 12px;
            color: #fff;
            padding: 0;
        }
    }

    @media screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`











