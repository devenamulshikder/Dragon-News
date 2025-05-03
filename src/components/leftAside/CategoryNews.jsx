import { useParams } from "react-router";



const CategoryNews = () => {
    const obj = useParams()
    console.log(obj);
    return (
        <div className="max-w-7xl mx-auto ">
            <h1>categories news</h1>
        </div>
    );
};

export default CategoryNews;