import { ListEntity } from './entity/ListEntity';
import { ProductEntity } from './entity/ProductEntity';
import { SearchEntity } from './entity/SearchEntity';
export type * from './VibekingTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { VibekingEntityBase } from './VibekingEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class VibekingSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    List(entopts?: Record<string, any>): ListEntity;
    Product(entopts?: Record<string, any>): ProductEntity;
    Search(entopts?: Record<string, any>): SearchEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): VibekingSDK;
    tester(testopts?: any, sdkopts?: any): VibekingSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof VibekingSDK;
export { stdutil, config, BaseFeature, VibekingEntityBase, VibekingSDK, SDK, };
export type { DirectResult };
