import styled from 'styled-components';

/* Component ---------------------------*/

import Essay from './Essay.jsx';

const Essays = () => {
    return (
        <EssaysStyled className='Essays'>
            <h2>Essays</h2>
            <Essay question='Q1: Explain the difference between HTML, CSS, and JavaScript.'>
                1. This is my answer.
            </Essay>
            <Essay question='Q2: What is the difference between Git and Github?'>
                2. One of them has a hub.
            </Essay>
            <Essay question='Q3: What is the difference between JQuery and React?'>
                3. Who can really say?
            </Essay>
        </EssaysStyled>
    );
}

export default Essays;

const EssaysStyled = styled.div`

`;