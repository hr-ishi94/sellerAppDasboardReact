import React from 'react'
import { Icon } from '@iconify/react';
import Slidebar from './Slidebar'
import { SlidebarItem } from './Slidebar'

const Sidebar = () => {
  return (
    <Slidebar>
      <br />
      <SlidebarItem icon={<Icon icon="material-symbols:space-dashboard-outline" className="w-6 h-6 " />} text="Dashboard" active/>
      <SlidebarItem icon={ <Icon icon="ic:round-payment" className='w-6 h-6 '/>} text="Payment"/>
      <SlidebarItem icon={ <Icon icon="octicon:people-24"  className='w-6 h-6 ' />} text="Customers"/>
      <SlidebarItem icon={<Icon icon="mi:message" className='w-6 h-6 ' />} text="Messages"/>
      <hr className='dark:border-gray-600 border-gray-300 border-2' />



      <SlidebarItem icon={<Icon icon="lets-icons:bag" className='w-6 h-6 '/>} text="Product" />
      <SlidebarItem icon={<Icon icon="basil:invoice-outline" className='w-6 h-6 '/>} text="Invoice"/>
      <SlidebarItem icon={ <Icon icon="carbon:analytics" className='w-6 h-6 '/>} text="Analytics"/>
      <hr className='dark:border-gray-600 border-gray-300 border-2' />
      <SlidebarItem icon={<Icon icon="uil:setting" className="w-6 h-6 " />} text="Settings" />
      <SlidebarItem icon={<Icon icon="material-symbols-light:security" className="w-6 h-6 " />} text="Security"/>
      <SlidebarItem icon={<Icon icon="material-symbols:help-outline"  className="w-6 h-6 " />} text="Help"/>
      <hr className='dark:border-gray-600 border-gray-300 border-2' />
      <SlidebarItem icon={<Icon icon="basil:logout-solid" className="w-7 h-7 " />} text="Log Out" />
    </Slidebar>
  )
}

export default Sidebar