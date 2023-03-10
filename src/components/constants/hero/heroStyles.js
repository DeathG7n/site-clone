import styled from "styled-components";
import background from '../../assets/corporate.jpeg'

export const Container = styled.div`
    width: 100vw;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: -100;

    .box{
        width: 100%;
        height: 100%;
        background: rgba(31, 26, 69, 0.7);
        padding-bottom: 30px;
    }
    
    h1{
        font-size: 69px;
        font-family: 'Roboto', sans-serif;
        padding: 50px 300px 0px 50px;
        color: #0000ff;

        @media screen and (max-width: 900px) {
            font-size: 35px;
            padding: 20px;
        }
    }
    p{
        font-size: 21px;
        font-weight: 400;
        font-family: 'Poppins', sans-serif;
        padding: 30px 250px 0px 50px;
        margin-bottom: 20px;

        @media screen and (max-width: 900px) {
            font-size: 16px;
            padding: 0px 20px;
        }
    }
    button{
        width: fit-content;
        height: 40px;
        border-radius: 15px;
        padding: 0 20px;
        margin-left: 50px;
        border: 2px solid #0000ff;
        background-color: #0000ff;
        color: #fff;

        :hover{
            background-color: transparent;
        }

        @media screen and (max-width: 900px) {
            margin-left: 20px;
        }
    }


    @media screen and (max-width: 900px) {
        
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
        width: 24%;
        border-right: 5px solid #0000ff;
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

        @media screen and (max-width: 900px) {
            width: 70%;
        }
    }

    @media screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`