import { useRouter } from "next/router";

export async function getServerSideProps(context) {
    const {id} = context.params;

    return {
        props: {
            id
        }
    }
}

export default function BlogDetail({id}) {

  return <div>Blog: {id}</div>;
}
