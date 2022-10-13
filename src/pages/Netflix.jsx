import React from 'react'

export default function Netflix() {
  const [isScrolled, setisScrolled] = useState(false);

    window.onscroll =() => {
        setisScrolled(window.pageYOffset===0?false:true);
        return () => window.onscroll=null
    }

  return (
    <div>
        <Navbar isScrolled={isScrolled} />
    </div>
  )
}
