// function SubListItem({data}: {data: any}) {
//   return (<>
//     <li className="flex flex-col my-1">
//       <span className="p-2 bg-[#0000000a] rounded-lg">{data["item"]}</span>
//       <span className="p-2 text-[#000000a0] mt-0">{data.text}</span>
//     </li>
//   </>)
// }

// function SubList({data}: {data: any}) {
//   return (<>
//     <ul className="p-2">
//       {data.map((item:any, i:any) => 
//         <SubListItem key={i} data={item} />
//       )}
//     </ul>
//   </>)
// }

// function List({data}: {data: any}) {
//   return (<>
//   {data.map((item: any, i: number) => 
//     <li key={i} className="flex flex-col bg-white rounded-lg p-0 overflow-hidden ">
//       <div 
//         className="z-1 relative overflow-hidden bg-[#00000000] border-b-2 border-b-[#0000000a] rounded-none text-xl font-bold"
//       >
//         <span className="-z-1 absolute w-fit h-full right-[-12%] leading-[36%]  top-0 text-[8rem]">{item['flag']}</span>
//         <span className="flex p-4 z-1 bg-linear-to-r from-50% from-white to-transparent to-80% backdrop-blur-none">{item['item']}</span>
//       </div>
//       <SubList data={item['child']} />
//     </li>
//   )}
//   </>)
// }

// export function MultiList({data}: {data: any}) {
//   return (<>
//     <div className="my-4">
//       <ul className="grid xl:grid-cols-2 2xl:grid-cols-3 2xl:gap-10 gap-4">
//         <List data={data} />
//       </ul>
//     </div>
//   </>)
// } 