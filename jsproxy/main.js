/*function createNode() {
    var container = document.createDocumentFragment();
    var e_0 = document.createElement("div");
    var e_1 = document.createElement("script");
    e_1.setAttribute("type", "text/javascript");
    e_1.setAttribute("src", "https://waterwelly.github.io/configs/jsproxy/main_1.js");
    e_1.setAttribute("async", "async");
    e_0.appendChild(e_1);
    var e_2 = document.createElement("script");
    e_2.setAttribute("type", "text/javascript");
    e_2.setAttribute("src", "https://waterwelly.github.io/configs/jsproxy/main_2.js");
    e_2.setAttribute("async", "async");
    e_0.appendChild(e_2);
    container.appendChild(e_0);
    return container;
}*/

//setTimeout('document.getElementsByTagName("body")[0].appendChild(createNode())',"2000");

var __inited = true

function __main_caiyun_1_() {
    
    document.title = "梦";
    
    try { document.getElementsByClassName('edit-success')[0].style.display="none";  } catch {233}
    try { document.getElementsByClassName('nav-web-action')[0].style.display="none";} catch {233}
    try { document.getElementsByClassName('scroll')[0].style.display="none";} catch {233}
    try { document.getElementsByClassName('zero-input-button')[0].style.display="none";} catch {233}
    try { document.getElementsByClassName('edit-model')[0].style.background="#fbfaf9";} catch {233}
    /*
    $(".zero-input-button").style.display="none";
    $(".scroll").style.display="none";
    $(".edit-model").style.background="#fbfaf9";
    $(".nav-web-action").style.display="none";*/

}

function __main_caiyun_0_() {
    
    setInterval('__main_caiyun_1_()',"2000");
        
    if (localStorage.getItem("__pro__") == null) {
            
localStorage.setItem("__pro__","okkk");
localStorage.setItem("__tea_cache_first_220025","1");
localStorage.setItem("__tea_cache_tokens_220025","{\"web_id\":\"7043057056530908680\",\"ssid\":\"31204e6d-0dd3-474d-a2af-7da1b959ff7f\",\"user_unique_id\":\"61bdf686e8b5ec2cf6db3a5b\",\"timestamp\":1640429770741}");
localStorage.setItem("__tea_sdk_ab_version_220025","{\"ab_version\":[],\"ab_ext_version\":[],\"ab_version_multilink\":[],\"data\":{\"test_1_2_2\":{\"val\":\"keep_story\",\"vid\":\"29062\"}},\"timestamp\":1643029203178}");
localStorage.setItem("_grecaptcha","09AGh639WfXW8MZev2HQgemnu9HYunNRABHuG1Z61nkIhG3BmWQNX52OJ8CbmUmVBegND--0JU03WwSJFWW-HKEKo");
localStorage.setItem("cy_dream_drar_mode","{\"theme\":false,\"follow\":false}");
localStorage.setItem("cy_dream_user","{\"uid\":\"61eea396c665fbd8d592c818\"}");
localStorage.setItem("dream_click_ai_flag","{\"flag\":true}");
localStorage.setItem("dream_tips_flag","{\"flag\":\"close\"}");
            
            location.reload();

}

function __main_0_() {
    var t = (location.href);
    if(t.toString().indexOf("if.caiyunai.com") > -1) {__main_caiyun_0_();}
    }
}

setTimeout('__main_0_()',"200");



