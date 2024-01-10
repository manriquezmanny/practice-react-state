import Star from '/.Star';
import createArray from '/.createArray.js';

export default function StarRating({ totalStars = 5, selectedStars }) {
    return (
        <>
            {createArray(totalStars).map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </>
    );
}