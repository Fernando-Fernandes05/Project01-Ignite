import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/fernando-fernandes05.png',
      name: 'Fernando Fernandes',
      role: 'CEO @RocketSeat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content:'👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-05-29 20:00:00'),
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/guilhermefernandes01.png',
      name: 'Guilherme Fernandes',
      role: 'CTO @RocketSeat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content:'👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-05-29 20:00:00'),
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/enzo3322.png',
      name: 'Enzo Spagnolli',
      role: 'Doutor Bunda @RocketSeat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content:'👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-05-29 20:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className= {styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}