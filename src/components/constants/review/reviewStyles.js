import styled from "styled-components";
import background from '../../assets/review.jpeg'

export const Reviews = styled.div`
    width: 100vw;
    background-color: blue;
    margin-left: -52px;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: 100% 100%;

    .box{
        width: 100%;
        height: 100%;
        background: rgba(31, 26, 69, 0.7);
        padding: 40px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media screen and (max-width: 900px) {
        width: 100%;
        margin-left: 0;
    }

    h1{
        font-family: "Acme", Sans-serif;
        margin: 15px 0 30px 0;
        text-align: center;
    }
    main{
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        overflow: hidden;
        flex-wrap: nowrap;
        box-sizing: border-box;
        scrollbar-width: none;
        padding: 20px 5px;

        @media screen and (max-width: 900px) {
            flex-direction: column;
        }

        section{
            width: 23%;
            display: flex;
            flex-direction: column;
            align-items: center;


            >span{
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 5px;
                font-size: 15px;
                width: 100%;
                height: 200px;
                border-radius: 10px;
                padding: 30px 20px;
                text-align: center;
                font-family: 'Roboto', sans-serif;
                font-weight: 300;
                background-color: #fff;
                margin-bottom: -20px;

                div{
                    display: flex;
                    flex-direction: row;
                    width: fit-content;
                    border: none;
                    background-color: transparent;
                }
            }
            img{
                border-radius: 10px;
                width: 50px;
                height: 50px;
                margin: 10px 0 20px 0;
            }
            h2{
                font-size: 17px;
                font-family: 'Roboto', sans-serif;
                color: #fff;
                margin-bottom: 0px;
            }
            h3{
                font-size: 15px;
                font-family: 'Roboto', sans-serif;
                color: #0EFF0A;
            }
        }
        // section:nth-child(1){
        //     animation: slider 20s  0.5s infinite ;
        // }
        // @keyframes slider {
        //     0%{
        //         transform: translateX(0px);
        //     }
        //     10%{
        //         transform: translateX(-450px);
        //     }
        //     20%{
        //         transform: translateX(-900px);
        //     }
        //     30%{
        //         transform: translateX(-1350px);
        //     }
        //     40%{
        //         transform: translateX(-1800px);
        //     }
        //     50%{
        //         transform: translateX(-2250px);
        //     }
        //     60%{
        //         transform: translateX(-1800px);
        //     }
        //     70%{
        //         transform: translateX(-1350px);
        //     }
        //     80%{
        //         transform: translateX(-900px);
        //     }
        //     90%{
        //         transform: translateX(-450px);
        //     }
        //     100%{
        //         transform: translateX(0px);
        //     }
        // }
    }

`