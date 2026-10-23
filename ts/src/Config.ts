
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Vibeking',
        slug: "vibeking",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "now": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://vibeking.fun",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        list: {
        },
  
        product: {
        },
  
        search: {
        },
  
    }
  }


  entity = {
    "list": {
      "fields": [
        {
          "name": "count",
          "title": "Count",
          "type": "`$INTEGER`",
          "short": "Number of products returned in this page."
        },
        {
          "name": "hasMore",
          "title": "Has More",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "html",
          "title": "Html",
          "type": "`$STRING`",
          "short": "Pre-rendered HTML rows for this page."
        },
        {
          "name": "page",
          "title": "Page",
          "type": "`$INTEGER`"
        },
        {
          "name": "total",
          "title": "Total",
          "type": "`$INTEGER`",
          "short": "Total number of products matching the query."
        }
      ],
      "name": "list",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/list",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "list"
                }
              ],
              "parts": [
                "api",
                "list"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "category",
                    "orig": "category",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1,
                    "field": true
                  },
                  {
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "trending"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "product": {
      "fields": [
        {
          "name": "ai_tool",
          "title": "Ai Tool",
          "type": "`$STRING`",
          "short": "The AI tool used to build the product."
        },
        {
          "name": "category",
          "title": "Category",
          "type": "`$STRING`"
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`"
        },
        {
          "name": "maker",
          "title": "Maker",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`"
        },
        {
          "name": "tagline",
          "title": "Tagline",
          "type": "`$STRING`"
        },
        {
          "name": "upvotes",
          "title": "Upvotes",
          "type": "`$INTEGER`"
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "short": "The product's real external URL.",
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "product",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/products",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "products"
                }
              ],
              "parts": [
                "api",
                "products"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "ai_tool",
                    "orig": "ai_tool",
                    "type": "`$STRING`",
                    "kind": "query",
                    "field": true
                  },
                  {
                    "name": "category",
                    "orig": "category",
                    "type": "`$STRING`",
                    "kind": "query",
                    "field": true
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "100"
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 0
                  },
                  {
                    "name": "search",
                    "orig": "search",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "top"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/products/{id}",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "products"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "products",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "search": {
      "fields": [
        {
          "name": "count",
          "title": "Count",
          "type": "`$INTEGER`"
        },
        {
          "name": "hasMore",
          "title": "Has More",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "html",
          "title": "Html",
          "type": "`$STRING`",
          "short": "Pre-rendered HTML rows for this page."
        },
        {
          "name": "page",
          "title": "Page",
          "type": "`$INTEGER`"
        },
        {
          "name": "q",
          "title": "Q",
          "type": "`$STRING`",
          "short": "The echoed search query."
        },
        {
          "name": "total",
          "title": "Total",
          "type": "`$INTEGER`"
        }
      ],
      "name": "search",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/search",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "search"
                }
              ],
              "parts": [
                "api",
                "search"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1,
                    "field": true
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "love",
                    "field": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "q"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

