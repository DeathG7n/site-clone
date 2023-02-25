import styled from "styled-components";

export const Container = styled.div`
    border-radius: 5px;
    width: 100%;
    border: 2px solid rgba(213, 76, 21, 0.5);
    box-shadow: -1px 1px 15px -5px #f64803;
`

export const ProfileImg = styled.img`
    width: 200px;
    height: 200px;
    border: 5px solid;
    border-radius: 50%;
    object-fit: cover;
`

export const Form = styled.form`
    margin: 30px auto;
    width: 100%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 20px;

    .box-name{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 10px;
        position: relative;
        margin-bottom: 5px;

        div{
            display: flex;
            align-items: center;
            width: 95%;
            height: 50px;
            border-radius: 5px;
            border-top-right-radius: 0px;
            border-bottom-right-radius: 0px;
            background-color: rgba(213, 76, 21, 0.5);
            border: 1px solid #f64803;
            text-indent: 20px;
            font-size: 17px;
            color: #fff;
        }

        label{
            font-size: 14px;
            font-family: "Josefin Sans", sans-serif;
            display: flex;
            align-items: center;
            gap: 2px;

            h5{
                color: rgb(14 153 57);
            }
        }


        .amount{
            width: 95%;
            border-top-right-radius: 0px;
            border-bottom-right-radius: 0px;
        }

        span{
            width: 5%;
            height: 50px;
            background-color: #f64803;
            color: #555;
            position: absolute;
            right: 0;
            top: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    }

    .profileImg{
        width: 35%;
        height: 100%;
        display: flex;
        justify-content: center;
        margin-top: 20px;
        position: relative;

        .photo {
            display: none;
        }

        .edit{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            position: absolute;
            top: 130px;
            right: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #fff;
        }

        label{
            width: 100%;
            display: flex;
            justify-content: center;
        }

    }

    .profile-name{
        display: flex;
        padding-bottom: 30px;
        justify-content: center;
    }
    .box{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 10px;
        margin-bottom: 10px;

        label{
            font-size: 14px;
            font-family: "Josefin Sans", sans-serif;
        }
    }

    .profile{
        width: 65%;
        display: flex;
        flex-wrap: wrap;
        gap: 29px;

        label{
            font-size: 14px;
            font-family: "Josefin Sans", sans-serif;
        }

        .box-name{
            display: flex;
            flex-direction: column;
            width: 48%;
            gap: 10px;

            div{
                display: flex;
                align-items: center;
                width: 100%;
                height: 50px;
                border-radius: 5px;
                background-color: rgba(213, 76, 21, 0.5);
                border: 1px solid #f64803;
                text-indent: 20px;
                font-size: 17px;
                color: #fff;
            }
        }
        input{
            ::placeholder{
                color: #fff;
            }
        }
    }
    .details{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        label{
            font-size: 14px;
            font-family: "Josefin Sans", sans-serif;
        }

        .box-name{
            margin: 10px 0;
            display: flex;
            flex-direction: column;
            width: 48%;
            gap: 10px;

            div{
                display: flex;
                align-items: center;
                width: 100%;
                height: 50px;
                border-radius: 5px;
                background-color: rgba(213, 76, 21, 0.5);
                border: 1px solid #f64803;
                text-indent: 20px;
                font-size: 17px;
                color: #fff;
            }
        }
        input{
            ::placeholder{
                color: #fff;
            }
        }
    }
    input, select{
        width: 100%;
        height: 50px;
        border-radius: 5px;
        background-color: transparent;
        border: 1px solid #f64803;
        text-indent: 20px;
        font-size: 17px;
        color: #fff;
        font-family: 'Exo', sans-serif;

        :focus{
            outline: 1px solid #f64803;
            border: none;
        }
    }

    option{
        color: #000;
        background-color: #f64803;
    }
    button{
        background-color: #f64803;
        width: 100%;
        padding: 10px 0;
        border-radius: 5px;
        font-size: 18px;
        border: none;
        margin-top: 20px;
        font-family: 'Exo', sans-serif;
    }
`