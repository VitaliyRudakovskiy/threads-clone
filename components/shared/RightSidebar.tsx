import { FC } from 'react'

const RightSidebar: FC = () => {
  return (
    <section className='custom-scrollbar rightsidebar'>
      <div className='flex flex-1 flex-col justify-start'>
        <h3 className='text-heading4-medium text-light-1'>Suggested communities</h3>
      </div>
      <div className='flex flex-1 flex-col justify-start'>
        <h3 className='text-heading4-medium text-light-1'>Suggested users</h3>
      </div>
    </section>
  )
}

export default RightSidebar
