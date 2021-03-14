import Configuration from "../../_config";
import AxiosFetcher from "./AxiosFetcher";

const config = new Configuration();
const apiURL = config.getApi();

export default class FetcherFactory {
	public static httpFetcher = new AxiosFetcher(
		apiURL,
		config
	);
}
