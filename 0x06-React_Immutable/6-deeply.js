import { Map, List } from 'immutable';

export function mergeDeeplyElements(page1, page2) {
    return List(Map(page1).mergeDeep(Map(page2)).valueSeq());
}