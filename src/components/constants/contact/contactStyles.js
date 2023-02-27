import styled from "styled-components";

export const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin: 100px auto 0 auto;
    width: 98%;
    background-color: #eee;

    h3{
        font-family: "Raleway", Sans-serif;
        font-size: 15px;
        color: #f64803;
        margin-bottom: 20px;
    }
    h1{
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 28px;
        margin-bottom: 20px;
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 99%;

        label{
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            color: #585757;
            display: flex;
            gap: 2px;

            span{
                color: rgb(255, 0,0);
                font-size: 17px;
            }
        }

        input{
            width: 100%;
            height: 40px;
            border: 1px solid #ccc;
        }
        textarea{
            border: 1px solid #ccc;
            margin-bottom: 0;
        }

        section{
            display: flex;
        }
        .email, .comment{
            flex-direction: column;
            gap: 5px;
        }

        .fullname{
            justify-content: space-between;
            align-items: flex-end;
            width: 100%;

            h5{
                font-size: 13px;
                font-family: 'Roboto', sans-serif;
                color: #7A7A7A;
                font-weight: 500;
            }
            div{
                width: 47%;
            }

            .first, .last{
                display: flex;
                flex-direction: column;
                gap: 5px;
            }
        }

        button{
            width: fit-content;
            padding: 10px 20px;
            background-color: #ddd;
            border: 1px solid #ccc;
            font-family: 'Roboto', sans-serif;
        }
    }
`