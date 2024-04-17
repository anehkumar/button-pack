import React from 'react';

interface ButtonProps {
    label: string;
}

const Index = ({ label } : ButtonProps) => {
    return <button>{label}</button>;
}

export default Index;