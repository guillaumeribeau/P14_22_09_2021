import React, { useEffect, useState } from "react";
import firebase from "../../utils/firebaseConfig";
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";
import { TableInstance } from "./TableInstance";

import GlobalFilterTable from "./GlobalFilterTable";

const TableEmployee = () => {
  const [data, setData] = useState([]);
  // get data with firebase
  useEffect(() => {
    const tableDB = firebase.database().ref("create-employee");

    tableDB.on("value", (snapshot) => {
      let previousTable = snapshot.val();
      let list = [];
      for (let id in previousTable) {
        list.push({ id, ...previousTable[id] });
      }

      setData(list);
      console.log(data);
    });
  }, []);

  return <TableInstance tableData={data} />;
};
export default TableEmployee;












// const TWO_HUNDRED_MS = 200;

// function GlobalFilter({
//   preGlobalFilteredRows,
//   globalFilter,
//   setGlobalFilter,
// }) {
//   const [value, setValue] = useState(globalFilter);
//   const onChange = useAsyncDebounce(value => {
//     setGlobalFilter(value || undefined)
//   }, TWO_HUNDRED_MS);

//   return (
//     <input
//       value={value || ""}
//       onChange={e => {
//         setValue(e.target.value);
//         onChange(e.target.value);
//       }}
//       placeholder={`Search`}
//     />
//   )
// }

//   const TableLayout = ({
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//     state: { globalFilter },
//     visibleColumns,
//     preGlobalFilteredRows,
//     setGlobalFilter
//   }) => {
//     return (
//       <table {...getTableProps()}>
//         <thead>
//           <tr>
//             <th
//               colSpan={visibleColumns.length}
//             >
//               <GlobalFilter
//                 preGlobalFilteredRows={preGlobalFilteredRows}
//                 globalFilter={globalFilter}
//                 setGlobalFilter={setGlobalFilter}
//               />
//             </th>
//           </tr>
//           {headerGroups.map(headerGroup => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map(column => (
//                 <th {...column.getHeaderProps(column.getSortByToggleProps())}>
//                   {column.render('Header')}
//                   <span>
//                     {column.isSorted
//                       ? column.isSortedDesc
//                         ? ' ⬇️'
//                         : ' ⬆️'
//                       : ' ↕️'}
//                   </span>
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map((row, i) => {
//             prepareRow(row)
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map(cell => {
//                   return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                 })}
//               </tr>
//             )
//           })}
//         </tbody>
//       </table>
//     );
//   }

// }
