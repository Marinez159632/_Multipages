import Counter from '../../components/Counter/Counter'
import Timer from '../../components/Timer/Timer'
import Add from '../../components/Add/Add'
import Temperatures from '../../components/Temperatures/Temperatures'

import './Components.css'

function Components() {
    return ( 
        <div className='components-container'>
            <h2 className='title'>REACT COMPONENTS</h2>
            <div className='CTA-container'>
        <span className='ADD-smt'>
        <Counter />
        <Timer />
        </span>
        <Add />
        </div>
        <div >
        <Temperatures />
        </div>
        <h3 className='student-name'>นายศิรินทร์ จันทร์ทนต์ รหัส 66085170</h3>
        </div>
            );
}

export default Components;