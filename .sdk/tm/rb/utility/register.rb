# Vibeking SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

VibekingUtility.registrar = ->(u) {
  u.clean = VibekingUtilities::Clean
  u.clean_add = VibekingUtilities::CleanAdd
  u.clean_explain = VibekingUtilities::CleanExplain
  u.done = VibekingUtilities::Done
  u.make_error = VibekingUtilities::MakeError
  u.feature_add = VibekingUtilities::FeatureAdd
  u.feature_hook = VibekingUtilities::FeatureHook
  u.feature_init = VibekingUtilities::FeatureInit
  u.fetcher = VibekingUtilities::Fetcher
  u.make_fetch_def = VibekingUtilities::MakeFetchDef
  u.make_context = VibekingUtilities::MakeContext
  u.make_options = VibekingUtilities::MakeOptions
  u.make_request = VibekingUtilities::MakeRequest
  u.make_response = VibekingUtilities::MakeResponse
  u.make_result = VibekingUtilities::MakeResult
  u.make_point = VibekingUtilities::MakePoint
  u.make_spec = VibekingUtilities::MakeSpec
  u.make_url = VibekingUtilities::MakeUrl
  u.param = VibekingUtilities::Param
  u.prepare_auth = VibekingUtilities::PrepareAuth
  u.prepare_body = VibekingUtilities::PrepareBody
  u.prepare_headers = VibekingUtilities::PrepareHeaders
  u.prepare_method = VibekingUtilities::PrepareMethod
  u.prepare_params = VibekingUtilities::PrepareParams
  u.prepare_path = VibekingUtilities::PreparePath
  u.prepare_query = VibekingUtilities::PrepareQuery
  u.graphql_body = VibekingUtilities::GraphqlBody
  u.graphql_errors = VibekingUtilities::GraphqlErrors
  u.result_basic = VibekingUtilities::ResultBasic
  u.result_body = VibekingUtilities::ResultBody
  u.result_headers = VibekingUtilities::ResultHeaders
  u.transform_request = VibekingUtilities::TransformRequest
  u.transform_response = VibekingUtilities::TransformResponse
}
