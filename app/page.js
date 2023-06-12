"use client"
import Hero from "../components/Hero/Hero";
import Mempelai from "../components/Content/Mempelai";
import {useState} from "react";
import Invited from "../components/Invited/Invited";
import Waktu from "../components/Content/Waktu";
import ProtokolKesehatan from "../components/Content/ProtokolKesehatan";
import Music from "../components/Content/Music";
import {useSpring, animated} from "react-spring";
import Wish from "../components/Content/Wish";
import Footer from "../components/Content/Footer";
import Head from "next/head";

export default function Home() {
  const [invited, setInvited] = useState(true)
  const [tamu, setTamu] = useState("")
  const changeInvited = (e) => {
      setInvited(e)
  }
  const nameGuest = (e) => {
      setTamu(e)
  }
  const fade = useSpring({
      opacity: invited ? 0 : 1,
      delay: 50
  })
  return (
      <>
          {invited ?
              <Invited changeInvited={changeInvited} nameGuest={nameGuest}/> :
              <animated.div style={fade}>
                  <Music/>
                  <Hero guest={tamu}/>
                  <Mempelai/>
                  <Waktu/>
                  <ProtokolKesehatan/>
                  <Wish guest={tamu}/>
                  <Footer/>
              </animated.div>
          }
      </>
  )
}
