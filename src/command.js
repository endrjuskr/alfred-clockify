import * as _ from "lodash";

export const init = (token) => {
    return (token) ? [
        {
            title: `Report time entry`,
            subtitle: `Add time entry to specific project`,
            arg: 'workspace',
        },
        {
            title: `Change your token`,
            subtitle: `Change your existing token (${token.substring(0, 3)}...)`,
            arg: 'token',
        }
    ] : [
        {
            title: `Set your token`,
            subtitle: `Set your clockify token`,
            arg: 'token',
        }
    ];
}

export const get_workspaces = (workspaces) => {
    return _.map(workspaces, d => { 
        return {
            title: d.name,
            subtitle: d.id,
            arg: d.id,
            icon: {
                path: 'briefcase.png'
            }
        };
    });
}

export const get_projects = (projects) => {
    return _.map(projects, d => { 
        return {
            title: d.name,
            subtitle: d.id,
            arg: d.id,
            icon: {
                path: 'projects.png'
            }
        };
    });
}

export const save_entry = (hours, project) => {
    return {
        title: `Save time entry`,
        subtitle: `Save ${hours} hour/s for project ${project}`,
        arg: `save`,
        icon: {
            path: 'save.png'
        }
    };
}