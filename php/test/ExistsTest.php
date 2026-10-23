<?php
declare(strict_types=1);

// Vibeking SDK exists test

require_once __DIR__ . '/../vibeking_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = VibekingSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
