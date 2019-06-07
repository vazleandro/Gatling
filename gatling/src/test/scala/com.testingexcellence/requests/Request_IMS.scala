package com.testingexcellence.requests

import com.testingexcellence.config.Config.app_url_ims
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.concurrent.duration.DurationInt
import com.testingexcellence.config.Config._

object Request_IMS {

  val create_request_IMS = exec(http("Request - IMS - Code 200")
    .get(app_url_ims + "/3147600")
    .check(status is 200)
  )
  .pause(800.milliseconds)
  //.pause(60 seconds)
  
    .exec(http("Request - IMS - Code 422")
      .get(app_url_ims + "/1200328")
      .check(status is 422)
    )
    .exec(http("Request - IMS - Code 400")
      .get(app_url_ims + "/1200328")
      .check(status is 200)
    )
    .exec(http("Request - IMS - Code 400")
      .get(app_url_ims + "/1200328")
      .check(status is 200)
    )
    .exec(http("Request - IMS - Code 200") //view
      .get(app_url_ims + "/1200328")
      .check(status is 200)
    )
    .exec(http("Request - IMS - Code 200") //complete
      .get(app_url_ims + "/1200328")
      .check(status is 200)
    )
  }



