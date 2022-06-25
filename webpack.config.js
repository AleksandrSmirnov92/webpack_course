const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.js" /*с чего начинается отрисовывать страницу*/,
  output: {
    /*этот обьект нужен чтобы мы указали куда складывать работу webpack*/
    filename:
      "bundle.js" /** в итоге когда webpack соберет все нужные файлы мы получим один единственный файл bundle.js */,
    path: path.resolve(
      __dirname,
      "dist"
    ) /**указываем webpack куда все складывать */,
  },
};
/**далее нажали npx webpack и он создал папку dist */
