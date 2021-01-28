import React from 'react';

function SearchForm(props) {
  return (
    <form>
      <div class="row">
        <div class="col">
          <input
            value={props.search}
            onChange={props.handleInputChange}
            type="text"
            className="form-control"
            placeholder="Search for an employee"
            id="employee-search"
          />{' '}
        </div>
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
