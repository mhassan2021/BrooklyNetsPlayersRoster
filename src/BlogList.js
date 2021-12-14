import {Link} from 'react-router-dom';
const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    const myComponentStyle = {visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}
    return (
       
        <div className="container">
        <main role="main" className="pb-3">
        <div className="row">
            <h1>{title}</h1>
            {blogs.t.pl.map((blog) => (
            
                <div key={blog.pid} className="col-12 col-sm-6 col-lg-4">
                    <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style={myComponentStyle}>
                        <div className="advisor_thumb text-center">
                                <img alt="" src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${blog.pid}.png`}/>
                        </div>
                        <div className="single_advisor_details_info">
                        <Link to={`/Players/${blog.pid}`} className="single_advisor_profile"> <h2>{blog.fn} {blog.ln}</h2></Link>
                            <h4>Position: {blog.pos}</h4>
                            <h4>Jersey Number: {blog.num}</h4>
                        </div>
                    </div>
                </div>
            
            ))}
        </div>
        </main>
        </div>
     );
}
 
export default BlogList;