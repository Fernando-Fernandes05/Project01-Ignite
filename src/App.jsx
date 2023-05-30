import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className= {styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
          author="Fernando Fernandes" 
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nisi provident ipsa, modi blanditiis quo at magnam! Id omnis molestiae laudantium labore, commodi ex blanditiis odit recusandae atque iste molestias."
        />
        <Post 
          author="Gabriel Fernandes" 
          content="Novo post mt legal"
        />
        </main>
      </div>
    </div>
  )
}