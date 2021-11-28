import { personProps } from "./Person.types";

export default function Person(props: personProps) {
  return (
    <>
      <h3>{props.name.firstname} {props.name.lastname}</h3>
    </>
  )
}
