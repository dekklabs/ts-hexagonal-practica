import FetcherInput from "../../_shared/Fetcher/FetchInputs";
import {IUser} from "../2_Entities/UserEntity";
import IUserRepository from "../4_Repositories/IUserRepository";

export class HTTPUserRepository implements IUserRepository {
    private _fetcher: FetcherInput;

    constructor(fetcher: FetcherInput) {
        this._fetcher = fetcher;
    }

    public async listUser():Promise<IUser[]> {
        const {data} = await this._fetcher.request.get(`/users`);

        return data;
    }
}
