<?php

namespace Barn2\Plugin\WC_Filters\Dependencies\Illuminate\Events;

use Closure;
if (!\function_exists('Barn2\\Plugin\\WC_Filters\\Dependencies\\Illuminate\\Events\\queueable')) {
    /**
     * Create a new queued Closure event listener.
     *
     * @param  \Closure  $closure
     * @return \Illuminate\Events\QueuedClosure
     */
    function queueable(Closure $closure)
    {
        return new QueuedClosure($closure);
    }
}
