<?php
namespace Kickstarter;
use Extended\ACF\Fields\DateTimePicker;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\TrueFalse;
use Kickstarter\MyHelpers;
trait AcfContainerSchedule {

    /**
     * Add ACF schedule related fields.
     *
     * @param array $fields Existing fields.
     * @return array Modified fields.
     */
    public static function AcfContainerSchedule( $fields ) {
        $ThemeData = MyHelpers::getThemeData();

        if ( isset( $ThemeData['ks_container_schedule'] ) && $ThemeData['ks_container_schedule'] == true && function_exists( 'ks_component_scheduling' ) ) {
            // Adding schedule-related fields
            $fields = self::addScheduleFields( $fields );
        }

        return $fields;
    }

    /**
     * Helper method to add scheduling related fields.
     *
     * @param array $fields Existing fields.
     * @return array Modified fields.
     */
    private static function addScheduleFields( $fields ) {
        $fields[] = Tab::make( 'Component schedule', wp_unique_id() )->placement( 'left' );
        $fields[] = DateTimePicker::make( 'Show from', 'component_from' )
            ->instructions( 'Show this component from selected date and time' )
            ->displayFormat( 'd-m-Y H:i:s' )
            ->returnFormat( 'Y-m-d H:i:s' );

        $fields[] = DateTimePicker::make( 'Show till', 'component_to' )
            ->instructions( 'Show this component to selected date and time' )
            ->displayFormat( 'd-m-Y H:i:s' )
            ->returnFormat( 'Y-m-d H:i:s' );

        $fields[] = TrueFalse::make( 'Show for admins', 'component_to_admin' )
            ->instructions( 'Set Yes if you would like to show this container to the website administrators (when logged in)' )
            ->defaultValue( false )
            ->stylisedUi();

        return $fields;
    }
}