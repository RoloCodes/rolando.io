import React from 'react'

import CourseLayout from '../../components/Layout/CourseLayout'
import Card from '../../components/Card'

const ScratchHomePage = () => {
  const thumbnail = '/static/pages/scratch/scratchbg.png'
  const baseHref = '/scratch/'
  const getFullHref = (slug) => baseHref + slug

  return (
    <CourseLayout heroThumbnail={thumbnail}>
      <Card href={getFullHref('whack-a-mole/lesson1')} horizontal>
        <h5>Project #1</h5>
        <h3>Whack-a-Mole</h3>
        <p>
          Build and customize your own version of this classic arcade game!
          (Disclamer: No animals were actually hurt during the creation of these
          lessons).
        </p>
      </Card>
      <Card href={getFullHref('stamp-art/lesson1')} horizontal>
        <h5>Project #2</h5>
        <h3>Stamp Art</h3>
        <p>
          Play around with sprites and events to make some pretty neat pieces of
          art!
        </p>
      </Card>
    </CourseLayout>
  )
}

export default ScratchHomePage
