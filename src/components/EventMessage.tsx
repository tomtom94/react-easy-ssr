import React, { FC, useEffect, useState, useRef, ReactNode, createContext, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import eventMessageStyle from '../assets/jss/components/eventMessageStyle'
import Button from './Button'
import CloseImageUrl from '../assets/images/61155.svg'
import { NotificationContainer } from './StyledComponents'

interface Props {
  children?: ReactNode
  message: string
  event: 'error' | 'success'
  refresh?: boolean
  queueEvent?: {
    id: number
    removeEvent: (idTarget: number) => void
    index: number
  }
}

interface QueueItem {
  id: number
  message: string
  event: 'error' | 'success'
}

export const EventContext = createContext<null | { addNewEvent: (newQueue: { message: string; event: 'error' | 'success' }) => void }>(null)

export const EventContextProvider = ({ children }: { children?: ReactNode }) => {
  const [queue, setQueue] = useState<QueueItem[]>([])

  const addNewEvent = (newQueue: { message: string; event: 'error' | 'success' }) =>
    setQueue((prevQueue) => {
      let id = 1
      const lastQueueItem = prevQueue[prevQueue.length - 1]
      if (lastQueueItem) {
        id += lastQueueItem.id
      }
      return [...prevQueue, { ...newQueue, id }]
    })

  const removeEvent = (idTarget: number) =>
    setQueue((prevQueue) => {
      const copyPrevQueue: QueueItem[] = JSON.parse(JSON.stringify(prevQueue))
      const queueItemIndex = copyPrevQueue.findIndex(({ id }) => id === idTarget)

      if (queueItemIndex !== -1) {
        copyPrevQueue.splice(queueItemIndex, 1)
      }
      return copyPrevQueue
    })

  return (
    <EventContext.Provider value={{ addNewEvent }}>
      {children}
      {queue.map(({ message, event, id }, index) => (
        <EventMessage
          key={`event-${id}`}
          queueEvent={{
            id,
            removeEvent: (idTarget) => removeEvent(idTarget),
            index
          }}
          message={message}
          event={event}
        />
      ))}
    </EventContext.Provider>
  )
}

const EventMessage: FC<Props> = ({ children, queueEvent, message, event, refresh, ...props }) => {
  const classes = eventMessageStyle(props)
  const id = queueEvent?.id
  const removeEvent = queueEvent?.removeEvent
  const index = queueEvent?.index
  const [isOpen, setIsOpen] = useState(!(removeEvent && id))
  const [indexDelay, setIndexDelay] = useState<undefined | number>()

  const timeout1 = useRef<NodeJS.Timeout>()
  const timeout2 = useRef<NodeJS.Timeout>()
  const timeout3 = useRef<NodeJS.Timeout>()
  const timeout4 = useRef<NodeJS.Timeout>()

  const handleClose = useCallback(
    (delay: number) => {
      const cleanFutureActions = () => {
        if (timeout2.current) {
          clearTimeout(timeout2.current)
        }
        if (timeout3.current) {
          clearTimeout(timeout3.current)
        }
      }
      if (removeEvent && id) {
        cleanFutureActions()
        timeout2.current = setTimeout(() => {
          setIsOpen(false)
        }, delay)
        timeout3.current = setTimeout(() => {
          removeEvent(id)
        }, delay + 350)
      }
      return () => {
        cleanFutureActions()
      }
    },
    [id, removeEvent]
  )

  const willMount = useRef(true)

  useEffect(() => {
    if (willMount.current && !isOpen) {
      willMount.current = false
      timeout1.current = setTimeout(() => {
        setIsOpen(true) // Must leave some time for the DOM to rerender
      }, 200)
      handleClose(15000)
    }

    return () => {
      if (timeout1.current) {
        clearTimeout(timeout1.current)
      }
    }
  }, [handleClose, isOpen])

  useEffect(() => {
    if (typeof index === 'number') {
      timeout4.current = setTimeout(() => {
        setIndexDelay(index) // Must leave some time for the DOM to rerender
      }, 200)
    }

    return () => {
      if (timeout4.current) {
        clearTimeout(timeout4.current)
      }
    }
  }, [index])

  return (
    <NotificationContainer type={removeEvent && id ? 'notification' : 'block'} isOpen={isOpen} index={removeEvent && id && indexDelay}>
      <div className={classNames(classes.message, classes[event])}>
        {removeEvent && id && (
          <button
            type="button"
            className={classes.closingButton}
            onClick={() => handleClose(0)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                handleClose(0)
              }
            }}
          >
            <img src={CloseImageUrl} alt="Close" />
          </button>
        )}
        <span>
          {event === 'error' && <FontAwesomeIcon icon="exclamation-triangle" />}
          {event === 'success' && <FontAwesomeIcon icon="thumbs-up" />}
        </span>
        <div>
          <p>{message}</p>
          {refresh && (
            <Button
              onClick={() => {
                window.location.reload()
              }}
              model="event"
            >
              Try to refresh the page
            </Button>
          )}
        </div>
      </div>
    </NotificationContainer>
  )
}

export default EventMessage
