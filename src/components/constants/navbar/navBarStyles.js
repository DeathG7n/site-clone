import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    padding: 0 90px 0 70px;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 100;
    border-bottom: 1px solid #ddd;

    ul{
        width: 60%;
        list-style-type: none;
        display: flex;
        justify-content: space-evenly;
        font-weight: 300;
        font-size: 16px;

        li{
            transition: all linear 0.2s;
            :hover{
                color: #f64803;
            }
        }
    }

`