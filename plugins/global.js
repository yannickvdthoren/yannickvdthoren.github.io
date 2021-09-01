import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const IconComponent = require.context(
  '~/components/icons',
  false,
  /[A-Z]\w+\.(vue|js)$/
)

IconComponent.keys().forEach((fileName) => {
  const componentConfig = IconComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})
