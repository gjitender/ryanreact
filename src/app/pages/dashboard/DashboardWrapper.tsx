/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import React, { useState } from 'react';
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core';
import PieChart from 'react-pie-graph-chart';
import ProgressBar from 'react-bootstrap/ProgressBar';

const DashboardPage: FC = () => (
 
  <>
    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xxl-4'>
        <div className="row">
        <div className="col-md-3">
        <div className="box-panel bg-1">
          <h3>Morning SMS</h3>
          <h1>2999</h1>
        </div></div>
        <div className="col-md-3">
        <div className="box-panel bg-2">
          <h3>Night SMS</h3>
          <h1>2999</h1>
        </div></div>
        <div className="col-md-3">
        <div className="box-panel bg-3">
          <h3>Total Customer</h3>
          <h1>2999</h1>
        </div></div>
        <div className="col-md-3">
        <div className="box-panel bg-4">
          <h3>Total Earning</h3>
          <h1>$2999</h1>
        </div></div>
        <div className="col-md-7">
          <h3 className="heading-tag">Top Earning</h3>
          <div>
          <label className="totalearning-label">Ryan <span className="value">$500</span></label>
          <ProgressBar now={60} variant="success" />
          </div>
          <div>
          <label className="totalearning-label">Jeremy <span className="value">$600</span></label>
          <ProgressBar now={80} variant="success" />
          </div>
          <div>
          <label className="totalearning-label">James <span className="value">$400</span></label>
          <ProgressBar now={40} variant="success" />
          </div>
          <div>
          <label className="totalearning-label">William <span className="value">$550</span></label>
          <ProgressBar now={60} variant="success" />
          </div>
          <div>
          <label className="totalearning-label">Robert <span className="value">$700</span></label>
          <ProgressBar now={90} variant="success" />
          </div>
        </div>
        <div className="col-md-5">
          <h3 className="heading-tag">Total Messages</h3>
        <PieChart data={[
            {
              type: "M",
              value: 40,
              color: "#E97D30"
            },
            {
              type: "N",
              value: 20,
              color: "#62B170"
            },
           
            {
              type: "B",
              value: 40,
              color: "#4BA2DA"
            }
          ]} />
        </div>
        
        </div>

      </div>

    
    </div>
    {/* end::Row */}

   
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
