const data = [
    {
        "projectName": "Webguard",
        "startDate": null,
        "endDate": null,
        "priority": "high",
        "isComplete": false,
        "status": "active"
    },
    {
        "projectName": "Webguard",
        "startDate": null,
        "endDate": null,
        "priority": "high",
        "isComplete": false,
        "status": "complete"
    },
    {
        "projectName": "e-Task",
        "startDate": null,
        "endDate": null,
        "priority": "high",
        "isComplete": false,
        "status": "complete"
    },
    {
        "projectName": "e-Board",
        "startDate": null,
        "endDate": null,
        "priority": "high",
        "isComplete": false,
        "status": "postponed"
    }
]
function getStats(stats){
    let completed_count = 0
    let active_count = 0
    let postponed_count = 0

    for(let i = 0; i < stats.length; i++ ) {
        let status_value = stats[i].status.toLowerCase()
        if (status_value === 'active') {
            active_count += 1
        } else if (status_value === 'postponed') {
            postponed_count += 1
        } else if (status_value === 'complete') {
            completed_count += 1
        }
    }
    return [completed_count, active_count, postponed_count]
}

console.log(getStats(data))
