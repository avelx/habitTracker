//> using scala 3.7.3
//> using dep org.scala-js::scalajs-dom::2.8.1
//> using dep com.lihaoyi::scalatags::0.13.1

object HabitTracker extends App {

  import org.scalajs.dom
  import org.scalajs.dom.html
  import scalatags.JsDom.all._

  val appPlaceHolder = dom.document.getElementById("app")

  val d = div(
    "Scala Taga",
    br(),
    br(),
    button(
      backgroundColor := "blue",
      "Simple button",
      onclick := { () => println("Blue button") }
    ),
    br(),
    br(),
    button(
      backgroundColor := "green",
      "Simple button",
      onclick := { () => println("Green button") }
    )
  )

  appPlaceHolder.appendChild(d.render)
}