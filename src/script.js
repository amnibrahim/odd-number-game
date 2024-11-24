class App extends React.Component {
  constructor() {
    super()
    this.state = {
      num: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {    
    const name = event.target.name
    if (name==="mult") {
      this.setState(prevState => {
        return {
          num: prevState.num + 3
        }
      })
    }
    else if (name==="add") {
      this.setState(prevState => {
        return {
          num: prevState.num + 5
        }
      })
    }
    else {
      this.setState(prevState => {
        return {
          num: prevState.num * 0
        }
      })
    }
  } 
  render() {
    const checker = this.state.num%2==1 ? " Yes" : " nope"
    const binChecker = this.state.num%2==1 ? true : false
    
    return(
      <div className="parent" 
        style={{backgroundImage: binChecker ?
          "url('https://img.freepik.com/free-psd/white-confetti-background_53876-8977.jpg?size=626&ext=jpg')" : null
        }}
      >
        <div 
          className="container" 
          style={{backgroundColor: binChecker ? 'transparent' : null}}
        >
          <div>
            <p className="mainNum">{this.state.num}</p>
          </div>
          <div className="buttonWrapper">
            <button 
              name="mult" 
              onClick={this.handleChange}
              >
              + 3
            </button>
            <button 
              name="add"
              onClick={this.handleChange}
              >
              + 5
            </button>
            <button 
              name="reset" 
              onClick={this.handleChange}
              >
              RESET
            </button>
          </div>
          <div  className="outputContainer">
            <p>
              is this an <b>odd</b> number? 
              <span>
                {checker}              
              </span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)