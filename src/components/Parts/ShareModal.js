import React from 'react';

const ShareButton = () => {
    const shareContent = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'Share this with your friends',
                    text: 'Check out this awesome website!',
                    url: window.location.href,
                });
            } else {
                // Fallback for browsers that don't support Web Share API
                alert('Web Share API is not supported in this browser.');
            }
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    return (
        <button onClick={shareContent}>
            Share this
        </button>
    );
};

export default ShareButton;
