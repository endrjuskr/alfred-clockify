import moment from "moment";

export const create_time_entry_request_body = (projectId, hours) => {
    const now = moment().startOf('day').add(9, 'h');
    return {
        start: now.toISOString(),
        end: now.add(hours).toISOString(),
        billable: true,
        projectId
    };
}