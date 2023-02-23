import styled from "styled-components";

export const Footers = styled.div`
    background-color: #114168;
    display: flex;
    padding: 40px 80px;
    justify-content: space-between;
    font-family: 'Poppins', sans-serif;
    color: #fff;
    margin-top: 40px;

    div{
        display: flex;
        flex-direction: column;
        width: 23%;

        h4{
            font-size: 17px;
            margin-bottom: 3px;
        }
        
        span{
            width: 30px;
            height: 3px;
            border: 1px solid #f64803;
            background-color: #f64803;
            margin-bottom: 10px;
        }

        ul{
            width: 100%;
            list-style-type: none;
            display: flex;
            flex-direction: column;
            
            li{
                width: 100%;
                border-top: 1px dashed #72acdc;
                padding: 8px 0;
                font-size: 13px;
                color: #72acdc;
            }
        }
    }

    .logo{
        
        p{
            margin-bottom: 10px;
            font-size: 13px;
            line-height: 20px;
        }
    }
    // ~div{
    //     width: 100%;
    //     height: 100px;
    //     display: flex;
    //     flex-direction: column;
    //     position: relative;
    //     img{
    //         width: 50px;
    //     }
    //     h1{
    //         font-family: 'Acme', sans-serif;
    //         display: flex;
    //         gap: 20px;
    //         color: #428b0d;
    //     }
    //     h1:last-child{
    //         position: absolute;
    //         top: 40px;
    //         left: 120px;
    //     }
    // }
    ~ section{
        width: 100%;
        padding: 20px 0 20px 450px;
        background-color: #002858;
        display: flex;
        gap: 200px;
        color: #fff;
        font-size: 12px;
        font-family: 'Poppins', sans-serif;
    }
`