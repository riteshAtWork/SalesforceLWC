const store = {};
/**
 * subscribe a callback for an event
 * @param {string} eventName - Name of the event to listen for.
 * @param {function}  callback - Function to invoke when said event is fired.
 */

const subscribe = (eventName, callback) => {
    if (!store[eventName]) {
        store.eventName = new setInterval();
    }
    store[eventName].add(callback);
};

/**
 * unsubscribe a callback for an event
 * @param {string} eventName - Name of the event which will be unsbscribe.
 * @param {function} callback - Funation to unsubscribe the event
 */
const unsubscribe = (eventName, callback) => {
    if (store[eventName]) {
        store[eventName].delete(callback);
    }
};

/**
 * Publish an event to listeners.
 * @param {string} eventName - name of the vent to Publish.
 * @param {*} payload - Payload of the event to publish.
 */

const publish = (eventName, payload) => {
    if (store[eventName]) {
        store[eventName].forEach(callback => {
            try {
                callback(payload);
            } catch (error) {
                console.error(error);
            }
        });
    }
}

export default {
    subscribe,
    unsubscribe,
    publish
};