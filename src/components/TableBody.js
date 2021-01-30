import React from 'react';
import { getBsProps } from 'react-bootstrap/lib/utils/bootstrapUtils';

function TableBody(props) {
  return (
    <tbody>
      <tr>
        <td key={props.uuid}>{props.first}</td>
        <td>{props.last}</td>
        <td>{props.email}</td>
        <td>{props.cell}</td>
      </tr>
    </tbody>
  );
}

export default TableBody;
