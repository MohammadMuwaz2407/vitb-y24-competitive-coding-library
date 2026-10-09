class BitManipulation:
    @staticmethod
    def get_bit(n: int, k: int) -> int:
        return (n >> k) & 1

    @staticmethod
    def set_bit(n: int, k: int) -> int:
        n = (1 << k) | n
        return n

    @staticmethod
    def clear_bit(n: int, k: int) -> int:
        n = n & ~(1 << k)
        return n

    @staticmethod
    def toggle_bit(n: int, k: int) -> int:
        n = n ^ (1 << k)
        return n

    @staticmethod
    def is_power_of_two(n: int) -> bool:
        if n > 0 and (n & (n - 1)) == 0:
            return True
        return False

    def count_set_bits(self, n: int) -> int:
        count = 0
        while n > 0:
            n = n & (n - 1)
            count += 1
        return count
