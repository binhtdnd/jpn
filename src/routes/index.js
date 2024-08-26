import Home from '../pages/Home'
import Courses from '../pages/Courses'
import Word from '../pages/Word'
import NoRemember from '../pages/NoRemember'
import OptionTraining from '../pages/OptionTraining'
import Training from '../pages/Training'
import ChiaDongTu from '../pages/ChiaDongTu'




const publicRoutes = [
    { path: '/', component: Home },
    { path: '/courses', component: Courses },
    { path: '/courses/:slug', component: Courses },
    { path: '/words/:slug', component: Word },
    { path: '/noremember/:slug', component: NoRemember },
    { path: '/option-training/:slug', component: OptionTraining },
    { path: '/training/:slug', component: Training },
    { path: '/chiadongtu/:slug', component: ChiaDongTu },
    { path: '/*', component: Home },


]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }