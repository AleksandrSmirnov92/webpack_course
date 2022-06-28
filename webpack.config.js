const path = require("path");
const htmlWebPackPlugin = require("html-webpack-plugin");
const { ALL } = require("dns");
module.exports = {
  context: path.resolve(
    __dirname,
    "src"
  ) /**СТрочка говорит где лежат все исходники нашего приложения */,
  mode: "development" /**Теперь в файле bundle.js все будет представленно в ввиде построчного вывода кода ,а не в одну строку  */,
  entry: {
    main: "./index.js" /** первая точка входа */,
    analitics:
      "./analitics.js" /*вторая точка входа*/ /*с чего начинается отрисовывать страницу это файл входной для нешего приложения*/,
  },
  output: {
    /*этот обьект нужен чтобы мы указали куда складывать работу webpack*/
    filename:
      "[name].[contenthash].js" /** в итоге когда webpack соберет все нужные файлы мы получим один единственный файл bundle.js */ /**патерн name создает еще analitics.bundle.js  */,
    /**contenthash создает еще два новыз файла и получаем main со свои хэшем и аналитику со свои хэшом */

    path: path.resolve(
      __dirname,
      "dist"
    ) /**указываем webpack куда все складывать */,
    clean: true /**очищает хэш из папки dist */,
  },
  resolve: {
    extensions: [
      ".js",
      ".css" /**это позволяет нам убрать расширения при инпорте */,
    ] /**тут мы говорим какие расширения нужно передовать webpack по умолчанию */,
    alias: {
      "@models": path.resolve(__dirname, "src/models"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimization: {
    splitChunks: {
      chunks:
        "all" /** позволяет разделить код а не держать все в папках мэйин и аналитикс  */,
    },
  },
  plugins: [
    new htmlWebPackPlugin({
      template: "./index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
/**далее нажали npx webpack и он создал папку dist */
/**привет  */
