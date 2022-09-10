import React from 'react'
import Table from 'react-bootstrap/Table';
import { GrDocumentUpdate } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";

const List = () => {
  return (
    <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Dataset name</th>
          <th>Number of records in dataset</th>
          <th>timestamp</th>
          <th>delete</th>
          <th>update</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td><button><RiDeleteBinLine /></button></td>
          <td><button><GrDocumentUpdate /></button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td><button><RiDeleteBinLine /></button></td>
          <td><button><GrDocumentUpdate /></button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@te</td>
          <td><button><RiDeleteBinLine /></button></td>
          <td><button><GrDocumentUpdate /></button></td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default List