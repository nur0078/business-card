
export default function Info() {
    return (
        <div className="info">
            <img
            src="../images/og.png"
            className="img--main"
            alt="display card"
            />
            <p className="name"> Anurodh Pandey </p>
            <p className="job"> React Beginner </p>
            <p className="email"> anurodhp7@gmail.com</p>
            <div className="buttons">
                <button id="btn-email"> Email </button>
                <button id="btn-social"> Github </button>
            </div>
        </div>
    )
}