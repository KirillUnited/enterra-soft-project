import React from 'react'

export default function useLoading(initValue = 0) {
    const [percent, setPercent] = React.useState(initValue);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setPercent(prev => (prev < 100 ? prev + 1 : 100));
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return {
        percent,
        isLoaded: percent < 100
    }
}
