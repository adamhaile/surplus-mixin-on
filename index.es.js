export default function on(type, listener, options) {
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
