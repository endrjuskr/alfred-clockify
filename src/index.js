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

    alfy.output(items);
}

const init = () => {
    const token = alfy.config.get('token');
    let output = []
    if (token) {
        output = [
            {
                title: `Report time entry`,
                subtitle: `Add time entry to specific project`,
                arg: 'report',
            },
            {
                title: `change your token`,
                subtitle: `Change your existing token (${token.substring(0, 3)}...)`,
                arg: 'token',
            }
        ]
    } else {
        output = [
            {
                title: `Set your token`,
                subtitle: `Set your clockify token`,
                arg: 'token',
            }
        ]
    }

    alfy.output(output);
}

const args = process.argv.slice(2);

if (args.length === 0) {
    init();
} else {

    if (args[0] === "token") {
        alfy.config.set('token', args[1]);
    }

if (args[0] === "workspace") {
    main();
} else {
    project(args[1])
}
}