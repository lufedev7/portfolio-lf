import Link from 'next/Link'
const Navbar =() => (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">

    <Link href ="/"><a class="navbar-brand" href="#">Luis Fernando Angarita</a></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
       
        <li class="nav-item">
            <Link href ="/blog"><a class="nav-link">Blog</a></Link>
          
        </li>
        <li class="nav-item">
          <Link href="/github"><a class="nav-link" href="#">GitHub</a></Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
)
export default Navbar 