/**
 * Copyright (c) 2023 - KM
 */

import { writeFileSync } from "fs-extra";
import * as webpack from "webpack";
import { getExportLocalsObject } from "./utils/getExportLocalsObject.js";
import { getTypingsFile } from "./utils/getTypingsFile.js";
import { getTypingsFilePath } from "./utils/getTypingsFilePath.js";
import { ensureDirectoryExists } from "./utils/ensureDirectoryExists.js";
import { generateSourceMap } from "./utils/generateSourceMap.js";

// eslint-disable-next-line func-names
export default async function (this: webpack.LoaderContext<{ namespace: string }>, src: string) {
    const async = this.async();

    if (async === undefined) {
        return;
    }

    try {
        const exportLocalsObject = JSON.parse(getExportLocalsObject(src));

        let typingsFile = getTypingsFile(exportLocalsObject);
        const typingsFilePath = getTypingsFilePath.call(this);

        ensureDirectoryExists(typingsFilePath.path);

        let generatedSourceMap;
        if (this.sourceMap) {
            generatedSourceMap = await generateSourceMap(
                src,
                exportLocalsObject,
                typingsFilePath.sourcePath,
                typingsFilePath.file,
            );
            writeFileSync(`${typingsFilePath.path}/${typingsFilePath.file}.d.ts.map`, generatedSourceMap.toString());

            typingsFile = `${typingsFile}\n\n/*# sourceMappingURL=${typingsFilePath.file}.map*/`;
        }

        const finalTypingsFile = `${typingsFilePath.path}/${typingsFilePath.file}.d.ts`;

        writeFileSync(finalTypingsFile, typingsFile);

        this.addDependency(this.resourcePath);

        async(null, src);
    } catch (e) {
        console.error(`Something went wrong: ${e}`);
        async(null, src);
    }
}
