-- Typed models for the Vibeking SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class List
---@field count? number
---@field hasMore? boolean
---@field html? string
---@field page? number
---@field total? number

---@class ListLoadMatch
---@field category? string
---@field page? number
---@field sort? string

---@class Product
---@field ai_tool? string
---@field category? string
---@field created_at? string
---@field description? string
---@field id? number
---@field maker? string
---@field name? string
---@field tagline? string
---@field upvotes? number
---@field url? string

---@class ProductLoadMatch
---@field id number

---@class ProductListMatch
---@field ai_tool? string
---@field category? string
---@field limit? string
---@field offset? number
---@field search? string
---@field sort? string

---@class Search
---@field count? number
---@field hasMore? boolean
---@field html? string
---@field page? number
---@field q? string
---@field total? number

---@class SearchLoadMatch
---@field page? number
---@field q string

local M = {}

return M
