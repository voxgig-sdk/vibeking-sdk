# Vibeking SDK exists test

require "minitest/autorun"
require_relative "../Vibeking_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = VibekingSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
