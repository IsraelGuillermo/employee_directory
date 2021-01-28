import React from 'react';

function TableBody(props) {
  return (
    <tbody>
      <tr>
        <td>{props.first}</td>
        <td>{props.last}</td>
        <td>{props.email}</td>
        <td>{props.cell}</td>
      </tr>
    </tbody>
  );
}

export default TableBody;
