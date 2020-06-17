import { QBadge } from 'quasar'

export default {
  name: 'QBtnReveal',

  render (h) {
    return h(QBadge, {
      staticClass: 'QBtnReveal',
      props: {
        label: 'QBtnReveal'
      }
    })
  }
}
