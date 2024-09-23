import { selectCourse } from './courseActionCreators';
import { SELECT_COURSE } from './courseActionTypes';
import { unselectCourse } from './courseActionCreators';
import { UNSELECT_COURSE } from './courseActionTypes';

describe('selectCourse action', () => {
  it('should create an action to select a course with the correct index', () => {
    const index = 1;
    const expectedAction = {
      type: SELECT_COURSE,
      index: 1
    };

    expect(selectCourse(index)).toEqual(expectedAction);
  });
});


describe('unselectCourse action', () => {
  it('should create an action to unselect a course with the correct index', () => {
    const index = 1;
    const expectedAction = {
      type: UNSELECT_COURSE,
      index: 1
    };

    expect(unselectCourse(index)).toEqual(expectedAction);
  });
});
