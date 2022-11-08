import Layout from "../components/layout";
import { useRouter } from "next/dist/client/router";
import { post } from "../profile";

const Post = () => {
  const router = useRouter();
  console.log(router.query.title);
  const array = post.filter((posts) => post.tittle === router.query.title)[0];

  console.log("hola", array);

  return (
    <Layout title={router.query.title} footer={false}>
      <div className="text-center"></div>
    </Layout>
  );
};

export default Post;
