let createAnalitics = () => {
  let counter = 0;
  let isDestroyed = false;
  let listener = () => counter++;
  document.addEventListener("click", listener);
  return {
    destroy() {
      document.removeEventListener("click", listener);
      isDestroyed = true;
    },
    onClicks() {
      if (isDestroyed) {
        return "Analitics is destroyed";
      }
      return counter;
    },
  };
};
window.analytics = createAnalitics();
