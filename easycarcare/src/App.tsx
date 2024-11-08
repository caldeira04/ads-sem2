import ItemAgenda from "./components/ItemAgenda"
import Header from "./components/Header"
function App() {

  return (
    <>
      <div className="m-8 my-3">
        <Header />
        <main>
          <div>
            <img src="date-placeholder.png" alt="" className="my-6" />
            <p className="text-center border-y-black border-x-white border text-lg">11/11</p>
          </div>
        </main>
        <ItemAgenda />
      </div>
    </>
  )
}

export default App
