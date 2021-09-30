import React, { useState } from "react";
import {
    useTable,
    useGlobalFilter,
    useAsyncDebounce,
    useSortBy
  } from 'react-table';

const TWO_HUNDRED_MS = 200;

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, TWO_HUNDRED_MS)

  return (
    <input
    className='input_search'
      value={value || ""}
      onChange={e => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
      placeholder={`Search`}
    />
  )
}

export default GlobalFilter