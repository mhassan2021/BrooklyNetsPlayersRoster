import BlogList from "./BlogList";
import useFetch from "./UseFetch";

const Blog = () => {
    const{data : blogs,isPending,error} = useFetch('https://data.nba.com/data/5s/v2015/json/mobile_teams/nba/2021/teams/nets_roster.json');
    console.log(blogs);
    return (
        <div className="container">
            <main role="main" className="pb-3">
               {isPending && <div><img src="images/loading.gif" alt=""></img><br />Loading...........</div>}
                {error && <div>{error}</div>}
                {blogs && <BlogList blogs={blogs} title="Team Roster"></BlogList>}
            </main>

        </div>
    );
}

export default Blog;