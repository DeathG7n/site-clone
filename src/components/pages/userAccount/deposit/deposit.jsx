import React, { useEffect, useState } from "react";
import { Container, PreviewContainer } from "./depositStyles";
import Bit from "../../../assets/bit.png";
import Tether from "../../../assets/tether.png";
import Eth from "../../../assets/eth.png";
import { DataContext } from "../../../api/context";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import proof from "../../../assets/proof.png";
import axios from "axios";

export default function Deposit({ handleModal }) {
  return (
    <Routes>
      <Route
        path="/"
        element={<DepositDashboard handleModal={handleModal} />}
      />
      <Route
        path="/preview"
        element={<DepositPreview handleModal={handleModal} />}
      />
      <Route
        path="/manual"
        element={<DepositManual handleModal={handleModal} />}
      />
    </Routes>
  );
}

export const DepositDashboard = ({ handleModal }) => {
  const { dispatch } = DataContext();
  const handleCoin = (coin) => {
    dispatch({ type: "COIN", payload: coin });
    handleModal();
  };
  return (
    <Container>
      <button className="button">Deposit History</button>
      <section>
        <div className="box">
          <img src={Tether} alt="coin" />
          <div>
            <p>Tether</p>
            <p>Charge - 0 USD + 0%</p>
            <p>
              <button onClick={() => handleCoin("Tether")}>Deposit</button>
            </p>
          </div>
        </div>
        <div className="box">
          <img src={Eth} alt="coin" />
          <div>
            <p>Ethereum</p>
            <p>Charge - 0 USD + 0%</p>
            <p>
              <button onClick={() => handleCoin("Ethereum")}>Deposit</button>
            </p>
          </div>
        </div>
        <div className="box">
          <img src={Bit} alt="coin" />
          <div>
            <p>Bitcoin</p>
            <p>Charge - 0 USD + 0%</p>
            <p>
              <button onClick={() => handleCoin("Bitcoin")}>Deposit</button>
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export const DepositPreview = () => {
  const history = useNavigate();
  const {
    dispatch,
    state: { coin, depositAmount, currentCoin },
  } = DataContext();
  const [img, setImg] = useState(Tether);
  const [id, setId] = useState("TRC");
  const [price, setPrice] = useState("");
  const currentPrice = currentCoin?.find(
    (m) => m?.name === coin
  )?.current_price;
  const conversionRate = (1 / currentPrice).toExponential();
  console.log(currentPrice);
  useEffect(() => {
    if (coin === null) {
      history("/user/deposit");
    }
    if (coin === "Tether") {
      setImg(Tether);
      setId("USDT");
    } else if (coin === "Bitcoin") {
      setImg(Bit);
      setId("BTC");
    } else {
      setImg(Eth);
      setId("ETH");
    }
    const getCoins = async () => {
      await axios({
        method: "get",
        url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(function (response) {
        dispatch({ type: "CURRENT", payload: response?.data });
      });
    };

    getCoins();
  }, [coin]);
  console.log(conversionRate);

  return (
    <PreviewContainer>
      <div className="preview">
        <div className="box">
          <img src={img} alt="" />
          <p>Amount: {depositAmount} USD</p>
          <p>Charge: 0 USD</p>
          <p>Payable: {depositAmount} USD</p>
          <p>
            Conversion Rate: 1 USD = {conversionRate} {id}
          </p>
          <p>
            In {id}: {(depositAmount * (1 / currentPrice)).toFixed(6)}
          </p>
        </div>
        <Link to={"/user/deposit/manual"} style={{ width: "100%" }}>
          <button>Confirm</button>
        </Link>
      </div>
    </PreviewContainer>
  );
};

export const DepositManual = ({ handleModal }) => {
  const {
    state: { coin, depositAmount, currentCoin },
  } = DataContext();
  const [img, setImg] = useState(Tether);
  const currentPrice = currentCoin?.find(
    (m) => m?.name === coin
  )?.current_price;
  useEffect(() => {
    if (coin === "Tether") {
      setImg("USDT");
    } else if (coin === "Bitcoin") {
      setImg("BTC");
    } else {
      setImg("ETH");
    }
  }, [coin]);
  console.log(depositAmount);

  return (
    <PreviewContainer>
      <div className="manual">
        <p>
          You have requested <span>{depositAmount} USD</span> , Please pay{" "}
          <span>
          {(depositAmount * (1 / currentPrice)).toFixed(6)} {img}
          </span>{" "}
          for successful payment
        </p>
        <h3>Please follow the instruction below</h3>
        <span>
          Please make your cryptocurrency deposit to your designated wallet
          address below:
        </span>
        <h2>TWGmZt9mPkdGTE5HW8eEop7YxVKugLh1FE</h2>
        <p>NETWORK: {img}</p>
        <form action="">
            <div>
                <label>Proof of Payment</label>
                <img src={proof} alt="proof" />
                <input type="file" name="proof" id="proof" />
                <label htmlFor="proof" className="proof">
                    Select Proof of Payment
                </label>
            </div>
            <div>
                <label htmlFor="memo">MEMO</label>
                <input type="text" placeholder="MEMO" name="memo" />
            </div>
            <button>Pay Now</button>
        </form>
        
      </div>
    </PreviewContainer>
  );
};
