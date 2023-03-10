import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;

    main{
        width: 100%;
        display: flex;
        font-family: 'Poppins', sans-serif;

        .nav{
            color: #fff;
            width: 20%;
            height: 100vh;
            background-color: #114168;
            padding: 20px 0;

            h3{
                text-align: center;
            }

            ul{
                list-style-type: none;
                display: flex;
                flex-direction: column;
                padding: 20px 30px;
                gap: 15px;

                li{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    cursor: pointer;
                }
            }
        }

        .main{
            width: 80%;
            height: 100vh;
            background-color: #eafaff;

            .search{
                position: relative;
                input{
                    width: 100%;
                    height: 40px;
                    border: none;
                    outline: none;
                    box-shadow: 0px 2px 5px -2px;
                    position: sticky;
                    top: 0;
                    text-indent: 30px;

                    ::placeholder{
                        font-size: 16px;
                        font-family: 'Exo', sans-serif;
                    }
                }
            }

            .hero{
                width: 100%;
                padding: 10px 40px;

                .box{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    padding: 20px 0;

                    .card{
                        padding: 10px;
                        display: flex;
                        width: 30%;
                        height: 100px;
                        border-radius: 10px;
                        background-color: #fff;
                        box-shadow: 2px 2px 5px -2px;

                        h4{
                            color: #555;
                        }

                        .desc{
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                        }

                        .icon{
                            width: 20%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                    }
                }
            }
        }

        .history{
            background-color: #fff;
            width: 90%;
            padding: 10px 20px;
            margin-left: 40px;

            table{
                width: 100%;
                border-collapse: collapse;
                margin: 20px 10px;
                border: 1px solid #114168;
                
                thead{
                    background-color: #114168;
                }
                td{
                    padding: 12px 15px ;
                    font-size: 14px;
                    color: #000;
                    .wallet{
                        font-size: 10px;
                        width: fit-content;
                        padding: 2px 8px;
                        background-color: #08b7bf;
                        border-radius: 5px;
                    }
                }
                .id{
                    color: #0000ff;
                }
                .wallet{
                    font-size: 14px;
                    width: fit-content;
                    padding: 2px 5px;
                    background-color: #00adff;
                    border-radius: 5px;
                }
            }
        }

        .users{
            width: 100%;
            height: 100vh;
            padding: 20px;
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            overflow: scroll;

            .user{
                cursor: pointer;
                font-family: 'Exo', sans-serif;
                color: #fff;
                font-weight: 900;
                border-radius: 10px;
                width: 150px;
                height: 150px;
                background-color: red;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
`