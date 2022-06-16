import Class from './class/Class';
import Task from './components/Task'
import Function from './functions/Function';
import FuncForm from './functions/FuncForm';
import FunProps from './functions/FunProps';
import ClassProps from './class/ClassProps';
import ClassState from './class/ClassState';
import ClassStates from './class/ClassStates';
import ClassEvent from './class/ClassEvent';
import FunEvent from './functions/FunEvent';
import Mounting from './lifecycle/Mounting'
import Updating from './lifecycle/Updating'
import User from './lifecycle/User'
import State from './hooks/State'
import Effect from './hooks/Effect'
import Reducers from './hooks/Reducers'
import ClassForm from './class/ClassForm';
import Memo from './hooks/Memo';
import FetchDataHook from './components/FetchDataHook';
import FetchData from './class/FetchData';
import Count from './components/Count';
import Ref from './hooks/Ref';

function App() {
  return (
    <div className="App">
      {/* <Class />
      <Function />
      <Task />
      <FunProps text={{ name: "vamshi" }} data="Profile Data" />
      <ClassProps text={{ name: "vamshi" }} data="Profile Data" /> 
      <ClassState />
      <ClassStates />
      <ClassEvent /> 
      <FunEvent /> 
      <Mounting />
      <Updating /> 
      <User /> 
      <State /> -
      <Effect /> 
      <ClassForm /> 
      <FuncForm />
      <Memo /> 
       <FetchDataHook /> 
      <FetchData />
        <Reducers /> 
      <Count /> */}
      <Ref />

    </div>
  );
}

export default App;
