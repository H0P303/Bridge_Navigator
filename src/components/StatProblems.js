import Stat254CH1Problem from '../files/Stat254CH1Problem.pdf'
import Stat254CH1Solution from '../files/Stat254CH1Solution.pdf'
import Stat254CH2Problem from '../files/Stat254CH2Problem.pdf'
import Stat254CH2Solution from '../files/Stat254CH2Solution.pdf'
import Stat254CH3Problem from '../files/Stat254CH3Problem.pdf'
import Stat254CH3Solution from '../files/Stat254CH3Solution.pdf'
import Stat254CH4Problem from '../files/Stat254CH4Problem.pdf'
import Stat254CH4Solution from '../files/Stat254CH4Solution.pdf'
import Stat254CH5Problem from '../files/Stat254CH5Problem.pdf'
import Stat254CH5Solution from '../files/Stat254CH5Solution.pdf'
import Stat254CH6Problem from '../files/Stat254CH6Problem.pdf'
import Stat254CH6Solution from '../files/Stat254CH6Solution.pdf'
import Stat254CH7Problem from '../files/Stat254CH7Problem.pdf'
import Stat254CH7Solution from '../files/Stat254CH7Solution.pdf'
import Stat254CH8Problem from '../files/Stat254CH8Problem.pdf'
import Stat254CH8Solution from '../files/Stat254CH8Solution.pdf'
import Stat254CH9Problem from '../files/Stat254CH9Problem.pdf'
import Stat254CH9Solution from '../files/Stat254CH9Solution.pdf'
import Stat254CH10Problem from '../files/Stat254CH10Problem.pdf'
import Stat254CH10Solution from '../files/Stat254CH10Solution.pdf'
import Stat254FinalReviewProblems from '../files/Stat254FinalReviewProblems.pdf'
import Stat254FinalReviewSolutions from '../files/Stat254FinalReviewSolutions.pdf'

const StatProblems = () => {
    return ( 
        <div>
            <div className='Header'>
                <h1>Class Website Navigator</h1>
            </div>
            <div className='ProblemGrid'>
                <div id='Left'>
                    <ul>
                        <li><a href={Stat254CH1Problem} target="_blank" rel="noopener noreferrer">Chapter 1 Problem</a></li>
                        <li><a href={Stat254CH1Solution} target="_blank" rel="noopener noreferrer">Chapter 1 Solution</a></li>
                        <li><a href={Stat254CH2Problem} target="_blank" rel="noopener noreferrer">Chapter 2 Problem</a></li>
                        <li><a href={Stat254CH2Solution} target="_blank" rel="noopener noreferrer">Chapter 2 Solution</a></li>
                        <li><a href={Stat254CH3Problem} target="_blank" rel="noopener noreferrer">Chapter 3 Problem</a></li>
                        <li><a href={Stat254CH3Solution} target="_blank" rel="noopener noreferrer">Chapter 3 Solution</a></li>
                        <li><a href={Stat254CH4Problem} target="_blank" rel="noopener noreferrer">Chapter 4 Problem</a></li>
                        <li><a href={Stat254CH4Solution} target="_blank" rel="noopener noreferrer">Chapter 4 Solution</a></li>
                        
                    </ul>
                </div>
                <div id='Middle'>
                    <ul>
                        <li><a href={Stat254CH5Problem} target="_blank" rel="noopener noreferrer">Chapter 5 Problem</a></li>
                        <li><a href={Stat254CH5Solution} target="_blank" rel="noopener noreferrer">Chapter 5 Solution</a></li>
                        <li><a href={Stat254CH6Problem} target="_blank" rel="noopener noreferrer">Chapter 6 Problem</a></li>
                        <li><a href={Stat254CH6Solution} target="_blank" rel="noopener noreferrer">Chapter 6 Solution</a></li>
                        <li><a href={Stat254CH7Problem} target="_blank" rel="noopener noreferrer">Chapter 7 Problem</a></li>
                        <li><a href={Stat254CH7Solution} target="_blank" rel="noopener noreferrer">Chapter 7 Solution</a></li>
                    </ul>
                </div>
                <div id='Right'>
                    <ul>
                        <li><a href={Stat254CH8Problem} target="_blank" rel="noopener noreferrer">Chapter 8 Problem</a></li>
                        <li><a href={Stat254CH8Solution} target="_blank" rel="noopener noreferrer">Chapter 8 Solution</a></li>
                        <li><a href={Stat254CH9Problem} target="_blank" rel="noopener noreferrer">Chapter 9 Problem</a></li>
                        <li><a href={Stat254CH9Solution} target="_blank" rel="noopener noreferrer">Chapter 9 Solution</a></li>
                        <li><a href={Stat254CH10Problem} target="_blank" rel="noopener noreferrer">Chapter 10 Problem</a></li>
                        <li><a href={Stat254CH10Solution} target="_blank" rel="noopener noreferrer">Chapter 10 Solution</a></li>
                        <li><a href={Stat254FinalReviewProblems} target="_blank" rel="noopener noreferrer">Final Review Problems</a></li>
                        <li><a href={Stat254FinalReviewSolutions} target="_blank" rel="noopener noreferrer">Final Review Solutions</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default StatProblems;