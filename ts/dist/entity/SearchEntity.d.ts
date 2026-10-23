import { VibekingEntityBase } from '../VibekingEntityBase';
import type { VibekingSDK } from '../VibekingSDK';
import type { Control } from '../types';
import type { Search, SearchLoadMatch } from '../VibekingTypes';
declare class SearchEntity extends VibekingEntityBase<Search> {
    constructor(client: VibekingSDK, entopts: any);
    make(this: SearchEntity): SearchEntity;
    load(this: any, reqmatch?: SearchLoadMatch, ctrl?: Control): Promise<SearchEntity>;
}
export { SearchEntity };
