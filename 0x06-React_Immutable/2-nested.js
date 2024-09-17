import { fromJS, isImmutable } from "immutable";

export default function accessImmutableObject(object, array) {
    const immutableObj = fromJS(object);
    const result = immutableObj.getIn(array);
    
    if (result === undefined) {
        return undefined;
    } else if (typeof result === 'string') {
        return result;
    } else if (isImmutable(result)) {
        return result;
    } else {
        return fromJS(result);
    }
}