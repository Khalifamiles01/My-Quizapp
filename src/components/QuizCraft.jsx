export default function QuizCraft() {
    return (
        <div className="card shadow-sm mb-4">
            <div className="card-body">
                <h5 className=" card-title">Question</h5>
                <p className="card-text">What is 2 + 2?</p>
                <button className="btn btn-primary me-2">4</button>
                <button className="btn btn-outline-secondary">5</button>
                <br />
                <p className="card-text">What is 3 * 3?</p>
                <button className="btn btn-primary me-2">9</button>
                <button className="btn btn-outline-secondary">6</button>
                <br />
                <p className="card-text">What is 10 / 5?</p>
                <button className="btn btn-primary me-2">2</button>
                <button className="btn btn-outline-secondary">5</button>
            </div>
        </div>
    );
}