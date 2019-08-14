import * as alfy from "alfy";
import * as Clockify from "clockify-npm";
import * as command from "./command";
import { with_cache } from "./cache";

export const init = () => {
    const token = alfy.config.get('token');
    alfy.output(command.init(token));
}

export const get_workspaces = () => {
    const token = alfy.config.get('token');
    Clockify.SetKey(token);
    if (!token) {
        error("Token is missing");
    } else {
        with_cache(
            "workspaces",
            () => Clockify.Workspaces.get(),
            (raw_workspaces) => alfy.output(command.get_workspaces(raw_workspaces))
        );
    }
}

export const get_projects = (workspaceId) => {
    const token = alfy.config.get('token');
    Clockify.SetKey(token);
    if (!token) {
        error("Token is missing");
    } else {
        with_cache(
            `workspace_${workspaceId}`,
            () => Clockify.Workspaces.getProjects(workspaceId),
            (raw_projects) => alfy.output(command.get_projects(raw_projects))
        );
    }
}

export const set_token = (token) => {
    alfy.config.set('token', token);
}

export const error = (message) => {
    alfy.error(message);
}