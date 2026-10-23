<?php
declare(strict_types=1);

// Vibeking SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class VibekingMakeContext
{
    public static function call(array $ctxmap, ?VibekingContext $basectx): VibekingContext
    {
        return new VibekingContext($ctxmap, $basectx);
    }
}
