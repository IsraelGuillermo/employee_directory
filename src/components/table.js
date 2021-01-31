import React from 'react';

function Table(props) {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-dark rounded text-center ">
        <thead>
          <tr>
            <th scope="col">Photo</th>
            <th scope="col" onClick={props.sortEmployeesByName}>
              First
              <span>
                <i className="fas fa-caret-down "></i>
              </span>
            </th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Cell</th>
          </tr>
        </thead>
        {props.children}
      </table>
    </div>
  );
}

export default Table;
