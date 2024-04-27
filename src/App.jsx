import {Layout} from "./components/layout/Layout.jsx";
import {useContext} from "react";
import {CryptoContext} from "./context/cripto-context.jsx";
import {Spin} from "antd";

export default function App() {
  const {isLoading} = useContext(CryptoContext)

  if(isLoading){
    return <Spin fullscreen />
  }
  return <Layout/>
}
