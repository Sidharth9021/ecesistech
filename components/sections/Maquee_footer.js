import Marquee from 'react-fast-marquee';

export default function MarqueeFooter() {
    return (
        <div className="marquee__area-two max-w-40">
            <Marquee className="marquee__wrap overflow-hidden " gradient={false} speed={90}>
                <h3 className='text-3xl'>
                    <span className='text-blue-400'>Evolve.</span>
                    <span className='text-pink-400'>Transform.</span>
                    <span>Grow.</span>
                    
                </h3>
            </Marquee>
        </div>
    );
}
