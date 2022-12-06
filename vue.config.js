module.exports = {    
    devServer:{        
        proxy:{    // 配置跨域                
            '/api':{                
                target:'https://ft-ec-ace_shop.lytc.dev',                
                ws:true,                
                changeOrigin:true,                
                pathRewrite:{                    
                    '^/api':'/'                
                }            
            }        
        }    
    }
}