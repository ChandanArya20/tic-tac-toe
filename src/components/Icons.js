import {FaTimes,FaRegCircle,FaPen} from 'react-icons/fa'
const Icons=({name})=>{
   switch(name){
    case 'circle':
        return <FaRegCircle className='icon'/>
        break;
    case 'cross':
        return <FaTimes className='icon'/>
        break;
    default:
        return <FaPen className='icon'/>
        break;
   }
}
export default Icons