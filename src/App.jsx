import React, { useEffect, useState } from "react";
import axios from "./utils/axios";

const App = () => {
  const [arraydata, setarraydata] = useState([]);
  const api = async () => {
    const {
      data: { data },
    } = await axios.get("/");
    console.log(data);

    setarraydata(data);
  };
  useEffect(() => {
    api();
    return () => {};
  }, []);

  return (
    <div class="bg-gray-900 text-white p-4">
      {arraydata.length &&
        arraydata.map((e) => {
          return (
            <pre class="cmd-line">
              <span class="cmd-key">{JSON.stringify(e)}</span>
            </pre>
          );
        })}
    </div>
  );
};

export default App;
