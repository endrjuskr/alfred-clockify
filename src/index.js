import * as workflow from "./workflow";

const args = process.argv.slice(2);

if (args.length === 0) {
    workflow.init();
} else {
    const command = args.shift();
    if (command === "token") {
        workflow.set_token(args[1]);
    } else if (command === "workspace") {
        workflow.get_workspaces();
    } else if (command === "project") {
        workflow.get_projects(args[1]);
    } else if (command === "entry") {
        workflow.save_time_entry(...args);
    } else {
        workflow.error("Unknown command");
    }
}