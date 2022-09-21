/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import React, { useState } from 'react';
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'



const TimeSettingPage: FC = () => (
 
  <>
    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xxl-4'>
        <div className="row">
          <h3 className="time-head">Add Time Zone</h3>
          <div className="col-md-3"></div>
          <div className="col-md-6">
          <div className="message-boundry timesetting">
            <form>
              <div className="form-group">
                <label>Morning Time</label>
                <select className="form-control">
                  <option>Select Time</option>
                  <option>09:00AM</option>
                  <option>07:00AM</option>
                  <option>06:30AM</option>
                </select>
              </div>
              <div className="form-group">
                <label>Night Time</label>
                <select className="form-control">
                  <option>Select Time</option>
                  <option>09:00PM</option>
                  <option>07:00PM</option>
                  <option>06:30PM</option>
                </select>
              </div>
              <div className="form-group center align-center">
                <button className="btn btn-sucess save-btn">Save</button>
                <button className="btn btn-sucess cancel-btn">Cancel</button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>

    
    </div>
    {/* end::Row */}

   
  </>
)

const TimeSetting: FC = () => {
  const intl = useIntl()
  return (
    <>
      
      <TimeSettingPage />
    </>
  )
}

export {TimeSetting}
