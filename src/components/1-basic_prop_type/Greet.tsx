import { greetProps } from "./Greet.types";

export default function Greet({messageCount=0, greeterName, isLoggedIn}:greetProps) {
  return (
    <div>
      {isLoggedIn ? 
        <h2>Welcome, {greeterName}! You have {messageCount} unread messages. </h2> : 
        <h2>Welcome Guest</h2>
      }
    </div>
  )
}
