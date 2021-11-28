import { NextPage } from 'next';
import Greet from '../src/components/1-basic_prop_type/Greet';

const Basic_prop_type: NextPage = () => {
  return (
    <>
      <Greet greeterName="Prasan" messageCount={12} isLoggedIn={true}></Greet>
    </>
  )
}

export default Basic_prop_type