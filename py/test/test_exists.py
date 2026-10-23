# Vibeking SDK exists test

import pytest
from vibeking_sdk import VibekingSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = VibekingSDK.test(None, None)
        assert testsdk is not None
