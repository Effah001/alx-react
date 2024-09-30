import { normalize, schema } from 'normalizr';

const course = new schema.Entity('courses');

export const CourseNormalizer = (data) => {
    return normalize(data, [course]);
};