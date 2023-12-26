import { App } from './imports.js'
import Bar from './widgets/bar/main.js'
import Desktop from './widgets/desktop/main.js'
import CheatSheet from './widgets/cheatsheet/main.js'

App.applyCss(`${App.configDir}/main.css`)

// Config object
export default {
  css: `${App.configDir}/main.css`,
  stackTraceOnError: true,
  windows: [
    Bar(),
    Desktop(),
    CheatSheet()
  ],
}
