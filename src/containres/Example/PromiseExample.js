import React, { useEffect } from 'react';

function PromiseExample(props) {

    const One = () => {
        return "one";
    }

    const Two = () => {
        // with Promise
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve ("two");
            }, 2000);
            
        })
        
    }
    
    const Three = () => {
        return "three"
    } 
    
    const All =async () => {
        const OneAns = One();
        console.log(OneAns);

        const TwoAns =await Two();
        console.log(TwoAns);

        const ThreeAns = Three();
        console.log(ThreeAns);
    }

    const Print = (z) => {
        console.log(z);
    }

    const sum = (a, b, callbackFun) => {
        let sum = 0;
        sum = a + b;
        callbackFun(sum)
    }

    sum (10, 20, Print)

    
    useEffect(() => {
        All();
    }, [])
    return (
        <div>
            
        </div>
    );
}

export default PromiseExample;