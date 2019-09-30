import React from 'react';

const loginNote = (props) => {
    const renderFormContent = () => {
        if (props.role === "teacher") {
            return (
                <div className="lcontent">
                    <h1 className="lh1">Help every student succeed with personalized practice. 100% free.</h1>
                    <h2 className="lh2">
                        <ul style={{ listStyle: "disc", paddingLeft: "17px", color: "#FFFFFF" }}>
                            <li>Find standards-aligned content</li>
                            <li>Assign practice exercises, videos and articles</li>
                            <li>Track student progress</li> <li>Join millions of teachers and students</li>
                        </ul></h2>
                </div>
            )
        } else if (props.role === "student") {
            return (
                <div className="lcontent">
                    <h1 className="lh1">A world class education for anyone, anywhere. 100% free.</h1>
                    <h2 className="lh2">
                        Join Learn Academy to get personalized help with what you’re studying or to learn something completely new. We’ll save all of your progress.
                </h2>
                </div>
            )
        }
    }

    return (
        <div>
            {renderFormContent()}
        </div>
    );
}
export default loginNote;