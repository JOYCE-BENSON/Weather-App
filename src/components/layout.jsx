/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      <Header/>
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t bg-background/95 backdrop-blur py-12 support-[backdrop-filter]
      :bg-background/60">
        <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Made by Caleb, Joyce, Innocent and Hakim</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;