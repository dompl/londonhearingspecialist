<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitdefa2f895b9c8958a8913d0072ce990a
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'Psr\\Container\\' => 14,
        ),
        'A' => 
        array (
            'Ademti\\DismissibleWpNotices\\' => 28,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Psr\\Container\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/container/src',
        ),
        'Ademti\\DismissibleWpNotices\\' => 
        array (
            0 => __DIR__ . '/..' . '/leewillis77/dismissible-wp-notices/src',
        ),
    );

    public static $prefixesPsr0 = array (
        'P' => 
        array (
            'Pimple' => 
            array (
                0 => __DIR__ . '/..' . '/pimple/pimple/src',
            ),
        ),
    );

    public static $classMap = array (
        'AbstractWoocommerceProductFeedsJob' => __DIR__ . '/../..' . '/src/jobs/abstract-woocommerce-product-feeds-job.php',
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'Gamajo_Template_Loader' => __DIR__ . '/../..' . '/src/common/gamajo-template-loader.class.php',
        'PWBE_WooCommerce_GPF' => __DIR__ . '/../..' . '/src/integrations/pwbe-woocommerce-gpf.php',
        'WoocommerceCostOfGoods' => __DIR__ . '/../..' . '/src/integrations/woocommerce-cost-of-goods.php',
        'WoocommerceGpfAbstractCacheRebuildBatchJob' => __DIR__ . '/../..' . '/src/cache/woocommerce-gpf-abstract-cache-rebuild-batch-job.php',
        'WoocommerceGpfAbstractCacheRebuildJob' => __DIR__ . '/../..' . '/src/cache/woocommerce-gpf-abstract-cache-rebuild-job.php',
        'WoocommerceGpfAdmin' => __DIR__ . '/../..' . '/src/gpf/woocommerce-gpf-admin.php',
        'WoocommerceGpfCache' => __DIR__ . '/../..' . '/src/cache/woocommerce-gpf-cache.php',
        'WoocommerceGpfCacheInvalidator' => __DIR__ . '/../..' . '/src/cache/woocommerce-gpf-cache-invalidator.php',
        'WoocommerceGpfCacheStatus' => __DIR__ . '/../..' . '/src/cache/woocommerce-gpf-cache-status.php',
        'WoocommerceGpfClearAllJob' => __DIR__ . '/../..' . '/src/cache/woocommerce-gpf-cache-clear-all-job.php',
        'WoocommerceGpfClearProductJob' => __DIR__ . '/../..' . '/src/cache/woocommerce-gpf-cache-clear-product-job.php',
        'WoocommerceGpfCommon' => __DIR__ . '/../..' . '/src/gpf/woocommerce-gpf-common.php',
        'WoocommerceGpfCurrencySwitcherForWooCommerce' => __DIR__ . '/../..' . '/src/integrations/woocommerce-gpf-currency-switcher-for-woocommerce.php',
        'WoocommerceGpfDebugService' => __DIR__ . '/../..' . '/src/common/woocommerce-gpf-debug-service.php',
        'WoocommerceGpfFeed' => __DIR__ . '/../..' . '/src/gpf/woocommerce-gpf-feed.php',
        'WoocommerceGpfFeedBing' => __DIR__ . '/../..' . '/src/gpf/woocommerce-gpf-feed-bing.php',
        'WoocommerceGpfFeedGoogle' => __DIR__ . '/../..' . '/src/gpf/woocommerce-gpf-feed-google.php',
        'WoocommerceGpfFeedGoogleInventory' => __DIR__ . '/../..' . '/src/gpf/woocommerce-gpf-feed-google-inventory.php',
        'WoocommerceGpfFeedGoogleLocalProductInventory' => __DIR__ . '/../..' . '/src/gpf/woocommerce-gpf-feed-google-local-product-inventory.php',
        'WoocommerceGpfFeedGoogleLocalProducts' => __DIR__ . '/../..' . '/src/gpf/woocommerce-gpf-feed-google-local-products.php',
        'WoocommerceGpfFeedItem' => __DIR__ . '/../..' . '/src/gpf/woocommerce-gpf-feed-item.php',
        'WoocommerceGpfFrontend' => __DIR__ . '/../..' . '/src/gpf/woocommerce-gpf-frontend.php',
        'WoocommerceGpfImportExportIntegration' => __DIR__ . '/../..' . '/src/common/woocommerce-gpf-import-export-integration.php',
        'WoocommerceGpfMulticurrency' => __DIR__ . '/../..' . '/src/integrations/woocommerce-gpf-multicurrency.php',
        'WoocommerceGpfPriceByCountry' => __DIR__ . '/../..' . '/src/integrations/woocommerce-gpf-price-by-country.php',
        'WoocommerceGpfProductBrandsForWooCommerce' => __DIR__ . '/../..' . '/src/integrations/woocommerce-gpf-product-brands-for-woocommerce.php',
        'WoocommerceGpfPwBulkEdit' => __DIR__ . '/../..' . '/src/integrations/woocommerce-gpf-pw-bulk-edit.php',
        'WoocommerceGpfRebuildComplexJob' => __DIR__ . '/../..' . '/src/cache/woocommerce-gpf-cache-rebuild-complex-job.php',
        'WoocommerceGpfRebuildProductJob' => __DIR__ . '/../..' . '/src/cache/woocommerce-gpf-cache-rebuild-product-job.php',
        'WoocommerceGpfRebuildSimpleJob' => __DIR__ . '/../..' . '/src/cache/woocommerce-gpf-cache-rebuild-simple-job.php',
        'WoocommerceGpfRestApi' => __DIR__ . '/../..' . '/src/common/woocommerce-gpf-rest-api.php',
        'WoocommerceGpfStatusReport' => __DIR__ . '/../..' . '/src/common/woocommerce-gpf-status-report.php',
        'WoocommerceGpfStructuredData' => __DIR__ . '/../..' . '/src/gpf/woocommerce-gpf-structured-data.php',
        'WoocommerceGpfTemplateLoader' => __DIR__ . '/../..' . '/src/common/woocommerce-gpf-template-loader.class.php',
        'WoocommerceGpfTemplateTags' => __DIR__ . '/../..' . '/src/gpf/woocommerce-gpf-template-tags.php',
        'WoocommerceGpfTheContentProtection' => __DIR__ . '/../..' . '/src/integrations/woocommerce-gpf-the-content-protection.php',
        'WoocommerceGpfWoocommerceCompositeProducts' => __DIR__ . '/../..' . '/src/integrations/woocommerce-gpf-woocommerce-composite-products.php',
        'WoocommerceGpfWoocommerceMinMaxQuantityStepControlSingle' => __DIR__ . '/../..' . '/src/integrations/woocommerce-gpf-woocommerce-min-max-quantity-step-control-single.php',
        'WoocommerceGpfWoocommerceMixAndMatchProducts' => __DIR__ . '/../..' . '/src/integrations/woocommerce-gpf-woocommerce-mix-and-match-products.php',
        'WoocommerceGpfWoocommerceMultilingual' => __DIR__ . '/../..' . '/src/integrations/woocommerce-gpf-woocommerce-multilingual.php',
        'WoocommerceGpfWoocommerceProductBundles' => __DIR__ . '/../..' . '/src/integrations/woocommerce-gpf-woocommerce-product-bundles.php',
        'WoocommerceGpfYoastWoocommerceSeo' => __DIR__ . '/../..' . '/src/integrations/yoast-woocommerce-seo.php',
        'WoocommerceMinMaxQuantities' => __DIR__ . '/../..' . '/src/integrations/woocommerce-min-max-quantities.php',
        'WoocommercePrfAdmin' => __DIR__ . '/../..' . '/src/prf/woocommerce-prf-admin.php',
        'WoocommercePrfGoogle' => __DIR__ . '/../..' . '/src/prf/woocommerce-prf-google.php',
        'WoocommercePrfGoogleReviewFeed' => __DIR__ . '/../..' . '/src/prf/woocommerce-prf-google-review-feed.php',
        'WoocommercePrfGoogleReviewProductInfo' => __DIR__ . '/../..' . '/src/prf/woocommerce-prf-google-review-product-info.php',
        'WoocommerceProductFeedsAdminNotices' => __DIR__ . '/../..' . '/src/common/woocommerce-product-feeds-admin-notices.php',
        'WoocommerceProductFeedsAdvancedCustomFields' => __DIR__ . '/../..' . '/src/integrations/woocommerce-product-feeds-advanced-custom-fields.php',
        'WoocommerceProductFeedsAdvancedCustomFieldsFormatter' => __DIR__ . '/../..' . '/src/integrations/woocommerce-product-feeds-advanced-custom-fields-formatter.php',
        'WoocommerceProductFeedsClearGoogleTaxonomyJob' => __DIR__ . '/../..' . '/src/jobs/woocommerce-product-feeds-clear-google-taxonomy-job.php',
        'WoocommerceProductFeedsDbManager' => __DIR__ . '/../..' . '/src/common/woocommerce-product-feeds-db-manager.php',
        'WoocommerceProductFeedsExpandedStructuredData' => __DIR__ . '/../..' . '/src/common/woocommerce-product-feeds-expanded-structured-data.php',
        'WoocommerceProductFeedsExpandedStructuredDataCacheInvalidator' => __DIR__ . '/../..' . '/src/common/woocommerce-product-feeds-expanded-structured-data-cache-invalidator.php',
        'WoocommerceProductFeedsFacebookForWoocommerce' => __DIR__ . '/../..' . '/src/integrations/woocommerce-product-feeds-facebook-for-woocommerce.php',
        'WoocommerceProductFeedsFeedConfig' => __DIR__ . '/../..' . '/src/common/woocommerce-product-feeds-feed-config.php',
        'WoocommerceProductFeedsFeedConfigFactory' => __DIR__ . '/../..' . '/src/common/woocommerce-product-feeds-feed-config-factory.php',
        'WoocommerceProductFeedsFeedConfigRepository' => __DIR__ . '/../..' . '/src/common/woocommerce-product-feeds-feed-config-repository.php',
        'WoocommerceProductFeedsFeedImageManager' => __DIR__ . '/../..' . '/src/common/woocommerce-product-feeds-feed-image-manager.php',
        'WoocommerceProductFeedsFeedItemFactory' => __DIR__ . '/../..' . '/src/common/woocommerce-product-feeds-feed-item-factory.php',
        'WoocommerceProductFeedsFeedManager' => __DIR__ . '/../..' . '/src/common/woocommerce-product-feeds-feed-manager.php',
        'WoocommerceProductFeedsFeedManagerListTable' => __DIR__ . '/../..' . '/src/common/woocommerce-product-feeds-feed-manager-list-table.php',
        'WoocommerceProductFeedsFieldOptions' => __DIR__ . '/../..' . '/src/common/woocommerce-product-feeds-field-options.php',
        'WoocommerceProductFeedsIntegrationManager' => __DIR__ . '/../..' . '/src/common/woocommerce-product-feeds-integration-manager.php',
        'WoocommerceProductFeedsJobManager' => __DIR__ . '/../..' . '/src/jobs/woocommerce-product-feeds-job-manager.php',
        'WoocommerceProductFeedsMain' => __DIR__ . '/../..' . '/src/woocommerce-product-feeds-main.php',
        'WoocommerceProductFeedsMaybeRefreshGoogleTaxonomiesJob' => __DIR__ . '/../..' . '/src/jobs/woocommerce-product-feeds-maybe-refresh-google-taxonomies-job.php',
        'WoocommerceProductFeedsMeasurementPriceCalculator' => __DIR__ . '/../..' . '/src/integrations/woocommerce-product-feeds-measurement-price-calculator.php',
        'WoocommerceProductFeedsRefreshGoogleTaxonomyJob' => __DIR__ . '/../..' . '/src/jobs/woocommerce-product-feeds-refresh-google-taxonomy-job.php',
        'WoocommerceProductFeedsTermDepthRepository' => __DIR__ . '/../..' . '/src/common/woocommerce-product-feeds-term-depth-repository.php',
        'WoocommerceProductFeedsWoocommerceAdditionalVariationImages' => __DIR__ . '/../..' . '/src/integrations/woocommerce-product-feeds-woocommerce-additional-variation-images.php',
        'WoocommerceProductFeedsWoocommerceAdminIntegration' => __DIR__ . '/../..' . '/src/common/woocommerce-product-feeds-woocommerce-admin-integration.php',
        'WoocommerceProductFeedsWoocommerceGermanized' => __DIR__ . '/../..' . '/src/integrations/woocommerce-product-feeds-woocommerce-germanized.php',
        'WoocommerceProductVendors' => __DIR__ . '/../..' . '/src/integrations/woocommerce-product-vendors.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitdefa2f895b9c8958a8913d0072ce990a::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitdefa2f895b9c8958a8913d0072ce990a::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInitdefa2f895b9c8958a8913d0072ce990a::$prefixesPsr0;
            $loader->classMap = ComposerStaticInitdefa2f895b9c8958a8913d0072ce990a::$classMap;

        }, null, ClassLoader::class);
    }
}
