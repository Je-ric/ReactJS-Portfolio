const DualMarquee = ({ word1, word2 }) => {
    const phrase = (
        <>
            <span className="word1">{word1}</span>{" "}
            <span className="word2">{word2}</span>
        </>
    );

    return (
        <div className="dual-marquee">
            {/* Top Marquee */}
            <div className="marquee marquee-top">
                <div className="marquee-content">
                    {Array(10).fill(phrase)}
                    {Array(10).fill(phrase)} {/* duplicate yung phrase */}
                </div>
            </div>

            {/* Bottom Marquee */}
            <div className="marquee marquee-bottom">
                <div className="marquee-content">
                    {Array(10).fill(phrase)}
                    {Array(10).fill(phrase)}
                </div>
            </div>
        </div>
    );
};

export default DualMarquee;


// Usage:
// <DualMarquee word1="ABOUT" word2="ME" />