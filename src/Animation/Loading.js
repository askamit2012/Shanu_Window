import './Loading.css';

const Loading = () => {
    return(
        <div className="Loading">
            <div className="nav">
                    <li>Home</li>
                    <li>Services</li>
                    <li>Locate Us!</li>
            </div>
            <section className="body">
                <h1>End ot the Year</h1>
                <p>lorem ipsum dolor sit amet, consectetur adip non pro id lorem ipsum dolor sit amet lorem </p>
                <h3>In the name of the Lord!</h3>
                <p>My name is Amit Kumar and I am a Computer Science Engineer and I develop web apps for my survival.</p>
            </section>
            <section className="info">
                <h4>Amit Kumar</h4>
                <h4>+91-8197917240</h4>
                <h4>askamit2012@gmail.com</h4>
            </section>
            <footer>
                <li>FB</li>
                <li>In</li>
                <li>Google</li>
            </footer>
        </div>
    )
}

export default Loading;