import { VibekingEntityBase } from '../VibekingEntityBase';
import type { VibekingSDK } from '../VibekingSDK';
import type { Control } from '../types';
import type { List, ListLoadMatch } from '../VibekingTypes';
declare class ListEntity extends VibekingEntityBase<List> {
    constructor(client: VibekingSDK, entopts: any);
    make(this: ListEntity): ListEntity;
    load(this: any, reqmatch?: ListLoadMatch, ctrl?: Control): Promise<ListEntity>;
}
export { ListEntity };
