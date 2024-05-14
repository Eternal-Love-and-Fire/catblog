import { Outlet } from 'react-router-dom'

import { Header } from '@/widgets/header/Header'
import CustomBreadcrumb from '@/components/user-ui/CustomBreadcrumb'

export const DefaultRoot = () => {
  return (
    <div className='max-w-[1024px] min-h-screen mx-auto pt-6'>
        <Header />
        <CustomBreadcrumb />
        <Outlet />
    </div>
  )
}
