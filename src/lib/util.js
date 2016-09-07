export default {
  isFunction(func) {
    const getType = {};
    return func && getType.toString.call(func) === '[object Function]' || false;
  },
};
