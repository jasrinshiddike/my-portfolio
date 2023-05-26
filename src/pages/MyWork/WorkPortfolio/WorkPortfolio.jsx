import img1 from '../../../assets/myworkr1.png';
import img2 from '../../../assets/mywork2.png';
import img3 from '../../../assets/mywork3.png';
import { Link } from 'react-router-dom';

const WorkPortfolio = () => {
    return (
        <div className='mt-20'>
            <div className="card lg:card-side bg-base-100 mt-10 shadow-xl">
                <figure><img src={img1} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">The Kid Zone</h2>
                    <p>A toy shop with different kinds of toys in reasonable prices</p>
                    <div className="card-actions justify-end">
                        <Link to="https://toy-market-140b6.web.app/"><button className="btn">Go to Website</button></Link>
                    </div>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl mt-20">
            <figure><img src={img2} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">The Foodie Hub</h2>
                <p>This website is based on italian dishes and special recipe methods of chef</p>
                <div className="card-actions justify-end">
                    <Link to="https://chef-recipe-hunter-91652.web.app/chef"><button className="btn">Go to Website</button></Link>
                </div>
            </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl mt-20">
            <figure><img src={img3} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">Career Opportunity</h2>
                <p>In this website all kinds of cse related jobs are available</p>
                <div className="card-actions justify-end">
                    <Link to="https://sunny-centaur-35da10.netlify.app/"><button className="btn">Go to Website</button></Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default WorkPortfolio;