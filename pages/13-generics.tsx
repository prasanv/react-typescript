import React from 'react'
import ListItems from '../src/components/13-generics/ListItems'
import ListObjectItems from '../src/components/13-generics/ListObjectItems';

const Generics = () => {

  const onClickHandler = <T extends {}> (i: T) => {
    console.log(i);
  }

  const objectList = [
    { id: 1,
      firstname: 'Krishna',
      lastname: 'Vasudeva'
    },
    { id:2,
      firstname: 'Rama',
      lastname: 'Dasharatha'
    }
  ]

  return (
    <>
      <div style={{border: '1px solid', padding: '10px', margin: '10px'}}>
        <ListItems List={["apple", "banana", "orange", "POM"]} onClickHandler={onClickHandler}></ListItems>
      </div>
      <div style={{border: '1px solid', padding: '10px', margin: '10px'}}>
        <ListItems List={[12321,124897,9712345,8751345]} onClickHandler={onClickHandler}></ListItems>
      </div>
      <div style={{border: '1px solid', padding: '10px', margin: '10px'}}>
        <ListObjectItems List={objectList} onClickHandler={onClickHandler}></ListObjectItems>
      </div>
    </>
  )
}

export default Generics
