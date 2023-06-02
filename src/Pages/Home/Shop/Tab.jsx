import React from 'react';

const Tab = ({ label, isActive, onClick }) => {
    const tabStyle = {
        borderBottom: isActive ? '2px solid #BB8506' : 'none',
        paddingBottom: '3px',
        marginRight: '10px',
        cursor: 'pointer',
        color: isActive ? '#BB8506' : '',
    };

    return (
        <div style={tabStyle} onClick={onClick}>
            <span>{label}</span>
        </div>
    );
};

export default Tab;