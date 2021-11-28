import React from 'react'

type listItemProps<T> = {
  List: T[];
  onClickHandler: (i:T) => void
}

const ListObjectItems = <T extends {}> ({List, onClickHandler}: listItemProps<T>) => {
  return (
    <div>
      {List.map((item:any) => {
          return (<div style={{ padding: '5px', margin: '5px', textDecoration: 'underline'}}
            key={item.id} 
            onClick={() => onClickHandler(item)}> {item.firstname} </div>)
        } 
      )}
    </div>
  )
}

export default ListObjectItems;