import Layout from '../components/Layout'
import {withRouter} from 'next/router'

const post = ({router})=>{
    return(
        <Layout title={router.query.title}>
            <p style={{width:"80vw"}}>
            Phasellus quis est in nisl finibus luctus. Aenean auctor cursus commodo. Sed dapibus lorem sem, vitae malesuada urna ornare ut. Nulla porta sodales leo non tincidunt. Etiam suscipit felis nec neque lobortis dignissim. Etiam luctus sem ac odio commodo, eget pulvinar sapien porta. Morbi ut placerat orci, a varius libero. Proin volutpat tincidunt lectus ut posuere. Nam varius velit eget felis accumsan, eget feugiat enim pharetra. Quisque vel orci nisl. In in risus ut leo molestie venenatis. Suspendisse tempus, sapien volutpat hendrerit laoreet, odio mi rutrum nulla, at eleifend velit leo id nulla. Ut sed tempor lacus.
            </p>
        </Layout>

    )
}

export default withRouter(post);