import './App.module.css'
import { Btn } from './components/btn'
import { Menu } from './components/menu'

function App() {
  return (
    <>
    <Menu s1='pagum' s2='pagdois' s3='pagtres'/>
    <main>
      <section id='s1'>
        primeiro
        <Btn textbtn='VOLTAR!' func='#s2'/>
      </section>
      <section id='s2'>
        segundo
        <Btn textbtn="VOLTAR!!" func='#s3'/>
      </section>
      <section id='s3' >
        <Btn textbtn="VOLTAR!" func='#s1'/>
        terceiro
      </section>
    </main>
    </>
  )
}

export default App
