import React, { useState } from 'react';
import type { NextPage } from 'next'
import Button from '../src/components/5-react_event_prop_type/Button'
import Input from '../src/components/5-react_event_prop_type/Input'

const React_event_prop_type: NextPage = () => {

  const [inputValue, setInputValue] = useState('defaultValue');

  const buttonClickHandler = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    console.log('Button Clicked', e.target , id)
    let uniq_id: number;
    uniq_id = id+Math.floor(Math.random()*1000);
    console.log(uniq_id);
    return uniq_id
  }

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Capture Input Changes", e.target.value)
    setInputValue(e.target.value);
  }

  return (
    <div>
      <Input value={inputValue} onChangeHandler={inputChangeHandler}></Input>
      <Button onClickHandler={buttonClickHandler}></Button>
    </div>
  )
}

export default React_event_prop_type;
