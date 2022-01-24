function createNode() {
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
}
document.getElementsByTagName("body")[0].appendChild(createNode())
