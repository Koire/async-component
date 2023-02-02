/* eslint-disable max-lines-per-function */
import React from "react";

/**
 * @returns {Object} Component and functions to interact with the Component
 * @property {React.ReactNode} AsyncComponent that blocks until "cancel" or "confirm" is acted on
 * @property {function} asyncGetValue  promise that handles the resolution of cancel and confirm
 * @property {function} cancel function Closes the promise with optional function of failure
 * @property {function} confirm function Closes the promise with optional function of success
*/
export const AsyncComponentCreator = () => {
    const resolve = React.useRef();
    const reject = React.useRef();

    const [isShowing, setShowing] = React.useState(false);
    return {
        AsyncComponent: ({ children }) => {
            return (
                isShowing && (<>{children}</>)
            );
        },
        asyncGetValue : () => {
            setShowing(!isShowing);
            const promise = new Promise((res, rej) => {
                resolve.current = res;
                reject.current = rej;
            });
            return promise;
        },
        cancel : (fn = a => a) => {
            setShowing(false)
            reject.current(fn())
        },
        confirm: (fn = a => a) => {
            setShowing(false)
            resolve.current(fn())
        }
    };
};