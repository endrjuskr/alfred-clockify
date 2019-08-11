import { get_workspaces } from './api';
import { get_config } from "./env";
import * as alfy from "alfy";
import _ from "lodash";

const main = async () => {
    const token = get_config().token;
    const data = await get_workspaces(token);

    // console.log(data);

    const items = _.map(data, d => { 
        return {
            title: d.name,
            subtitle: d.id,
            arg: d.id,
            icon: {
                path: 'briefcase.png'
            }
        };
    });

    // console.log(items);

    alfy.output(items);
};

main();