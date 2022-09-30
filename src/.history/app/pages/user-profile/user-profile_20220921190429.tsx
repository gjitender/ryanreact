/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import React, {useEffect, useState} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import Modal from 'react-bootstrap/Modal'

const UserProfile: FC = () => {
  const [show, setShow] = useState(false)
  const dummyData = [
    {
      id: 1,
      name: 'Keary',
      service_type: 'M',
      phone: '681-113-5987',
      missed_test_cost: '$4.34',
      start_date: '5/13/2022',
      total_cost: '$6.60',
      qsv: 'Pathfinder',
      rb: true,
    },
    {
      id: 2,
      name: 'Rochell',
      service_type: 'F',
      phone: '265-134-2599',
      gender: 'Genderqueer',
      missed_test_cost: '$4.55',
      start_date: '10/16/2021',
      total_cost: '$9.01',
      qsv: 'Neon',
      rb: true,
    },
    {
      id: 3,
      name: 'Carney',
      service_type: 'M',
      phone: '715-171-8253',
      missed_test_cost: '$9.89',
      start_date: '10/28/2021',
      total_cost: '$5.62',
      qsv: 'Land Cruiser',
      rb: true,
    },
    {
      id: 4,
      name: 'Fransisco',
      service_type: 'M',
      phone: '214-699-3322',
      missed_test_cost: '$6.38',
      start_date: '4/9/2022',
      total_cost: '$8.75',
      qsv: 'G-Class',
      rb: true,
    },
    {
      id: 5,
      name: 'Vilhelmina',
      service_type: 'M',
      phone: '886-262-1260',
      gender: 'Female',
      missed_test_cost: '$4.35',
      start_date: '6/16/2022',
      total_cost: '$7.29',
      qsv: 'Dakota',
      rb: true,
    },
    {
      id: 6,
      name: 'Mata',
      service_type: 'M',
      phone: '936-911-8019',
      missed_test_cost: '$7.41',
      start_date: '2/7/2022',
      total_cost: '$9.85',
      qsv: 'CR-V',
      rb: false,
    },
    {
      id: 7,
      name: 'Tootsie',
      service_type: 'F',
      phone: '722-731-5493',
      gender: 'Female',
      missed_test_cost: '$9.75',
      start_date: '3/22/2022',
      total_cost: '$1.55',
      qsv: 'Blazer',
      rb: true,
    },
    {
      id: 8,
      name: 'Scarlet',
      service_type: 'F',
      phone: '706-208-5313',
      gender: 'Female',
      missed_test_cost: '$7.73',
      start_date: '2/6/2022',
      total_cost: '$5.13',
      qsv: 'Ram Van 2500',
      rb: true,
    },
    {
      id: 9,
      name: 'Archer',
      service_type: 'F',
      phone: '803-985-5719',
      missed_test_cost: '$9.96',
      start_date: '9/25/2021',
      total_cost: '$2.90',
      qsv: 'Optima',
      rb: false,
    },
    {
      id: 10,
      name: 'Isidoro',
      service_type: 'M',
      phone: '550-646-8338',
      missed_test_cost: '$5.58',
      start_date: '1/28/2022',
      total_cost: '$2.73',
      qsv: 'R-Class',
      rb: false,
    },
    {
      id: 11,
      name: 'Nigel',
      service_type: 'M',
      phone: '559-765-5269',
      missed_test_cost: '$8.05',
      start_date: '4/3/2022',
      total_cost: '$6.34',
      qsv: 'Firefly',
      rb: false,
    },
    {
      id: 12,
      name: 'Jemmie',
      service_type: 'M',
      phone: '226-473-1775',
      gender: 'Female',
      missed_test_cost: '$7.90',
      start_date: '11/18/2021',
      total_cost: '$4.09',
      qsv: 'New Beetle',
      rb: false,
    },
    {
      id: 13,
      name: 'Bernice',
      service_type: 'M',
      phone: '749-614-2233',
      gender: 'Female',
      missed_test_cost: '$5.32',
      start_date: '7/25/2022',
      total_cost: '$0.32',
      qsv: 'XC90',
      rb: true,
    },
    {
      id: 14,
      name: 'Codi',
      service_type: 'F',
      phone: '277-452-8140',
      gender: 'Genderfluid',
      missed_test_cost: '$2.50',
      start_date: '6/5/2022',
      total_cost: '$0.42',
      qsv: 'XL-7',
      rb: false,
    },
    {
      id: 15,
      name: 'Melli',
      service_type: 'F',
      phone: '927-838-2353',
      gender: 'Female',
      missed_test_cost: '$5.07',
      start_date: '9/14/2022',
      total_cost: '$2.65',
      qsv: 'Maxima',
      rb: true,
    },
    {
      id: 16,
      name: 'Ingaberg',
      service_type: 'M',
      phone: '197-712-8669',
      gender: 'Female',
      missed_test_cost: '$1.95',
      start_date: '3/15/2022',
      total_cost: '$9.81',
      qsv: 'Xterra',
      rb: true,
    },
    {
      id: 17,
      name: 'Roley',
      service_type: 'M',
      phone: '698-150-6131',
      missed_test_cost: '$0.10',
      start_date: '7/16/2022',
      total_cost: '$4.95',
      qsv: 'Crown Victoria',
      rb: false,
    },
    {
      id: 18,
      name: 'Dorine',
      service_type: 'F',
      phone: '233-127-2493',
      gender: 'Female',
      missed_test_cost: '$3.08',
      start_date: '2/6/2022',
      total_cost: '$6.05',
      qsv: 'Gallardo',
      rb: true,
    },
    {
      id: 19,
      name: 'Moll',
      service_type: 'M',
      phone: '267-665-0584',
      gender: 'Female',
      missed_test_cost: '$1.80',
      start_date: '7/26/2022',
      total_cost: '$1.91',
      qsv: 'MX-5',
      rb: true,
    },
    {
      id: 20,
      name: 'Ruggiero',
      service_type: 'M',
      phone: '673-307-2789',
      missed_test_cost: '$8.21',
      start_date: '8/6/2022',
      total_cost: '$9.92',
      qsv: 'Torino',
      rb: true,
    },
  ]

  const [data, setData] = useState<any[]>(dummyData)
  const [currentPage, setCurrentPage] = useState(1)
  const [dataPerPage, setDataPerPage] = useState(5)
  const indexOfLastData = currentPage * dataPerPage
  const indexOfFirstData = indexOfLastData - dataPerPage
  const currentdataList = data.slice(indexOfFirstData, indexOfLastData)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const pageNumbers: any[] = []

  for (let i = 1; i <= Math.ceil(data.length / dataPerPage); i++) {
    pageNumbers.push(i)
  }

  const handleClickPrevious = () => {
    if (currentPage === 1) {
      return
    }
    setCurrentPage(currentPage - 1)
    paginate(currentPage - 1)
  }

  const handleClickNext = () => {
    if (currentPage === data.length - 1) {
      return
    }
    setCurrentPage(currentPage + 1)
    paginate(currentPage + 1)
  }

  return (
    <>
      <button className='add-user-btn btn btn-primary' onClick={handleShow}>
        Add User
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
        className='form-user'
      >
        <Modal.Header closeButton>
          <Modal.Title>Add User Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='add-user-form'>
            <div className='form-group'>
              <input type='text' name='n1' placeholder='Name' className='form-control' />
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-group'>
                  <input type='text' name='p1' placeholder='Phone No.' className='form-control' />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <select className='form-control'>
                    <option>Select Type</option>
                    <option>Select Type</option>
                    <option>Select Type</option>
                    <option>Select Type</option>
                    <option>Select Type</option>
                  </select>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <input type='time' name='t1' placeholder='Time Zone' className='form-control' />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <input type='date' name='d1' placeholder='Start Date' className='form-control' />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <input
                    type='text'
                    name='mtc'
                    placeholder='Missed Text Cost'
                    className='form-control'
                  />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <input type='text' name='tc' placeholder='Total Cost' className='form-control' />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <input type='text' name='qcv' placeholder='QCV' className='form-control' />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <input
                    type='text'
                    name='f1'
                    placeholder='False'
                    className='form-control readyonly'
                    readOnly
                  />
                </div>
              </div>
              <div className='form-group buttons-group'>
                <button className='btn btn-primary add-btn'>Add</button>
                <button className='btn btn-primary cancel-btn'>Cancel</button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      <PageTitle breadcrumbs={[]}>User Profile</PageTitle>

      <div id='sample_1_wrapper' className='dataTables_wrapper'>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <div className='dataTables_length' id='sample_1_length'>
              <label>
                Show
                <select
                  name='sample_1_length'
                  aria-controls='sample_1'
                  className='form-control input-sm input-xsmall input-inline'
                >
                  <option value='5'>5</option>
                  <option value='10'>10</option>
                  <option value='15'>15</option>
                  <option value='20'>20</option>
                  <option value='-1'>All</option>
                </select>{' '}
                entries
              </label>
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <div id='sample_1_filter' className='dataTables_filter'>
              <label>
                <span className='search-tag'>Search:</span>
                <input
                  type='search'
                  className='form-control input-sm input-small input-inline'
                  placeholder=''
                  aria-controls='sample_1'
                />
              </label>
            </div>
          </div>
        </div>
        <div className='table-scrollable'>
          <table
            className='table table-striped table-bordered table-hover dataTable dtr-inline collapsed'
            id='sample_1'
            role='grid'
            aria-describedby='sample_1_info'
          >
            <thead>
              <tr role='row'>
                <th className='sorting_asc'>Name</th>
                <th className='sorting'>Phone No.</th>
                <th className='sorting'>Service Type</th>
                <th className='sorting'>Start Date</th>
                <th className='sorting'>Missed Text Cost</th>
                <th className='sorting'>Total Cost</th>
                <th className='sorting'>QCV</th>
                <th className='sorting'>RB</th>
                <th className='sorting'>Action</th>
              </tr>
            </thead>

            <tbody>
              {currentdataList.map((data) => {
                return (
                  <tr role='row' className='odd'>
                    <td tabIndex={0} className='sorting_1'>
                      {data.name}
                    </td>
                    <td> {data.phone}</td>
                    <td>{data.service_type}</td>
                    <td>{data.start_date}</td>
                    <td>{data.total_cost}</td>
                    <td>{data.missed_test_cost}</td>
                    <td>{data.qsv}</td>
                    <td>{data.rb.toString()}</td>
                    <td>
                      <label>
                        <i className='fa fa-edit'></i>
                      </label>
                      <label>
                        <i className='fa fa-trash'></i>
                      </label>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className='row'>
          <div className='col-md-5 col-sm-12'>
            <div className='dataTables_info' id='sample_1_info' role='status' aria-live='polite'>
              Showing 1 to 10 of 57 entries
            </div>
          </div>
          <div className='col-md-7 col-sm-12'>
            <div className='dataTables_paginate paging_bootstrap_number' id='sample_1_paginate'>
              <ul className='pagination' style={{visibility: 'visible'}}>
                <li
                  className='prev '
                  className={
                    'prev cursor-pointer ' + (currentPage === number  'disabled' : 'hidden')
                  }
                >
                  <a href='#' title='Prev'>
                    <i className='fa fa-angle-left'></i>
                  </a>
                </li>

                {pageNumbers.map((number) => (
                  <li
                    className={'cursor-pointer ' + (currentPage === number ? 'active' : 'hidden')}
                  >
                    <a key={number} onClick={() => paginate(number)}>
                      {' '}
                      {number}
                    </a>
                  </li>
                ))}

                <li className='next'>
                  <a title='Next'>
                    <i className='fa fa-angle-right'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export {UserProfile}
