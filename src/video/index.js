import videojs from 'video.js'

videojs(document.getElementById('foo'))

import 'video.js/dist/video-js.css'

// import SWF_PATH from 'video.js/dist/video-js.swf'

// videojs.PlayerOptions.flash.swf = SWF_PATH

// import VTTJS_PATH from 'file!videojs-vtt.js/dist/vtt.min.js'

// videojs.options['vtt.js'] = VTTJS_PATH

import 'video.js/dist/lang/zh-CN'

module.exports = videojs
