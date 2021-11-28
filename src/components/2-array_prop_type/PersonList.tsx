import { Name } from "./Person.types";

type personListProps = {
  // name: []  //throws error
  // name: object[]  //throws error
  // name: {firstname: string, lastname: string}[]  // works fine
  name: Name[]
}

export default function PersonList(props: personListProps) {

  return (
    <div>
      {props.name.map(ind => (<p key={ind.lastname}>{ind.firstname} {ind.lastname}</p>))}
    </div>
  )
}
