const Contact = ({show}) => {

  if (!show) {
    return null
  }


  return (

    <div className="App">
      <header className="App-home">
        <p>
          How to contact me.
        </p>

      </header>
    </div>   
  )


}

export default Contact



