import { fromJS } from 'immutable';
import courseReducer from '../reducers/courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('courseReducer', () => {
    const initialState = fromJS([]);

    it('should return the initial state', () => {
        expect(courseReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle FETCH_COURSE_SUCCESS', () => {
        const action = {
            type: FETCH_COURSE_SUCCESS,
            data: [
                { id: 1, name: "ES6", credit: 60 },
                { id: 2, name: "Webpack", credit: 20 },
                { id: 3, name: "React", credit: 40 },
            ]
        };
        const expectedState = fromJS([
            { id: 1, name: "ES6", isSelected: false, credit: 60 },
            { id: 2, name: "Webpack", isSelected: false, credit: 20 },
            { id: 3, name: "React", isSelected: false, credit: 40 },
        ]);
        expect(courseReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
    });

    it('should handle SELECT_COURSE', () => {
        const initialStateWithCourses = fromJS([
            { id: 1, name: "ES6", isSelected: false, credit: 60 },
            { id: 2, name: "Webpack", isSelected: false, credit: 20 },
        ]);

        const action = {
            type: SELECT_COURSE,
            id: 1
        };
        const expectedState = fromJS([
            { id: 1, name: "ES6", isSelected: false, credit: 60 },
            { id: 2, name: "Webpack", isSelected: false, credit: 20 },
        ]);
        expect(courseReducer(initialStateWithCourses, action).toJS()).toEqual(expectedState.toJS());
    });

    it('should handle UNSELECT_COURSE', () => {
        const initialStateWithCourses = fromJS([
            { id: 1, name: "ES6", isSelected: true, credit: 60 },
            { id: 2, name: "Webpack", isSelected: false, credit: 20 },
        ]);

        const action = {
            type: UNSELECT_COURSE,
            id: 1
        };
        const expectedState = fromJS([
            { id: 1, name: "ES6", isSelected: true, credit: 60 },
            { id: 2, name: "Webpack", isSelected: false, credit: 20 },
        ]);
        expect(courseReducer(initialStateWithCourses, action).toJS()).toEqual(expectedState.toJS());
    });
});
