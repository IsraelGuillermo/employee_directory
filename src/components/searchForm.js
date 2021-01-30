import React from 'react';

function SearchForm(props) {
  return (
    <form>
      <div className="row">
        <div className="col">
          <input
            value={props.search}
            onChange={props.handleInputChange}
            type="text"
            className="form-control mb-4"
            placeholder="Search for an employee"
            id="employee-search"
          />{' '}
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
