from datetime import datetime, timedelta

def get_timeentry_range(date_str, hours_spent):
    parsed_date = None
    try:
        parsed_date = datetime.strptime(date_str, '%Y-%m-%d')
    except ValueError:
        raise AssertionError("Date is in wrong format")

    start_date = parsed_date + timedelta(hours=7)
    end_date = start_date + timedelta(hours=hours_spent)

    date_format = "%Y-%m-%dT%H:%M:%S.%fZ"

    return [start_date.strftime(date_format), end_date.strftime(date_format)]