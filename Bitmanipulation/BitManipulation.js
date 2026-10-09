class BitManipulation {
    static getBit(n, k) {
        // Convert to BigInt to safely support 64-bit shifting
        const bigN = BigInt(n);
        const bigK = BigInt(k);
        return (bigN >> bigK) & 1n;
    }

    static setBit(n, k) {
        const bigN = BigInt(n);
        const bigK = BigInt(k);
        return (1n << bigK) | bigN;
    }

    static clearBit(n, k) {
        const bigN = BigInt(n);
        const bigK = BigInt(k);
        return bigN & ~(1n << bigK);
    }

    static toggleBit(n, k) {
        const bigN = BigInt(n);
        const bigK = BigInt(k);
        return bigN ^ (1n << bigK);
    }

    static isPowerOfTwo(n) {
        const bigN = BigInt(n);
        if (bigN > 0n && (bigN & (bigN - 1n)) === 0n) {
            return true;
        }
        return false;
    }

    countSetBits(n) {
        let bigN = BigInt(n);
        let count = 0n; // Return value as BigInt to match data types
        while (bigN > 0n) {
            bigN = bigN & (bigN - 1n);
            count++;
        }
        return count;
    }
}
