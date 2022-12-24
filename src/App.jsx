import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
// import ejemplojson from "./components/ejemplo.json"
// import rombitosjson from "./components/rombitos.json"
import nievejson from "./components/nieve.json"
import img1 from "./assets/img/p1.jpg"
import img2 from "./assets/img/2.jpg"


const App = () => {




    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <>
            <div className="boxtop"></div>
            <div><h1>Queremos Desearte:</h1></div>
            <div className="box2">
                <div>

                </div>
                <div className="grid-img-center width">
                    <div className="wrapper">
                        {/* <div className="static-txt">Te deseo</div> */}
                        <ul className="dynamic-txts">
                            <li><span>Paz</span></li>
                            <li><span>Amor</span></li>
                            <li><span>Union</span></li>
                            <li><span>Prosperidad.</span></li>
                        </ul>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className="picture">
                <img src={img2} alt="" />
            </div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={
                    nievejson
                }
            />

        </>
    );
};
export default App
