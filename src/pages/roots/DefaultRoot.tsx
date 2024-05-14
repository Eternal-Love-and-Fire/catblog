import { Outlet } from 'react-router-dom'

import { Header } from '@/widgets/header/Header'
import CustomBreadcrumb from '@/components/user-ui/CustomBreadcrumb'
import { Toaster } from '@/components/ui/toaster'

export const DefaultRoot = () => {
  return (
    <div className='max-w-[1024px] min-h-screen mx-auto'>
        <Header />
        <CustomBreadcrumb />
        <Outlet />
        <Toaster />
    </div>
  )
}
