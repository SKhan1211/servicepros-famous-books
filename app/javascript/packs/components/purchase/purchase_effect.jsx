import React from 'react';

import MyLogo from "../../../../assets/images/my_logo.png";

class PurchaseEffect extends React.Component {
  constructor(props) {
    super(props)

    this.handleForm = this.handleForm.bind(this);
    this.handler = this.handler.bind(this);
  }

  componentDidMount() {
    document.addEventListener("click", this.handler, true);
    // document.getElementsByClassName("sidebar__outer-container")[0].style.boxShadow = "none";
    setTimeout(() => this.handleForm(), 500);
    setTimeout(() => document.removeEventListener("click", this.handler, true), 3800);
  }

  handleForm() {
    let text1 = "0000-0000-0000-0000";
    let text2 = "00/00";
    let text3 = "000";

    let input1 = document.getElementById("purchase__input-1");
    let input2 = document.getElementById("purchase__input-2");
    let input3 = document.getElementById("purchase__input-3");
    let button = document.getElementById("purchase__button")

    this.typeWriter(text1, input1)
    setTimeout(() => this.typeWriter(text2, input2), 2000)
    setTimeout(() => this.typeWriter(text3, input3), 2600)
    setTimeout(() => button.focus(), 3000)
    setTimeout(() => {
      this.props.history.push('/collection');
      // document.getElementsByClassName("sidebar__outer-container")[0].style.boxShadow = "1px 0px 5px 0px grey";
    }, 3800)
  }

  typeWriter(text1, node) {
    let i = 0;
    if (i < text1.length) {
      node.value += text1.charAt(i);
      i++;
      setTimeout(() => this.typeWriter(text1.slice(1), node), 100)
    }
  }

  handler(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  render() {
    return (
      <div className="purchase__outer-container">
        <img src={MyLogo}></img>
        <form>
          <h1>Confirm Purchase</h1>
          <label>Card Number
            <input id="purchase__input-1" type="text" disabled={true}></input>
          </label>        
          <div className="purchase__expiry-container">
            <label>Valid Through
              <input id="purchase__input-2" type="text" disabled={true}></input>
            </label>
            <label>CVV
              <input id="purchase__input-3" type="text" disabled={true}></input>
            </label>
          </div>
          <button id="purchase__button" onClick={(e) => e.preventDefault()}>Confirm Purchase</button>
        </form>
      </div>
    )
  }
};

export default PurchaseEffect;