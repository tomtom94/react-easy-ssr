import { hot } from 'react-hot-loader/root'
import React, { useEffect, useState, FC, ReactNode, KeyboardEvent } from 'react'

import classNames from 'classnames'

import drawerStyle from '../assets/jss/components/drawerStyle'

interface Props {
  open: boolean
  onClose: () => void
  children: ReactNode
  id: string
}

const Drawer: FC<Props> = ({ children, open, onClose, id, ...props }) => {
  const classes = drawerStyle(props)

  const [visible, setVisible] = useState(false)
  const [drawer, setDrawer] = useState(false)

  useEffect(() => {
    if (open && !drawer) {
      setDrawer(true)
      setVisible(true)
    }
    if (!open && drawer) {
      setVisible(false)
      setTimeout(() => {
        setDrawer(false)
      }, 350)
    }
  }, [open, drawer])

  const onKeyDownHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  const classesWrapperBackground = classNames({
    [classes.wrapperBackground]: true,
    [classes.wrapperBackgroundHidden]: !drawer,
    [classes.wrapperBackgroundVisible]: visible
  })

  const classesPaper = classNames({
    [classes.paper]: true,
    [classes.paperHidden]: !drawer,
    [classes.paperVisible]: visible
  })

  return (
    <>
      <div
        role="button"
        aria-label="close drawer"
        tabIndex={0}
        onKeyDown={onKeyDownHandler}
        className={classesWrapperBackground}
        onClick={() => onClose()}
      />
      <div className={classesPaper} id={id}>
        {children}
      </div>
    </>
  )
}

export default hot(Drawer)
