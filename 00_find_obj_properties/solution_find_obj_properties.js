/* eslint-disable no-unused-vars */

function findObjPropsHasOwn(obj) {
    var ownprops = [];
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            ownprops.push(p);
        }
    }
    return ownprops.join(", ");
}

function findObjKeys(obj) {
    var ownkeys = [];
    for (var k in obj) {
        if (Object.keys(obj).includes(k)) {
            ownkeys.push(k);
        }
    }
    return ownkeys.join(", ");
}
