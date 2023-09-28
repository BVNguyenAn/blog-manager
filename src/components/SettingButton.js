import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton'

const SettingButton = (id) => {
    function handleClick() {
        const HiddenTab = document.getElementById(id.data)
        if(HiddenTab.classList.contains('hidden')){
          HiddenTab.classList.remove('hidden')
        }else if(!HiddenTab.classList.contains('hidden')){
          HiddenTab.classList.add('hidden')
        }
    }
  return (
   <div className='ContainSetting'>
      <div className='BtnSetting'>
        <button className='Setting' onClick={handleClick}>
          <Icon icon="icon-park-solid:more-two" />
        </button>
      </div>
      <ul className='hidden tabsSetting' id={id.data}>
        <li className='tabSetting tabDelete'><DeleteButton data={id}/></li>
        <li className='tabSetting tabEdit'><Link to={'/blog-manager/edit/' + id.data }>Edit</Link></li>
      </ul>
   </div>
  )
}

export default SettingButton