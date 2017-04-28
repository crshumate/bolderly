var app = {
    init: function() {
        this.blocking.init();
    },
    blocking: {

        adBlockUrls: [
            "*://js-sec.indexww.com/*",
            "*://*.doubleclick.net/*",
            "*://*.g.doubleclick.net/*",
            "*://pagead2.googlesyndication.com/*",
            "*://tpc.googlesyndication.com/*",
            "*://www.google.com/pagead/*",
            "*://www.zergnet.com/*",
            "*://ml314.com/*",
            "*://*.basebanner.com/*",
            "*://*.rubiconproject.com/*",
            "*://*.ads.justpremium.com/*",
            "*://*.krxd.net/*",
            "*://*.amazon-adsystem.com/*",
            "*://*.criteo.com/*",
            "*://*.mnet-ad.net/*",
            "*://*.bkrtx.com/*",
            "*://*.mathtag.com/*",
            "*://*.global.ssl.fastly.net/*",
            "*://*.washingtonpost.com/wp-stat/ad/*",
            "*://*.washingtonpost.com/wp-stat/advertising/*",
            "*://*.ads-twitter.com/*"

        ],
        sponsoredUrls: [
            "*://*.outbrain.com/*",
            "*://*.revcontent.com/*",
            "*://*.washingtonpost.com/pb/resources/outbrain/*"
        ],

        siteAccessUrls: [
            "*://*.washingtonpost.com/pb/gr/c/default/*/identity-management/*",
            //"*://*.washingtonpost.com/pb/gr/c/default/*/load_immediately/*",
            "*://subscribe.washingtonpost.com/*",
            "*://*.tribdss.com/*"

        ],
        trackingUrls: [
            "*://*.skimresources.com/*",
            "*://secure-us.imrworldwide.com/*",
            "*://*.scorecardresearch.com/*",
            "*://*.gigya.com/*",
            "*://*.chartbeat.net/*",
            "*://*.chartbeat.com/*",
            "*://*.6sc.co/*",
            "*://*.quantserve.com/*",
            "*://*.akamaihd.net/*",
            "*://*.media.net/*",
            "*://*.exelator.com/*",
            "*://*.sail-horizon.com/*",
            "*://*.sailthru.com/*",
            "*://*.nr-data.net/*",
            "*://*.liadm.com/*",
            "*://*.newrelic.com/*",
            "*://*.google-analytics.com/*",
            "*://*.googletagservices.com/*",
            "*://*.decenthat.com/*",
            "*://*.steelhousemedia.com/*",
            "*://*.ensighten.com/*",
            "*://*.keywee.co/*",
            "*://*.trb.com/*"
        ],

        init: function() {
            this.siteAccessBlocking();
            this.adBlock();
            this.noTrack();
            this.noSponsors();
        },

        siteAccessBlocking: function() {
            chrome.webRequest.onBeforeRequest.addListener(
                function(details) {
                    return { cancel: true };
                }, {
                    urls: this.siteAccessUrls
                }, ["blocking"]);
        },
        adBlock: function() {
            chrome.webRequest.onBeforeRequest.addListener(
                function(details) {
                    return { cancel: true };
                }, {
                    urls: this.adBlockUrls
                }, ["blocking"]);
        },
        noTrack: function() {

            chrome.webRequest.onBeforeRequest.addListener(
                function(details) {
                    return { cancel: true };
                }, {
                    urls: this.trackingUrls
                }, ["blocking"]);

        },
        noSponsors: function() {
            chrome.webRequest.onBeforeRequest.addListener(
                function(details) {
                    return { cancel: true };
                }, {
                    urls: this.sponsoredUrls
                }, ["blocking"]);
        }
    }
};

app.init();
