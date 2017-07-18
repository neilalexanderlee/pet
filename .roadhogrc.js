import pxtorem from 'postcss-pxtorem';

const path          = require( 'path' );
const svgSpriteDirs = [
  require.resolve( 'antd-mobile' ).replace( /warn\.js$/ , '' ) , // antd-mobile 内置svg
  path.resolve( __dirname , 'src/web/assets/fonts' ) , // 业务代码本地私有 svg 存放目录
];

export default {
  entry : "src/web/index.js" ,
  "outputPath": "src/main/webapp/dist",
  disableCSSModules : false ,
  publicPath : "/dist/" ,
  theme : "./theme.config.js" ,
  svgSpriteLoaderDirs : svgSpriteDirs ,
  autoprefixer : {
    browsers : [
      "iOS >= 8" ,
      "Android >= 4"
    ]
  } ,
  proxy : { } ,
  extraPostCSSPlugins : [
    pxtorem( {
      rootValue : 100 ,
      propWhiteList : [] ,
    } ) ,
  ] ,
  env : {
    development: {
      "extraBabelPlugins": [
        "dva-hmr",
        "lodash",
        "transform-runtime" ,
        [
          "import" ,
          { libraryName : "antd-mobile" , "libraryDirectory" : "lib" , "style" : true }
        ]
      ]
    },
    production: {
      "extraBabelPlugins": [
        "lodash",
        "transform-runtime" ,
        [
          "import" ,
          { libraryName : "antd-mobile" , "libraryDirectory" : "lib" , "style" : true }
        ]
      ]
    }
  }
};
