import ItemAgenda from "./components/ItemAgenda"
import Header from "./components/Header"
function App() {

  return (
    <>
      <div className="m-8 my-3">
        <Header />
        <main>
          <div className="flex flex-col items-center justify-center">
            <img src="date-placeholder.png" alt="" className="my-6" />
            <p className="text-center border-y-black border-x-white border font-bold text-lg">11/11</p>
          </div>
        </main>
        <div className="flex flex-col lg:flex-row gap-8">
          <ItemAgenda />
        </div>
      </div>
    </>
  )
}

export default App
