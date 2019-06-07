package com.testingexcellence.requests

import com.testingexcellence.config.Config.app_url_x0
import io.gatling.core.Predef._
import io.gatling.http.Predef._

  object Request_X0 {

    val create_request_X0 = exec(http("Request - X0 - Code 200")
      .get(app_url_x0 + "/3147600")
      .check(status is 200)
    )
      .exec(http("Request - X0 - Code 400")
        .get(app_url_x0+"/1200328")
        .check(status is 200)
      )
  }



