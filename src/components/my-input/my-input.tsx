/*
import { Component, Prop, h, State } from '@stencil/core';
@Component({
  tag: 'my-input',
  styleUrl: 'my-input.css',
  shadow: true
})
export class MyInput {

  // @Prop() color: string = '#e20177';
  @Prop() message: string;
  @State() value: string = this.message;

  // handleClicek(){
  //   window.alert('Hola')
  // }

  handleToggle = () => {

    let button = document.getElementById('openButton');
    let inner = document.getElementById('inner-menu');
    let content = document.getElementById('content');

    button.classList.toggle('toggle');
    button.classList.toggle('transition');

    inner.classList.toggle('toggle');
    inner.classList.toggle('transition');

    content.classList.toggle('toggle');
    content.classList.toggle('transition');
    content.classList.toggle('hide');

    setTimeout(function () {
      button.classList.toggle("transition");
      inner.classList.toggle("transition");
    }, 350);

  }


  render() {
    return (
      <div>
        <button id="openButton" onClick = {() => this.handleToggle()}>
          <div class="chevron"></div>
        </button>
        <div id="inner-menu">
          <div id="content" class=" center">
            <p> {this.value} </p>
            <ul>
              <li><a href="#">Menu <span>Option 1</span></a></li>
              <li><a href="#">Menu <span>Option 2</span></a></li>
              <li><a href="#">Menu <span>Option 3</span></a></li>
              <li><a href="#">Menu <span>Option 4</span></a></li>
              <li><a href="#"><span class="far fa-life-ring"></span>Help Center</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
 */
import { Component, Prop, State, h } from "@stencil/core";

@Component({
  tag: "my-input",
  styleUrl: "my-input.css"
})
export class MyInput {
  @Prop() color: string = "#e20177";
  @State() open: string;

  componentWillLoad() {
    this.setValue(this.color);
  }
  setValue(color) {
    this.color = color;
  }

  handleToggle = () => {
    let menu = document.getElementById("menu");
    let slider = document.getElementById("slider");
    let innerSlider = document.getElementById("inner-slider");

    menu.classList.toggle("toggle");
    menu.classList.toggle("transition");

    slider.classList.toggle("toggle-slider");
    slider.classList.toggle("transition");

    innerSlider.classList.toggle("hide");

    setTimeout(function() {
      menu.classList.toggle("transition");
      slider.classList.toggle("transition");
    }, 350);
  };

  render() {
    return (
      <div class="color-picker">
        <button id="menu" class="float hide noselect"
          onClick={() => this.handleToggle()}
          /*este es el que daba lata*/
          style={{ backgroundColor: this.color }}>
          <i class="chevron" />
        </button>
        /*para el color de la > es el style */
        /*el de i  es el que mueve el iconito */

        <div id="slider" style={{ backgroundColor: this.color }}>
          <div id="inner-slider" class="hide center"> /* its hide center, ut not until the fucking > works*/
            <p>Select one of the options below</p>
            <ul>
            <li><a href="#">Menu <span>Option 1</span></a></li>
            <li><a href="#">Menu <span>Option 2</span></a></li>
            <li><a href="#">Menu <span>Option 3</span></a></li>
            <li><a href="#">Menu <span>Option 4</span></a></li>
            <li><a href="#"><span class="far fa-life-ring" />Help Center</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
