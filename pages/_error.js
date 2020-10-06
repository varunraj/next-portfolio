import Layout from '../components/Layout'

const error = ({statusCode})=>{
    return(
    <Layout title="Error !!">
        {statusCode ? `Could not load your user data: Status Code ${statusCode}
        ` :'Could not get that page, sorry !!' }
    </Layout>
    )
}

export default error