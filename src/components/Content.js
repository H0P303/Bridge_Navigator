import Math250ACP from '../files/250A-CP.pdf'
import Math251CP from '../files/251CP.pdf'
import SuggMath251CP from '../files/251sugg.pdf'

const Header = () => {
    return ( 
        <div>
            <div className='Header'>
                <h1>Class Website Navigator</h1>
            </div>
            <div className='Buttons'>
                <div id='Math-250A'>
                    <h1>Math 250A</h1>
                    <div className='Links'>
                        <ul>
                            <li><a href="https://online.camosun.ca/d2l/home/249005" target="_blank" rel='noreferrer'>D2L Page</a></li>
                            <li><a href="https://sites.google.com/site/cazelais/home/math250a" target="_blank" rel='noreferrer'>Math 250A Page</a></li>
                            <li><a href={Math250ACP} target="_blank" rel="noopener noreferrer">Homework Problems</a></li>
                        </ul>
                    </div>
                </div>
                <div id='Math-251'>
                    <h1>Math 251</h1>
                    <div className='Links'>
                        <ul>
                            <li><a href="https://online.camosun.ca/d2l/home/249025" target="_blank" rel='noreferrer'>D2L Page</a></li>
                            <li><a href="http://www.leahhoward.com/math251.html" target="_blank" rel='noreferrer'>Math 251 Page</a></li>
                            <li><a href={Math251CP} target="_blank" rel='noreferrer'>Math 251 Problems</a></li>
                            <li><a href={SuggMath251CP} target="_blank" rel='noreferrer'>Math 251 Suggested Problems</a></li>
                        </ul>
                    </div>
                </div>
                <div id='Stats-254'>
                    <h1>Stats 254</h1>
                    <div className='Links'>
                        <ul>
                            <li><a href='https://online.camosun.ca/d2l/le/content/249703/Home' target="_blank" rel='noreferrer'>D2L Page</a></li>
                            <li><a href="https://webwork.camosun.ca/webwork2/Stat254-Winter2023-Kinniburgh" target="_blank" rel='noreferrer'>WebWork</a></li>
                            <li><a href="StatProblems" target="_blank" rel="noopener noreferrer">Stat Problems & Solutions</a></li>
                        </ul>
                    </div>
                </div>
                {/* New Row */}
                <div id='Comp-166'>
                    <h1>Comp 166</h1>
                    <div className='Links'>
                        <ul>
                            <li><a href="https://online.camosun.ca/d2l/home/247509" target="_blank" rel='noreferrer'>D2L Page</a></li>
                            <li><a href="https://deepblue.camosun.bc.ca/shpak/comp166/2023w/" target="_blank" rel='noreferrer'>Comp 166 Page</a></li>
                            <li><a href="https://deepblue.camosun.bc.ca/shpak/comp166/Lectures/" target="_blank" rel='noreferrer'>Comp 166 Lecture Notes</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Header;