(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.SurplusOnMixin = {})));
}(this, (function (exports) { 'use strict';

function on(type, listener, options) {
    return function (node, prevListener) {
        if (listener !== prevListener) {
            if (prevListener) {
                node.removeEventListener(type, prevListener, options);
            }
            if (listener) {
                node.addEventListener(type, listener, options);
            }
        }
        return listener;
    };
}

exports.default = on;

Object.defineProperty(exports, '__esModule', { value: true });

})));
