import { functionalInDeveloping } from '@/helpers/ToastHelper'
import { HeartIcon, ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react'
import { Buttons } from '../buttons'

interface RatingProps {
    short?: boolean
}

const Rating = ({short}: RatingProps) => {
  return (
    <>
        <Buttons.Icon onClick={(e) => {
			e.stopPropagation()
			functionalInDeveloping('Лайк')
        }}>
          	<ThumbsUpIcon />
        </Buttons.Icon>
        <Buttons.Icon onClick={(e) => {
			e.stopPropagation()
			functionalInDeveloping('Дізлайк')
        }}>
			<ThumbsDownIcon />
		</Buttons.Icon>
        <Buttons.Icon onClick={(e) => {
			e.stopPropagation();
			functionalInDeveloping('До улюблених')
		}}>
            <HeartIcon />
            {!short && <span>До улюблених</span>}
        </Buttons.Icon>
    </>
  )
}

export default Rating
