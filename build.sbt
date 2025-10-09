ThisBuild / version := "0.1.0-SNAPSHOT"

ThisBuild / scalaVersion := "2.13.17"

libraryDependencies += "org.scala-js" %% "scalajs-dom" % "2.2.0"

lazy val root = (project in file("."))
  .settings(
    name := "habitTracker"
  )
