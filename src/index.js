import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const ReverseEllipsis = ({ text, style, maxWidth, className }) => {
  const textReversed = text.split('').reverse().map((item, idx) => (
    item === ' '
      ? (
        <span
          key={idx}
          className={styles.textItem}
          dangerouslySetInnerHTML={{ __html: '&nbsp;' }}
        />
      ) : (
        <span
          key={idx}
          className={styles.textItem}
        >
          {item}
        </span>
      )
  ))

  return (
    <div
      style={{ maxWidth: maxWidth, ...style }}
      className={`${styles.textContainer} ${className}`}
    >
      {textReversed}
    </div>
  )
}

ReverseEllipsis.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
  maxWidth: PropTypes.number.isRequired,
  className: PropTypes.string
}

ReverseEllipsis.defaultProps = {
  text: '',
  style: {},
  className: ''
}

export default ReverseEllipsis
