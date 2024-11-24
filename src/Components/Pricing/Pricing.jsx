import React from 'react'
import './Pricing.css';
import tag from "../../Assets/icon-info-grey.svg"
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
function Pricing() {
  return (
    <>
     <div className='pricing-main'>
      <div className='pricing-inner'>
        <div className='pricing-table'>
          <div className='pricing-row3'>
         
          </div>
         <div className='pricing-column'>
         <div  className='pricing-row1'>
            <h2>Basics</h2>
            
          </div>
          <div  className='pricing-row1'>
            <h2>Standard</h2>
          
          </div>
          <div  className='pricing-row1'>
            <h2>Premimum</h2>
           
          </div>
         </div>
        </div>
        <div className='pricing-head'>
        <div className='pricing-table-row'>
           <div className='pricing-row2'>
           <h3>Pricing</h3>
           <img src={tag} alt="" />
           </div>
           <div  className='pricing-row'>
           <h5>Per GB$ 10.75</h5>
           </div>
           <div  className='pricing-row'>
           <h5>Per GB$ 9.75</h5>
           </div>
           <div className='pricing-row'>
           <h5>Custom</h5>
          </div>
        </div>
        <div className='pricing-table-row'>
           <div  className='pricing-row2'>
           <h3>JavaScript rendering</h3>
           <img src={tag} alt="" />
           </div>
           <div  className='pricing-row'>
           <IoMdCheckmark style={{color:"green"}}/>
           </div>
           <div  className='pricing-row'>
           <IoMdCheckmark style={{color:"green"}}/>
           </div>
           <div  className='pricing-row'> <IoMdCheckmark style={{color:"green"}}/></div>
        </div>
        <div className='pricing-table-row'>
           <div  className='pricing-row2'>
           <h3>Rotating & Premium Proxies</h3>
           <img src={tag} alt="" />
           </div>
           <div  className='pricing-row'>
           <IoMdCheckmark style={{color:"green"}}/>
           </div>
           <div  className='pricing-row'>
           <IoMdCheckmark style={{color:"green"}}/>
           </div>
           <div  className='pricing-row'> <IoMdCheckmark style={{color:"green"}}/></div>
        </div>
        <div className='pricing-table-row'>
           <div  className='pricing-row2'>
           <h3>Geotargeting</h3>
           <img src={tag} alt="" />
           </div>
           <div  className='pricing-row'>
           <IoMdCheckmark style={{color:"green"}}/>
           </div>
           <div  className='pricing-row'>
           <IoMdCheckmark style={{color:"green"}}/>
           </div>
           <div  className='pricing-row'> <IoMdCheckmark style={{color:"green"}}/></div>
        </div>
        <div className='pricing-table-row'>
           <div  className='pricing-row2'>
           <h3>Priority Email Support</h3>
           <img src={tag} alt="" />
           </div>
           <div  className='pricing-row'>
           <RxCross2 style={{color:"red"}}/>
           </div>
           <div  className='pricing-row'>
           <IoMdCheckmark style={{color:"green"}}/>
           </div>
           <div  className='pricing-row'> <IoMdCheckmark style={{color:"green"}}/></div>
        </div>
        <div className='pricing-table-row'>
           <div  className='pricing-row2'>
           <h3>Dedicated Manager</h3>
           <img src={tag} alt="" />
           </div>
           <div  className='pricing-row'>
           <RxCross2 style={{color:"red"}}/>
           </div>
           <div  className='pricing-row'>
           <RxCross2 style={{color:"red"}}/>
           </div>
           <div  className='pricing-row'> <IoMdCheckmark style={{color:"green"}}/></div>
        </div>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Pricing
