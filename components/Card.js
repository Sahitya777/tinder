import React from 'react'
import {SiTinder} from 'react-icons/si'
import CardHeader from './CardHeader'
import CardFooter from './CardFooter'
import TinderCarditem from './TinderCarditem'
const style = {
    wrapper: `h-[45rem] w-[27rem] flex flex-col rounded-lg overflow-hidden`,
    cardMain: `w-full flex-1 relative flex flex-col justify-center items-center bg-gray-500`,
    noMoreWrapper: `flex flex-col justify-center items-center absolute`,
    tinderLogo: `text-5xl text-red-500 mb-4`,
    noMoreText: `text-xl text-white`,
    swipesContainer: `w-full h-full overflow-hidden`,
  }
function Card() {
  return (
    <div className={style.wrapper}>
        <CardHeader/>
        <div className={style.cardMain}>
            <div className={style.noMoreWrapper}>
                <SiTinder className={style.tinderLogo} />
                <div className={style.noMoreText}>
                    No More Profiles in your Location..
                </div>
            </div>
            <div className={style.swipesContainer}>
              <TinderCarditem />
            </div>
        </div>
        <CardFooter />
    </div>
  )
}
//
export default Card