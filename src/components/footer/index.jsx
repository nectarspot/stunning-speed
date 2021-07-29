import * as React from "react"
import { BiMap } from 'react-icons/bi'
import { AiOutlineMail, AiFillFacebook , AiFillTwitterSquare} from 'react-icons/ai'
import {
  footerStyle,
  footerwrapper,
  address,
  maintitle,
  mainline,
  flex,
  socialicons
} from "./footer.module.css"

export function Footer() {
  return (
    <footer className={footerStyle}>
     <div className={footerwrapper}>
        <div className={address}>

          <ul>
            <li>
              <p className={flex}><span><BiMap size="18px"/></span> 3333 Warrenville Rd, <br/> Suite 200, Lisle, IL 60532</p>
            </li>
            <li>
              <p className={flex}><span><AiOutlineMail size="18px"/></span> hello@valuepetmeds.com</p>
            </li>
          </ul>
         
        </div>

        <div>
        <p className={maintitle}>My Account</p>
        <div className={mainline}>
          <ul>
            <li>Login</li>
            <li>Register</li>
          </ul>
          </div>
        </div>

        <div >
        <p className={maintitle}>Customer Service</p>
        <div className={mainline}>
          <ul>
            <li>Contact</li>
            <li>Terms & Conditions</li>
          </ul>
          </div>
        </div>

        <div >
        <p className={maintitle}>join our social network</p>
        <div>
          <ul className={socialicons}>
            <li>
            <span><AiFillFacebook size="30px"/></span>
            </li>
            <li>
            <span><AiFillTwitterSquare size="30px"/></span>
            </li>
          </ul>
        </div>
        </div>

        </div>
    </footer>
  )
}
