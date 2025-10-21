//> using scala 3.7.3
//> using dep org.scala-js::scalajs-dom::2.8.1
//> using dep com.lihaoyi::scalatags::0.13.1

object HabitTracker extends App {

  import org.scalajs.dom
  import org.scalajs.dom.html
  import scalatags.JsDom.all._
  import scala.collection.mutable.ListBuffer

  val app = dom.document.getElementById("app")

  val colors = Seq("red", "green", "blue", "yellow", "pink", "brown")
  var takenColors = new ListBuffer[String]()

  def createInput(n: String, parentId: String) = {
    val in = 
      div(
        br(),
        input(
        id := n,
        name := n,
        width := "150px",
        placeholder := "Enter habit",
        onkeyup := { (e: dom.Event) =>
          e match {
          // Add button
          case ee: dom.KeyboardEvent if ee.keyCode == 13 =>
            dom.document.getElementById(n) match {
              case in2:dom.HTMLInputElement =>
                println(in2.value)
                val button = createButton(in2.value)
                val section = dom.document.getElementById(parentId)
                section.appendChild(button.render)
            }
          case _ =>
            println(value)
         }
        }
      )
    )
    in
  }

  // Provide unique color each time
  def getColor(): String = {
    val actualColor: List[String] = (colors.toSet diff takenColors.toSet).toList
    val index = util.Random.nextInt(actualColor.length)
    val resultColor = actualColor(index)
    takenColors.append(resultColor)
    resultColor
  } 

  def createButton(text: String) = {
    val btn_id = "id_" + text
    val btn_key = "btn_key" + text
    div(
      br(),
      button(
        backgroundColor := { getColor() },
        id := btn_id,
        text,
        onclick := { () =>
          val counterMaybe = Option( dom.window.localStorage.getItem(btn_key) )
          println(counterMaybe)
          // Inc counter
          if (counterMaybe.isDefined){
            dom.window.localStorage.setItem(btn_key, (counterMaybe.get.toInt + 1).toString() )
          } else {
            dom.window.localStorage.setItem(btn_key, "1")
          }
        }
      ),
      br()
    )
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

  def createTabs() = {
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
            b("Daily habits")
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
            b("Manage habits list")
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
            b("Statistics")
          )
        )
      )
  }

  def buildApp(): Unit = {
    // Initial tab selection: sectionA
    val tabs = createTabs()
    app.appendChild(tabs.render)
    reselectTabs("sectionALink")

    // Add required set of element to sections
    val habitsInput = createInput("hName", "sectionA")
    val sectionA = dom.document.getElementById("sectionA")
    sectionA.appendChild(habitsInput.render)
  }

  buildApp()

}