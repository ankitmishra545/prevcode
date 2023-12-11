import "./App.css";
import A from "./components/A";
import { createContext } from "react";

export const UserContext = createContext();
// export const ChannelContext = createContext();
function App() {
  return (
    <UserContext.Provider
      value={{
        userName: "USERNAME",
        userChannel: "USERCHANNEL",
      }}
    >
      {/* <ChannelContext.Provider value={"USERCHANNEL"}> */}
      <A></A>
      {/* </ChannelContext.Provider> */}
    </UserContext.Provider>
  );
}

export default App;
