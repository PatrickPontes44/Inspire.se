import React from 'react';
import MainHeader from './MainHeader';
import MainBody from './MainBody';
import MainFooter from './MainFooter';
class MainSection extends React.Component{
    render(){
        return(
            <div className="main-container" id="main-container">
                <MainHeader />
                <MainBody />
                <MainFooter />
            </div>
        )
    }
}
export default MainSection;