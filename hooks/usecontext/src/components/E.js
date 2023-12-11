import React, { useContext } from "react";
import { UserContext } from "../App";

function E() {
  const user = useContext(UserContext);
  // const channel = useContext(ChannelContext);
  console.log(user);

  return (
    <div>
      <h1>
        Name is <i>{user.userName}</i> and channel is <i>{user.userChannel}</i>
      </h1>
    </div>
  );
}

export default E;
