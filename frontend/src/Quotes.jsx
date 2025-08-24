import React, { useState } from "react";
import axios from "axios";
import "./Quotes.css";


function Quotes() {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  const getQuote = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/");
      setText(response.data.text);
      setAuthor(response.data.author);
    } catch (err) {
      console.error("Error fetching quote:", err);
      setText("Oops! Could not fetch a quote 😢");
      setAuthor("");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      <button className="button" onClick={getQuote} disabled={loading}>
        {loading ? "Fetching..." : "Generate Quote"}
      </button>

      {loading && <p>✨ Loading new quote...</p>}

      {!loading && text && (
        <>
          <h1 data-testid="quote-text">{text}</h1>
          {author && <h3 data-testid="quote-author">- {author}</h3>}
        </>
      )}
    </div>
  );
}

export default Quotes;

// import React, {useState} from "react";
// import axios from "axios";

// function Quotes() {
//     const [text, setText] = useState("");
//     const [author, setAuthor] = useState("");

//     function getQuote() {
//         axios.get("http://localhost:5000/", {crossdomain: true}).then(response => {
//             setText(response.data.text);
//             setAuthor(response.data.author);
//         });
//     }

//     return (
//         <div>
//             <button onClick={getQuote}>
//                 Generate Quote
//             </button>
//             <h1>{text}</h1>
//             <h3>{"-" + author}</h3>
//         </div>
//     )
// }

// export default Quotes;
