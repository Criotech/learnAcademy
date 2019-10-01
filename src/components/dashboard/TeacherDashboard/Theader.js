import React from 'react'

export default function Theader({ name, role, onLogout }) {
    return (
        <div className="tdheader">
                    <div className="thleft">
                        <span className="welcome">Welcome, {name}</span> <br/> <span className="role">{role}</span>
                    </div>
                    <div className="thright" onClick={onLogout}>
                        <span style={{ cursor: 'pointer' }}>Logout</span>
                    </div>
        </div>
    )
}
