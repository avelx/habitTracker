Habit tracker application:

Origin:
https://www.meetup.com/scalabridge-london/events/310955884/
https://www.scalabridgelondon.org/projects/


Current requirement:
Create a SAP application:
    * single page with a few colored buttons using ScalaJS

---------------------------------------------------------------------------------------------------

Goal
Create a habit tracker that runs locally on-device (that is, requires no server).

Recent browser developments such as IndexedDB and Origin Private File Systems make it possible to create web applications that run entirely on-device, making a backend server optional. This concept is known as local-first software and is both technically interesting and philosophically appealing.

This project will explore building a local-first habit tracker using Scala.js. A basic habit tracker is very simple—completing a habit is just setting a boolean flag—but it has plenty of potential extensions. For example, habits can be allowed to have structure, such as completing a sequence of steps. Or perhaps habits are shared, which brings in CRDTs.

---------------------------------------------------------------------------------------------------

Libraries:

ScalaJs-Dom:
    https://scala-js.github.io/scala-js-dom/#dom.localStorage

ScalaTags:
    https://com-lihaoyi.github.io/scalatags/#BasicExamples