const Home = ({show}) => {

  if (!show) {
    return null
  }


  return (

    <div className="App">
      <header className="App-home">
        <p>
          Home page.
        </p>

      </header>
    </div>   
  )


}

export default Home



