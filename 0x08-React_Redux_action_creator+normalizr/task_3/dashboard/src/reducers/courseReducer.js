import { fromJS, Map } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { normalize, schema } from 'normalizr';


const course = new schema.Entity('courses');
const normalizeData = (data) => normalize(data, [course]);

const initialState = Map({
  courses: Map(),
  filter: '',
});

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      const normalizedData = normalizeData(action.data);
      const coursesMap = fromJS(normalizedData.entities.courses).map((course) =>
        course.set('isSelected', false)
      );
      return state.merge({
        courses: coursesMap,
      });
    }

    case SELECT_COURSE: {
      return state.setIn(['courses', String(action.id), 'isSelected'], true);
    }

    case UNSELECT_COURSE: {
      return state.setIn(['courses', String(action.id), 'isSelected'], false);
    }

    default:
      return state;
  }
};

export default courseReducer;
