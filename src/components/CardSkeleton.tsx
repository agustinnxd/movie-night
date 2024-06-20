import Skeleton from "react-loading-skeleton"

export const CardSkeleton = () => {
    return(
        <div className="card">
            <div>
                <img src="" alt=""/>
            </div>
            <div className="card-body">
                <h1 className="card-title"><Skeleton/></h1>
                <p className="card-text"><Skeleton/></p>
                <p className="card-text"><Skeleton/></p>
            </div>
        </div>
    )
}