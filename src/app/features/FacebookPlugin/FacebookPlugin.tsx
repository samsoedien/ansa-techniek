import React from 'react'
import PropTypes from 'prop-types'
import styles from './FacebookPlugin.module.scss'

const FacebookPlugin: any = () => {
  return (
    <div className={styles['layout']}>
      <p>Volg ons ook op facebook:</p>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAnsa-Techniek-107174757718184&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="500"
        height="500"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}

FacebookPlugin.propTypes = {}

export default FacebookPlugin
