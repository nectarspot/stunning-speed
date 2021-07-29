import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { AiOutlineCar } from 'react-icons/ai'
import { HiOutlineRefresh } from 'react-icons/hi'
import { supportwrapper , title , subtitle , border } from "./support.module.css"

export function Support(){
    return(
        <div>
          <div className={supportwrapper}>

            <div className={border}>
                <p className={title}>
                <span><BiSupport fill="#29abe2" size="24px" /></span>
                SUPPORT
                </p>
                <p className={subtitle}>hello@valuepetmeds.com</p>
            </div>
            <div className={border}>
                <p className={title}>
                <span><AiOutlineCar fill="#29abe2" size="24px" /></span>
                FREE SHIPPING
                </p>
                <p className={subtitle}>On orders over $49 - exclusions apply</p>
            </div>
            <div>
                <p className={title}>
                <span><HiOutlineRefresh stroke="#29abe2" size="24px" /></span>
                MONEY BACK
                </p>
                <p className={subtitle}>100% Money-back Guarantee</p>
            </div>
        
          </div>
        </div>
    )
}