var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "10",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "131",
        "ok": "131",
        "ko": "132"
    },
    "maxResponseTime": {
        "total": "181",
        "ok": "167",
        "ko": "181"
    },
    "meanResponseTime": {
        "total": "142",
        "ok": "143",
        "ko": "141"
    },
    "standardDeviation": {
        "total": "13",
        "ok": "13",
        "ko": "14"
    },
    "percentiles1": {
        "total": "139",
        "ok": "140",
        "ko": "138"
    },
    "percentiles2": {
        "total": "141",
        "ok": "141",
        "ko": "139"
    },
    "percentiles3": {
        "total": "168",
        "ok": "167",
        "ko": "163"
    },
    "percentiles4": {
        "total": "178",
        "ok": "167",
        "ko": "177"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 10,
        "percentage": 50
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 10,
        "percentage": 50
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "4",
        "ok": "2",
        "ko": "2"
    }
},
contents: {
"req_request---ims---5a2b0": {
        type: "REQUEST",
        name: "Request - IMS - Code 200",
path: "Request - IMS - Code 200",
pathFormatted: "req_request---ims---5a2b0",
stats: {
    "name": "Request - IMS - Code 200",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "131",
        "ok": "131",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "167",
        "ok": "167",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "143",
        "ok": "143",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "13",
        "ok": "13",
        "ko": "-"
    },
    "percentiles1": {
        "total": "140",
        "ok": "140",
        "ko": "-"
    },
    "percentiles2": {
        "total": "141",
        "ok": "141",
        "ko": "-"
    },
    "percentiles3": {
        "total": "167",
        "ok": "167",
        "ko": "-"
    },
    "percentiles4": {
        "total": "167",
        "ok": "167",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 10,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    }
}
    },"req_request---ims---0c28c": {
        type: "REQUEST",
        name: "Request - IMS - Code 422",
path: "Request - IMS - Code 422",
pathFormatted: "req_request---ims---0c28c",
stats: {
    "name": "Request - IMS - Code 422",
    "numberOfRequests": {
        "total": "10",
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "132",
        "ok": "-",
        "ko": "132"
    },
    "maxResponseTime": {
        "total": "181",
        "ok": "-",
        "ko": "181"
    },
    "meanResponseTime": {
        "total": "141",
        "ok": "-",
        "ko": "141"
    },
    "standardDeviation": {
        "total": "14",
        "ok": "-",
        "ko": "14"
    },
    "percentiles1": {
        "total": "138",
        "ok": "-",
        "ko": "138"
    },
    "percentiles2": {
        "total": "139",
        "ok": "-",
        "ko": "139"
    },
    "percentiles3": {
        "total": "163",
        "ok": "-",
        "ko": "163"
    },
    "percentiles4": {
        "total": "177",
        "ok": "-",
        "ko": "177"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 10,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "-",
        "ko": "2"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
