package com.testingexcellence.requests

import com.testingexcellence.config.Config.app_url_oi
import io.gatling.core.Predef._
import io.gatling.http.Predef._

object Request_OI {

  val create_request_OI = exec(http("Request - OI - Code 200")
    .get(app_url_oi + "/3147600")
    .check(status is 200)
  )
    .exec(http("Request - OI - Code 422")
      .get(app_url_oi + "/1200328")
      .check(status is 422)
    )
    .exec(http("Request - OI - Code 400")
      .get(app_url_oi + "/1200328")
      .check(status is 200)
    )
    .exec(http("Request - OI - Code 400")
      .get(app_url_oi + "/1200328")
      .check(status is 200)
    )
    .exec(http("Request - OI - Code 200") //view
      .get(app_url_oi + "/1200328")
      .check(status is 200)
    )
    .exec(http("Request - OI - Code 200") //complete
      .get(app_url_oi + "/1200328")
      .check(status is 200)
    )
  }



