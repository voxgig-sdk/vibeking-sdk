import { VibekingEntityBase } from '../VibekingEntityBase';
import type { VibekingSDK } from '../VibekingSDK';
import type { Control } from '../types';
import type { Product, ProductLoadMatch, ProductListMatch } from '../VibekingTypes';
declare class ProductEntity extends VibekingEntityBase<Product> {
    constructor(client: VibekingSDK, entopts: any);
    make(this: ProductEntity): ProductEntity;
    load(this: any, reqmatch?: ProductLoadMatch, ctrl?: Control): Promise<ProductEntity>;
    list(this: any, reqmatch?: ProductListMatch, ctrl?: Control): Promise<ProductEntity[]>;
}
export { ProductEntity };
