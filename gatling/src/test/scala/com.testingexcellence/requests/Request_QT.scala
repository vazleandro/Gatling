package com.testingexcellence.requests

import com.testingexcellence.config.Config.app_url_qt
import io.gatling.core.Predef._
import io.gatling.http.Predef._

  object Request_QT {

    val create_request_QT = exec(http("Request - QT - Code 200")
      .get(app_url_qt + "/3147600")
      .check(status is 200)
    )
      .exec(http("Request - QT - Code 400")
        .get(app_url_qt+"/1200328")
        .check(status is 200)
      )
  }



