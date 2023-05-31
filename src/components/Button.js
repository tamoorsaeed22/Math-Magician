import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ value, span, bg }) {
  return (
    <button type="button" className={`btn ${[span, bg].join('')}`}>{value}</button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  span: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};
