/**
 * Created by tangdu on 14-3-18.
 * App 配置信息
 */
var app = {
    email:'tangdu0228yes@163.com',
    appport: 3000,
    host: '127.0.0.1',
    port: '3306',
    user: 'elife',
    password: 'elife',
    database: 'elife',
    logger_path: "./bin/logs/error.log",
    logger_level: 'error' //debug | error
};

global.Sys = {
    cont: {
        //菜单常量
        artideType: [
            {key: '首页',value:'index'},
            {key: '编辑语言',
                child:[
                    {key:'Java',value:'java'},{key:'Python',value:'phthon'},{key:'GoLang',value:'gplang'},
                    {key:'NodeJS',value:'nodejs'}]
            },
            {key: 'Web前端',
                child:[
                    {key:'JavaScript',value:'javascript'},{key:'Html_Css',value:'html_css'},{key:'Jquery',value:'jquery'},
                    {key:'ExtJS',value:'extjs'},{key:'SmartClient',value:'smartclient'}]
            },
            {key: '数据库',
                child:[
                    {key:'Oracle',value:'oracle'},{key:'MySQL',value:'mysql'},{key:'NoSQL',value:'nosql'}]
            },
            {key: '开发平台',
                child:[
                    {key:'Spring',value:'spring'},{key:'Hibernate',value:'hibernate'},{key:'MyBatis',value:'mybatis'},
                    {key:'Servlet',value:'servlet'},{key:'WebService',value:'webservice'},{key:'Linux',value:'linux'},
                    {key:'Weblogic',value:'weblogic'},{key:'Maven',value:'maven'}]
            },
            {key: '编程感慨', value: 'bcgw'}
        ],
        siteName: "IT人生"
    },
    //权限认证
    permissionUrls: [
        "/push_article", "/save_article",
        "/add_userattention","edit_article",
        "/add_artideattention","/add_comment",
        "/user_up_artide","/user/info"
    ],
    //系统库
    lib: {

    }
}

module.exports = app;