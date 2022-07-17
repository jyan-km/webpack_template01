// node에서 들어가는 것운 common.js 이다 
// 모듈 exports를 만들어야 한다. 

// module path , plugin 
const path = require('path') 
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = { 
// 엔트리는 시작하는 정하는 것이다. 웹팩은 js파일이다. 

    entry  : './js/main.js',

    // 결과물을 내보내는 패스를 설정하는 것 
    output : {

        // 객체로 들어가야함 
        // path : path.resolve(__dirname, 'dist'), 
        // filename : 'main.js',    위에 두줄은 defaullt 값이기 때문에 안써도 됨 
        // 파일정리(쓸데없는 파일 없애줌)
        clean : true 



     }, 
    //  필요한 모듈을 설정해야함 

     module : {
        rules : [ 
             { 
                test :  /\.s?css$ /, 
                use : [
                    'style-loader',
                    'css-loader' ,
                    'scss-loader'
                ]
             },

             {
                test: /.\.js$/,
                exclude : /node_modules/,  
                use : ['babel-loader']
            }
        ]



     },



    //  다양한 플러그인을 배열로 넣으면됨 
     plugins: [
        new HtmlPlugin (
            {
                template : './index.html'
            }),
        
        
        
        new CopyPlugin ( {
            patterns : [

                {
                    from : 'static'
                }
            ]

        })
        
        
        
        
        ]


            
    //  ,devServer :  {
    //     host : 'localhost', 
    //     port : 8080, 
    //     // hot : ture 
    //  }
}