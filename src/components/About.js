const About = ({show}) => {

  if (!show) {
    return null
  }

  return (

    <div className="App">
      <header className="App-home">
        <p>
          About me. My CV.
        </p>

      </header>
    </div>   
  )


}

export default About
