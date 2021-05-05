import React from 'react';
//import {pdfjs} from 'react-pdf';
import Pdf from 'react-to-pdf';

const ref= React.createRef();

const PDF = (props) => {
    return (
        <>
        <div className="Cv" ref={ref}>
        <div>{props.firstname}</div>
        {/* <div>{props.lastname}</div> */}
        </div>
        <Pdf targetRef={ref} filename="CV.pdf">
            { ({toPdf}) => <button
            onClick={toPdf}> Download your PDF</button>  
              }
        </Pdf>
        </>
    );
};

// export default PDF;
// import React from 'react';

// const PDF = (props) => {
//     return (

//         <div>
//             <p>nada</p>
//             {props.firstname}
//         </div>
//     );
// };

 export default PDF;