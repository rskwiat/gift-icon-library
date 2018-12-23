// supress console warnings in output from jest
console.warn = function() { return; };

// return the getContext has to return
HTMLCanvasElement.prototype.getContext = () => {
  return;
};
