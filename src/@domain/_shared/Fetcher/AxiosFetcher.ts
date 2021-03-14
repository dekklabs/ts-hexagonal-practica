import axios, {AxiosInstance} from "axios";
import FetcherInput from "./FetchInputs";

export default class AxiosFetcher implements FetcherInput {
	private _fetcher:AxiosInstance;

	constructor(apiURI:string, config:any) {
		this._fetcher = axios.create({
			baseURL: apiURI || config.getApi()
		})
	}

	public get request() {
		return this._fetcher;
	}
}
