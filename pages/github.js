import Layout from "../components/layout"
import Error from "./_error"
const github = ({user, statusCode})=> {
    //console.log(props.user)
    if(statusCode) {
        return <Error statusCode={statusCode} />
    }
 return (
 <Layout>
       <div className="row">
            <div className="col-md-4 offset-md-4">
               <div className="card  card-body text-center">
                   <h1>{user.name}</h1>
                   <img src ={user.avatar_url} alt =""/>
                   <p>{user.bio}</p>
                   <a href ={user.html_url} target ="_blank" className="btn btn-outline-secondary">
                       Go to GitHub
                   </a>
                   </div> 
            </div>
       </div>
    </Layout>
 )


}
export async function getServerSideProps(){
    const res = await  fetch('https://api.github.com/users/luisfer738')
    const data = await res.json();
    const statusCode = res.status > 200 ? res.status :false;  
    console.log(data)
    return{

               props:{
                        user: data,
                        statusCode
                     }
        }
}
export default github