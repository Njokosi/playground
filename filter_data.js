const activities = [
    {
        "email": "njokosi@gmail.com",
        "activities": [
            {
                "activityName": "Creaete and remove user in a dashboard later",
                "statusCode": "a",
                "taskId": null,
                "projectId": null,
                "startDate": null,
                "endDate": null
            },
            {
                "activityName": "Creaete and remove user in a dashboard",
                "statusCode": "a",
                "taskId": null,
                "projectId": null,
                "startDate": null,
                "endDate": null
            }
        ]
    }
]

activities[0].activities.map(activity => {
    console.log(activity)
})