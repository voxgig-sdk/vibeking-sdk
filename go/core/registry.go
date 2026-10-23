package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewListEntityFunc func(client *VibekingSDK, entopts map[string]any) VibekingEntity

var NewProductEntityFunc func(client *VibekingSDK, entopts map[string]any) VibekingEntity

var NewSearchEntityFunc func(client *VibekingSDK, entopts map[string]any) VibekingEntity

