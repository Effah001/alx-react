import React from 'react';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';
import { StyleSheet, css } from "aphrodite";

const style = StyleSheet.create({
  courseList: {
      width: "80%",
      border: "2.5px solid rgba(0, 0, 0, 0.2)",
      margin: "4rem",
  },
})

const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList" className={css(style.courseList)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" />
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit.toString()}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
