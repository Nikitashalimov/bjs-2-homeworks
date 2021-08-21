function cachingDecoratorNew(func) {
  let cache = [];
  return function (...args) {
    const hash = args.join(',');
    let idx = cache.findIndex((item) => item.hash === hash);
    if (idx !== -1) {
      console.log("Из кэша: " + cache[idx].value);
      return "Из кэша: " + cache[idx].value;
    }
    let result = func(...args);
    cache.push({ hash: hash, value: result });
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
}



function debounceDecoratorNew(f, ms) {
  let timeoutFlag = false;
  return function (...args) {
    if (timeoutFlag == false) {
      f(...args);
      timeoutFlag = true;
      setTimeout(() => {
        timeoutFlag = false;
        f(...args);
      }, ms);
    }
  };
};



function debounceDecorator2(func) {
  let timeoutFlag = false;
  wrapper.count = 0;
  function wrapper(...args) {
    wrapper.count++;
    if (timeoutFlag == false) {
      func(...args);
      timeoutFlag = true;
      wrapper.count++;
      setTimeout(() => {
        timeoutFlag = false;
        func(...args);
        wrapper.count++;
      });
    }
  };
  return wrapper
};