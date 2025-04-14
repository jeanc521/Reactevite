import style from './Footer.module.css'

export function Footer() {
  return (
    <footer className={style.footercss}>
      <a target="_blank" href="https://github.com/jeanc521/React-148" rel="noreferrer">
        <img width="30px" height="auto" src="./assets/images/github (1).png" alt="Github Jean" />
      </a>
      <a target="_blank" href="https://vercel.com/jeanc521s-projects" rel="noreferrer">
        <img width="30px" height="auto" src="./assets/images/vercel-logo.svg (1).png" alt="Vercel" />
      </a>
    </footer>
  )
}
