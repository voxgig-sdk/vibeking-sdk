# Vibeking SDK utility: prepare_body
require_relative 'media'
module VibekingUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return VibekingUtilities.raw_body(ctx.reqdata) if VibekingUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
