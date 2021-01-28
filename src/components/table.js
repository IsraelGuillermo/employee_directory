import React from 'react';

function Table(props) {
  return (
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">First</th>
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
