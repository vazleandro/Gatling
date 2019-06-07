package com.testingexcellence.scenarios

import com.testingexcellence.requests.{ Request_IMS, Request_X0, Request_QT, Request_OI }
import io.gatling.core.Predef.scenario
import scala.concurrent.duration._
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration.DurationInt
import com.testingexcellence.config.Config._

object CreateScenario {
  val createScenario_IMS = scenario("Testes Funcionais Conector IMS")
  .repeat(5)(  
  exec(Request_IMS.create_request_IMS)
  )

  val createScenario_X0 = scenario("Testes Funcionais Conector X0")
    .exec(Request_X0.create_request_X0)
    .pause(5 seconds)

  val createScenario_QT = scenario("Testes Funcionais Conector QT")
    .exec(Request_QT.create_request_QT)

  val createScenario_OI = scenario("Testes Funcionais Conector OI")
    .exec(Request_OI.create_request_OI)

}

// https://www.testingexcellence.com/gatling-maven-performance-test-framework/
//https://github.com/soujava/soujava-test-kit/blob/master/gatling/pom.xml
//https://medium.com/@alexalves_85598/testes-de-performance-em-apis-55f144aeb344
//https://gatling.io/docs/2.3/general/simulation_setup/
