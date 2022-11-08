import Layout from "../components/layout"
import {post} from '../profile'
import Link from 'next/link'

const PostCard = ({ post }) => (
    <div className="col-md-4">
      <div className="card">
        <div className="overflow">
          <img src={post.imageURL} alt="" className="card-img-top" />
          {console.log(post.imageURL)}
        </div>
        <div className="card-body">
          <h1>{post.tittle}</h1>
          <p>{post.content}</p>
          <Link href={`/post?title=${post.tittle}`}>
            <button className="btn btn-light">Read</button>
          </Link>
        </div>
      </div>
    </div>
  );
const blog = () =>(
  
    <Layout footer = {false}>
     
         <div className ="row">
             {
             post.map((post, i ) => ( 
                 <PostCard post={post} key={i}/>
             ))
             }
         </div>
    </Layout>
        
    ) 
export default blog