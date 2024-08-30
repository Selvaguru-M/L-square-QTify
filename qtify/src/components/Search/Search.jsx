import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

export default function Search({ placeholder }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} placeholder={placeholder} />
        <button type="submit" className={styles.searchBtn}>
          <SearchIcon />
        </button>
      </form>
    </>
  );
}

// import React, { useState } from "react";
// import styles from "./Search.module.css";
// import { Tooltip } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search"; //  Corrected import
// import Autocomplete from "@mui/material/Autocomplete"; // Corrected Autocomplete import
// import { TextField ,InputAdornment} from "@mui/material";


// // Helper function to truncate long text
// const truncate = (str, num) => {
//   return str.length > num ? str.slice(0, num) + "..." : str;
// };


// function Search({ searchData, placeholder }) {
//   const [searchText, setSearchText] = useState("");

//   const [value, setValue] = useState(null); // Managing the selected value with useState
//   // const navigate = useNavigate();
//   const onSubmit = (e) => {
//     e.preventDefault();
//     // if (value) {
//     //   navigate(`/album/${value.slug}`);
//     // }
//   };
//   return (
//     <div >
//       <TextField
//           className="search"
//           size="small"
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="start">
//                 <SearchIcon className="searchButton"/>
//               </InputAdornment>
//             ),
//           }}
//           placeholder="Search a album of your choice"
//           value={searchText}
//           onChange = { (event) =>{}}
//         />
//     </div>
//   )
// };
// export default Search;
