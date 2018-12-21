import React, { Component, Fragment } from 'react'
import styles from './style.css'

console.log('styles is:::::::::::::', styles)

export default class extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {}

  render() {
    return <div className={styles.right_menu}>1231321</div>
  }
}
