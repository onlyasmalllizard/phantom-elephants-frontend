// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// // import React from "react";
// // import {
// //   Checkbox,
// //   Grid,
// //   Header,
// //   Icon,
// //   Image,
// //   Menu,
// //   Segment,
// //   Sidebar,
// // } from "semantic-ui-react";

// // const SidebarExampleSidebar = () => {
// //   const [visible, setVisible] = React.useState(false);

// //   return (
// //     <Grid columns={1}>
// //       <Grid.Column>
// //         <Checkbox
// //           checked={visible}
// //           label={{ children: <code>visible</code> }}
// //           onChange={(e, data) => setVisible(data.checked)}
// //         />
// //       </Grid.Column>

// //       <Grid.Column>
// //         <Sidebar.Pushable as={Segment}>
// //           <Sidebar
// //             as={Menu}
// //             animation="overlay"
// //             icon="labeled"
// //             inverted
// //             onHide={() => setVisible(false)}
// //             vertical
// //             visible={visible}
// //             width="thin"
// //           >
// //             <Menu.Item as="a">
// //               <li className="rounded-lg mb-4">
// //                 <NavLink
// //                   to="/"
// //                   exact
// //                   className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
// //                   activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
// //                 >
// //                   <Icon name="dashboard" size="2xl" />
// //                   Dashboard
// //                 </NavLink>
// //               </li>
// //             </Menu.Item>

// //             <Menu.Item as="a">
// //               <li className="rounded-lg mb-2 ">
// //                 <NavLink
// //                   to="/tables"
// //                   className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
// //                   activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
// //                 >
// //                   {/* <Icon name="toc" size="2xl" /> */}
// //                   Tables
// //                 </NavLink>
// //               </li>
// //               <Icon name="gamepad" />
// //               Games
// //             </Menu.Item>
// //             <Menu.Item as="a">
// //               <Icon name="camera" />
// //               Channels
// //             </Menu.Item>
// //           </Sidebar>

// //           <Sidebar.Pusher>
// //             <Segment basic>
// //               <h1>Hiiiii</h1>
// //             </Segment>
// //           </Sidebar.Pusher>
// //         </Sidebar.Pushable>
// //       </Grid.Column>
// //     </Grid>
// //   );
// // };

// // export default SidebarExampleSidebar;

// import AdminNavbar from "./AdminNavbar";
// import Icon from "@material-tailwind/react/Icon";
// import H6 from "@material-tailwind/react/Heading6";
// import Logo from "../components/Logo/index";

// export default function Sidebar() {
//   const [showSidebar, setShowSidebar] = useState("-left-64");
//   return (
//     <>
//       <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
//       <div
//         className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
//       >
//         <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
//           <a
//             href="https://material-tailwind.com?ref=mtd"
//             target="_blank"
//             rel="noreferrer"
//             className="mt-2 text-center w-full inline-block"
//           >
//             {" "}
//             <Logo />
//           </a>
//           <div className="flex flex-col">
//             <hr className="my-4 min-w-full" />

//             <ul className="flex-col min-w-full flex list-none">
//               <li className="rounded-lg mb-4">
//                 <NavLink
//                   to="/"
//                   exact
//                   className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
//                   activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
//                 >
//                   <Icon name="dashboard" size="2xl" />
//                   Dashboard
//                 </NavLink>
//               </li>
//               <li className="rounded-lg mb-2 ">
//                 <NavLink
//                   to="/tables"
//                   className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
//                   activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
//                 >
//                   <Icon name="toc" size="2xl" />
//                   Tables
//                 </NavLink>
//               </li>
//               <li className="rounded-lg mb-2 text-gray-700">
//                 <NavLink
//                   to="/studentdashboard"
//                   className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
//                   activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
//                 >
//                   <Icon name="map" size="2xl" />
//                   Student Dashboard
//                 </NavLink>
//               </li>
//               <li className="px-4 rounded-lg mb-2 text-gray-700">
//                 <NavLink
//                   to="/profilecard"
//                   className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
//                   activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
//                 >
//                   <Icon name="account_circle" size="2xl" />
//                   Profile Card
//                 </NavLink>
//               </li>
//               <li className="rounded-lg mb-2">
//                 <NavLink
//                   to="/settings"
//                   className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
//                   activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
//                 >
//                   <Icon name="settings" size="2xl" />
//                   Settings
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
