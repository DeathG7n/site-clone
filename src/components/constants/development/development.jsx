import React from 'react'
import Hack from '../../assets/complete-img-768x647.jpg'
import { Developmen } from './developmentStyles'
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';

export default function Development() {
  return (
    <Developmen>
            <div><img src={Hack} alt="hacker" /></div>
            <div>
              <h1>Our Development</h1>
              <p>Our key success factor is our desire to constantly move forward. We learn on the regular basis, analyzing our achievements and then doing the next step in our development.</p>
              <span>
                <div><ScreenShareIcon sx={{fontSize: "30px"}}/>Easy Access</div>
                <div><LocalAtmIcon sx={{fontSize: "30px"}}/>Instant Payout</div>
                <div><PeopleAltIcon sx={{fontSize: "30px"}}/>Departure Of The Our Experts</div>
                <div> <SettingsSuggestIcon sx={{fontSize: "30px"}}/>24/7 Support And Remote Admit</div>
              </span>
            </div>
          </Developmen>
  )
}
