import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'

export function getRecommend () {
    const url = 'http://localhost:9091/test'

    const data = Object.assign({}, commonParams, {
        platform: 'h5',
        uin: 0,
        needNewCode: 1
    })

    return jsonp(url, data, options)
}
