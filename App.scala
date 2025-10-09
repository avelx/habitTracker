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
    sections.foreach(section => {
      val actualId = section + "Link"
      dom.document.getElementById(actualId) match {
                  case aref: dom.HTMLAnchorElement =>
                    if (selected == actualId) 
                      aref.className = "active nav-link"
                    else 
                      aref.className = "nav-link"
      }
      dom.document.getElementById(section) match {
                  case dd: dom.HTMLDivElement =>
                    println(dd)
                    if (selected == actualId) 
                      dd.style = "display: block"
                    else 
                      dd.style = "display: none"
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
              id := "sectionALink", 
              cls:="active nav-link",
              " Daily ",
              href:="#",
              onclick := { () => 
                dom.document.getElementById("sectionALink") match {
                  case aref: dom.HTMLAnchorElement =>
                      reselectTabs("sectionALink")
                }
              }
          ),
          div( 
            id := "sectionA",
            "Section A => "
          )
        ),
        li(
          cls:="nav-item",
          a(    
              id := "sectionBLink",
              cls:="nav-link",
              "Manage Habits",
              href:="#",
              onclick := { () => 
                dom.document.getElementById("sectionBLink") match {
                  case aref: dom.HTMLAnchorElement =>
                     reselectTabs("sectionBLink")
                }
              }
          ),
          div( 
            id := "sectionB",
            "Section B => "
          )
        ),
        li(
          cls:="nav-item",
           a(    
              id := "sectionCLink", 
              cls:="nav-link",
              "Stats",
              href:="#",
              onclick := { () => 
                dom.document.getElementById("sectionCLink") match {
                  case aref: dom.HTMLAnchorElement =>
                     reselectTabs("sectionCLink")
                }
            }
          ),
          div( 
            id := "sectionC",
            "Section C => "
          )
        )
      )
  }

  def build(): Unit = {
    // Initial tab selection: sectionA
    val tabs = addTabs()
    app.appendChild(tabs.render)

    //val in = getInput("hName")
    

    reselectTabs("sectionALink")

  }

  build()
}