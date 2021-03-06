"use strict";
exports.INCREMENT = 'INCREMENT';
exports.DECREMENT = 'DECREMENT';
exports.RESET = 'RESET';
exports.counterReducer = function (state, action) {
    if (state === void 0) { state = 0; }
    switch (action.type) {
        case exports.INCREMENT:
            return state + 1;
        case exports.DECREMENT:
            return state - 1;
        case exports.RESET:
            return 0;
        default:
            return state;
    }
};
//# sourceMappingURL=counter.js.map