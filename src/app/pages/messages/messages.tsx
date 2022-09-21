/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import React, { useState } from 'react';
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'



const Messagespage: FC = () => (
 
  <>
    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xxl-4'>
     <div className="message-boundry">
       <h3>Morning Automatic Response</h3>
       <div className="row">
         <div className="col-md-6">
           <div className="message">
             <label>Initial morning text ( At Specified Time )</label>
             <input type="text" name="message1" placeholder="Add text here" />
           </div>
         </div>
         <div className="col-md-6">
           <div className="message">
             <label>Morning automatic response 1 ( when customer is good )</label>
             <input type="text" name="message1" placeholder="Add text here" />
           </div>
         </div>
       </div>
       <div className="row">
         <div className="col-md-6">
           <div className="message">
             <label>Morning autometic response 2 ( when the customer responds with bad but does not want a quote </label>
             <input type="text" name="message1" placeholder="Add text here" />
           </div>
         </div>
         <div className="col-md-6">
           <div className="message">
             <label>Morning autometic response 3 ( when the customer responds with bad and wants a quote</label>
             <input type="text" name="message1" placeholder="Add text here" />
           </div>
         </div>
       </div>

       <h3>Night Automatic Response</h3>
       <div className="row">
         <div className="col-md-6">
           <div className="message">
             <label>Initial Night text ( At Specified Time )</label>
             <input type="text" name="message1" placeholder="Add text here" />
           </div>
         </div>
         <div className="col-md-6">
           <div className="message">
             <label>Night automatic response 1 ( when customer is good )</label>
             <input type="text" name="message1" placeholder="Add text here" />
           </div>
         </div>
       </div>
       <div className="row">
         <div className="col-md-6">
           <div className="message">
             <label>Night autometic response 2 ( when the customer responds with bad but does not want a quote </label>
             <input type="text" name="message1" placeholder="Add text here" />
           </div>
         </div>
         <div className="col-md-6">
           <div className="message">
             <label>Night autometic response 3 ( when the customer responds with bad and wants a quote</label>
             <input type="text" name="message1" placeholder="Add text here" />
           </div>
         </div>
       </div>
       <button className="btn btn-primary save-btn center">Save</button>
     </div>
      </div>

    
    </div>
    {/* end::Row */}

   
  </>
)

const Messages: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>Custom Messages</PageTitle>
      <Messagespage />
    </>
  )
}

export {Messages}
