

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { VibekingSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when VIBEKING_TEST_LIVE=TRUE.
  afterEach(liveDelay('VIBEKING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = VibekingSDK.test()
    const ent = testsdk.List()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = VibekingSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.List().load({"category":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.VIBEKING_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"count":{"a":true,"h":"Count","n":"count","r":false,"sh":"Number of products returned in this page.","t":"`$INTEGER`","key$":"count","index$":0},"hasMore":{"a":true,"h":"Has More","n":"hasMore","r":false,"t":"`$BOOLEAN`","key$":"hasMore","index$":1},"html":{"a":true,"h":"Html","n":"html","r":false,"sh":"Pre-rendered HTML rows for this page.","t":"`$STRING`","key$":"html","index$":2},"page":{"a":true,"h":"Page","n":"page","r":false,"t":"`$INTEGER`","key$":"page","index$":3},"total":{"a":true,"h":"Total","n":"total","r":false,"sh":"Total number of products matching the query.","t":"`$INTEGER`","key$":"total","index$":4}},"name":"list","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/list","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"category","or":"category","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":"trending","k":"query","n":"sort","or":"sort","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/api/list","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"list"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"list","name__orig":"list","Name":"List","name_":"list","name-":"list","NAME":"LIST","index$":0}, {"active":true,"entity":"list","key$":"BasicListFlow","kind":"basic","name":"BasicListFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"list_ref01","srcdatavar":"list_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-list_ref01"}}],"index$":0}]}, 'List', {"GET /api/list":{"protocol":"http","parameters":[{"name":"sort","in":"query","required":false,"description":"Sort order. 'trending' (recent 7-day upvote momentum, default), 'new' (by recency) or 'top' (lifetime upvotes).","schema":{"type":"string","enum":["trending","new","top"],"default":"trending"},"index$":0},{"name":"category","in":"query","required":false,"description":"Category label to filter by (e.g. 'Dev Tools', 'SaaS', 'AI Coding', 'Productivity', 'Design'). Omit or use 'All' for no filter.","schema":{"type":"string"},"index$":1},{"name":"page","in":"query","required":false,"description":"Page number, starting at 1. Page size is 30.","schema":{"type":"integer","minimum":1,"default":1},"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let list_ref01_data = Object.values(setup.data.existing.list)[0] as any

    // LOAD
    const list_ref01_ent = client.List()
    const list_ref01_match_dt0: any = {}
    const list_ref01_data_dt0 = (await list_ref01_ent.load(list_ref01_match_dt0)).data()
    assert(null != list_ref01_data_dt0)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list/ListTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = VibekingSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['list01','list02','list03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'VIBEKING_TEST_LIST_ENTID': idmap,
    'VIBEKING_TEST_LIVE': 'FALSE',
    'VIBEKING_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['VIBEKING_TEST_LIST_ENTID']

  const live = 'TRUE' === env.VIBEKING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['VIBEKING_TEST_LIST_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new VibekingSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.VIBEKING_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
