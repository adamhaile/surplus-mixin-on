export default function on<T extends Element, K extends keyof HTMLElementEventMap>(type: K, listener: (this: T, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions) {
    return function (node : T, prevListener?: (this: T, ev: HTMLElementEventMap[K]) => any) {
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