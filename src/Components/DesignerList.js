import React, { useEffect, useState } from "react";
import { ConsultButton } from "./ButtonsLinks";

import ShowList from "./ShowList";

function DesignerList({ addClass }) {
  console.log("this is passed from home", addClass);
  const url = "https://api.github.com/users";
  const [user, setUser] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setUser(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className={addClass}>
        {user.map((item) => {
          return <ShowList {...item} key={item.id} />;
        })}
      </div>
    </>
  );
}

export default DesignerList;
