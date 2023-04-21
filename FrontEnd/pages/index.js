import React,{useContext ,useEffect} from "react";
import { AppContext } from "../Api/contextApi";
import styles from "../styles/Home.module.css";
import HomePage from "../Components/HomePage";
import LoginPage from "../Components/LoginPage";
import { useRouter } from "next/router";
import { useAddress } from "@thirdweb-dev/react";
import AxomeeHome from "./Axomee";
import MINTPage from "../Components/nftMint";
import S from "../ComponentCSS/PageCSS.module.css"

export default function Home() {
  const {connectedUser} =useContext(AppContext);
  return (
    <div>
      <main>
        <div> 
           <HomePage/>
        </div>
      </main>
    </div>
  );
}
