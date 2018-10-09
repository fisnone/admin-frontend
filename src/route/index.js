

import container from '../components/container'
import user from '../pages/user'

const routes = [
    { path: '/', component: container,
        children: [
            { path: '/users', component: user }
        ] }
]

export default routes