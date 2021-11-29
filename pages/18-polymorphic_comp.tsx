import React from 'react'
import Text from '../src/components/18-polymorphic_comp/text'
import styles from '../styles/Home.module.css'
import Text_2 from '../src/components/18-polymorphic_comp/text_2'

const Polymorphic_comp = () => {

  return (
    <>
      <div className={styles.main}>
        No Error on h2 on adding the htmlFor attribute
        <Text as="h2"  size="lg" htmlFor="some_id" color="primary"> Heading </Text>
        <Text as="p" size="md" color="secondary"> Paragraph </Text>
        <Text as="label" htmlFor="first-name" size="sm"> Label </Text>
        <input type="text" id="first-name"></input>
      </div>
      <div className={styles.main}>
        Uncomment h2 to see the error on adding the htmlFor attribute
        {/* <Text_2 as="h2"  size="lg" htmlFor="some_id" color="primary"> Heading </Text_2> */}
        <Text_2 as="p" size="md" color="secondary"> Paragraph </Text_2>
        <Text_2 as="label" htmlFor="first-name" size="sm"> Label </Text_2>
        <input type="text" id="first-name"></input>
      </div>
    </>
  )
}

export default Polymorphic_comp