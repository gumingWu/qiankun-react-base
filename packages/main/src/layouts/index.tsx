import { MicroApp } from 'umi';
import { useState } from 'react'
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
  const [curApp, setCurApp] = useState('main')

  const routeToReact = () => {
    setCurApp('react')
    window.history.pushState('', '', '/react-child')  // 还是需要配合路由一起改变
  }

  return (
    <div className={styles.layout}>
      <aside>
        <SideItem onClick={() => setCurApp('main')}>基座页面</SideItem>
        <SideItem onClick={routeToReact}>react子应用</SideItem>
        <SideItem onClick={() => setCurApp('vue')}>vue子应用</SideItem>
      </aside>
      <main>
        {
          curApp === 'main' ? <div>我是基座页面</div> :
          curApp === 'react' ? <MicroApp name="react-child" /> :
          curApp === 'vue' ? <div>我是vue页面</div> : null
        }
      </main>
    </div>
  );
}
