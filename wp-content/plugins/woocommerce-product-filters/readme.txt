=== WooCommerce Product Filters ===
Contributors: barn2media
Tags: woocommerce, filters
Requires at least: 6.1
Tested up to: 6.5.3
Requires PHP: 7.4
Stable tag: 1.4.16
License: GNU General Public License v3.0
License URI: http://www.gnu.org/licenses/gpl-3.0.html

Help customers to find what they want quickly and easily. Add product filters for price, color, category, size, attributes, and more.

== Description ==

Help customers to find what they want quickly and easily. Add product filters for price, color, category, size, attributes, and more.

== Installation ==

Please refer to [our support page](https://barn2.com/support-center/).

== Frequently Asked Questions ==

Please refer to [our support page](https://barn2.com/support-center/).

== Changelog ==

= 1.4.16 =
Release date 21 May 2024

 * Tweak: restored scroll to top after filtering.
 * Tweak: Updated the label of the "Stock" and "On Sale" filters.
 * Tweak: Disabled overflow while the sidebar drawer is open.
 * Tweak: Increased size of the sidebar drawer closing icon.
 * Fix: Image filter unable to use to "OR" filtering logic.
 * Fix: "Search" input unable to merge found products into search results when "OR" filtering logic is enabled.
 * Fix: "Sort by average rating" option is visible when reviews are disabled.
 * Fix: WooCommerce Shortcode integration unable to detect changes to the query fired by action.
 * Fix: "Range" Attibute not picking up the specified terms in the settings panel.
 * Fix: Updated conditional logic display of certain fields in the setup wizard.
 * Fix: Drag and drop swapping fields instead of changing their position.
 * Fix: Storefront theme - sidebar drawer "Apply" button not visible on smaller screens.
 * Dev: Updated internal dependencies.
 * Dev: Tested with WooCommerce 8.8.3.

= 1.4.15 =
Release date 15 April 2024

 * Fix: Search input filter could not use special characters.
 * Fix: Divi - Infinite scrolling producing unexpected output when no more results are found.
 * Fix: Divi - Pagination not working after filtering.
 * Fix: Elementor (Products widget) - Unexpected output when filtering on a paginated page.
 * Fix: Clearing of all filters unexpectedly fired preloading of search results from URL parameters.
 * Fix: PHP Error when setting taxonomy filters as range sliders.
 * Fix: Indexer expecting terms to exist while importing products.
 * Fix: Individual clear of certain filters did not properly purge cached value in datastore on subsequent filtering.
 * Fix: Pricing filter unexpectedly firing reset functionality while using WC Shortcode.
 * Fix: Can't translate “Show more“ and “Show less“.
 * Fix: WooCommerce Product Table - Unable to use multiple range sliders.
 * Fix: Pagination not working when using the WooCommerce Product Bundles plugin.
 * Fix: Divi & WooCommerce Product Table - Filters not showing on the shop page.
 * Tweak: Removed 'None' option from filter widget.
 * Tweak: Prevent javascript issue when WC shortcode is used with caching enabled.
 * Tweak: Added German translation.
 * Dev: Updated internal dependencies.
 * Dev: Tested with WooCommerce 8.7.0.
 * Dev: Tested up to WordPress 6.5.2.

<!--more-->

= 1.4.14 =
Release date 22 January 2024

 * Tweak: Improved accessibility of certain filters when they're displayed within the horizontal layout.
 * Fix: Filters inside the sidebar drawer with multiple selectable options not persisting their initial value when preloaded via URL parameters.
 * Fix: Avada + WooCommerce Product Table - Shop page not displaying active filters list and sidebar drawer when the page is built via the Fusion builder.
 * Fix: Divi + WooCommerce Product Table - Shop page not displaying active filters list and sidebar drawer when the page is built via the Divi builder.
 * Fix: Divi prevent console error when shop page is not built via builder.
 * Fix: Dropdown placeholder visible when opening a prefilled page.
 * Dev: Updated internal dependencies.
 * Dev: Tested with WooCommerce 8.5.1

= 1.4.13 =
Release date 20 December 2023

 * Fix: Betheme - infinite scrolling firing when viewing the top section of the WooCommerce layout.
 * Fix: Elementor - conflict with the beta feature "Optimize Image Loading".
 * Fix: Avada + WooCommerce Product Table - quantity buttons missing after filtering.
 * Fix: "Sorry you are not allowed to access this page" error on activation when WooCommerce not installed.
 * Fix: Unable to select a specific term when creating a "Color" filter.
 * Fix: Color filter still displaying all options despite selection of specific terms.
 * Fix: Color filter displaying as empty when no options available.
 * Fix: PHP 8.1 compatibility when making API requests to the selected limited terms.
 * Tweak: Set additional default values through the setup wizard.
 * Tweak: Adjusted the rating filter to show products that are equal or greater than the selected value.
 * Tweak: Removed automatic scrolling to the top of the page after filtering results.

= 1.4.12 =
Release date 04 December 2023

 * Fix: React-dom error when the horizontal layout contains a filter that is no longer valid for the current results.

= 1.4.11 =
Release date 28 November 2023

  * Fix: widget is not displayed when the widget has no title.

= 1.4.10 =
Release date 27 November 2023

 * Fix: Wrong namespace used for printing admin notices.
 * Fix: WooCommerce Product Table not showing the correct 404 message.
 * Fix: PHP notices generated when editing a filter group in certain situations.
 * Fix: Image filter not properly sorted.
 * Fix: Divi - dropdowns not entirely visible on mobile.
 * Fix: WooCommerce Product Table hidden when using the Shoptimizer theme.
 * Fix: Making changes in the duplicated group, affects the original group.
 * Fix: Filter displayed with "No options available" on page load in horizontal layout.
 * Fix: Dropdown displaying empty categories when "Display categories and sub-categories as separate dropdowns" enabled.
 * Fix: Dropdown not showing child terms on archive pages.
 * Fix: Avada Theme - styling issue with pagination.
 * Fix: Avada Theme - pagination not working when using the theme builder.
 * Fix: React-Dom error when Elementor and WooCommerce Product Table are enabled on the same page.
 * Fix: Undefined index when saving the Product Filters widget in certain situations.
 * Fix: WooCommerce Product Table - wrong results count displayed on page load.
 * Fix: PHP Deprecated notices in PHP 8.1.
 * Tweak: Added Slovak translation.
 * Tweak: Improved a11y of certain inputs.
 * Tweak: Avoid loading of javascript assets on cart, checkout, product and account page.
 * Tweak: Added "Barn2" to widget description.
 * Tweak: Reordered "Filters" link in admin panel.
 * Tweak: Updated shortcode name.
 * Tweak: Added Norwegian translation.
 * Tweak: Improved accessibility of Labels filter type.
 * Tweak: Added plugin promo section to admin panel.
 * Tweak: Updated secondary color of filters in horizontal groups.
 * Tweak: Improved preview of widget in admin panel.

= 1.4.9 =
Release date 15 September 2023

 * Fix: wrong default filter style when creating a filter based on a custom field.
 * Fix: falsey value used as default for text inputs on first page load.

= 1.4.8 =
Release date 07 September 2023

 * Tweak: Flatsome - support lazyloaded images.
 * Tweak: Hide pagination when there's only one page.
 * Fix: Wrong hierarchical structure of checkboxes filters when on the shop page and/or archive pages.
 * Fix: No results when filtering after using pagination while using WooCommerce shortcodes.
 * Fix: Divi - no results when filtering after using pagination.
 * Dev: Updated internal dependencies.
 * Dev: Tested up to WordPress 6.3.1.

= 1.4.7 =
Release date 29 August 2023

 * Fix: Unable to clear custom taxonomy filters.
 * Fix: Unable to change values of filters in horizontal layouts after they're prefilled via URL query params.

= 1.4.6 =
Release date 22 August 2023

 * Fix: No available options for the image filters on archive pages in certain situations.

= 1.4.5 =
Release date 17 August 2023

  * Fix: Terms with ancestors rendered multiple times outside their initial hierarchy.
  * Fix: No available options for certain filters on archive pages.
  * Fix: Shoptimizer theme - Products are hidden when WPF is active.
  * Tweak: minor code cleanup.

= 1.4.4 =
Release date 09 August 2023

 * Fix: Numbered pagination displaying when infinite loading is enabled.
 * Tweak: Changed priority of query prefilling detection due to changes in WP 6.3
 * Dev: Enabled HPOS compatibility.
 * Dev: Updated internal libraries.
 * Dev: Tested up to WP 6.3 and WooCommerce 8.0

= 1.4.3 =
Release date 01 August 2023

 * Tweak: Adjusted how translatable strings for lazy loaded components are loaded.
 * Tweak: Avoid loading assets when a filter group with no filters is placed onto a page.
 * Fix: "Search products..." placeholder not translatable.
 * Fix: Decimals not properly parsed in range slider filter.
 * Fix: Mobile drawer button displaying too early.
 * Fix: Avada - unable to display the active filters list when using the "Search" filter.
 * Fix: Avada - error on frontend when the Fusion Builder plugin is not enabled.
 * Fix: Fatal error when a filter exists for a taxonomy that no longer exists.
 * Fix: Taxonomy filters still visible when they had no options.
 * Fix: Extra spacing inside the header in the admin panel.
 * Fix: Filters not showing options when selecting terms that had an empty parent term.

= 1.4.2 =
Release date 06 July 2023

  * New: Added support for Avada's post cards module.
  * Fix: "Search products..." placeholder.
  * Fix: "Range unit" option was visible when it shouldn't have been.
  * Fix: Divi - adjusted priority of hooks to avoid issues with global footers.
  * Fix: Elementor - not showing all taxonomy terms across results when paginated.
  * Fix: Categories with non-ASCII characters in slug are not showing in filters.
  * Dev: Updated language files.

= 1.4.1 =
Release date 22 June 2023

 * Fix: search results not working properly when Infinite loading is enabled.
 * Tweak: minor code cleanup.

= 1.4.0 =
Release date 20 June 2023

 * New: Added UX improvements to filter creation process.
 * New: Added styling options to the settings panel.
 * New: Added ability to select categories/tags/terms when creating filters.
 * New: Added infinite scroll.
 * New: Added ability to switch between "AND" & "OR" filtering logic.
 * New: Added compatibility with Bricks builder theme.
 * Fix: Plugin returns 404 error when permalink is plain.
 * Fix: Dropdowns not showing on mobile in Divi.
 * Fix: Elementor Pro incorrect output in certain situations when no results are found.
 * Dev: Updated internal libraries.

= 1.3.1 =
Release date 18 May 2023

 * Tweak: Avoid usage of reserved terms when generating slugs for filters.

= 1.3.0 =
Release date 16 May 2023

 * New: Added "Search" filter type.

= 1.2.2 =
Release date 09 May 2023

 * Fix: warning message when activating the plugin while WooCommerce is disabled.
 * Fix: Compatibility issue in php 7.4

= 1.2.1 =
Release date 03 May 2023

 * Fix: Compatibility issue in php 7.4

= 1.2.0 =
Release date 01 May 2023

 * New: Added ability to duplicate groups.
 * Fix: Scrollbar disappears when clicking on the "sort" dropdown while the filter is inside an horizontal group.
 * Fix: Deprecation notices in PHP 8.1

= 1.1.14 =
Release date 18 April 2023

 * Tweak: Reworked scrolling to loop logic.
 * Fix: Divi - filtering caused the page to scroll up to the very top of the layout.
 * Fix: Easy Post Types and Fields - unable to use custom fields if the site had no custom taxonomies or attributes.

= 1.1.13 =
Release date 12 April 2023

* Fix: Category filter is showing all terms when on archive pages.
* Fix: Elementor Pro sort dropdown returns no products.
* Tweak: Updated js dependencies.
* Tweak: Updated internal libraries.

= 1.1.12 =
Release date 03 April 2023

* Fix: compatibility issue with WP 6.2 causing the React app to crash in certain situations.
* Dev: Tested up to WP 6.2

= 1.1.11 =
Release date 13 March 2023

* Fix: Elementor Pro - pagination not working when the shop page has been customized.
* Fix: Elementor Pro - clicking "clear filters" was not resetting filters.
* Fix: certain strings could not be translated.
* Tweak: updated language files.

= 1.1.10 =
Release date 07 February 2023

* Tweak: hide filters in archive pages when no products are found.
* Fix: pagination would return a json response via Elementor on archive pages.

= 1.1.9 =
Release date 01 February 2023

* Fix: compatibility issue between the WooCoomerce Product Table plugin and the Avada theme.
* Fix: total results count was sometimes wrong when queried through Elementor.

= 1.1.8 =
Release date 06 January 2023

* Tweak: Display 'Clear filters' link when only 1 filter is selected.
* Fix: filters not working correctly on archive pages with the Avada theme.
* Fix: filters not working correctly on archive pages with the Divi theme.

= 1.1.7 =
Release date 04 January 2023

* Fix: Styling of dropdowns in Flatsome theme.
* Fix: conflict with the WooCommerce Local Pickup plugin.
* Fix: various issues with the Elementor Pro theme builder on archive pages.

= 1.1.6 =
Release date 12 December 2022

* Fix: ACF Range slider not firing the appropriate database query.
* Fix: Toggling filter visibility inside the mobile drawer would hide the entire filter.
* Fix: ACF True/False filter not showing the initial count of products on first page load.
* Fix: ACF True/False filter not updating the total number of possible choices when using other filters.
* Fix: ACF True/False filter would display as "1" when inside the list of active filters.
* Dev: updated internal libraries.

= 1.1.5 =
Release date 06 December 2022

* Tweak: assigned a fixed max height to popovers when using filters with the horizontal layout.
* Fix: conflict with GeneratePress WooCommerce module.
* Fix: styling issues with the Flatsome theme.
* Fix: filtering products on archive pages would return all the products when using the plugin "Show Single Variations by Iconic".
* Fix: total results count would sometimes default to "0".
* Fix: php warning when using using the Theme Editor via Elementor Pro.
* Fix: compatibility hooks for WooCommerce shortcodes would not fire if the page did not use the `products` shortcode.
* Fix: "Custom fields" under the "Filter by" dropdown in the filters editor not visible when no custom taxonomies are found.
* Fix: Page preview parameters removed while filtering during preview of a page.

= 1.1.4 =
Release date 28 November 2022

* Fix: search results count shows the number of all products when no results are found.
* Fix: widget toggle hides the whole filter on click.
* Fix: filters not showing on shop and archive pages in Divi when the Products module "Products view type" setting is anything other than "Default".
* Tweak: added a filter to include support for the "Uncategorized" product category in filters.
* Tweak: added support for featured, sale, best selling & top rated products when using the WooCommerce `products` shortcode.

= 1.1.3 =
Release date 23 November 2022

* Fix: missing scoped dependency files.

= 1.1.2 =
Release date 23 November 2022

* Tweak: automatically generate numeric slugs when duplicates are found for filters with the same name.
* Tweak: index parent variable product id when indexing variations.
* Fix: missing scoped dependency when using the `Str` helper class.
* Fix: inability to index attributes of variations in certain situations.
* Fix: WPT Integration - counters of possible choices not taking variations into consideration when the table displays variations on separate rows.
* Fix: WPT Integration - counters of possible choices would wrongfully include the parent variable product during prefilling & when the table displays variations on separate rows.

= 1.1.1 =
Release date 14 November 2022

* Fix: slide out panel not working when using custom fields as filters on a custom WordPress page.

= 1.1.0 =
Release date 14 November 2022

* New: added support for filtering of products via "ACF" custom fields.
* New: added support for filtering of products via "Easy Post Types and Fields" custom fields.
* New: added "range slider" filter type.
* New: added support for categories and sub-categories as separate hierarchical dropdowns.
* New: added support for custom taxonomies as separate hierarchical dropdowns.
* Tweak: do not index out of stock products.
* Tweak: updated internal js libraries.

= 1.0.11 =
Release date 08 November 2022

* New: added compatibility with the Divi theme
* Fix: results not showing in taxonomy pages in WordPress 6.1
* Tweak: force default values when saving options via the settings panel

= 1.0.10 =
Release date 03 November 2022

 * Fix: results not showing in WordPress 6.1

= 1.0.9 =
Release date 24 October 2022

 * Fix: Compatiblity issue with Kadence Theme
 * Fix: Dropdown filters are not working on mobile in Jupiter theme
 * Tweak: attributes in filters now uses the "Default sort order" setting for sorting options in filters.

= 1.0.8 =
Release date 20 October 2022

 * Fix: setup wizard "filter visibility" and "filter behavior" not displaying inputs in certain situations.
 * Fix: crash of product tables powered by WooCommerce Product Table when tables had certain settings.
 * Fix: terms in color checkboxes and images filters not sorted based on their order in the admin area.
 * Dev: updated internal libraries.

= 1.0.7 =
Release date 06 October 2022

 * Tweak: adjusted the logic of selectable choices for taxonomies and attributes types of filters when used on a taxonomy page.
 * Tweak: adjusted the logic of selectable choices for taxonomies and attributes types of filters when used with the WooCommerce Product Table plugin.
 * Fix: license activation & plugin updates not working properly.
 * Fix: popover can't be closed on mobile.
 * Fix: _paged parameter ignored when no filters selected.
 * Fix: popover mispacled during chunk download.
 * Fix: terms in filters not sorted based on their order in the admin area.

= 1.0.6 =
Release date 27 September 2022

 * Tweak: sanitize non-latin characters for filters slugs.
 * Fix: empty "div" tag causing extra spacing in certain situations.

= 1.0.5 =
Release date 22 September 2022

 * Added: integration with the "WooCommerce Show Single Variations by Iconic" plugin.
 * Fix: pagination not working correctly in certain situations.
 * Fix: missing textdomain for certain strings.
 * Tweak: adjusted plugin activation process.
 * Dev: updated language files.
 * Dev: added a series of new hooks and filters.

= 1.0.4 =
Release date 15 September 2022

 * Fix: `permission_callback` parameter for pricing api.
 * Tweak: fallback to highest product price in the store when retrieving pricing details on taxonomy pages and the query produces no results.
 * Tweak: no longer check for catalog visibility when retrieving pricing details on taxonomy pages.
 * Dev: Tested up to WooCommerce 6.9

= 1.0.3 =
Release date 05 September 2022

 * Fix: price range slider not showing the taxonomy term specific max price.
 * Fix: setup wizard firing database queries when not needed.
 * Fix: svg overflow wasn't applied correctly.

= 1.0.2 =
Release date 24 August 2022

 * Fix: attributes filter checkboxes using the `AND` logic instead of `OR`.
 * Tweak: removed unused imports from js assets.
 * Tweak: moved code shared by the Attribute and Taxonomy models to a trait.
 * Tweak: removed code no longer needed.
 * Tweak: adjusted redundancy of the `get_search_query` method for certain models.

= 1.0.1 =
Release date 11 August 2022

 * Fix: popover body hidden underneath other elements in certain situations.
 * Fix: issue with columns counts & resizing on mobile devices for horizontal filters.
 * Fix: prevent crashing of pricing filter when products have been imported and not yet indexed.
 * Fix: the unique sources validation logic would wrongly fire on the "all attributes" filter when saving groups.
 * Tweak: automatically index products after import via CSV.
 * Tweak: reduced the code required to calculate valid choices for checkboxes filters.
 * Tweak: adjusted alignment of labels for checkboxes and radio filters when the label was too long.
 * Tweak: reset pagination to 1st page when changing sorting order.
 * Tweak: minor layout adjustments to the filters editor.
 * Dev: Tested up to WooCommerce 6.8.0

= 1.0 =

* Initial release.
