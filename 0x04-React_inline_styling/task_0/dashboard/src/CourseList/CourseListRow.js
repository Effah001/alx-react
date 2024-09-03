import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null, style = {} }) {
  return (
    <tr style={style}>
      {isHeader ? (
        textSecondCell ? (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        ) : (
          <th colSpan="2">{textFirstCell}</th>
        )
      ) : (
        textSecondCell ? (
          <>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
          </>
        ) : (
          <td colSpan="2">{textFirstCell}</td>
        )
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
  style: PropTypes.object,
};

export default CourseListRow;