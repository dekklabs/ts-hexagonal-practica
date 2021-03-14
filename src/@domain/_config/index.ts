export default class Configuration {
    private _config:string;

    constructor() {
        this._config = process.env.REACT_APP_API_URI || "";
    }

    public getApi():string {
        return this._config;
    }
}