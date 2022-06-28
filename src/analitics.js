import * as $ from "jquery";
let createAnalitics = () => {
  let counter = 0;
  let Destroyed = false;

  let listener = () => counter++;
  $(document).on("click", listener);
  return {
    destroy() {
      $(document).of("click", listener);
      Destroyed = true;
    },
    onClicks() {
      if (Destroyed) {
        return "Analitics is destroyed";
      }
      return counter;
    },
  };
};
window.analytics = createAnalitics();
