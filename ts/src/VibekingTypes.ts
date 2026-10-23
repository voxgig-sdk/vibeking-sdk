// Typed models for the Vibeking SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface List {
  count?: number
  hasMore?: boolean
  html?: string
  page?: number
  total?: number
}

export interface ListLoadMatch {
  category?: string
  page?: number
  sort?: string
}

export interface Product {
  ai_tool?: string
  category?: string
  created_at?: string
  description?: string
  id?: number
  maker?: string
  name?: string
  tagline?: string
  upvotes?: number
  url?: string
}

export interface ProductLoadMatch {
  id: number
}

export interface ProductListMatch {
  ai_tool?: string
  category?: string
  limit?: string
  offset?: number
  search?: string
  sort?: string
}

export interface Search {
  count?: number
  hasMore?: boolean
  html?: string
  page?: number
  q?: string
  total?: number
}

export interface SearchLoadMatch {
  page?: number
  q: string
}

