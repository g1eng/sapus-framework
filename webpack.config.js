const path = require("path")
const distRoot = path.join(__dirname, "../lib/dist");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./index.tsx",
  output: {
    path: distRoot,
    filename: "sapus.js",
    library: {
      name: "Sapus",
      type: "umd",
      export: "default"
    },
    globalObject: "this"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css"],
    extensionAlias: {
     ".js": [".js", ".ts"],
     ".css": [".css"]
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            options: {
              exportType: 'css-style-sheet',
              modules: {
                mode: 'global',
                auto: true
              }
            }
          }
        ],
        include: [
          path.resolve(__dirname, 'components')
        ]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ]
            }
          },
          {
            loader: "ts-loader",
          }
        ]
      }
    ]
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
    },
  },
};
