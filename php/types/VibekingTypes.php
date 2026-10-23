<?php
declare(strict_types=1);

// Typed models for the Vibeking SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** List entity data model. */
class ListType
{
    public ?int $count = null;
    public ?bool $hasMore = null;
    public ?string $html = null;
    public ?int $page = null;
    public ?int $total = null;
}

/** Request payload for List#load. */
class ListLoadMatch
{
    public ?string $category = null;
    public ?int $page = null;
    public ?string $sort = null;
}

/** Product entity data model. */
class Product
{
    public ?string $ai_tool = null;
    public ?string $category = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?int $id = null;
    public ?string $maker = null;
    public ?string $name = null;
    public ?string $tagline = null;
    public ?int $upvotes = null;
    public ?string $url = null;
}

/** Request payload for Product#load. */
class ProductLoadMatch
{
    public int $id;
}

/** Request payload for Product#list. */
class ProductListMatch
{
    public ?string $ai_tool = null;
    public ?string $category = null;
    public ?string $limit = null;
    public ?int $offset = null;
    public ?string $search = null;
    public ?string $sort = null;
}

/** Search entity data model. */
class Search
{
    public ?int $count = null;
    public ?bool $hasMore = null;
    public ?string $html = null;
    public ?int $page = null;
    public ?string $q = null;
    public ?int $total = null;
}

/** Request payload for Search#load. */
class SearchLoadMatch
{
    public ?int $page = null;
    public string $q;
}

