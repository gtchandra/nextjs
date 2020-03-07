import Link from 'next/link';
import Livedate from '../components/livedate'

//var now=new  Date().toLocaleString();
var now=1;
const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/stats">
      <a style={linkStyle}>Stats</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
  
);

export default Header;
