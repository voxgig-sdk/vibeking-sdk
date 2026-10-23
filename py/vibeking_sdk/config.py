# Vibeking SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Vibeking",
            "slug": "vibeking",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "now": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://vibeking.fun",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "list": {},
                "product": {},
                "search": {},
            },
        },
        "entity": {
      "list": {
        "fields": [
          {
            "name": "count",
            "title": "Count",
            "type": "`$INTEGER`",
            "short": "Number of products returned in this page.",
          },
          {
            "name": "hasMore",
            "title": "Has More",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "html",
            "title": "Html",
            "type": "`$STRING`",
            "short": "Pre-rendered HTML rows for this page.",
          },
          {
            "name": "page",
            "title": "Page",
            "type": "`$INTEGER`",
          },
          {
            "name": "total",
            "title": "Total",
            "type": "`$INTEGER`",
            "short": "Total number of products matching the query.",
          },
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
                    "lit": "api",
                  },
                  {
                    "lit": "list",
                  },
                ],
                "parts": [
                  "api",
                  "list",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "category",
                      "orig": "category",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                      "field": True,
                    },
                    {
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "trending",
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "product": {
        "fields": [
          {
            "name": "ai_tool",
            "title": "Ai Tool",
            "type": "`$STRING`",
            "short": "The AI tool used to build the product.",
          },
          {
            "name": "category",
            "title": "Category",
            "type": "`$STRING`",
          },
          {
            "name": "created_at",
            "title": "Created At",
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
          },
          {
            "name": "maker",
            "title": "Maker",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
          },
          {
            "name": "tagline",
            "title": "Tagline",
            "type": "`$STRING`",
          },
          {
            "name": "upvotes",
            "title": "Upvotes",
            "type": "`$INTEGER`",
          },
          {
            "name": "url",
            "title": "Url",
            "type": "`$STRING`",
            "short": "The product's real external URL.",
            "format": "uri",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                    "lit": "api",
                  },
                  {
                    "lit": "products",
                  },
                ],
                "parts": [
                  "api",
                  "products",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "query": [
                    {
                      "name": "ai_tool",
                      "orig": "ai_tool",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                    {
                      "name": "category",
                      "orig": "category",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "100",
                    },
                    {
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 0,
                    },
                    {
                      "name": "search",
                      "orig": "search",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "top",
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
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
                    "lit": "api",
                  },
                  {
                    "lit": "products",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "api",
                  "products",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "search": {
        "fields": [
          {
            "name": "count",
            "title": "Count",
            "type": "`$INTEGER`",
          },
          {
            "name": "hasMore",
            "title": "Has More",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "html",
            "title": "Html",
            "type": "`$STRING`",
            "short": "Pre-rendered HTML rows for this page.",
          },
          {
            "name": "page",
            "title": "Page",
            "type": "`$INTEGER`",
          },
          {
            "name": "q",
            "title": "Q",
            "type": "`$STRING`",
            "short": "The echoed search query.",
          },
          {
            "name": "total",
            "title": "Total",
            "type": "`$INTEGER`",
          },
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
                    "lit": "api",
                  },
                  {
                    "lit": "search",
                  },
                ],
                "parts": [
                  "api",
                  "search",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                      "field": True,
                    },
                    {
                      "name": "q",
                      "orig": "q",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                      "example": "love",
                      "field": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "q",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
