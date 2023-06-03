import createClient from "openapi-fetch";
import { paths } from "./schema.js";

const { post } = createClient<paths>({ baseUrl: `${process.env.POSTGRES_HOST ?? "host.docker.internal"}:8000/` });

export const CoordinatorClient = post;
