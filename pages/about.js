
import Layout from '../components/Layout'
import Link from 'next/link'

const about = () =>{
    return (
        <Layout title="About">            
            <p>Javascript programmer</p>
            <img src="/js.jpg" alt="javascript" height="200px" />
        </Layout>
    )

}

export default about