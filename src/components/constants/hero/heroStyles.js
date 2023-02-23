import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    background-color: darkblue;
    padding-bottom: 30px;
    z-index: -100;
    
    h1{
        font-size: 69px;
        font-family: 'Roboto', sans-serif;
        padding: 50px 300px 0px 50px;
        color: #f64803;
    }
    p{
        font-size: 21px;
        font-weight: 400;
        font-family: 'Poppins', sans-serif;
        padding: 30px 250px 0px 50px;
        margin-bottom: 20px;
    }
    button{
        width: fit-content;
        height: 40px;
        border-radius: 15px;
        padding: 0 20px;
        margin-left: 50px;
        border: 2px solid #f64803;
        background-color: #f64803;
        color: #fff;

        :hover{
            background-color: darkblue;
        }
    }
`

export const Box = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
    margin-top: 60px;

    div{
        background-color: #0A0A0ACF;
        width: 350px;
        border-right: 5px solid #f64803;
        padding: 20px 20px 40px 20px;
        position: relative;
        z-index: 1;

        h1{
            font-size: 20px;
            padding:0;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 5px;
        }
        h2{
            font-size: 40px;
            color: #fff;
            font-family: 'Roboto', sans-serif;
        }
        h2~p{
            font-size: 16px;
            margin-bottom: 10px;
            font-family: 'Roboto', sans-serif;
        }
        p{
            font-size: 12px;
            color: #fff;
            padding: 0;
            z-index: 3;
            position: relative;
        }
        span{
            position: absolute;
            right: 20px;
            z-index: 2;
        }
    }
`