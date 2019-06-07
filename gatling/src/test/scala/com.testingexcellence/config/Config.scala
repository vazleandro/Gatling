package com.testingexcellence.config

object Config {

  val app_url_ims = "http://servicodados.ibge.gov.br/api/v1/localidades/municipios/"
  val app_url_x0 = "http://servicodados.ibge.gov.br/api/v1/localidades/municipios/"
  val app_url_qt = "http://servicodados.ibge.gov.br/api/v1/localidades/municipios/"
  val app_url_oi = "http://servicodados.ibge.gov.br/api/v1/localidades/municipios/"

  val users = Integer.getInteger("users", 1).toInt
  val rampUp = Integer.getInteger("rampup", 1).toInt
  val throughput = Integer.getInteger("throughput", 100).toInt

}