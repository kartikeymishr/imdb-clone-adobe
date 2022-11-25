import React, { useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  return (
    <section className="search">
      <input
        type="text"
        placeholder="Search..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </section>
  );
};

export default Search;