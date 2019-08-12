import * as alfy from "alfy";
import * as api from "./api";
import * as command from "./command";
import { with_cache } from "./cache";

export const init = () => {
    const token = alfy.config.get('token');
    alfy.output(command.init(token));
}

export const get_workspaces = () => {
    const token = alfy.config.get('token');
    if (!token) {
        error("Token is missing");
    } else {
        with_cache(
            "workspaces",
            () => api.get_workspaces(token),
            (raw_workspaces) => alfy.output(command.get_workspaces(raw_workspaces))
        );
    }
}

export const set_token = (token) => {
    alfy.config.set('token', token);
}

export const error = (message) => {
    alfy.error(message);
}