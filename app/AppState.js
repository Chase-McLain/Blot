import { blot } from './models/blot.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  blots = [
    new blot({
      title: 'Blot Help',
      color: 'rgba(199, 3, 111, 1)',
      body: 'Thank you for using Blot. To create a new Blot simply choose a color, make a title, and click the blue BLOT button. You can then add whatever text you like to the Blot and hit SAVE to keep your creation.',
      createdDate: '12/28/2001',
      updatedDate: ''
    }),

    new blot({
      title: 'Rat study',
      color: 'rgba(63, 37, 37, 1)',
      body: 'Rats die when shot',
      createdDate: '8/29/2025',
      updatedDate: ''
    }),

    new blot({
      title: 'Blank blot',
      color: 'rgba(255, 255, 255, 1)',
      body: 'write text here',
      createdDate: '2/11/2022',
      updatedDate: ''
    })
  ]

  activeBlot = null




}

export const AppState = createObservableProxy(new ObservableAppState())