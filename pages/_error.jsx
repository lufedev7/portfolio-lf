import Layout from "../components/layout";
const _error = ({statusCode }) => {
 return (
    <Layout footer = {false}>
         <p className="Text-center">Could no load your page: Status Code {statusCode}</p>
     </Layout >
 )

}
export default _error;