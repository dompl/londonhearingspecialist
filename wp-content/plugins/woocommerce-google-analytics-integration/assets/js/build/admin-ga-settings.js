jQuery(document).ready((function(e){const c=e("#woocommerce_google_analytics_ga_enhanced_ecommerce_tracking_enabled"),n=e("#woocommerce_google_analytics_ga_use_universal_analytics"),o=e("#woocommerce_google_analytics_ga_gtag_enabled");function a(){const a=c.is(":checked"),g=n.is(":checked"),s=o.is(":checked");t(e(".legacy-setting"),!s),t(e(".enhanced-setting"),a&&(g||s)),t(c,g||s),t(n,!s)}function t(e,c){c?e.closest("tr").show():e.closest("tr").hide()}a(),c.change(a),n.change(a),o.change(a)}));