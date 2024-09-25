import courseReducer from './courseReducer';
import {
    FETCH_COURSE_SUCCESS,
    SELECT_COURSE,
    UNSELECT_COURSE,
} from '../actions/courseActionTypes';

describe('courseReducer', () => {
    it('should return the default state', () => {
        const state = courseReducer(undefined, {});
        expect(state).toEqual([]);
    });

    it('should handle FETCH_COURSE_SUCCESS', () => {
        const action = {
            type: FETCH_COURSE_SUCCESS,
            data: [
                { id: 1, name: "ES6", credit: 60 },
                { id: 2, name: "Webpack", credit: 20 },
                { id: 3, name: "React", credit: 40 },
            ],
        };
        const state = courseReducer([], action);
        expect(state).toEqual([
            { id: 1, name: "ES6", isSelected: false, credit: 60 },
            { id: 2, name: "Webpack", isSelected: false, credit: 20 },
            { id: 3, name: "React", isSelected: false, credit: 40 },
        ]);
    });

    it('should handle SELECT_COURSE', () => {
        const initialState = [
            { id: 1, name: "ES6", isSelected: false, credit: 60 },
            { id: 2, name: "Webpack", isSelected: false, credit: 20 },
        ];
        const action = {
            type: SELECT_COURSE,
            id: 1,
        };
        const state = courseReducer(initialState, action);
        expect(state).toEqual([
            { id: 1, name: "ES6", isSelected: true, credit: 60 },
            { id: 2, name: "Webpack", isSelected: false, credit: 20 },
        ]);
    });

    it('should handle UNSELECT_COURSE', () => {
        const initialState = [
            { id: 1, name: "ES6", isSelected: true, credit: 60 },
            { id: 2, name: "Webpack", isSelected: false, credit: 20 },
        ];
        const action = {
            type: UNSELECT_COURSE,
            id: 1,
        };
        const state = courseReducer(initialState, action);
        expect(state).toEqual([
            { id: 1, name: "ES6", isSelected: false, credit: 60 },
            { id: 2, name: "Webpack", isSelected: false, credit: 20 },
        ]);
    });
});
