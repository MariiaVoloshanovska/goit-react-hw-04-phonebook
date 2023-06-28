import React from 'react';
import PropTypes from 'prop-types';

import styled from './Filter.module.css';

export default function Filter({ value, onChange }) {
  return (
    <label className={styled.lableFilter}>
      Find contacts by name
      <input
        className={styled.filterValue}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};