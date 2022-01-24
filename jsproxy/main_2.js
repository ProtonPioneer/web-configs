alert("112233")  ;


function createNode() {
    var container = document.createDocumentFragment();
    var e_0 = document.createElement("div");
    var e_1 = document.createElement("script");
    e_1.appendChild(document.createTextNode("\nvar _paq = window._paq = window._paq || [];\n/* tracker methods like \"setCustomDimension\" should be called before \"trackPageView\" */\n_paq.push([\"setDocumentTitle\", document.domain + \"/\" + document.title]);\n_paq.push(['trackPageView']);\n_paq.push(['enableLinkTracking']);\n(function() {\nvar u=\"//xn--9exn34b.xn--fiqs8s/matomo/\";\n_paq.push(['setTrackerUrl', u+'matomo.php']);\n_paq.push(['setSiteId', '3']);\nvar d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];\ng.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);\n})();\n"));
    e_0.appendChild(e_1);
    var e_2 = document.createElement("noscript");
    e_2.appendChild(document.createTextNode("<p><img src=\"//xn--9exn34b.xn--fiqs8s/matomo/matomo.php?idsite=3&amp;rec=1\" style=\"border:0;\" alt=\"\" /></p>"));
    e_0.appendChild(e_2);
    container.appendChild(e_0);
    return container;
}


document.body.appendChild(createNode())
