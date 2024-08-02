import { UserCircle } from 'lucide-react';
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Title(){
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  useEffect(() => {
    const checkAuthStatus = () => {
    };

    checkAuthStatus();
  }, []);
  const handleLogout = () => {
    try {
      const apiUrl = new URL("/api/auth/logout", process.env.REACT_APP_FAST_API_URL);
      const response = fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        credentials:"include",
      });
      navigate("/login");
    } catch (error) {
      throw(error);
    }
};
    return (
        <div className='header flex flex-row justify-between border-1'>
            <div className='image'>
              <img src="redroadicon.svg" alt='compan-icon'></img>
            </div>
            <div className="header-image">
              <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <UserCircle className="right-5" />
              </div>
            </div>
            {isDropdownOpen && (
            <div style={{ 
              position: 'absolute', 
              right: 0, 
              top: '100%', 
              backgroundColor: 'white', 
              border: '1px solid #ddd', 
              borderRadius: '4px', 
              padding: '8px' 
            }}>
              <button onClick={handleLogout} style={{ display: 'block', width: '80px', textAlign: 'center', border: 'none', background: 'none', cursor: 'pointer' }}>
                Logout
              </button>
            </div>
          )}
          </div>
    );
}