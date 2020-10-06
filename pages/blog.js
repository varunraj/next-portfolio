import Layout from '../components/Layout';
import Link from 'next/link'

const PostLink = ({title})=>{
    return(
    <li>
        <Link href={`/post?title=${title}`}>
            <a>{title}</a>
        </Link>
    </li>
    )
}


const blog = ()=>{
    return (
    <Layout title="My Blog">
        <ul>
            <PostLink title="React" />
            <PostLink title="Angular" />
            <PostLink title="Veu" />
        </ul>
    </Layout>
    )
}

export default blog