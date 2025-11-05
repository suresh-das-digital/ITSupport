// import { UIEvent } from "react";

// import { UIEvent } from "react";

// const HandlerTypes = ['scroll']
// type HandlerArgs = UIEvent;
// type HandlerFunction = (eve: HandlerArgs) => void;
// // type HandlerTypes = 'scroll'

// export class MyEventHandler {
//   static #instance: MyEventHandler;

//   handlers: {
//     [event in typeof HandlerTypes[number]]: HandlerFunction[]
//   } = {}

//   constructor() {
//     for (const hadlerType in HandlerTypes) {
//       this.handlers[hadlerType] = []
//     }
//   }
  
//   onScroll(eve: HandlerArgs) {
//     console.log(eve);
//     for (const handler of this.handlers['scroll']) {
//       handler(eve)
//     } 
//   }

//   static addHandler(type: string, handler: HandlerFunction) {
//     const eveh = MyEventHandler.getInstance();
//     eveh.handlers[type].push(handler);
//   }
  
//   static getInstance(): MyEventHandler {
//     if (!MyEventHandler.#instance) {
//       MyEventHandler.#instance = new MyEventHandler();
//     }
//     return MyEventHandler.#instance;
//   }

//   static onScroll(eve: HandlerArgs) {
//     const eveh = MyEventHandler.getInstance();
//     eveh.onScroll(eve);
//   }
// }