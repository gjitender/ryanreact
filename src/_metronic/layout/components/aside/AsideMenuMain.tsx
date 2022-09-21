/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>

    
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/user-profile'
        icon='/media/icons/duotune/communication/com006.svg'
        title='User Profile'
        fontIcon='bi-layers'
      />
       <AsideMenuItem
        to='/messages'
        title='Message'
        icon='/media/icons/duotune/general/gen019.svg'
        fontIcon='bi-person'
      />
       <AsideMenuItem
        to='/time-setting'
        icon='/media/icons/duotune/general/gen051.svg'
        title='Time Setting'
        fontIcon='bi-layers'
      />
     
     
     
    
     
    </>
  )
}
