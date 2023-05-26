import useTitle from "../../hooks/useTitle";

const About = () => {
    useTitle('About Me')
    return (
        <div>
            <h2 className="text-2xl text-center font-bold">About Me</h2>
            <p className="mt-32 text-center text-xl w-1/2 mx-auto"> Hello! I'm Jasrin Shiddike. I currently live in Dhaka, Bangladesh. After completing my graduation from Computer Science & Engineering I have joined in banking sector as a software developer. I'm a quick thinker, very motivated, and enjoy working both alone and in groups. </p>
        </div>
    );
};

export default About;