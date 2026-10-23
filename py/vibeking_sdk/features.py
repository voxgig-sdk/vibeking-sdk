# Vibeking SDK feature factory

from vibeking_sdk.feature.base_feature import VibekingBaseFeature
from vibeking_sdk.feature.ratelimit_feature import VibekingRatelimitFeature
from vibeking_sdk.feature.retry_feature import VibekingRetryFeature
from vibeking_sdk.feature.test_feature import VibekingTestFeature
from vibeking_sdk.feature.timeout_feature import VibekingTimeoutFeature


_FEATURES = {
    "base": lambda: VibekingBaseFeature(),
    "ratelimit": lambda: VibekingRatelimitFeature(),
    "retry": lambda: VibekingRetryFeature(),
    "test": lambda: VibekingTestFeature(),
    "timeout": lambda: VibekingTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
