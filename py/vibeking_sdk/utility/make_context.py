# Vibeking SDK utility: make_context

from vibeking_sdk.core.context import VibekingContext


def make_context_util(ctxmap, basectx):
    return VibekingContext(ctxmap, basectx)
