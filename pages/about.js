
import Layout from '../components/Layout'
import Link from 'next/link'
import {Component} from 'react';
import fetch from 'isomorphic-unfetch'
import Error from './_error'

class about extends Component{

    // state  = {
    //     user:null
    // }

    //Instead of using lifecycle method like componentDidMount to get the data
    // we are going to use getInitialProps() method from nextjs to get data.

    static async getInitialProps(){
        const res = await fetch('https://api.github.com/users/varunraj')
        const statusCode = res.status > 200 ? res.status: false
        const data = await res.json()
        
        return  {user: data, statusCode};
    }



    // componentDidMount(){
    //     fetch('https://api.github.com/users/varunraj')
    //     .then(res=> res.json())
    //     .then(data=>{
    //         this.setState({user: data})
    //     })
    // }

    render(){

        const {user, statusCode} = this.props;

        if (statusCode) {
            return <Error statusCode={statusCode} />
        }

        return(
            <Layout title="About">
                         
                <p>{user.name}</p>
                <img src={user.avatar_url} alt="Varun Raj" height="200px" />
            </Layout>
        )
    }


}

export default about