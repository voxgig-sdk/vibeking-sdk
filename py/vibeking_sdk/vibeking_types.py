# Typed models for the Vibeking SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class List(TypedDict, total=False):
    count: int
    hasMore: bool
    html: str
    page: int
    total: int


class ListLoadMatch(TypedDict, total=False):
    category: str
    page: int
    sort: str


class Product(TypedDict, total=False):
    ai_tool: str
    category: str
    created_at: str
    description: str
    id: int
    maker: str
    name: str
    tagline: str
    upvotes: int
    url: str


class ProductLoadMatch(TypedDict):
    id: int


class ProductListMatch(TypedDict, total=False):
    ai_tool: str
    category: str
    limit: str
    offset: int
    search: str
    sort: str


class Search(TypedDict, total=False):
    count: int
    hasMore: bool
    html: str
    page: int
    q: str
    total: int


class SearchLoadMatchRequired(TypedDict):
    q: str


class SearchLoadMatch(SearchLoadMatchRequired, total=False):
    page: int
