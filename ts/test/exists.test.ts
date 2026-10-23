
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { VibekingSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = VibekingSDK.test()
    equal(testsdk instanceof VibekingSDK, true,
      'VibekingSDK.test() must return a client synchronously')
  })

})
