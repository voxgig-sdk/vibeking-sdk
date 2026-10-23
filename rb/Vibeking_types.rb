# frozen_string_literal: true

# Typed models for the Vibeking SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# List entity data model.
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] hasMore
#   @return [Boolean, nil]
#
# @!attribute [rw] html
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] total
#   @return [Integer, nil]
List = Struct.new(
  :count,
  :hasMore,
  :html,
  :page,
  :total,
  keyword_init: true
)

# Request payload for List#load.
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] sort
#   @return [String, nil]
ListLoadMatch = Struct.new(
  :category,
  :page,
  :sort,
  keyword_init: true
)

# Product entity data model.
#
# @!attribute [rw] ai_tool
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] maker
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] tagline
#   @return [String, nil]
#
# @!attribute [rw] upvotes
#   @return [Integer, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Product = Struct.new(
  :ai_tool,
  :category,
  :created_at,
  :description,
  :id,
  :maker,
  :name,
  :tagline,
  :upvotes,
  :url,
  keyword_init: true
)

# Request payload for Product#load.
#
# @!attribute [rw] id
#   @return [Integer]
ProductLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Product#list.
#
# @!attribute [rw] ai_tool
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [String, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
#
# @!attribute [rw] sort
#   @return [String, nil]
ProductListMatch = Struct.new(
  :ai_tool,
  :category,
  :limit,
  :offset,
  :search,
  :sort,
  keyword_init: true
)

# Search entity data model.
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] hasMore
#   @return [Boolean, nil]
#
# @!attribute [rw] html
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] q
#   @return [String, nil]
#
# @!attribute [rw] total
#   @return [Integer, nil]
Search = Struct.new(
  :count,
  :hasMore,
  :html,
  :page,
  :q,
  :total,
  keyword_init: true
)

# Request payload for Search#load.
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] q
#   @return [String]
SearchLoadMatch = Struct.new(
  :page,
  :q,
  keyword_init: true
)

