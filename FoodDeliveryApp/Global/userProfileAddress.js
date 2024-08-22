
import React, { createContext, useState } from 'react';

const UserAddressContext = createContext(null);

const UserAddressProvider = ({ children }) => {
    const [userAddress, setAddress] = useState({
       streetAddress:'',
       city:'',
       state: '',
       zipCode: '',
    });

    return (
        <UserAddressContext.Provider value={{ userAddress, setAddress }}>
            {children}
        </UserAddressContext.Provider>
    );
};

export { UserAddressContext, UserAddressProvider };
