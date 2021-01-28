import React from 'react';

// import tr from 'tr';

function Table(props) {
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
          <th scope="col">Cell</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <th key={props.login.uuid} scope="row">
            {props.name.first}
          </th>
          <td>{props.name.last}</td>
          <td>{props.email}</td>
          <td>@{props.cell}</td>
        </tr> */}
      </tbody>
    </table>
  );
}

export default Table;
