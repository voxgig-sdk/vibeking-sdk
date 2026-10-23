# Vibeking SDK utility: make_context

from projectname_sdk.core.context import VibekingContext


def make_context_util(ctxmap, basectx):
    return VibekingContext(ctxmap, basectx)
