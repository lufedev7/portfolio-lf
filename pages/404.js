import Layout from "../components/layout";
import Link from "next/Link";
const custom404 =() =>(
    <Layout>
        <div className="text-center">
        <h1>
            404
        </h1>
        <p>
            this page does not exists. Please return to 
            <Link href="/"><a> Home</a></Link> 
            
        </p>
        </div>
        
    </Layout>
)
export default custom404;