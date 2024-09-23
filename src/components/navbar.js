import React from 'react';

const NavBar = () => {


    const navBar = ['Home','Portfolio','Bio','CV','Contact']




    return(
        
        <div className="w-32 text-white ml-5 font-mono flex flex-col items-center text-center justify-center">
          <div className="mt-5 ml-5 font-redhat text-5xl">
            JASON <br/>
            PHELPS
          </div>
          
          <div className="font-redhat mt-5">
            {navBar.map((item) => (

              <div key = {item} className="mb-3 text-2xl cursor-pointer text-slate-400 hover:text-white">
                {item}
              </div>
            ))}
          </div>
          
          <div className="mt-5 font-redhat text-xs text-slate-400">
            © 2024 Jason Phelps
          </div>
        </div>
        
  


    )
};

export default NavBar;
