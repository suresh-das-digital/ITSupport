// // import { UIEvent } from "react";

// const HandlerTypes = ['scroll']
// // type HandlerArgs = UIEvent;
// // type HandlerFunction = (eve: HandlerArgs) => void;
// // type HandlerTypes = 'scroll'

// class MyEventHandler {
//   static #instance;

//   handlers = {}

//   constructor() {
//     for (const hadlerType of HandlerTypes) {
//       this.handlers[hadlerType] = []
//     }
//   }
  
//   onScroll(eve, per) {
//     // console.log(eve, this);
//     for (const handler of this.handlers['scroll']) {
//       handler(eve, per)
//     } 
//   }

//   static addHandler(type, handler) {
//     const eveh = MyEventHandler.getInstance();
//     eveh.handlers[type].push(handler);
//   }
  
//   static getInstance() {
//     if (!MyEventHandler.#instance) {
//       MyEventHandler.#instance = new MyEventHandler();
//     }
//     return MyEventHandler.#instance;
//   }

//   static onScroll(eve, per) {
//     const eveh = MyEventHandler.getInstance();
//     eveh.onScroll(eve, per);
//   }
// }

// window.onload = () => {
//   // console.log('LOADED')
//   // document.querySelector('#main').addEventListener('scroll', (eve) => {
//   //   console.log('1EVE', eve)
//   //   // MyEventHandler.onScroll(eve)
//   // })
//   // document.querySelector('body').addEventListener('scroll', (eve) => { 
//   //   console.log('2EVE', eve)
//   //   // MyEventHandler.onScroll(eve)
//   // })
//   document.addEventListener('scroll', (eve) => {
//     const per =  (window.scrollY/document.querySelector('#main').scrollHeight)*100
//     // console.log('3EVE', per)
//     MyEventHandler.onScroll(eve, per)
//   })
// }