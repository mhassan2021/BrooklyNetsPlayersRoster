import { useParams } from "react-router";
import { useState, useEffect } from "react";
import useFetch from "./UseFetch";
import {Link} from 'react-router-dom';
const BlogDetailsR = () => {
    const { id } = useParams();
    const { data: blogsR, isPending, error } = useFetch('https://data.nba.com/data/v2015/json/mobile_teams/nba/2021/teams/nets/player_averages_02.json');
    const queryParams = new URLSearchParams(window.location.search);
    const fn = queryParams.get('fn');
    const ln = queryParams.get('ln');
    // console.log(fn + ' - ' + ln); // 
    // console.log(id);
    // console.log(blogsR);
  
    return (

        <div className="container">
            <div className="row justify-content-left">
                <div className="mt-5">
                    <div className="row d-flex justify-content-Left">
                        <div className="col-md-12">
                            {isPending && <div><img src="images/loading.gif" alt="" style={{ width: 20, height: 20 }}></img><br />Loading...........</div>}
                            {error && <div>{error}</div>}
                            {blogsR && blogsR.tpsts.pl.filter((player => player.pid === id)).map(blogs => {
                                return (
                                    <div className="card" key={blogs.pid}>
                                        <div className="card-horizontal">
                                            <div className="img-square-wrapper py-4 p-2">
                                                <img alt="" className="border border-dark rounded" src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${blogs.pid}.png`} />
                                                <h2>{blogs.fn} {blogs.ln}</h2>
                                                <h4>Position: {blogs.pos}</h4>
                                                <Link to={'./'} className="single_advisor_back"> <h5>{'<<'} Back to Players</h5></Link>
                      
                                            </div>
                                            {/* AVG -- STarts*/}
                                            <div className="card-body">

                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col col-sm">

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col col-sm">

                                                        <div>
                                                            <div className="container">
                                                                <div className="row justify-content-md-left bg-dark">

                                                                    <div className="col  col-md-7  text-white">
                                                                        <h4 className="text-white">Average</h4>
                                                                    </div>
                                                                </div>
                                                                <div className="row justify-content-md-left">
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>GP</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.avg.gp}</p>
                                                                    </div>
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>GS</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.avg.gs}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="row justify-content-md-left">
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>MIN</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.avg.min}</p>
                                                                    </div>
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>FGP</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.avg.fgp}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="row justify-content-md-left">
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>TPP</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.avg.tpp}</p>
                                                                    </div>
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>FTP</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.avg.ftp}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="row justify-content-md-left">
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>OREB</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.avg.oreb}</p>
                                                                    </div>
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>DREB</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.avg.dreb}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="row justify-content-md-left">
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>REB</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.avg.reb}</p>
                                                                    </div>
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>ASST</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.avg.ast}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="row justify-content-md-left">
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>STL</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.avg.stl}</p>
                                                                    </div>
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>BLK</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.avg.blk}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="row justify-content-md-left">
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>TOV</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.avg.tov}</p>
                                                                    </div>
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>PF</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.avg.pf}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="row justify-content-md-left">
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>PTS</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.avg.pts}</p>
                                                                    </div>
                                                                    <div className="col  col-md-3 bg-light">

                                                                    </div>
                                                                    <div className="col-md-3">

                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>
                                                    {/* AVG -- End*/}
                                                    {/* TOT -- Starts*/}
                                                    <div className="col-sm">

                                                        <div>
                                                            <div className="container">
                                                                <div className="row justify-content-md-left bg-dark">

                                                                    <div className="col  col-md-7  text-white">
                                                                        <h4 className="text-white">Total</h4>
                                                                    </div>
                                                                </div>
                                                                <div className="row justify-content-md-left">
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>GP</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.tot.gp}</p>
                                                                    </div>
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>GS</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.tot.gs}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="row justify-content-md-left">
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>MIN</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.tot.min}</p>
                                                                    </div>
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>FGM</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.tot.fgm}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="row justify-content-md-left">
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>FGA</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.tot.fga}</p>
                                                                    </div>
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>TPM</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.tot.tpm}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="row justify-content-md-left">
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>TPA</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.tot.tpa}</p>
                                                                    </div>
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>FTM</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.tot.ftm}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="row justify-content-md-left">
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>FTA</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.tot.ftm}</p>
                                                                    </div>
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>OREB</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.tot.oreb}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="row justify-content-md-left">
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>DREB</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.tot.dreb}</p>
                                                                    </div>
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>REB</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.tot.reb}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="row justify-content-md-left">
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>ASST</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.tot.ast}</p>
                                                                    </div>
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>STL</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.tot.stl}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="row justify-content-md-left">
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>BLK</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.tot.blk}</p>
                                                                    </div>
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>TOV</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.tot.tov}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="row justify-content-md-left">
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>PF</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.tot.pf}</p>
                                                                    </div>
                                                                    <div className="col  col-md-3 bg-light">
                                                                        <h5>PTS</h5>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>{blogs.tot.pts}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            {/* TOT Ends */}
                                        </div>
                                    </div>

                                )
                            }
                            )
                            }
                        </div>
                    </div></div></div>
            <div className="mt-5"></div>
        </div>

    );
}

export default BlogDetailsR;