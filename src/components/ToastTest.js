import Icons from './components/Icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToastTest() {
  const onClickHandler=()=>{
    toast.success("Wow, it's amazing",{
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  }
  return (
    // <Icons/>
    <>
    <ToastContainer />
    <button onClick={onClickHandler}>Notify</button>
    </>
  );
}

export default ToastTest;
