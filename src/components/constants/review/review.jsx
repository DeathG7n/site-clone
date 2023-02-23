import React from 'react'
import { Reviews } from './reviewStyles'
import StarPurple500SharpIcon from '@mui/icons-material/StarPurple500Sharp';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import John from '../../assets/john.jpg'
import Elna from '../../assets/elna.jpg'
import Rose from '../../assets/rose.jpg'
import Alen from '../../assets/alen.jpg'

export default function Review() {
  return (
    <Reviews>
            <h1>What Clients Say About Us</h1>
            <main>
              <section>
                <span>Professionalism, expertise, and excellent service by the admins made the entire process comfortable and a pleasant experience. 5 STARS to them. I highly recommend this company.
                  <div>
                    <StarPurple500SharpIcon sx={{fontSize: "16px", color: "#f64803"}}/>
                    <StarPurple500SharpIcon sx={{fontSize: "16px", color: "#f64803"}}/>
                    <StarPurple500SharpIcon sx={{fontSize: "16px", color: "#f64803"}}/>
                    <StarPurple500SharpIcon sx={{fontSize: "16px", color: "#f64803"}}/>
                    <StarPurple500SharpIcon sx={{fontSize: "16px", color: "#f64803"}}/>
                  </div>
                </span>
                <ArrowDropDownSharpIcon sx={{fontSize: '48px', color: "#fff"}}/>
                <img src={Alen} alt="john" />
                <h2>Alen Meair</h2>
                <h3>Investor</h3>
              </section>
              <section>
                <span>I made a withdrawal which was swift and easy, this company did a wonderful job working with me. I would recommend them to anyone who has an interest in making profits with them.
                  <div>
                    <StarPurple500SharpIcon sx={{fontSize: "16px", color: "#f64803"}}/>
                    <StarPurple500SharpIcon sx={{fontSize: "16px", color: "#f64803"}}/>
                    <StarPurple500SharpIcon sx={{fontSize: "16px", color: "#f64803"}}/>
                    <StarPurple500SharpIcon sx={{fontSize: "16px", color: "#f64803"}}/>
                    <StarPurple500SharpIcon sx={{fontSize: "16px", color: "#f64803"}}/>
                  </div>
                </span>
                <ArrowDropDownSharpIcon sx={{fontSize: '48px', color: "#fff"}}/>
                <img src={Elna} alt="john" />
                <h2>Elna Dias</h2>
                <h3>Investor</h3>
              </section>
              <section>
                <span>It's a great experience with how this company doing business, trustworthy and quick response if you have any questions, and very, Very happy with the day-to-day withdrawal.
                  <div>
                    <StarPurple500SharpIcon sx={{fontSize: "16px", color: "#f64803"}}/>
                    <StarPurple500SharpIcon sx={{fontSize: "16px", color: "#f64803"}}/>
                    <StarPurple500SharpIcon sx={{fontSize: "16px", color: "#f64803"}}/>
                    <StarPurple500SharpIcon sx={{fontSize: "16px", color: "#f64803"}}/>
                    <StarPurple500SharpIcon sx={{fontSize: "16px", color: "#f64803"}}/>
                  </div>
                </span>
                <ArrowDropDownSharpIcon sx={{fontSize: '48px', color: "#fff"}}/>
                <img src={John} alt="john" />
                <h2>John Dona</h2>
                <h3>Investor</h3>
              </section>
              <section>
                <span>Excellent service, fast responses, and profits delivered as expected. Have Invested multiple times and am very happy with the services. Communications are exceptional. 
                  <div>
                    <StarPurple500SharpIcon sx={{fontSize: "16px", color: "#f64803"}}/>
                    <StarPurple500SharpIcon sx={{fontSize: "16px", color: "#f64803"}}/>
                    <StarPurple500SharpIcon sx={{fontSize: "16px", color: "#f64803"}}/>
                    <StarPurple500SharpIcon sx={{fontSize: "16px", color: "#f64803"}}/>
                    <StarPurple500SharpIcon sx={{fontSize: "16px", color: "#f64803"}}/>
                  </div>
                </span>
                <ArrowDropDownSharpIcon sx={{fontSize: '48px', color: "#fff"}}/>
                <img src={Rose} alt="john" />
                <h2>Rose Papst</h2>
                <h3>Investor</h3>
              </section>
            </main>
          </Reviews>
  )
}
