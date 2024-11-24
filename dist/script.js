class App extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 0 };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const name = event.target.name;
    if (name === "mult") {
      this.setState(prevState => {
        return {
          num: prevState.num + 3 };

      });
    } else
    if (name === "add") {
      this.setState(prevState => {
        return {
          num: prevState.num + 5 };

      });
    } else
    {
      this.setState(prevState => {
        return {
          num: prevState.num * 0 };

      });
    }
  }
  render() {
    const checker = this.state.num % 2 == 1 ? " Yes" : " nope";
    const binChecker = this.state.num % 2 == 1 ? true : false;

    return /*#__PURE__*/(
      React.createElement("div", { className: "parent",
        style: { backgroundImage: binChecker ?
          "url('https://img.freepik.com/free-psd/white-confetti-background_53876-8977.jpg?size=626&ext=jpg')" : null } }, /*#__PURE__*/


      React.createElement("div", {
        className: "container",
        style: { backgroundColor: binChecker ? 'transparent' : null } }, /*#__PURE__*/

      React.createElement("div", null, /*#__PURE__*/
      React.createElement("p", { className: "mainNum" }, this.state.num)), /*#__PURE__*/

      React.createElement("div", { className: "buttonWrapper" }, /*#__PURE__*/
      React.createElement("button", {
        name: "mult",
        onClick: this.handleChange }, "+ 3"), /*#__PURE__*/



      React.createElement("button", {
        name: "add",
        onClick: this.handleChange }, "+ 5"), /*#__PURE__*/



      React.createElement("button", {
        name: "reset",
        onClick: this.handleChange }, "RESET")), /*#__PURE__*/




      React.createElement("div", { className: "outputContainer" }, /*#__PURE__*/
      React.createElement("p", null, "is this an ", /*#__PURE__*/
      React.createElement("b", null, "odd"), " number?", /*#__PURE__*/
      React.createElement("span", null,
      checker))))));






  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(App, null),
document.getElementById('root'));