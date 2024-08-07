<?php

namespace Barn2\Plugin\WC_Filters\Dependencies\Illuminate\Database\Eloquent\Casts;

use ArrayObject as BaseArrayObject;
use Barn2\Plugin\WC_Filters\Dependencies\Illuminate\Contracts\Support\Arrayable;
use JsonSerializable;
class ArrayObject extends BaseArrayObject implements Arrayable, JsonSerializable
{
    /**
     * Get a collection containing the underlying array.
     *
     * @return \Illuminate\Support\Collection
     */
    public function collect()
    {
        return \Barn2\Plugin\WC_Filters\Helpers::collect($this->getArrayCopy());
    }
    /**
     * Get the instance as an array.
     *
     * @return array
     */
    public function toArray()
    {
        return $this->getArrayCopy();
    }
    /**
     * Get the array that should be JSON serialized.
     *
     * @return array
     */
    #[\ReturnTypeWillChange]
    public function jsonSerialize()
    {
        return $this->getArrayCopy();
    }
}
