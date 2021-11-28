import React from 'react'

type listItemProps<T> = {
  List: T[];
  onClickHandler: (i:T) => void
}

const ListItems = <T extends string|number|{}> ({List, onClickHandler}: listItemProps<T>) => {
  return (
    <div>
      {List.map((item, index) => {
          return (<div style={{ padding: '5px', margin: '5px', textDecoration: 'underline'}}
            key={index} 
            onClick={() => onClickHandler(item)}> {item} </div>)
        } 
      )}
    </div>
  )
}

export default ListItems;