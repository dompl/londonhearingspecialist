<?php
// /**
//  * comment
//  */
// if (  !  defined( 'ABSPATH' ) ) {
//     exit; // Exit if accessed directly
// }
// $directory = dirname( __FILE__ );
//
// $iterator = new RecursiveIteratorIterator( new RecursiveDirectoryIterator( $directory ) );
//
// foreach ( $iterator as $file ) {
//
//     if ( $file->isDir() ) {
//         continue;
//     }
//
//     $filename = $file->getFilename();
//     if ( strpos( $filename, 'exclude' ) !== false ) {
//         continue; // Skip files with "exclude" in the filename
//     }
//
//     if (  !  in_array( $file->getFilename(), ['_init.php'] ) && $file->getExtension() === 'php' ) {
//         require_once $file->getPathname();
//     }
// }