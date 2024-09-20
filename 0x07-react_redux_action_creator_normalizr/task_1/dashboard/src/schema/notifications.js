import { schema } from 'normalizr';

const user = new schema.Entity("users");

const guid = 'id';

const message = new schema.Entity("messages", {
    idAttribute: guid 
});

const notification = new schema.Entity("notifications", {
    author: user,
    context: message
});