// Clamp/trim a number between a min and max value
const clamp = (val, min, max) => {
    return Math.min(Math.max(val, min), max);
}

// Calculate distance between two points (hypotenuse)
const distance = (x1, y1, x2, y2) => {
    const dx = x2 - x1;
    const dy = y2 - y1;

    return Math.sqrt((dx * dx) + (dy * dy));
}

// Check whether a value is within a min and max range
const isWithinRange = (val, min, max) => {
    // Return boolean
    return val >= min && val <= max;
}

// Linear interpolation // LERP
const lerp = (start, end, amount) => {
    // Clamp the amount between 0 and 1
    amount = Math.min(1, Math.max(0, amount));

    // Return the calculated interpolated value
    return start + amount * (end - start);
}

// Random number within range (lower-bound inclusive, upper-bound exclusive)
const random = (min, max) => {
    // Return integer
    return Math.floor(Math.random() * (max - min)) + min;
}

const Utilis = { clamp, distance, isWithinRange, lerp, random };

export default Utilis;