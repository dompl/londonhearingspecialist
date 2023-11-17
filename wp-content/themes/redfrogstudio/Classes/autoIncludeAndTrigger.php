<?php

namespace Kickstarter;

use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;

/**
 * Class autoIncludeAndTrigger
 *
 * This class is responsible for automatically including and triggering PHP files
 * from specified directories in both the parent and child themes.
 */
class autoIncludeAndTrigger {

    /**
     * @var null|autoIncludeAndTrigger Holds the single instance of this class
     */
    private static $instance = null;

    /**
     * autoIncludeAndTrigger constructor.
     *
     * Initializes the autoIncludeAndTrigger process upon object creation.
     */
    public function __construct() {
        self::autoIncludeAndTrigger();
    }

    /**
     * Get the single instance of this class.
     *
     * @return autoIncludeAndTrigger The single instance of this class
     */
    public static function getInstance() {
        if ( self::$instance === null ) {
            self::$instance = new autoIncludeAndTrigger();
        }
        return self::$instance;
    }

    /**
     * Automatically include and trigger files from specified directories.
     *
     * This function includes PHP files from directories specified in the $parentFolders
     * and $childFolders arrays. It also allows for files to be excluded based on
     * partial or full filename matches specified in $excludedFiles and $excludedChildFiles arrays.
     */
    public static function autoIncludeAndTrigger() {

        $parentFolders      = apply_filters( '_ks_include_folder', ['Classes', 'functions', 'components'] );
        $childFolders       = apply_filters( '_ks_child_include_folder', ['Classes', 'functions', 'components'] );
        $excludedFiles      = apply_filters( '_ks_excluded_files', ['_init', 'autoIncludeAndTrigger', 'exclude', 'ignore'] );
        $excludedChildFiles = apply_filters( '_ks_excluded_child_files', ['_init', 'exclude', 'ignore'] );

        // New array for excluded subdirectories
        $excludedSubDirs = apply_filters( '_ks_excluded_sub_dirs', [] );

        $includeFiles = function ( $folderPath, $excludedFiles, $excludedSubDirs ) {
            if ( is_dir( $folderPath ) ) {
                $iterator = new RecursiveIteratorIterator( new RecursiveDirectoryIterator( $folderPath ) );
                foreach ( $iterator as $file ) {
                    $filename     = $file->getFilename();
                    $filePath     = $file->getPathname();
                    $relativePath = ltrim( substr( $filePath, strlen( $folderPath ) ), '/' );
                    // Skip directories
                    if ( $file->isDir() ) {
                        continue;
                    }

                    // Skip excluded files
                    $skipFile = array_filter( $excludedFiles, function ( $exclude ) use ( $filename ) {
                        return strpos( $filename, $exclude ) !== false;
                    } );

                    // Skip excluded subdirectories
                    $skipFolder = array_filter( $excludedSubDirs, function ( $excludeDir ) use ( $relativePath, $folderPath, $filePath ) {
                        $fullExcludePath = $folderPath . '/' . $excludeDir;
                        return strpos( $filePath, $fullExcludePath ) !== false;
                    } );

                    // If neither the file nor its parent folder is in the exclusion list, include it
                    if ( empty( $skipFile ) && empty( $skipFolder ) ) {
                        require_once $filePath;
                    }
                }
            }
        };

        foreach ( $parentFolders as $folder ) {
            $folderPath = get_template_directory() . '/' . $folder;
            $includeFiles( $folderPath, $excludedFiles, $excludedSubDirs );
        }

        if ( get_template_directory() !== get_stylesheet_directory() ) {
            foreach ( $childFolders as $folder ) {
                $folderPath = get_stylesheet_directory() . '/' . $folder;
                $includeFiles( $folderPath, $excludedChildFiles, $excludedSubDirs );
            }
        }
    }

}