import { get_workspaces, get_projects_from_workspace } from './api';
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

const project = async (workspace) => {
    const token = get_config().token;
    const data = await get_projects_from_workspace(token, workspace);

    // console.log(data);

    const items = _.map(data, d => { 
        return {
            title: d.name,
            subtitle: d.id,
            arg: d.id,
            icon: {
                path: 'projects.png'
            }
        };
    });

    // console.log(items);

    alfy.output(items);
}

const args = process.argv.slice(2);

if (args.length === 1) {
    main();
} else {
    project(args[1])
}