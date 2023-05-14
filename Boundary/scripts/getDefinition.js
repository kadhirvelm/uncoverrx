import fetch from "node-fetch";
import { writeFileSync } from "fs";
import { exec } from "child_process";

async function getDefinition() {
    const openApiDefinition = await fetch("http://localhost:8000/api/openapi.json");
    const jsonOpenApi = await openApiDefinition.json();

    writeFileSync("./boundary/openapi.json", JSON.stringify(jsonOpenApi, null, 4));
    exec("openapi-typescript ./boundary/openapi.json -o ./boundary/schema.ts");
    exec("cp ./boundary/schema.ts ../User/packages/backend/src/coordinator/schema.ts");
}

getDefinition();
