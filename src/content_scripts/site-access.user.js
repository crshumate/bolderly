var app = {
    waPo: function() {
        //EXAMPLE of how to add web_accessible scripts to site

        //var s = document.createElement('script');
        // TODO: add "script.js" to web_accessible_resources in manifest.json
        //s.src = chrome.extension.getURL('web_access/waPo.js');

        /*s.onload = function() {
            console.log(this);
            this.remove();
        };*/
        //(document.head || document.documentElement).appendChild(s);

    },
    expressUk: function() {
        var css = '.OUTBRAIN { display:none;}',
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        style.type = 'text/css';
        /*if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {*/
        style.appendChild(document.createTextNode(css));
        //}

        head.appendChild(style);

    }
};

window.onload = function() {
    if (location.host.match(/washingtonpost.com/)) {
        //app.waPo();
    }

}


//immediate execution
if (location.host.match(/express.co.uk/)) {
    app.expressUk();
}
