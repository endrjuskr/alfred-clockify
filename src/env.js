import * as fs from "fs";

export const get_config = () => {
    const rawdata = fs.readFileSync('.env');
    return JSON.parse(rawdata);
}