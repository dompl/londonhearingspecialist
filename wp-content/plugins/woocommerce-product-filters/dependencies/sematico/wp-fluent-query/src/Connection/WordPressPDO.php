<?php

// phpcs:ignore WordPress.Files.FileName
/**
 * Adapt PDO to use wpdb's methods.
 *
 * @package   Sematico\fluent-query
 * @author    Alessandro Tesoro <alessandro.tesoro@icloud.com>
 * @copyright Alessandro Tesoro
 * @license   MIT
 */
namespace Barn2\Plugin\WC_Filters\Dependencies\Sematico\FluentQuery\Connection;

use PDO;
use PDOException;
/**
 * An extension of PDO's to support the wpdb class.
 */
class WordPressPDO extends PDO
{
    protected $wpConnection;
    protected $in_transaction;
    /**
     * Initialize new connection.
     *
     * @param WordPressConnection $wpConnection
     */
    public function __construct(WordPressConnection $wpConnection)
    {
        $this->wpConnection = $wpConnection;
    }
    /**
     * {@inheritdoc}
     */
    #[\ReturnTypeWillChange]
    public function beginTransaction()
    {
        if ($this->in_transaction) {
            throw new PDOException('Failed to start transaction. Transaction is already started.');
        }
        $this->in_transaction = \true;
        return $this->wpConnection->unprepared('START TRANSACTION');
    }
    /**
     * {@inheritdoc}
     */
    #[\ReturnTypeWillChange]
    public function commit()
    {
        if (!$this->in_transaction) {
            throw new PDOException('There is no active transaction to commit.');
        }
        $this->in_transaction = \false;
        return $this->wpConnection->unprepared('COMMIT');
    }
    /**
     * {@inheritdoc}
     */
    #[\ReturnTypeWillChange]
    public function rollBack()
    {
        if (!$this->in_transaction) {
            throw new PDOException('There is no active transaction to rollback.');
        }
        $this->in_transaction = \false;
        return $this->wpConnection->unprepared('ROLLBACK');
    }
    /**
     * {@inheritdoc}
     */
    #[\ReturnTypeWillChange]
    public function inTransaction()
    {
        return $this->in_transaction;
    }
    /**
     * {@inheritdoc}
     */
    #[\ReturnTypeWillChange]
    public function exec($statement)
    {
        return $this->wpConnection->unprepared($statement);
    }
    /**
     * {@inheritdoc}
     */
    #[\ReturnTypeWillChange]
    public function lastInsertId($name = null)
    {
        return $this->wpConnection->getWpdb()->insert_id;
    }
    /**
     * {@inheritdoc}
     */
    #[\ReturnTypeWillChange]
    public function errorCode()
    {
        return null;
    }
    /**
     * {@inheritdoc}
     */
    #[\ReturnTypeWillChange]
    public function errorInfo()
    {
        return [$this->wpConnection->getWpdb()->last_error];
    }
}
