<?php

namespace Barn2\Plugin\WC_Filters\Dependencies\Illuminate\Contracts\Container;

use Exception;
use Barn2\Plugin\WC_Filters\Dependencies\Psr\Container\ContainerExceptionInterface;
class CircularDependencyException extends Exception implements ContainerExceptionInterface
{
    //
}
