/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect } from 'react'
import React, { useState } from 'react';
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { updateTimezone, retrieveTimezone } from '../../modules/auth/core/_requests';
import { useAuth } from '../../modules/auth';
import { TimezoneModel } from '../../modules/auth/core/_models';

const TimeSettingPage: FC = () => {
  const [time, setTime]=useState({morningtime:-1, eveningtime:-1})
  const {auth}=useAuth()
  const hourArr = Array.from({ length: 12 }, (_, index) => index)

  useEffect(()=>{
    retrieveTimezone(auth?auth.key:'').then(result=>{
      console.log('result', result)
      let data=result.data[0]
      setTime({morningtime:data.morningtime?data.morningtime:-1, eveningtime:data.eveningtime?data.eveningtime:-1});
    });
    // console.log('test', data);
    // setTime({morningtime:rawTime.morningtime});
  }, [])

  const submitTimezone = (): void => {
      let timesetting=updateTimezone(auth?auth.key:'', time)
      console.log('time setting', timesetting)
  }

  const handleTimeChange=(type:string, value:number)=>{
    console.log(type, value);
    if (type=='1'){
      let hours=value+6
      console.log(hours)
      setTime({...time, morningtime:hours})
    }
    else if (type=='2'){
      let hours=(value+18)%24
      console.log(hours)
      setTime({...time, eveningtime:hours})
    }
  }

  return (
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
                    <select className="form-control" onChange={(e)=>handleTimeChange('1', parseInt(e.target.value))} value={time.morningtime!=-1?(time.morningtime-6).toString():'-1'}>
                      <option key={-1}>Select Time</option>
                      {/* <option>09:00AM</option>
                      <option>07:00AM</option>
                      <option>06:30AM</option> */}
                      {
                      hourArr.map((item, ind) => {
                        return (
                          <option key={item} value={item}>{ind <= 3 ? `0${item + 6}` : item + 6}:00{ind >= 6 ? 'PM' : 'AM'}</option>
                        )
                      })}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Night Time</label>
                    <select className="form-control" onChange={(e)=>handleTimeChange('2', parseInt(e.target.value))} value={time.eveningtime!=-1?((time.eveningtime+6)%24).toString():'-1'}>
                      <option key={-1}>Select Time</option>
                      {/* <option>09:00PM</option>
                      <option>07:00PM</option>
                      <option>06:30PM</option> */}
                      {
                        hourArr.map((item, ind) => {
                          return (
                            <option key={item} value={item}>{ind <= 5 ? item + 18 : `0${item % 6}`}:00{ind <= 5 ? 'PM' : 'AM'}</option>
                          )
                        })
                      }
                    </select>
                  </div>
                  <div className="form-group center align-center">
                    <button className="btn btn-sucess save-btn" onClick={submitTimezone}>Save</button>
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
}

const TimeSetting: FC = () => {
  const intl = useIntl()
  return (
    <>
      <TimeSettingPage />
    </>
  )
}

export { TimeSetting }
