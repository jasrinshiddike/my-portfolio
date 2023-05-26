import useTitle from "../../../hooks/useTitle";
import WorkPortfolio from "../WorkPortfolio/WorkPortfolio";

const MyWork = () => {
    useTitle('My Work')
    return (
        <div>
            <div className="w-1/2 mx-auto">
                <h2 className="text-3xl font-bold text-centers">Hi! My name is Jasrin Shiddike and I am a passionate react developer.
                    I always prefer the simple, elegant and delicacy in my websites. My ultimate goal is to retain the beauty of my websites and balance my creativity.</h2>
                <p className="text-2xl text-center mt-8">Please scroll down to see my work</p>
                
            </div>
            <WorkPortfolio />
        </div>
    );
};

export default MyWork;