
import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "smuiu1vv",
  dataset: "production",
  apiVersion: "2023-03-05",
  useCdn: false,
};

const client = createClient(config);

export default client; 