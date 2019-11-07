import React from 'react'
import { Table } from 'react-bootstrap'

export default function studentList() {
  return (
    <section className="classList">
      <div className="container">
        <h5 className="classListh5">
          <span className="classListh5l">Your Students (2)</span>
        </h5>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Student Email</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>opesiyanbola@yahoo.com</td>
              <td>Mathemathetics class</td>
            </tr>
            <tr>
              <td>2</td>
              <td>solaaina@gmail.com</td>
              <td>English class</td>
            </tr>
          </tbody>
        </Table>

      </div>
    </section>
  )
}
