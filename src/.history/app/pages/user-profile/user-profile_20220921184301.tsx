/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import React, { useEffect, useState } from 'react';
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import Modal from 'react-bootstrap/Modal';



const UserProfile: FC = () => {
  const [show, setShow] = useState(false);
  const 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <>
    <button className="add-user-btn btn btn-primary" onClick={handleShow}>Add User</button>
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="form-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add User Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form className="add-user-form">
           <div className="form-group">
             <input type="text" name="n1" placeholder="Name"  className="form-control" />
           </div>
           <div className="row">
             <div className="col-md-6">
             <div className="form-group">
             <input type="text" name="p1" placeholder="Phone No."  className="form-control" />
           </div>
             </div>
             <div className="col-md-6">
             <div className="form-group">
            <select className="form-control">
              <option>Select Type</option>
              <option>Select Type</option>
              <option>Select Type</option>
              <option>Select Type</option>
              <option>Select Type</option>
            </select>
           </div>
             </div>
             <div className="col-md-6">
             <div className="form-group">
             <input type="time" name="t1" placeholder="Time Zone" className="form-control" />
           </div>
             </div>
             <div className="col-md-6">
             <div className="form-group">
            <input type="date" name="d1" placeholder="Start Date" className="form-control" />
           </div>
             </div>
             <div className="col-md-6">
             <div className="form-group">
            <input type="text" name="mtc" placeholder="Missed Text Cost" className="form-control" />
           </div>
             </div>
             <div className="col-md-6">
             <div className="form-group">
            <input type="text" name="tc" placeholder="Total Cost" className="form-control" />
           </div>
             </div>
             <div className="col-md-6">
             <div className="form-group">
            <input type="text" name="qcv" placeholder="QCV" className="form-control" />
           </div>
             </div>
             <div className="col-md-6">
             <div className="form-group">
            <input type="text" name="f1" placeholder="False" className="form-control readyonly" readOnly />
           </div>
             </div>
             <div className="form-group buttons-group">
             <button  className="btn btn-primary add-btn">Add</button>
             <button  className="btn btn-primary cancel-btn">Cancel</button>
             </div>
           </div>
         </form>
        </Modal.Body>

      </Modal>

      <PageTitle breadcrumbs={[]}>User Profile</PageTitle>


      <div id="sample_1_wrapper" className="dataTables_wrapper"><div className="row"><div className="col-md-6 col-sm-12">
        <div className="dataTables_length" id="sample_1_length"><label>Show
          <select name="sample_1_length" aria-controls="sample_1" className="form-control input-sm input-xsmall input-inline"><option value="5">5</option><option value="10">10</option><option value="15">15</option><option value="20">20</option><option value="-1">All</option></select> entries</label></div></div>
          <div className="col-md-6 col-sm-12"><div id="sample_1_filter" className="dataTables_filter"><label><span className="search-tag">Search:</span><input type="search" className="form-control input-sm input-small input-inline" placeholder="" aria-controls="sample_1" /></label></div></div></div><div className="table-scrollable">
            <table className="table table-striped table-bordered table-hover dataTable dtr-inline collapsed" id="sample_1" role="grid" aria-describedby="sample_1_info" >
                                        <thead>
                                            <tr role="row">
                                              <th className="sorting_asc">Name</th>
                                              <th className="sorting">Phone No.</th>
                                              <th className="sorting">Service Type</th>
                                              <th className="sorting">Start Date</th>
                                              <th className="sorting">Missed Text Cost</th>
                                              <th className="sorting">Total Cost</th>
                                              <th className="sorting">QCV</th>
                                              <th className="sorting">RB</th>
                                              <th className="sorting">Action</th>
                                              </tr>
                                        </thead>

                                        <tbody>
                                          <tr role="row" className="odd">
                                                <td tabIndex={0} className="sorting_1" >Ryan</td>
                                                <td>1234567890</td>
                                                <td>M</td>
                                                <td>14-09-2022</td>
                                                <td>$0.00</td>
                                                <td>$162,700</td>
                                                <td>Later</td>
                                                <td>True</td>
                                                <td>
                                                  <label><i className="fa fa-edit" ></i></label>
                                                  <label><i className="fa fa-trash"></i></label>
                                                </td>

                                            </tr>
                                            <tr role="row" className="even">
                                                <td tabIndex={0} className="sorting_1" >Jeremy</td>
                                                <td>1234567890</td>
                                                <td>M</td>
                                                <td>14-09-2022</td>
                                                <td>$0.00</td>
                                                <td>$162,700</td>
                                                <td>Later</td>
                                                <td>True</td>
                                                <td>
                                                  <label><i className="fa fa-edit"></i></label>
                                                  <label><i className="fa fa-trash"></i></label>
                                                </td>

                                            </tr>
                                            <tr role="row" className="odd">
                                                <td tabIndex={0} className="sorting_1" >Ryan</td>
                                                <td>1234567890</td>
                                                <td>M</td>
                                                <td>14-09-2022</td>
                                                <td>$0.00</td>
                                                <td>$162,700</td>
                                                <td>Later</td>
                                                <td>True</td>
                                                <td>
                                                  <label><i className="fa fa-edit"></i></label>
                                                  <label><i className="fa fa-trash"></i></label>
                                                </td>

                                            </tr>
                                            <tr role="row" className="even">
                                                <td tabIndex={0} className="sorting_1" >Jeremy</td>
                                                <td>1234567890</td>
                                                <td>M</td>
                                                <td>14-09-2022</td>
                                                <td>$0.00</td>
                                                <td>$162,700</td>
                                                <td>Later</td>
                                                <td>True</td>
                                                <td>
                                                  <label><i className="fa fa-edit"></i></label>
                                                  <label><i className="fa fa-trash"></i></label>
                                                </td>

                                            </tr>
                                            <tr role="row" className="odd">
                                                <td tabIndex={0} className="sorting_1" >Ryan</td>
                                                <td>1234567890</td>
                                                <td>M</td>
                                                <td>14-09-2022</td>
                                                <td>$0.00</td>
                                                <td>$162,700</td>
                                                <td>Later</td>
                                                <td>True</td>
                                                <td>
                                                  <label><i className="fa fa-edit"></i></label>
                                                  <label><i className="fa fa-trash"></i></label>
                                                </td>

                                            </tr>
                                            <tr role="row" className="even">
                                                <td tabIndex={0} className="sorting_1" >Jeremy</td>
                                                <td>1234567890</td>
                                                <td>M</td>
                                                <td>14-09-2022</td>
                                                <td>$0.00</td>
                                                <td>$162,700</td>
                                                <td>Later</td>
                                                <td>True</td>
                                                <td>
                                                  <label><i className="fa fa-edit"></i></label>
                                                  <label><i className="fa fa-trash"></i></label>
                                                </td>

                                            </tr>
                                            <tr role="row" className="odd">
                                                <td tabIndex={0} className="sorting_1" >Ryan</td>
                                                <td>1234567890</td>
                                                <td>M</td>
                                                <td>14-09-2022</td>
                                                <td>$0.00</td>
                                                <td>$162,700</td>
                                                <td>Later</td>
                                                <td>True</td>
                                                <td>
                                                  <label><i className="fa fa-edit"></i></label>
                                                  <label><i className="fa fa-trash"></i></label>
                                                </td>

                                            </tr>
                                            <tr role="row" className="even">
                                                <td tabIndex={0} className="sorting_1" >Jeremy</td>
                                                <td>1234567890</td>
                                                <td>M</td>
                                                <td>14-09-2022</td>
                                                <td>$0.00</td>
                                                <td>$162,700</td>
                                                <td>Later</td>
                                                <td>True</td>
                                                <td>
                                                  <label ><i className="fa fa-edit" ></i></label>
                                                  <label><i className="fa fa-trash"></i></label>
                                                </td>

                                            </tr>


                                          </tbody>
                                    </table></div><div className="row"><div className="col-md-5 col-sm-12">
                                      <div className="dataTables_info" id="sample_1_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div></div><div className="col-md-7 col-sm-12">
                                        <div className="dataTables_paginate paging_bootstrap_number" id="sample_1_paginate">
                                          <ul className="pagination" style={{"visibility": "visible"}}>
                                            <li className="prev disabled"><a href="#" title="Prev">
                                              <i className="fa fa-angle-left"></i></a></li>
                                              <li className="active"><a href="#">1</a></li>
                                              <li><a href="#">2</a></li>
                                              <li><a href="#">3</a></li>
                                              <li><a href="#">4</a></li>
                                              <li><a href="#">5</a></li>
                                              <li className="next"><a href="#" title="Next"><i className="fa fa-angle-right"></i></a></li>
                                              </ul></div></div></div></div>

    </>
  )
}

export {UserProfile}
