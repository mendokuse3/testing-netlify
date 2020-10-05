import React from 'react';
import './CSS/Home.css'

function Home(props) {
    return (
        <div className='homeContainer' onClick={() => props.goToDash()}>
            <div className='home'>
                <img className='topImg' src='https://user-images.githubusercontent.com/65630204/95115732-f3bdb000-0713-11eb-8a99-b13d38e98ef1.png' />

                <img className='trumpHomeCandi' src='https://user-images.githubusercontent.com/65630204/94746267-5eed3800-034a-11eb-8806-08c7f0a30983.png' />

                <img className='bidenHomeCandi' src='https://user-images.githubusercontent.com/65630204/94747127-36663d80-034c-11eb-841d-e49a44b9940d.png' />

                <img className='harrisHomeCandi' src='https://user-images.githubusercontent.com/65630204/94747453-f05da980-034c-11eb-98d5-d0e08257404a.png' />

                <img className='penceHomeCandi' src='https://user-images.githubusercontent.com/65630204/94747954-24859a00-034e-11eb-9e6e-6167a87e6ad6.png' />

                <div className='titleContainer'>
                    <img className='homeTitle' src='https://user-images.githubusercontent.com/65630204/95113739-e7842380-0710-11eb-80e9-cd463fc05f8d.png' />
                    <br />
                    <img className='homeSubtitle' src='https://user-images.githubusercontent.com/65630204/95113744-e94de700-0710-11eb-9830-c415a71a13aa.png' />

                </div>


                <img className='bottomImg' src='https://user-images.githubusercontent.com/65630204/95116263-c1f91900-0714-11eb-9f91-517cd3f2bc77.png' />
            </div>

        </div>
    );
}

export default Home;