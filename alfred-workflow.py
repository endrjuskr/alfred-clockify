# encoding: utf-8

import sys
from workflow import Workflow, ICON_WEB, web
from src import api, env


def main(wf):
    print("asdasd")
    local_env = env.read_local_env()
    token = local_env["token"]
    workspaces = api.get_all_workspaces(token)

    # Loop through the returned posts and add an item for each to
    # the list of results for Alfred
    for workspace in workspaces:
        wf.add_item(title=workspace['name'],
                    subtitle=workspace['id'],
                    icon=ICON_WEB)

    # Send the results to Alfred as XML
    wf.send_feedback()


if __name__ == u"__main__":
    wf = Workflow()
    sys.exit(wf.run(main))