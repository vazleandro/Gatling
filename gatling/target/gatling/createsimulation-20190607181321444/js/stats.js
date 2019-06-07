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
        "total": "53",
        "ok": "56",
        "ko": "53"
    },
    "maxResponseTime": {
        "total": "130",
        "ok": "130",
        "ko": "71"
    },
    "meanResponseTime": {
        "total": "69",
        "ok": "76",
        "ko": "62"
    },
    "standardDeviation": {
        "total": "17",
        "ok": "20",
        "ko": "6"
    },
    "percentiles1": {
        "total": "67",
        "ok": "71",
        "ko": "62"
    },
    "percentiles2": {
        "total": "71",
        "ok": "78",
        "ko": "69"
    },
    "percentiles3": {
        "total": "93",
        "ok": "112",
        "ko": "71"
    },
    "percentiles4": {
        "total": "123",
        "ok": "126",
        "ko": "71"
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
        "total": "2.222",
        "ok": "1.111",
        "ko": "1.111"
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
        "total": "56",
        "ok": "56",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "130",
        "ok": "130",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "76",
        "ok": "76",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "20",
        "ok": "20",
        "ko": "-"
    },
    "percentiles1": {
        "total": "71",
        "ok": "71",
        "ko": "-"
    },
    "percentiles2": {
        "total": "78",
        "ok": "78",
        "ko": "-"
    },
    "percentiles3": {
        "total": "112",
        "ok": "112",
        "ko": "-"
    },
    "percentiles4": {
        "total": "126",
        "ok": "126",
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
        "total": "1.111",
        "ok": "1.111",
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
        "total": "53",
        "ok": "-",
        "ko": "53"
    },
    "maxResponseTime": {
        "total": "71",
        "ok": "-",
        "ko": "71"
    },
    "meanResponseTime": {
        "total": "62",
        "ok": "-",
        "ko": "62"
    },
    "standardDeviation": {
        "total": "6",
        "ok": "-",
        "ko": "6"
    },
    "percentiles1": {
        "total": "62",
        "ok": "-",
        "ko": "62"
    },
    "percentiles2": {
        "total": "69",
        "ok": "-",
        "ko": "69"
    },
    "percentiles3": {
        "total": "71",
        "ok": "-",
        "ko": "71"
    },
    "percentiles4": {
        "total": "71",
        "ok": "-",
        "ko": "71"
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
        "total": "1.111",
        "ok": "-",
        "ko": "1.111"
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
