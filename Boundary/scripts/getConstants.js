import { exec } from "child_process";

function getConstants() {
    exec("quicktype -s schema ./boundary/constants.json -o ../User/packages/api/src/constants/constants.ts")
    exec("quicktype -s schema ./boundary/constants.json -o ../LLM/Library/library/constants/constants.py")
}

getConstants();
