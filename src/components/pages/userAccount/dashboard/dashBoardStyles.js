import styled  from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    p{
        color: #fff;
    }
    .link{
        width: 100%;
        height: 45px;
        background-color: rgba(255, 120, 0 , 0.3);
        border: 1px solid #f64803;
        display: flex;
        padding: 0 0 0 20px;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;
        border-radius: 2px;

        span{
            width: 3%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f64803;
        }
    }
    section{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        p{
            color: #000;
        }

        .box{
            width: 32%;
            height: 100px;
            display: flex;
            border-radius: 10px;
            background-color: #f64803;
            margin-bottom: 30px;

            .value{
                width: 75%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 20px;
                gap: 5px;
            }
            .sym{
                width: 25%;
                display: flex;
                justify-content: center;
                align-items: center;

                div{
                    width: 60%;
                    height: 60%;
                    border-radius: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #000;
                }
            }
        }
        table{
            width: 100%;
            border-collapse: collapse;
            margin: 20px 10px;
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
    }
    
`