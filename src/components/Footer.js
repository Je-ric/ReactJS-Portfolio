"use client"

const Footer = () => {
    return (
        <footer className="bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-t">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 py-8 px-4">
                <p className="text-sm md:text-base text-center md:text-left">
                    &copy; {new Date().getFullYear()} Je-ric Dela Cruz. All rights reserved.
                </p>
                <p className="text-sm md:text-base text-center md:text-right italic text-cyan-400">
                    "But to all who did receive him, who believed in his name, he gave the right to become children of God." – John 1:12
                </p>
            </div>
        </footer>
    )
}

export default Footer
