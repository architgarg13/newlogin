import React from 'react';
import '../App.css';


const Posts = ({ posts, loading}) => 
{
    if(loading) {
        return <h2>Loading...</h2>
    }
 return(
    <div className={"table-responsive"}>
                <table border = "1" className={"table table-hover table-bordered table -striped"}>
                    <thead>
                        <th className="odd">Country</th>
                        <th className="even">Total cases</th>
                        <th className="odd">New Cases</th>
                        <th className="even">Total Deaths</th>
                        <th className="odd">New Deaths</th>
                        <th className="even">Recovered</th>
                        <th className="odd">Active Cases</th>
                    </thead>
                    <tbody>
                        { posts.length ?
                        posts.map(post => (
                            <tr>
                        <td className="oddtd">{post.country}</td>
                        <td className="eventd">{post.cases}</td>
                        <td className="oddtd">{post.todayCases}</td>
                        <td className="eventd" v>{post.deaths}</td>
                        <td className="oddtd">{post.todayDeaths}</td>
                        <td className="eventd">{post.recovered}</td>
                        <td className="oddtd">{post.active}</td>
                            </tr>
                        )):
                        null
                        }
                    </tbody>
                </table>
            </div>
 );




}
export default Posts;