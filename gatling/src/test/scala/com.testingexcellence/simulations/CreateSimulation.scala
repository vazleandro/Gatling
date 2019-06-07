package com.testingexcellence.simulations

import com.testingexcellence.scenarios.CreateScenario
import io.gatling.core.Predef.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.concurrent.duration.DurationInt
import com.testingexcellence.config.Config._


class CreateSimulation extends Simulation {
  val createExec_IMS = CreateScenario.createScenario_IMS
    .inject(rampUsers(10) during (5 seconds))
  //.inject(atOnceUsers(users))

  //rampUsers(10) during (5 seconds)).protocols(httpProtocol)
  //constantUsersPerSec(20) during(15 seconds)).protocols(httpProtocol)


//  val createExec_X0 = CreateScenario.createScenario_X0
//    .inject(atOnceUsers(users))



    setUp(
      createExec_IMS
      //, createExec_X0
    )

  //
  // https://gatling.io/docs/3.0/general/simulation_setup/
}


//https://www.testingexcellence.com/gatling-quick-reference/
//https://worldline.github.io/gatling-cheatsheet/
//https://gatling.io/docs/current/general/scenario/
//https://gatling.io/docs/current/general/scenario/#pause
