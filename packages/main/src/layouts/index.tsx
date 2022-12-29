import { history, Outlet } from 'umi';
import styles from './index.less';

interface ISideItemProps {
  onClick: () => void
  children: any
}

const SideItem = (props: ISideItemProps) => {
  return (
    <div onClick={props.onClick} style={{color: 'white', height: '60px', fontSize: '20px', background: 'lightslategray', border: '1px solid black'}}>
      {props.children}
    </div>
  )
}

export default function Layout() {
  const routeToMain = () => {
    history.push('/')
  }
  const routeToReact = () => {
    history.push('/reactchild')
  }
  const routeToVue = () => {
    history.push('/vuechild')
  }

  return (
    <div className={styles.layout}>
      <aside>
        <SideItem onClick={routeToMain}>基座页面</SideItem>
        <SideItem onClick={routeToReact}>react子应用</SideItem>
        <SideItem onClick={routeToVue}>vue子应用</SideItem>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
