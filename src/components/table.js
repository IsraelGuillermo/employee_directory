import React from 'react';

function Table(props) {
  return (
    <table className="table table-striped table-dark rounded text-center">
      <thead>
        <tr>
          <th scope="col">Photo</th>
          <th scope="col">
            First<button onClick={props.sort}>sort</button>
          </th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
          <th scope="col">Cell</th>
        </tr>
      </thead>
      {props.children}
    </table>
  );
}

export default Table;
