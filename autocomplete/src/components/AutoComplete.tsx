import { Autocomplete, InputProps, TextField } from "@material-ui/core";
import React from "react"

export const AutoCompleteSearch: any = (props: InputProps) => {

  const handleChange = (event: any) => {
    console.log(event)
  }

  return (
    <div>
      <TextField onChange={handleChange} />
    </div>
  );
}

export default AutoCompleteSearch;