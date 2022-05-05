import React from 'react';
import Image1 from '../assets/images/BAM.jpg';
import Image2 from '../assets/images/BM_FACE.jpg';

export default function Example() {
    return (
        <>
            <div className = 'h-auto bg-gradient-to-r from-red-900 via-slate-500 to-blue-900'>
            <div className = 'menu-card flex flex-col justify-center items-center'>
            <img className="mt-8 drop-shadow-2xl " src={Image1} alt='Sheriff Billy Merrifield' />
                <div className='center-content'>
                    <h2 className='h-auto bg-gradient-to-r from-blue-900 via-slate-500 to-red-900 text-inherit text-stone-50 object-contain leading-loose text-center font-bold uppercase text-2xl mt-3 mb-3'>
                    Greetings, Rio Arriba County Citizens, Family &
                            Friends.. <br /><br/>
                            
As a lifelong citizen of our beautiful Valley and
County of Rio Arriba, I have officially filed my
candidacy, for Rio Arriba County Sheriff. This is
also the leadership position, I was recently
appointed and trusted with by our Rio Arriba
County Commissioners. My passion as a public
servant, has always been providing our
communities, and our people with service and
support. As a leader, and with your support, I
will work hard to restore public trust, restore
relationships with our local and tribal law
enforcement partners, provide fair effective
policing, and provide a positive confident
narrative for the department, with transparency
                            and accountability.
                            <br/>
I respectfully ask for your vote, and your
support, to keep me as your next Rio Arriba
                            County Sheriff.
                            <br />
                            <br/>
                            Stay Safe & God Bless! <br />
                            
                            Billy A. Merrifield <br />
                            
BillyA.Merrifield4RACSheriff2022
                    </h2>
                    <p className='mb-2 text-2xl text-center uppercase'>   <span> Elections belong to the people!</span> </p>
                </div>
                </div>
                </div>
        </>  
    );
};