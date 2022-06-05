import Class from './class/Class';
import Task from './components/Task'
import Function from './functions/Function';
import FunProps from './functions/FunProps';
import ClassProps from './class/ClassProps';

function App() {
  return (
    <div className="App">
      {/* <Class />
      <Function />
      <Task /> */}
      <FunProps  text ={{name : "vamshi"}} data ="Profile Data"/>
      <ClassProps  text ={{name : "vamshi"}} data ="Profile Data"/>
    </div>
  );
}

export default App;
