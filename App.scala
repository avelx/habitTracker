//> using scala 3.7.3
//> using dep org.scala-js::scalajs-dom::2.8.1
//> using dep com.lihaoyi::scalatags::0.13.1

object HabitTracker extends App {

  import org.scalajs.dom
  import org.scalajs.dom.html
  import scalatags.JsDom.all._
  import scala.collection.mutable.ListBuffer

  val colors = Seq("red", "green", "blue", "yellow", "pink", "brown")
  var takenColors = new ListBuffer[String]()

  val app = dom.document.getElementById("app")

  def getInput(n: String) = {
    val in = input(
      id := n,
      name := n,
      width := "150px",
      placeholder := "Type something in",
      onkeyup := { (e: dom.Event) =>
        e match {
          // Add button
          case ee: dom.KeyboardEvent if ee.keyCode == 13 =>
            dom.document.getElementById(n) match {
              case in2:dom.HTMLInputElement =>
                println(in2.value)
                val button = getButton(in2.value)
                app.appendChild(button.render)
            }
          case _ =>
            println(value)
        }
      }
    )
    in
  }

  // Provide unique color each time
  def getColor(): String = {
    val actualColor: List[String] = (colors.toSet diff takenColors.toSet).toList
    val index = util.Random.nextInt(actualColor.length)
    val c = actualColor(index)
    takenColors.append(c)
    c
    // takenColor
  } 

  def getButton(text: String) = {
    
    val d = div(
      br(),
      button(
        backgroundColor := { getColor() },
        text,
        onclick := { () => println(text) }
      ),
      br()
    )
    d
  }


  val sections = List("sectionA", "sectionB", "sectionC")

  def reselectTabs(selected: String) = {
    sections.foreach(s => {
      dom.document.getElementById(s) match {
                  case aref: dom.HTMLAnchorElement =>
                    println(aref)
                    if (selected == s) 
                      aref.className = "active nav-link"
                    else 
                      aref.className = "nav-link"
                }
    })
  }

  def addTabs() = {
     ul(
        cls := "nav nav-pills",
        li(
          cls:="nav-item",
          a
          (
              id := "sectionA", 
              cls:="active nav-link",
              "Section A",
              href:="#",
              onclick := { () => 
                dom.document.getElementById("sectionA") match {
                  case aref: dom.HTMLAnchorElement =>
                      reselectTabs("sectionA")
                }
                println("A") 
              }
          )
        ),
        li(
          cls:="nav-item",
          a(    
              id := "sectionB",
              cls:="nav-link",
              "Section B",
              href:="#",
              onclick := { () => 
                dom.document.getElementById("sectionB") match {
                  case aref: dom.HTMLAnchorElement =>
                     reselectTabs("sectionB")
                }
                println("B") 
              }
          )
        ),
        li(
          cls:="nav-item",
           a(    
              id := "sectionC", 
              cls:="nav-link",
              "Section C",
              href:="#",
              onclick := { () => 
                dom.document.getElementById("sectionB") match {
                  case aref: dom.HTMLAnchorElement =>
                     reselectTabs("sectionB")
                }
                println("C") }
          )
        )
      )
  }

  //  val d = div(
  //    br(),
  //    br(),
  //    button(
  //      backgroundColor := "blue",
  //      "Simple button",
  //      onclick := { () => println("Blue button") }
  //    ),
  //    br(),
  //    br(),
  //    getButton("Greeb")
  //  )


  def build(): Unit = {
    //val in = getInput("hName")
    val tabs = addTabs()
    app.appendChild(tabs.render)
  }

  build()
}