import React from 'react'
import { puppywrapper ,mainTitle , subTitle} from "./puppy.module.css"
import { StaticImage } from "gatsby-plugin-image"


export function Puppy() {

    return( 
    <div>
        <div>         
        <h1 className={mainTitle}>Puppy & Kitten Headquarters</h1>
        <p className={subTitle}>The place to find everything your special new friends will need.</p>
        </div>  
       <div className={puppywrapper}>
            <div>
            <StaticImage 
            src="https://cdn.shopify.com/s/files/1/0045/7585/4662/files/puppy-kitty.png?6441290950159095921"
            alt="value pet meds" />
            </div>
        </div>
    </div>
    ) }