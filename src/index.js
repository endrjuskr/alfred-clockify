import * as workflow from "./workflow";

const args = process.argv.slice(2);

if (args.length === 0) {
    workflow.init();
} else {
    if (args[0] === "token") {
        workflow.set_token(args[1]);
    } else if (args[0] === "workspace") {
        workflow.get_workspaces();
    } else if (args[0] === "project") {
        // project(args[1])
    } else {
        workflow.error("Unknown command");
    }
}