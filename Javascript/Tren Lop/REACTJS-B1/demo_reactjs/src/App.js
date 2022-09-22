import logo from './logo.svg';
import './App.css';
import Event from './Components/Databinding/Event';
import DemoIf from './Components/CauTrucDieuKhien_Render/DemoIf';
import DemoVongLap from './Components/CauTrucLap/DemoVongLap';
import DemoProps from './Components/Props/DemoProps';
import BTGioHangRedux from './Components/BaiTapRedux/BaiTapGioHang/BTGioHangRedux';
import DemoHookUseState from './Hooks/DemoHookUseState';
import DemoHookUseEffect from './Hooks/DemoHookUseEffect';
import DemoHookUseCallBack from './Hooks/DemoHookUseCallBack';
import DemoUseRef from './Hooks/DemoUseRef';
import DemoUseReducer from './Hooks/DemoUseReducer';
import ContextProvider from './Hooks/Context/ContextProvider';
import DemoUseContext from './Hooks/DemoUseContext';
import DemoReduxApp from './Hooks/DemoReduxApp';
import TodoList from './BaiTapStyledComponent/TodoList/TodoList';

function App() {
  return (
    <ContextProvider>
      {/* <Event /> */}
      {/* <DemoIf /> */}
      {/* <DemoVongLap /> */}
      {/* <DemoProps /> */}
      {/* <BTGioHangRedux /> */}
      {/* <DemoHookUseState /> */}
      {/* <DemoHookUseEffect /> */}
      {/* <DemoHookUseCallBack /> */}
      {/* <DemoUseRef /> */}
      {/* <DemoUseReducer /> */}
      {/* <DemoUseContext /> */}
      {/* <DemoReduxApp /> */}
      <TodoList />
    </ContextProvider>
  );
}

export default App;
