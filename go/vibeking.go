package voxgigvibekingsdk

import (
	"github.com/voxgig-sdk/vibeking-sdk/go/core"
	"github.com/voxgig-sdk/vibeking-sdk/go/entity"
	"github.com/voxgig-sdk/vibeking-sdk/go/feature"
	_ "github.com/voxgig-sdk/vibeking-sdk/go/utility"
)

// Type aliases preserve external API.
type VibekingSDK = core.VibekingSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type VibekingEntity = core.VibekingEntity
type StreamItem = core.StreamItem
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type VibekingError = core.VibekingError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewListEntityFunc = func(client *core.VibekingSDK, entopts map[string]any) core.VibekingEntity {
		return entity.NewListEntity(client, entopts)
	}
	core.NewProductEntityFunc = func(client *core.VibekingSDK, entopts map[string]any) core.VibekingEntity {
		return entity.NewProductEntity(client, entopts)
	}
	core.NewSearchEntityFunc = func(client *core.VibekingSDK, entopts map[string]any) core.VibekingEntity {
		return entity.NewSearchEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewVibekingSDK = core.NewVibekingSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewVibekingSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *VibekingSDK  { return NewVibekingSDK(nil) }
func Test() *VibekingSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
