import Image from "next/image";
import  Messages  from "./components/messages.jsx";
import MessageThread from "./components/messagethread.jsx";

export default function Home() {
  return (
    <>
    <Messages/>
    <MessageThread/>
    </>
  );
}
