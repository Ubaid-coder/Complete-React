
import Button from './Button'
import LeftArrow from '../assets/images/left-arrow.png'
import RightArrow from '../assets/images/right-arrow.png'
import AppleBasket from './AppleBasket'
import './AppleCounter.css'
import { useState } from 'react'







const AppleCounter = () => {

  const totalAppleCount = 10
  const [rightAppleCount, SetRightAppleCount] = useState(0);
  const[leftAppleCount, SetLeftAppleCount] = useState(totalAppleCount - rightAppleCount)

  const leftClickHandler = () => {
    if (rightAppleCount > 0) {
      SetRightAppleCount(rightAppleCount -1)
      SetLeftAppleCount(leftAppleCount + 1)

    }
  }
  const rightClickHandler = () => {
    if (leftAppleCount > 0) {
      SetLeftAppleCount(leftAppleCount -1)
      SetRightAppleCount(rightAppleCount + 1)

    }
  }

  return (
    <>
      <section>
        <AppleBasket appleCount={leftAppleCount} basketName="Basket 1" />
        <Button
          clickHandler={leftClickHandler}
          imageUrl={LeftArrow}
          buttonName="Left Arrow"
        />
        <Button
          clickHandler={rightClickHandler}
          imageUrl={RightArrow}
          buttonName="Right Arrow"
        />
        
        <AppleBasket appleCount={rightAppleCount} basketName="Basket 2" />
      </section>
      <p
        style={{
          textAlign: 'center',
          marginTop: '32px',
        }}
      >
      </p>
    </>
  )
}

export default AppleCounter
