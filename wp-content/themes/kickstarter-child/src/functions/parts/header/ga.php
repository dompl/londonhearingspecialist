<?php

add_action( 'wp_head', 'ga_tracking_code' );
add_action( 'ks_after_body', 'ga_tracking_code2' );

function ga_tracking_code() {?>
<meta name="google-site-verification" content="z9PI9DsshhN7n6kuLCFJjVjjHIDxdElte4727CRU6B8" />
<meta name="google-site-verification" content="1BnhDlTLzdKhNRIjzWsR9PDIEPP_BAh2R4F9KdiiNe0" />
<script>
(function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-TDL9D7C');
</script>
<?php }

function ga_tracking_code2() {?>
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TDL9D7C" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<?php }