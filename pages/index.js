import Layout from '../components/layout'
import Link from 'next/link'
import { skills, experiencies, projects } from '../profile'
const Index = () => (
  <Layout dark>
    {/*header cars */}
    <header className="row">
      <div className="col-md-12 ">
        <div className="card card-body bg-secundary text-dark oscurecer">
          <div className="row">
            <div className="col-md-2">
              <img src="20170605_102642_HDR.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Fernando Angarita</h1>
              <h3>FullStack Developer</h3>
              <p>
                Ingeniero de sistemas, especialista en desarrollo frondend,
                aprendiendo next js para poder sacar todos los proyectos
                relacionados con el tema
              </p>
              <a href="/hireme">Hire Me</a>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* Segunda section */}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-ligth">
          <div className="card-body">
            <h1>Skills</h1>
            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-ligth">
          <div className="card-body">
            <h1>Experience</h1>

            <ul>
              {experiencies.map(({ tittle, from, to, description }, index) => (
                <li key={index}>
                  <h3>{tittle}</h3>
                  <h5>
                    {from}-{to}
                  </h5>
                  <p>{description}</p>
                </li>
              ))}
            </ul>

            <Link href="/experiences">
              <a className="btn btn-light">Know More</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* Esta es la seccion del portafolio */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portafolio</h1>
            </div>
            {projects.map(({ name, description, image }, i) => (
              <div className="col-md-4 p-2" key={i}>
                <div className="card h-100">
                  <div className="overflow">
                    <img
                      src={`/${image}`}
                      alt=""
                      className="img-fluid"
                      className="card-img-top"
                    />
                  </div>

                  <div className="card-body">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <a href="#!"> Know More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4 ">
            <Link href="/portafolio">
              <a className="btn btn-outline-light">More Proyects</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
export default Index
