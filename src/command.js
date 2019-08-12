export const init = (token) => {
    return (token) ? [
        {
            title: `Report time entry`,
            subtitle: `Add time entry to specific project`,
            arg: 'report',
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

export const get_projects = (workspaces) => {
    return _.map(workspaces, d => { 
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