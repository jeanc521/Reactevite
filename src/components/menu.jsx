import './menu.module.css'
export const Menu = (props) => {
    return(
    <nav className='menu'>
    <p><a href="#s1">{props.s1}</a>primeiro</p>
    <p><a href="#s2">{props.s2}</a>segundo</p> 
    <p><a href="#s3">{props.s3}</a>terceiro</p>
     </nav>
    )}