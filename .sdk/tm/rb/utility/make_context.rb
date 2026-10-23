# Vibeking SDK utility: make_context
require_relative '../core/context'
module VibekingUtilities
  MakeContext = ->(ctxmap, basectx) {
    VibekingContext.new(ctxmap, basectx)
  }
end
