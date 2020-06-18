import React, { useState, useEffect } from "react";

function Poem() {
  const [poem, setPoem] = useState();

  useEffect(() => {
    setPoem({
      text:
        "ज़िंदगी इक सवाल है जिसका जवाब मौत है / मौत भी इक सवाल है जिसका जवाब कुछ नहीं",
      dictionary: {
        ज़िंदगी: "Life",
        मौत: "Death",
        जवाब: "Answer",
      },
    });
  }, []);

  const arr = (str) => str.trim().split(" ");

  return (
    <div>
      <h3
        className="text-center mb-2"
        style={{
          letterSpacing: "4px",
          lineHeight: "175%",
          fontFamily: `'Kalam', cursive`,
        }}
      >
        {poem
          ? arr(poem.text).map((word, ind) =>
              poem.dictionary[word] ? (
                <span key={ind}>
                  <button
                    style={{
                      border: "none",
                      padding: "0px",
                      background: "none",
                      borderTop: "2px solid",
                    }}
                    data-toggle="popover"
                    data-placement="top"
                    title={word + " Meaning"}
                    data-trigger="focus"
                    data-content={poem.dictionary[word]}
                  >
                    {word}
                  </button>{" "}
                </span>
              ) : word === "/" ? (
                <br key={ind}></br>
              ) : (
                <span key={ind}>{word + " "}</span>
              )
            )
          : ""}
      </h3>
    </div>
  );
}

export default Poem;
