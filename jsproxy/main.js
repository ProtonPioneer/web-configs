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

function __main_0_1_() {
    
    document.title = "梦";
    $(".zero-input-button").style.display="none";
    $(".scroll").style.display="none";
    $(".edit").style.background="#262628";

}

function __main_0_() {
    
    var t = (location.href);
    
    if(t.toString().indexOf("if.caiyunai.com") > -1) { 
        
        setTimeout('__main_0_1_()',"100");
        
        if (localStorage.getItem("__pro__") == null) {
            
            localStorage.setItem("__pro__","okkk");
            
            localStorage.setItem("__tea_cache_tokens_220025","{\"web_id\":\"7043057056530908680\",\"ssid\":\"31204e6d-0dd3-474d-a2af-7da1b959ff7f\",\"user_unique_id\":\"61bdf686e8b5ec2cf6db3a5b\",\"timestamp\":1640429770741}");

            localStorage.setItem("__tea_sdk_ab_version_220025","{\"ab_version\":[],\"ab_ext_version\":[],\"ab_version_multilink\":[],\"data\":{\"test_1_2_2\":{\"val\":\"keep_story\",\"vid\":\"29062\"}},\"timestamp\":1643025563740}");

            localStorage.setItem("cy_dream_drar_mode","{\"theme\":true,\"follow\":false}");

            localStorage.setItem("cy_dream_user","{\"uid\":\"61bdf686e8b5ec2cf6db3a5b\"}");

            localStorage.setItem("dream_click_ai_flag","{\"flag\":true}");

            localStorage.setItem("dream_tips_flag","{\"flag\":\"close\"}");
            
            location.reload();

        }
    }
}

setTimeout('__main_0_()',"2000");
