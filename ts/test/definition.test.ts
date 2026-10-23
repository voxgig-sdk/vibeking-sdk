import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "list",
    "accessor": "List",
    "op": "load",
    "method": "GET",
    "path": "/api/list",
    "args": [],
    "select": {
      "category": "v1",
      "page": 1,
      "sort": "trending"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "sort",
      "category",
      "page"
    ],
    "queryArgs": [
      {
        "name": "category",
        "wire": "category"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "sort",
        "wire": "sort"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "html": "x",
      "count": 1,
      "page": 1,
      "total": 1,
      "hasMore": true
    },
    "idField": "id"
  },
  {
    "entity": "product",
    "accessor": "Product",
    "op": "list",
    "method": "GET",
    "path": "/api/products",
    "args": [],
    "select": {
      "ai_tool": "v1",
      "category": "v1",
      "limit": "100",
      "offset": 0,
      "search": "v1",
      "sort": "top"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "search",
      "category",
      "ai_tool",
      "sort"
    ],
    "queryArgs": [
      {
        "name": "ai_tool",
        "wire": "ai_tool"
      },
      {
        "name": "category",
        "wire": "category"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "search",
        "wire": "search"
      },
      {
        "name": "sort",
        "wire": "sort"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "total": 1,
      "count": 1,
      "offset": 1,
      "filters": {
        "search": "x",
        "category": "x",
        "ai_tool": "x",
        "sort": "top"
      },
      "liveness": {
        "live": 1,
        "at_risk": 1,
        "dead": 1,
        "unchecked": 1
      },
      "data": [
        {
          "id": 1,
          "name": "x",
          "tagline": "x",
          "description": "x",
          "url": "x",
          "maker": "x",
          "ai_tool": "x",
          "category": "x",
          "upvotes": 1,
          "created_at": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "product",
    "accessor": "Product",
    "op": "load",
    "method": "GET",
    "path": "/api/products/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "data": {
        "id": 1,
        "name": "x",
        "tagline": "x",
        "description": "x",
        "url": "x",
        "maker": "x",
        "ai_tool": "x",
        "category": "x",
        "upvotes": 1,
        "created_at": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "search",
    "accessor": "Search",
    "op": "load",
    "method": "GET",
    "path": "/api/search",
    "args": [],
    "select": {
      "q": "love",
      "page": 1
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "q",
      "page"
    ],
    "queryArgs": [
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "html": "x",
      "count": 1,
      "page": 1,
      "total": 1,
      "hasMore": true,
      "q": "x"
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
