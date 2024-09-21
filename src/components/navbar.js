import React from 'react';
const NavBar = () => {


    const navBar = ['Home','Portfolio','Bio','CV','Contact']




    return(
        <div class = 'h-screen bg-black'>
        <div class="w-32 text-sky-50 ml-5 font-mono flex flex-col items-center text-center justify-center">
          <div class="mt-5 ml-5 font-redhat text-5xl">
            JASON <br/>
            PHELPS
          </div>
          
          <div class="font-redhat mt-5">
            {navBar.map((item) => (
              <div class="mb-3 text-2xl cursor-pointer text-slate-400 hover:text-sky-50">
                {item}
              </div>
            ))}
          </div>
          
          <div class="mt-5 font-redhat text-xs text-slate-400">
            © 2024 Jason Phelps
          </div>
        </div>
        
          </div>


    )
};

export default NavBar;
