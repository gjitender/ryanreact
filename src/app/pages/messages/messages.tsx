/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect } from 'react'
import React, { useState } from 'react';
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { getMessages , saveMessages} from '../../modules/auth/core/_requests';
import { useAuth } from '../../modules/auth';
import { MessageModel } from '../../modules/auth/core/_models';

const Messagespage: FC = () => {
  const { auth } = useAuth()
  const [messages, setMessages] = useState(
    {
      morning_initial_msg: '',
      morning_response_good: '',
      morning_response_bad: '',
      morning_response_bad_quote: '',
      evening_initial_msg: '',
      evening_response_good: '',
      evening_response_bad: '',
      evening_response_bad_quote: ''
    }
  )

  const getMessagesInner = () => {
    getMessages(auth ? auth.key : '').then(result => {
      let data:MessageModel = result.data[0]
      console.log('---test---', data);
      setMessages({
        morning_initial_msg: data.morning_initial_msg,
        morning_response_good: data.morning_response_good,
        morning_response_bad: data.morning_response_bad,
        morning_response_bad_quote: data.morning_response_bad_quote,
        evening_initial_msg: data.evening_initial_msg,
        evening_response_good: data.evening_response_good,
        evening_response_bad: data.evening_response_bad,
        evening_response_bad_quote: data.evening_response_bad_quote
      })
    })
  }

  useEffect(() => {
    getMessagesInner();
  }, [])

  const saveMessagesInner = () => {
    saveMessages(auth?auth.key:'', messages).then(result=>{
      let data:MessageModel=result.data[0];
      setMessages({
        morning_initial_msg: data.morning_initial_msg,
        morning_response_good: data.morning_response_good,
        morning_response_bad: data.morning_response_bad,
        morning_response_bad_quote: data.morning_response_bad_quote,
        evening_initial_msg: data.evening_initial_msg,
        evening_response_good: data.evening_response_good,
        evening_response_bad: data.evening_response_bad,
        evening_response_bad_quote: data.evening_response_bad_quote
      })
    })
  }

  const changeMessage=(type:string, newMessage:string)=>{
    console.log(type, newMessage);
    switch(type){
      case '1': setMessages({...messages, morning_initial_msg:newMessage });break;
      case '2': setMessages({...messages, morning_response_good:newMessage });break;
      case '3': setMessages({...messages, morning_response_bad:newMessage });break;
      case '4': setMessages({...messages, morning_response_bad_quote:newMessage });break;
      case '5': setMessages({...messages, evening_initial_msg:newMessage });break;
      case '6': setMessages({...messages, evening_response_good:newMessage });break;
      case '7': setMessages({...messages, evening_response_bad:newMessage });break;
      case '8': setMessages({...messages, evening_response_bad_quote:newMessage });break;
      default: break;
    }
  }

  return (

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
                  <input type="text" name="message1" placeholder="Add text here" value={messages.morning_initial_msg} onChange={(e)=>{changeMessage('1', e.target.value)}}/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="message">
                  <label>Morning automatic response 1 ( when customer is good )</label>
                  <input type="text" name="message1" placeholder="Add text here" value={messages.morning_response_good} onChange={(e)=>{changeMessage('2', e.target.value)}}/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="message">
                  <label>Morning autometic response 2 ( when the customer responds with bad but does not want a quote </label>
                  <input type="text" name="message1" placeholder="Add text here" value={messages.morning_response_bad} onChange={(e)=>{changeMessage('3', e.target.value)}} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="message">
                  <label>Morning autometic response 3 ( when the customer responds with bad and wants a quote</label>
                  <input type="text" name="message1" placeholder="Add text here" value={messages.morning_response_bad_quote} onChange={(e)=>{changeMessage('4', e.target.value)}}/>
                </div>
              </div>
            </div>

            <h3>Night Automatic Response</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="message">
                  <label>Initial Night text ( At Specified Time )</label>
                  <input type="text" name="message1" placeholder="Add text here" value={messages.evening_initial_msg} onChange={(e)=>{changeMessage('5', e.target.value)}}/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="message">
                  <label>Night automatic response 1 ( when customer is good )</label>
                  <input type="text" name="message1" placeholder="Add text here" value={messages.evening_response_good} onChange={(e)=>{changeMessage('6', e.target.value)}}/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="message">
                  <label>Night autometic response 2 ( when the customer responds with bad but does not want a quote </label>
                  <input type="text" name="message1" placeholder="Add text here" value={messages.evening_response_bad} onChange={(e)=>{changeMessage('7', e.target.value)}}/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="message">
                  <label>Night autometic response 3 ( when the customer responds with bad and wants a quote</label>
                  <input type="text" name="message1" placeholder="Add text here" value={messages.evening_response_bad_quote} onChange={(e)=>{changeMessage('8', e.target.value)}}/>
                </div>
              </div>
            </div>
            <button className="btn btn-primary save-btn center" onClick={()=>saveMessagesInner()}>Save</button>
          </div>
        </div>


      </div>
      {/* end::Row */}


    </>
  )
}

const Messages: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>Custom Messages</PageTitle>
      <Messagespage />
    </>
  )
}

export { Messages }
