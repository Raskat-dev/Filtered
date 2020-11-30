import React from "react";
import { connect } from "react-redux";
import {
  filterEmail,
  removeEmailFilter,
  filterName,
} from "../../redux/actions";
import "./FilterPane.css";

function FilterPane({
  emailFilter,
  nameFilter,
  filterEmail,
  removeEmailFilter,
  filterName,
}) {
  const buttonsClassName = {
    org:
      emailFilter === ".org"
        ? "filter__button filter__button_active"
        : "filter__button",
    com:
      emailFilter === ".com"
        ? "filter__button filter__button_active"
        : "filter__button",
    biz:
      emailFilter === ".biz"
        ? "filter__button filter__button_active"
        : "filter__button",
  };

  function clickOrgButton(e) {
    e.preventDefault();
    if (emailFilter === ".org") {
      removeEmailFilter();
    } else {
      filterEmail(".org");
    }
  }
  function clickComButton() {
    if (emailFilter === ".com") {
      removeEmailFilter();
    } else {
      filterEmail(".com");
    }
  }
  function clickBizButton() {
    if (emailFilter === ".biz") {
      removeEmailFilter();
    } else {
      filterEmail(".biz");
    }
  }

  function handleInputChange(e) {
    filterName(e.target.value);
  }

  return (
    <section className="filter">
      <div className="filter__filters">
        <div className="filter__search-container">
          <label htmlFor="search" className="filter__search-label">
            Search
          </label>
          <input
            type="text"
            id="search"
            placeholder="Enter Name"
            className="filter__search"
            onChange={handleInputChange}
            defaultValue={nameFilter}
          ></input>
        </div>
        <div className="filter__buttons-container">
          <p className="filter__buttons-label">Show only</p>
          <button
            type="button"
            className={buttonsClassName.org}
            onClick={clickOrgButton}
          >
            .org
          </button>
          <button
            type="button"
            className={buttonsClassName.com}
            onClick={clickComButton}
          >
            .com
          </button>
          <button
            type="button"
            className={buttonsClassName.biz}
            onClick={clickBizButton}
          >
            .biz
          </button>
        </div>
      </div>
    </section>
  );
}

const mapDispatchToProps = {
  filterEmail,
  removeEmailFilter,
  filterName,
};

const mapStateToProps = (state) => {
  return {
    emailFilter: state.emailFilter,
    nameFilter: state.nameFilter,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPane);
