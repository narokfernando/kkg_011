const addEventListenerOriginal = EventTarget.prototype.addEventListener;
const removeEventListenerOriginal = EventTarget.prototype.removeEventListener;

const listeners = [];

EventTarget.prototype.addEventListener = function (type, listener, options) {
  listeners.push({element: this, type, listener, options});
  addEventListenerOriginal.call(this, type, listener, options);
};

EventTarget.prototype.removeEventListener = function (type, listener, options) {
  const index = listeners.findIndex(l => l.element === this && l.type === type && l.listener === listener);
  if (index !== -1) {
    listeners.splice(index, 1);
  }
  removeEventListenerOriginal.call(this, type, listener, options);
};

// Función para ver los listeners de un elemento específico
function getListeners(element) {
  return listeners.filter(l => l.element === element);

  console.log(listeners);
}