function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = args.join(',');
    let idx = cache.findIndex((item) => item.hash === hash);
    if (idx !== -1) {
      console.log("Из кэша: " + cache[idx].value);
      return "Из кэша: " + cache[idx].value;
    } else {
      let result = func(...args);
      cache.push({ hash: hash, value: result });
      if (cache.length > 5) {
        cache.shift();
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
  }
  return wrapper;
}



function debounceDecoratorNew(f, ms) {
  let timeout = null;
  return function (...args) {
    if (timeout == null) {
      setTimeout(() => {
        timeout = null;
        f(...args);
      }, ms);
    }
  };
};



function debounceDecorator2(func) {
  let timeout = null;
  wrapper.count = 0;
  return function wrapper(...args) {
    wrapper.count++;
    if (timeout == null) {
      setTimeout(() => {
        timeout = null;
        func(...args);
      });
      console.log(wrapper.count);
    }
  };
};