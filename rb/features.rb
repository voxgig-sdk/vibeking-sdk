# Vibeking SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module VibekingFeatures
  def self.make_feature(name)
    case name
    when "base"
      VibekingBaseFeature.new
    when "ratelimit"
      VibekingRatelimitFeature.new
    when "retry"
      VibekingRetryFeature.new
    when "test"
      VibekingTestFeature.new
    when "timeout"
      VibekingTimeoutFeature.new
    else
      VibekingBaseFeature.new
    end
  end
end
