<?php

namespace Barn2\Plugin\WC_Filters\Dependencies\Illuminate\Database\Events;

use Barn2\Plugin\WC_Filters\Dependencies\Illuminate\Contracts\Database\Events\MigrationEvent as MigrationEventContract;
abstract class MigrationsEvent implements MigrationEventContract
{
    /**
     * The migration method that was invoked.
     *
     * @var string
     */
    public $method;
    /**
     * Create a new event instance.
     *
     * @param  string  $method
     * @return void
     */
    public function __construct($method)
    {
        $this->method = $method;
    }
}
