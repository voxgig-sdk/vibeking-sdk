-- Vibeking SDK exists test

local sdk = require("vibeking_sdk")

describe("VibekingSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
