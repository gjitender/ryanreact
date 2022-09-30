/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import React, {useEffect, useState} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import Modal from 'react-bootstrap/Modal'
import _ from 'lodash'

const UserDetail: FC = () => {
  const [show, setShow] = useState(false)
  const dummyData = [
    {
      id: 1,
      date: '20/09/2022',
      time: 'M',
      text: 'N',
      tc: '$8.21',
    },
    {
      id: 2,
      date: '20/09/2022',
      time: 'M',
      text: 'N',
      tc: '$8.21',
    },
    {
      id: 3,
      date: '20/09/2022',
      time: 'M',
      text: 'N',
      tc: '$8.21',
    },
    {
      id: 4,
      date: '20/09/2022',
      time: 'M',
      text: 'N',
      tc: '$8.21',
    },
    {
      id: 5,
      date: '20/09/2022',
      time: 'M',
      text: 'N',
      tc: '$8.21',
    },
    {
      id: 6,
      date: '20/09/2022',
      time: 'M',
      text: 'N',
      tc: '$8.21',
    },
    {
      id: 7,
      date: '20/09/2022',
      time: 'M',
      text: 'N',
      tc: '$8.21',
    },
    {
      id: 8,
      date: '20/09/2022',
      time: 'M',
      text: 'N',
      tc: '$8.21',
    },
    {
      id: 9,
      date: '20/09/2022',
      time: 'M',
      text: 'N',
      tc: '$8.21',
    },
    {
      id: 10,
      date: '20/09/2022',
      time: 'M',
      text: 'N',
      tc: '$8.21',
    },
    {
      id: 11,
      date: '20/09/2022',
      time: 'M',
      text: 'N',
      tc: '$8.21',
    },
    {
      id: 12,
      date: '20/09/2022',
      time: 'M',
      text: 'N',
      tc: '$8.21',
    },
    {
      id: 13,
      date: '20/09/2022',
      time: 'M',
      text: 'N',
      tc: '$8.21',
    },
    {
      id: 14,
      date: '20/09/2022',
      time: 'M',
      text: 'N',
      tc: '$8.21',
    },
    {
      id: 15,
      date: '20/09/2022',
      time: 'M',
      text: 'N',
      tc: '$8.21',
    },
    {
      id: 16,
      date: '20/09/2022',
      time: 'M',
      text: 'N',
      tc: '$8.21',
    },
    {
      id: 17,
      date: '20/09/2022',
      time: 'M',
      text: 'N',
      tc: '$8.21',
    },
    {
      id: 18,
      date: '20/09/2022',
      time: 'M',
      text: 'N',
      tc: '$8.21',
    },
    {
      id: 19,
      date: '20/09/2022',
      time: 'M',
      text: 'N',
      tc: '$8.21',
    },
    {
      id: 20,
      date: '20/09/2022',
      time: 'M',
      text: 'N',
      tc: '$8.21',
     
    },
  ]

  const [data, setData] = useState<any[]>(dummyData)
  const [currentPage, setCurrentPage] = useState(1)
  const [dataPerPage, setDataPerPage] = useState(5)
  const indexOfLastData = currentPage * dataPerPage
  const indexOfFirstData = indexOfLastData - dataPerPage
  const currentdataList = data.slice(indexOfFirstData, indexOfLastData)
  const [currentData, setCurrentData] = useState(currentdataList)
  const [searchValue, setSearchValue] = useState('')

  const handleSearchFilter = (e) => {
    setSearchValue(e.target.value)
  }

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

  useEffect(() => {
    if (searchValue !== '') {
      const timeout = setTimeout(() => {
        const filter = _.filter(data, (user) => {
          return _.includes(_.lowerCase(JSON.stringify(_.values(user))), _.lowerCase(searchValue))
        })
        setCurrentData(filter)
      }, 500)
      return () => clearTimeout(timeout)
    }
  }, [searchValue])

  useEffect(() => {
    if (searchValue === '') {
      setCurrentData(currentdataList)
    }
  }, [currentdataList])

  return (
    <>
     

      <PageTitle breadcrumbs={[]}>User Details</PageTitle>

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
                  onChange={(e) => {
                    setDataPerPage(Number(e.target.value))
                  }}
                  value={dataPerPage}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                  <option value={data.length}>All</option>
                </select>
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
                  value={searchValue}
                  onChange={handleSearchFilter}
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
                <th className='sorting_asc'>Date</th>
                <th className='sorting'>Time of Day</th>
                <th className='sorting'>Text send to Ryan?</th>
                <th className='sorting'>Ryan TC</th>
               
              </tr>
            </thead>

            <tbody>
              {currentData.map((data) => {
                return (
                  <tr role='row' className='odd'>
                    <td tabIndex={0} className='sorting_1'>
                      {data.date}
                    </td>
                    <td> {data.time}</td>
                    <td>{data.text}</td>
                    <td>{data.tc}</td>
                   
                   
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className='row'>
          <div className='col-md-5 col-sm-12'>
            <div className='dataTables_info' id='sample_1_info' role='status' aria-live='polite'>
              Showing {indexOfFirstData + 1} to {indexOfLastData} of {data.length} entries
            </div>
          </div>
          <div className='col-md-7 col-sm-12'>
            <div className='dataTables_paginate paging_bootstrap_number' id='sample_1_paginate'>
              <ul className='pagination' style={{visibility: 'visible'}}>
                <li
                  className={'prev cursor-pointer ' + (currentPage === 1 && 'disabled')}
                  onClick={() => handleClickPrevious()}
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

                <li
                  className={
                    'next cursor-pointer ' + (currentPage === pageNumbers.length && 'disabled')
                  }
                  onClick={() => handleClickNext()}
                >
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

export {UserDetail}
