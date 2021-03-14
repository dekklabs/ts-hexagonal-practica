import FetcherFactory from "../../_shared/Fetcher/factory";
import {HTTPUserRepository} from "./HTTPUserRepository";

export const httpUserRepository = () =>
	new HTTPUserRepository(FetcherFactory.httpFetcher);
