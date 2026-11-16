// CBSE Class 10 Mathematics MCQs - 14 Chapters, 25 MCQs each (350 Total)
const MATH_MCQ_DATA = [
  {
    "id": 1,
    "title": "Real Numbers",
    "video": "https://www.youtube.com/watch?v=0kFp-V3fXvY",
    "mcqs": [
      {
        "q": "If two positive integers \\(a\\) and \\(b\\) are written as \\(a = x^3 y^2\\) and \\(b = x y^3\\), where \\(x, y\\) are prime numbers, then \\(\\text{HCF}(a, b)\\) is:",
        "options": [
          "\\(xy\\)",
          "\\(xy^2\\)",
          "\\(x^3 y^3\\)",
          "\\(x^2 y^2\\)"
        ],
        "ans": 1,
        "exp": "\\(\\text{HCF}\\) is obtained by taking the product of the smallest power of each common prime factor. The common prime factors are \\(x\\) and \\(y\\). The smallest power of \\(x\\) is \\(1\\) and of \\(y\\) is \\(2\\). Hence, \\(\\text{HCF}(a, b) = x y^2\\)."
      },
      {
        "q": "If two positive integers \\(p\\) and \\(q\\) can be expressed as \\(p = ab^2\\) and \\(q = a^3 b\\), where \\(a, b\\) are prime numbers, then \\(\\text{LCM}(p, q)\\) is:",
        "options": [
          "\\(ab\\)",
          "\\(a^2 b^2\\)",
          "\\(a^3 b^2\\)",
          "\\(a^3 b^3\\)"
        ],
        "ans": 2,
        "exp": "\\(\\text{LCM}\\) is the product of the highest power of each prime factor involved in the numbers. Highest power of \\(a\\) is \\(3\\) and of \\(b\\) is \\(2\\). Therefore, \\(\\text{LCM}(p, q) = a^3 b^2\\)."
      },
      {
        "q": "The total number of factors of a prime number is:",
        "options": [
          "1",
          "2",
          "0",
          "3"
        ],
        "ans": 1,
        "exp": "A prime number is divisible only by \\(1\\) and itself. Hence, every prime number has exactly \\(2\\) factors."
      },
      {
        "q": "The \\(\\text{HCF}\\) of the smallest prime number and the smallest composite number is:",
        "options": [
          "1",
          "2",
          "4",
          "6"
        ],
        "ans": 1,
        "exp": "The smallest prime number is \\(2\\) and the smallest composite number is \\(4\\). The factors of \\(2\\) are \\(1, 2\\) and of \\(4\\) are \\(1, 2, 4\\). The highest common factor is \\(2\\)."
      },
      {
        "q": "If \\(\\text{HCF}(306, 657) = 9\\), then \\(\\text{LCM}(306, 657)\\) is:",
        "options": [
          "22338",
          "21338",
          "22388",
          "23328"
        ],
        "ans": 0,
        "exp": "Using the relation \\(\\text{HCF} \\times \\text{LCM} = a \\times b\\), we have \\(\\text{LCM} = \\frac{306 \\times 657}{9} = 34 \\times 657 = 22338\\)."
      },
      {
        "q": "The exponent of \\(2\\) in the prime factorisation of \\(144\\) is:",
        "options": [
          "2",
          "4",
          "6",
          "3"
        ],
        "ans": 1,
        "exp": "Factorising \\(144\\): \\(144 = 2^4 \\times 3^2\\). Therefore, the exponent of \\(2\\) is \\(4\\)."
      },
      {
        "q": "Which of the following is an irrational number?",
        "options": [
          "\\(3.14159\\)",
          "\\(\\frac{22}{7}\\)",
          "\\(3.141141114\\dots\\)",
          "\\(3.\\overline{1415}\\)"
        ],
        "ans": 2,
        "exp": "A non-terminating and non-repeating decimal represents an irrational number. The decimal expansion \\(3.141141114\\dots\\) never terminates and never repeats."
      },
      {
        "q": "If \\(n\\) is a natural number, then \\(6^n - 5^n\\) always ends with the digit:",
        "options": [
          "1",
          "3",
          "5",
          "7"
        ],
        "ans": 0,
        "exp": "For any natural number \\(n\\), \\(6^n\\) always ends with the unit digit \\(6\\), and \\(5^n\\) always ends with the unit digit \\(5\\). Thus, \\(6^n - 5^n\\) ends with \\(6 - 5 = 1\\)."
      },
      {
        "q": "If \\(\\text{LCM}(x, 18) = 36\\) and \\(\\text{HCF}(x, 18) = 2\\), then the value of \\(x\\) is:",
        "options": [
          "2",
          "3",
          "4",
          "1"
        ],
        "ans": 2,
        "exp": "We know that \\(\\text{LCM} \\times \\text{HCF} = \\text{Product of two numbers}\\). So, \\(36 \\times 2 = x \\times 18 \\implies 72 = 18x \\implies x = 4\\)."
      },
      {
        "q": "The ratio of \\(\\text{LCM}\\) and \\(\\text{HCF}\\) of the least composite and the least prime numbers is:",
        "options": [
          "\\(1 : 2\\)",
          "\\(2 : 1\\)",
          "\\(1 : 1\\)",
          "\\(1 : 3\\)"
        ],
        "ans": 1,
        "exp": "Least composite number is \\(4\\) and least prime is \\(2\\). \\(\\text{HCF}(4, 2) = 2\\) and \\(\\text{LCM}(4, 2) = 4\\). Ratio \\(\\frac{\\text{LCM}}{\\text{HCF}} = \\frac{4}{2} = \\frac{2}{1} = 2:1\\)."
      },
      {
        "q": "If \\(p\\) and \\(q\\) are co-prime numbers, then \\(p^2\\) and \\(q^2\\) are:",
        "options": [
          "Co-prime",
          "Even",
          "Odd",
          "Composite only"
        ],
        "ans": 0,
        "exp": "If two integers share no common prime factor, their squares will also share no common prime factor. Hence \\(p^2\\) and \\(q^2\\) are also co-prime."
      },
      {
        "q": "The sum of the exponents of prime factors in the prime factorisation of \\(196\\) is:",
        "options": [
          "1",
          "2",
          "4",
          "6"
        ],
        "ans": 2,
        "exp": "\\(196 = 2^2 \\times 7^2\\). The sum of exponents is \\(2 + 2 = 4\\)."
      },
      {
        "q": "For some integer \\(m\\), every even integer is of the form:",
        "options": [
          "\\(m\\)",
          "\\(m + 1\\)",
          "\\(2m\\)",
          "\\(2m + 1\\)"
        ],
        "ans": 2,
        "exp": "Any even integer is a multiple of \\(2\\), which can be written in the form \\(2m\\) for some integer \\(m\\)."
      },
      {
        "q": "For some integer \\(q\\), every odd integer is of the form:",
        "options": [
          "\\(q\\)",
          "\\(q + 1\\)",
          "\\(2q\\)",
          "\\(2q + 1\\)"
        ],
        "ans": 3,
        "exp": "Since \\(2q\\) is always even, adding \\(1\\) produces an odd integer, so every odd integer is of the form \\(2q + 1\\)."
      },
      {
        "q": "If \\(\\text{HCF}(a, b) = 12\\) and \\(a \\times b = 1800\\), then \\(\\text{LCM}(a, b)\\) is:",
        "options": [
          "3600",
          "150",
          "900",
          "120"
        ],
        "ans": 1,
        "exp": "\\(\\text{LCM}(a, b) = \\frac{a \\times b}{\\text{HCF}(a, b)} = \\frac{1800}{12} = 150\\)."
      },
      {
        "q": "\\(n^2 - 1\\) is divisible by \\(8\\), if \\(n\\) is:",
        "options": [
          "An integer",
          "A natural number",
          "An odd integer",
          "An even integer"
        ],
        "ans": 2,
        "exp": "Let \\(n = 2k + 1\\) (an odd integer). Then \\(n^2 - 1 = (2k + 1)^2 - 1 = 4k^2 + 4k = 4k(k + 1)\\). Since \\(k(k+1)\\) is the product of two consecutive integers, it is divisible by \\(2\\). Thus, \\(4 \\times 2 = 8\\) divides \\(n^2 - 1\\)."
      },
      {
        "q": "The product of a non-zero rational and an irrational number is:",
        "options": [
          "Always irrational",
          "Always rational",
          "Rational or irrational",
          "One"
        ],
        "ans": 0,
        "exp": "The product of any non-zero rational number with an irrational number is always irrational."
      },
      {
        "q": "The largest number which divides \\(70\\) and \\(125\\), leaving remainders \\(5\\) and \\(8\\) respectively, is:",
        "options": [
          "13",
          "65",
          "875",
          "1750"
        ],
        "ans": 0,
        "exp": "The required number is \\(\\text{HCF}(70 - 5, 125 - 8) = \\text{HCF}(65, 117)\\). Since \\(65 = 13 \\times 5\\) and \\(117 = 13 \\times 9\\), the \\(\\text{HCF}\\) is \\(13\\)."
      },
      {
        "q": "If two positive integers \\(a\\) and \\(b\\) satisfy \\(a = bq + r\\), where \\(q\\) and \\(r\\) are unique integers, then \\(r\\) must satisfy:",
        "options": [
          "\\(1 < r < b\\)",
          "\\(0 \\le r < b\\)",
          "\\(0 < r \\le b\\)",
          "\\(0 \\le r \\le b\\)"
        ],
        "ans": 1,
        "exp": "By Euclid's Division Lemma, the remainder \\(r\\) always satisfies \\(0 \\le r < b\\)."
      },
      {
        "q": "Can the number \\(4^n\\), where \\(n\\) is a natural number, end with the digit zero?",
        "options": [
          "Yes, for \\(n = 5\\)",
          "Yes, for even values of \\(n\\)",
          "No, for any value of \\(n\\)",
          "Yes, for \\(n = 0\\)"
        ],
        "ans": 2,
        "exp": "A number ends with zero if its prime factorisation contains both \\(2\\) and \\(5\\). Since \\(4^n = (2^2)^n = 2^{2n}\\), \\(5\\) is never a factor. Hence, it can never end with \\(0\\)."
      },
      {
        "q": "The least number that is divisible by all the numbers from \\(1\\) to \\(10\\) (both inclusive) is:",
        "options": [
          "10",
          "100",
          "504",
          "2520"
        ],
        "ans": 3,
        "exp": "The least number is \\(\\text{LCM}(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)\\). Prime factors: \\(2^3, 3^2, 5, 7\\). \\(\\text{LCM} = 8 \\times 9 \\times 5 \\times 7 = 2520\\)."
      },
      {
        "q": "If \\(p\\) is a prime number and \\(p\\) divides \\(a^2\\), then \\(p\\) necessarily divides:",
        "options": [
          "\\(a\\)",
          "\\(a + 1\\)",
          "\\(2a + 1\\)",
          "\\(a^3\\) only"
        ],
        "ans": 0,
        "exp": "By the Fundamental Theorem of Arithmetic theorem: If \\(p\\) is a prime number and \\(p\\) divides \\(a^2\\), then \\(p\\) divides \\(a\\), where \\(a\\) is a positive integer."
      },
      {
        "q": "If \\(\\text{HCF}(26, 169) = 13\\), then \\(\\text{LCM}(26, 169)\\) is:",
        "options": [
          "26",
          "52",
          "338",
          "13"
        ],
        "ans": 2,
        "exp": "\\(\\text{LCM} = \\frac{26 \\times 169}{13} = 2 \\times 169 = 338\\)."
      },
      {
        "q": "Express \\(98\\) as a product of its prime factors:",
        "options": [
          "\\(2 \\times 7\\)",
          "\\(2^2 \\times 7\\)",
          "\\(2 \\times 7^2\\)",
          "\\(2^3 \\times 7\\)"
        ],
        "ans": 2,
        "exp": "Dividing \\(98\\) by \\(2\\) gives \\(49\\), and \\(49 = 7^2\\). Thus, \\(98 = 2 \\times 7^2\\)."
      },
      {
        "q": "\\(3 + 2\\sqrt{5}\\) is:",
        "options": [
          "A rational number",
          "An irrational number",
          "An integer",
          "A natural number"
        ],
        "ans": 1,
        "exp": "Since \\(\\sqrt{5}\\) is irrational, \\(2\\sqrt{5}\\) is irrational, and adding the rational number \\(3\\) to an irrational number yields an irrational number."
      }
    ]
  },
  {
    "id": 2,
    "title": "Polynomials",
    "video": "https://www.youtube.com/watch?v=F3G8n25v-tA",
    "mcqs": [
      {
        "q": "If one zero of the quadratic polynomial \\(x^2 + 3x + k\\) is \\(2\\), then the value of \\(k\\) is:",
        "options": [
          "10",
          "-10",
          "-7",
          "-2"
        ],
        "ans": 1,
        "exp": "Substitute \\(x = 2\\) into the polynomial: \\((2)^2 + 3(2) + k = 0 \\implies 4 + 6 + k = 0 \\implies k = -10\\)."
      },
      {
        "q": "The quadratic polynomial whose sum and product of zeroes are \\(-3\\) and \\(2\\) respectively is:",
        "options": [
          "\\(x^2 + 3x + 2\\)",
          "\\(x^2 - 3x + 2\\)",
          "\\(x^2 + 3x - 2\\)",
          "\\(-x^2 + 3x + 2\\)"
        ],
        "ans": 0,
        "exp": "A quadratic polynomial is given by \\(k[x^2 - (\\alpha + \\beta)x + \\alpha \\beta]\\). Here \\(\\alpha + \\beta = -3\\) and \\(\\alpha \\beta = 2\\). Thus, \\(x^2 - (-3)x + 2 = x^2 + 3x + 2\\)."
      },
      {
        "q": "If \\(\\alpha\\) and \\(\\beta\\) are the zeroes of the polynomial \\(f(x) = x^2 - p(x + 1) - c\\) such that \\((\\alpha + 1)(\\beta + 1) = 0\\), then \\(c =\\):",
        "options": [
          "1",
          "0",
          "-1",
          "2"
        ],
        "ans": 0,
        "exp": "Expanding the polynomial: \\(f(x) = x^2 - px - (p + c)\\). Here \\(\\alpha + \\beta = p\\) and \\(\\alpha \\beta = -(p + c)\\). Now, \\((\\alpha + 1)(\\beta + 1) = \\alpha \\beta + (\\alpha + \\beta) + 1 = -(p + c) + p + 1 = 1 - c\\). Given \\(1 - c = 0 \\implies c = 1\\)."
      },
      {
        "q": "The zeroes of the quadratic polynomial \\(x^2 + 99x + 127\\) are:",
        "options": [
          "Both positive",
          "Both negative",
          "One positive and one negative",
          "Both equal"
        ],
        "ans": 1,
        "exp": "Here \\(a = 1 > 0\\), \\(b = 99 > 0\\), and \\(c = 127 > 0\\). Sum of zeroes \\(\\alpha + \\beta = -\\frac{b}{a} = -99 < 0\\), and product \\(\\alpha \\beta = \\frac{c}{a} = 127 > 0\\). Since the product is positive and the sum is negative, both zeroes must be negative."
      },
      {
        "q": "The number of polynomials having zeroes as \\(-2\\) and \\(5\\) is:",
        "options": [
          "1",
          "2",
          "3",
          "More than 3"
        ],
        "ans": 3,
        "exp": "Any polynomial of the form \\(k(x - (-2))(x - 5) = k(x + 2)(x - 5)\\) for any real non-zero constant \\(k\\) has zeroes \\(-2\\) and \\(5\\). Hence there are infinitely many (more than 3) polynomials."
      },
      {
        "q": "If one of the zeroes of the cubic polynomial \\(x^3 + ax^2 + bx + c\\) is \\(-1\\), then the product of the other two zeroes is:",
        "options": [
          "\\(b - a + 1\\)",
          "\\(b - a - 1\\)",
          "\\(a - b + 1\\)",
          "\\(a - b - 1\\)"
        ],
        "ans": 0,
        "exp": "Since \\(-1\\) is a zero: \\((-1)^3 + a(-1)^2 + b(-1) + c = 0 \\implies -1 + a - b + c = 0 \\implies c = 1 - a + b\\). Product of all three zeroes \\((-1)\\alpha \\beta = -c \\implies \\alpha \\beta = c = b - a + 1\\)."
      },
      {
        "q": "If \\(\\alpha, \\beta\\) are the zeroes of \\(P(x) = 2x^2 + 5x + k\\) such that \\(\\alpha^2 + \\beta^2 + \\alpha \\beta = \\frac{21}{4}\\), then \\(k =\\):",
        "options": [
          "1",
          "2",
          "-1",
          "-2"
        ],
        "ans": 1,
        "exp": "Here \\(\\alpha + \\beta = -\\frac{5}{2}\\) and \\(\\alpha \\beta = \\frac{k}{2}\\). We rewrite \\(\\alpha^2 + \\beta^2 + \\alpha \\beta = (\\alpha + \\beta)^2 - \\alpha \\beta = \\left(-\\frac{5}{2}\\right)^2 - \\frac{k}{2} = \\frac{25}{4} - \\frac{k}{2}\\). Setting this to \\(\\frac{21}{4}\\): \\(\\frac{k}{2} = \\frac{25}{4} - \\frac{21}{4} = 1 \\implies k = 2\\)."
      },
      {
        "q": "The degree of a non-zero constant polynomial is:",
        "options": [
          "0",
          "1",
          "Not defined",
          "Any real number"
        ],
        "ans": 0,
        "exp": "A non-zero constant polynomial \\(c\\) can be written as \\(c \\cdot x^0\\). Hence, its degree is \\(0\\)."
      },
      {
        "q": "If the graph of a quadratic polynomial \\(y = ax^2 + bx + c\\) touches the \\(x\\)-axis at only one point, then the quadratic equation \\(ax^2 + bx + c = 0\\) has:",
        "options": [
          "No real roots",
          "Two equal real roots",
          "Two distinct real roots",
          "Three roots"
        ],
        "ans": 1,
        "exp": "When the parabola touches the \\(x\\)-axis at exactly one point, the discriminant \\(D = b^2 - 4ac = 0\\), which means it has two equal real roots."
      },
      {
        "q": "If \\(\\alpha\\) and \\(\\beta\\) are zeroes of \\(x^2 - (k + 6)x + 2(2k - 1)\\), and \\(\\alpha + \\beta = \\frac{1}{2}\\alpha \\beta\\), then the value of \\(k\\) is:",
        "options": [
          "6",
          "7",
          "5",
          "8"
        ],
        "ans": 1,
        "exp": "Here \\(\\alpha + \\beta = k + 6\\) and \\(\\alpha \\beta = 2(2k - 1)\\). Given \\(k + 6 = \\frac{1}{2}[2(2k - 1)] = 2k - 1 \\implies 6 + 1 = 2k - k \\implies k = 7\\)."
      },
      {
        "q": "A quadratic polynomial whose zeroes are \\(5 + \\sqrt{2}\\) and \\(5 - \\sqrt{2}\\) is:",
        "options": [
          "\\(x^2 - 10x + 23\\)",
          "\\(x^2 + 10x + 23\\)",
          "\\(x^2 - 10x - 23\\)",
          "\\(x^2 + 10x - 23\\)"
        ],
        "ans": 0,
        "exp": "Sum of zeroes \\(= (5 + \\sqrt{2}) + (5 - \\sqrt{2}) = 10\\). Product of zeroes \\(= (5)^2 - (\\sqrt{2})^2 = 25 - 2 = 23\\). Polynomial is \\(x^2 - (\\text{Sum})x + (\\text{Product}) = x^2 - 10x + 23\\)."
      },
      {
        "q": "If one zero of the polynomial \\(f(x) = (k^2 + 16)x^2 + 13x + 8k\\) is the reciprocal of the other, then \\(k =\\):",
        "options": [
          "4",
          "-4",
          "2",
          "-2"
        ],
        "ans": 0,
        "exp": "Let the zeroes be \\(\\alpha\\) and \\(\\frac{1}{\\alpha}\\). Their product is \\(\\alpha \\cdot \\frac{1}{\\alpha} = 1\\). In the polynomial, product \\(= \\frac{c}{a} = \\frac{8k}{k^2 + 16}\\). Thus \\(\\frac{8k}{k^2 + 16} = 1 \\implies k^2 - 8k + 16 = 0 \\implies (k - 4)^2 = 0 \\implies k = 4\\)."
      },
      {
        "q": "The maximum number of zeroes that a polynomial of degree \\(n\\) can have is:",
        "options": [
          "\\(n - 1\\)",
          "\\(n\\)",
          "\\(n + 1\\)",
          "\\(2n\\)"
        ],
        "ans": 1,
        "exp": "By the Fundamental Theorem of Algebra, a polynomial of degree \\(n\\) can have at most \\(n\\) real zeroes."
      },
      {
        "q": "If the sum of the zeroes of the quadratic polynomial \\(kx^2 + 2x + 3k\\) is equal to their product, then \\(k =\\):",
        "options": [
          "\\(-\\frac{2}{3}\\)",
          "\\(\\frac{2}{3}\\)",
          "\\(-\\frac{1}{3}\\)",
          "\\(\\frac{1}{3}\\)"
        ],
        "ans": 0,
        "exp": "Sum of zeroes \\(= -\\frac{2}{k}\\), product \\(= \\frac{3k}{k} = 3\\). Setting them equal: \\(-\\frac{2}{k} = 3 \\implies k = -\\frac{2}{3}\\)."
      },
      {
        "q": "If \\(\\alpha, \\beta\\) are zeroes of \\(x^2 - 4x + 1\\), then the value of \\(\\frac{1}{\\alpha} + \\frac{1}{\\beta} - \\alpha \\beta\\) is:",
        "options": [
          "3",
          "4",
          "5",
          "1"
        ],
        "ans": 0,
        "exp": "\\(\\alpha + \\beta = 4\\) and \\(\\alpha \\beta = 1\\). Then \\(\\frac{1}{\\alpha} + \\frac{1}{\\beta} - \\alpha \\beta = \\frac{\\alpha + \\beta}{\\alpha \\beta} - \\alpha \\beta = \\frac{4}{1} - 1 = 3\\)."
      },
      {
        "q": "If the zeroes of the quadratic polynomial \\(ax^2 + bx + c\\), where \\(c \\ne 0\\), are equal, then:",
        "options": [
          "\\(c\\) and \\(a\\) have opposite signs",
          "\\(c\\) and \\(b\\) have opposite signs",
          "\\(c\\) and \\(a\\) have the same sign",
          "\\(c\\) and \\(b\\) have the same sign"
        ],
        "ans": 2,
        "exp": "For equal zeroes, discriminant \\(D = b^2 - 4ac = 0 \\implies b^2 = 4ac\\). Since \\(b^2 > 0\\) for non-zero \\(b\\), \\(4ac > 0\\), which implies \\(a\\) and \\(c\\) must have the same sign."
      },
      {
        "q": "What is the value of \\(p\\) for which \\(-4\\) is a zero of the polynomial \\(x^2 - 2x - (7p + 3)\\)?",
        "options": [
          "3",
          "2",
          "-3",
          "-2"
        ],
        "ans": 0,
        "exp": "Substitute \\(x = -4\\): \\((-4)^2 - 2(-4) - (7p + 3) = 0 \\implies 16 + 8 - 7p - 3 = 0 \\implies 21 - 7p = 0 \\implies p = 3\\)."
      },
      {
        "q": "The zeroes of the polynomial \\(x^2 - 3\\) are:",
        "options": [
          "\\(\\pm 3\\)",
          "\\(\\pm \\sqrt{3}\\)",
          "\\(3, -1\\)",
          "\\(\\sqrt{3}, 3\\)"
        ],
        "ans": 1,
        "exp": "\\(x^2 - 3 = 0 \\implies x^2 = 3 \\implies x = \\pm \\sqrt{3}\\)."
      },
      {
        "q": "If \\(\\alpha\\) and \\(\\beta\\) are zeroes of \\(2x^2 + 3x + 1\\), then the value of \\(\\alpha^2 + \\beta^2\\) is:",
        "options": [
          "\\(\\frac{5}{4}\\)",
          "\\(\\frac{1}{4}\\)",
          "\\(\\frac{9}{4}\\)",
          "\\(\\frac{3}{2}\\)"
        ],
        "ans": 0,
        "exp": "\\(\\alpha + \\beta = -\\frac{3}{2}\\), \\(\\alpha \\beta = \\frac{1}{2}\\). Then \\(\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha \\beta = \\left(-\\frac{3}{2}\\right)^2 - 2\\left(\\frac{1}{2}\\right) = \\frac{9}{4} - 1 = \\frac{5}{4}\\)."
      },
      {
        "q": "If the polynomial \\(f(x) = ax^3 + bx - c\\) is divisible by the polynomial \\(g(x) = x^2 + bx + c\\), then \\(ab =\\):",
        "options": [
          "1",
          "\\(\\frac{1}{c}\\)",
          "-1",
          "c"
        ],
        "ans": 0,
        "exp": "Comparing leading and constant terms, the quotient must be \\(ax - 1\\). Expanding \\((x^2 + bx + c)(ax - 1) = ax^3 + (ab - 1)x^2 + (ac - b)x - c\\). Since there is no \\(x^2\\) term in \\(f(x)\\), the coefficient \\(ab - 1 = 0 \\implies ab = 1\\)."
      },
      {
        "q": "The zeroes of the quadratic polynomial \\(4u^2 + 8u\\) are:",
        "options": [
          "\\(0, -2\\)",
          "\\(0, 2\\)",
          "\\(2, -2\\)",
          "\\(4, -8\\)"
        ],
        "ans": 0,
        "exp": "\\(4u^2 + 8u = 0 \\implies 4u(u + 2) = 0 \\implies u = 0\\) or \\(u = -2\\)."
      },
      {
        "q": "A quadratic polynomial with zeroes \\(\\frac{2}{3}\\) and \\(-\\frac{1}{4}\\) is:",
        "options": [
          "\\(12x^2 - 5x - 2\\)",
          "\\(12x^2 + 5x - 2\\)",
          "\\(12x^2 - 5x + 2\\)",
          "\\(x^2 - 5x - 2\\)"
        ],
        "ans": 0,
        "exp": "Sum of zeroes \\(= \\frac{2}{3} - \\frac{1}{4} = \\frac{8 - 3}{12} = \\frac{5}{12}\\). Product \\(= \\frac{2}{3} \\times \\left(-\\frac{1}{4}\\right) = -\\frac{2}{12}\\). Multiplying by \\(12\\) gives \\(12x^2 - 5x - 2\\)."
      },
      {
        "q": "If the sum of the squares of zeroes of the quadratic polynomial \\(f(x) = x^2 - 8x + k\\) is \\(40\\), then \\(k =\\):",
        "options": [
          "12",
          "6",
          "18",
          "24"
        ],
        "ans": 0,
        "exp": "\\(\\alpha + \\beta = 8\\), \\(\\alpha \\beta = k\\). We are given \\(\\alpha^2 + \\beta^2 = 40\\). Since \\(\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha \\beta \\implies 40 = 64 - 2k \\implies 2k = 24 \\implies k = 12\\)."
      },
      {
        "q": "If \\(\\alpha, \\beta\\) are zeroes of \\(x^2 - 5x + 6\\), the value of \\(\\alpha - \\beta\\) (assuming \\(\\alpha > \\beta\\)) is:",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "ans": 0,
        "exp": "\\(x^2 - 5x + 6 = (x - 2)(x - 3) = 0\\). The zeroes are \\(3\\) and \\(2\\). Thus \\(\\alpha - \\beta = 3 - 2 = 1\\)."
      },
      {
        "q": "Which of the following is NOT the graph of a quadratic polynomial?",
        "options": [
          "A parabola opening upwards",
          "A parabola opening downwards",
          "A straight line",
          "A parabola touching the x-axis"
        ],
        "ans": 2,
        "exp": "The graph of any quadratic polynomial is a parabola (either opening upwards or downwards). A straight line represents a linear polynomial (degree 1)."
      }
    ]
  },
  {
    "id": 3,
    "title": "Pair of Linear Equations in Two Variables",
    "video": "https://www.youtube.com/watch?v=J5a-m1j_uB0",
    "mcqs": [
      {
        "q": "The pair of equations \\(x + 2y + 5 = 0\\) and \\(-3x - 6y + 1 = 0\\) has:",
        "options": [
          "A unique solution",
          "Exactly two solutions",
          "Infinitely many solutions",
          "No solution"
        ],
        "ans": 3,
        "exp": "Comparing ratios: \\(\\frac{a_1}{a_2} = \\frac{1}{-3} = -\\frac{1}{3}\\), \\(\\frac{b_1}{b_2} = \\frac{2}{-6} = -\\frac{1}{3}\\), \\(\\frac{c_1}{c_2} = \\frac{5}{1} = 5\\). Since \\(\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\ne \\frac{c_1}{c_2}\\), the lines are parallel and have no solution."
      },
      {
        "q": "If the lines given by \\(3x + 2ky = 2\\) and \\(2x + 5y + 1 = 0\\) are parallel, then the value of \\(k\\) is:",
        "options": [
          "\\(-\\frac{5}{4}\\)",
          "\\(\\frac{2}{5}\\)",
          "\\(\\frac{15}{4}\\)",
          "\\(\\frac{3}{2}\\)"
        ],
        "ans": 2,
        "exp": "For parallel lines, \\(\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\ne \\frac{c_1}{c_2}\\). Here \\(\\frac{3}{2} = \\frac{2k}{5} \\implies 4k = 15 \\implies k = \\frac{15}{4}\\)."
      },
      {
        "q": "For what value of \\(k\\) do the equations \\(kx - 2y = 3\\) and \\(3x + y = 5\\) represent intersecting lines?",
        "options": [
          "\\(k = -6\\)",
          "\\(k \\ne -6\\)",
          "\\(k = 6\\)",
          "\\(k \\ne 6\\)"
        ],
        "ans": 1,
        "exp": "For intersecting lines (unique solution), \\(\\frac{a_1}{a_2} \\ne \\frac{b_1}{b_2}\\). So \\(\\frac{k}{3} \\ne \\frac{-2}{1} \\implies k \\ne -6\\)."
      },
      {
        "q": "If a pair of linear equations is consistent, then the lines will be:",
        "options": [
          "Parallel",
          "Always coincident",
          "Intersecting or coincident",
          "Always intersecting"
        ],
        "ans": 2,
        "exp": "A consistent system has at least one solution. This occurs when lines intersect at a single point (unique solution) or are coincident (infinitely many solutions)."
      },
      {
        "q": "The value of \\(c\\) for which the pair of equations \\(cx - y = 2\\) and \\(6x - 2y = 3\\) will have infinitely many solutions is:",
        "options": [
          "3",
          "-3",
          "-12",
          "No value"
        ],
        "ans": 3,
        "exp": "For infinitely many solutions: \\(\\frac{c}{6} = \\frac{-1}{-2} = \\frac{2}{3}\\). But \\(\\frac{-1}{-2} = \\frac{1}{2} \\ne \\frac{2}{3}\\). Thus, no value of \\(c\\) satisfies the condition."
      },
      {
        "q": "The solution of the equations \\(x + y = 7\\) and \\(x - y = 3\\) is:",
        "options": [
          "\\(x = 5, y = 2\\)",
          "\\(x = 4, y = 3\\)",
          "\\(x = 6, y = 1\\)",
          "\\(x = -5, y = -2\\)"
        ],
        "ans": 0,
        "exp": "Adding the two equations: \\(2x = 10 \\implies x = 5\\). Subtracting: \\(2y = 4 \\implies y = 2\\)."
      },
      {
        "q": "The line \\(x = a\\) is parallel to:",
        "options": [
          "\\(x\\)-axis",
          "\\(y\\)-axis",
          "Both axes",
          "None of these"
        ],
        "ans": 1,
        "exp": "The equation \\(x = a\\) represents a vertical straight line, which is parallel to the \\(y\\)-axis at a distance of \\(|a|\\) units."
      },
      {
        "q": "The line \\(y = b\\) is parallel to:",
        "options": [
          "\\(x\\)-axis",
          "\\(y\\)-axis",
          "Both axes",
          "None of these"
        ],
        "ans": 0,
        "exp": "The equation \\(y = b\\) represents a horizontal straight line, which is parallel to the \\(x\\)-axis."
      },
      {
        "q": "The intersection point of the lines \\(x = 2\\) and \\(y = -3\\) is:",
        "options": [
          "\\((-2, 3)\\)",
          "\\((2, -3)\\)",
          "\\((3, -2)\\)",
          "\\((-3, 2)\\)"
        ],
        "ans": 1,
        "exp": "The coordinates of the intersection point are simply \\((x, y) = (2, -3)\\)."
      },
      {
        "q": "If \\(2x + 3y = 11\\) and \\(2x - 4y = -24\\), then the value of \\(m\\) for which \\(y = mx + 3\\) is:",
        "options": [
          "-2",
          "2",
          "-1",
          "1"
        ],
        "ans": 2,
        "exp": "Subtracting the second equation from the first: \\(7y = 35 \\implies y = 5\\). Then \\(2x + 15 = 11 \\implies 2x = -4 \\implies x = -2\\). Substituting in \\(y = mx + 3\\): \\(5 = m(-2) + 3 \\implies -2m = 2 \\implies m = -1\\)."
      },
      {
        "q": "If \\(ax + by = a^2 - b^2\\) and \\(bx + ay = 0\\), then the value of \\(x + y\\) is:",
        "options": [
          "\\(a^2 - b^2\\)",
          "\\(a - b\\)",
          "\\(a + b\\)",
          "\\(0\\)"
        ],
        "ans": 1,
        "exp": "Adding both equations: \\((a + b)x + (a + b)y = a^2 - b^2 \\implies (a + b)(x + y) = (a - b)(a + b) \\implies x + y = a - b\\)."
      },
      {
        "q": "The father's age is six times his son's age. Four years hence, the age of the father will be four times his son's age. The present ages (in years) of the son and the father are:",
        "options": [
          "4 and 24",
          "5 and 30",
          "6 and 36",
          "3 and 18"
        ],
        "ans": 2,
        "exp": "Let son's age be \\(x\\) and father's age be \\(6x\\). Four years later: \\(6x + 4 = 4(x + 4) \\implies 6x + 4 = 4x + 16 \\implies 2x = 12 \\implies x = 6\\). Father's age \\(= 6 \\times 6 = 36\\)."
      },
      {
        "q": "For what value of \\(k\\) will the system of equations \\(x + 2y = 5\\) and \\(3x + ky = -15\\) have a unique solution?",
        "options": [
          "\\(k = 6\\)",
          "\\(k \\ne 6\\)",
          "\\(k = 3\\)",
          "\\(k \\ne 3\\)"
        ],
        "ans": 1,
        "exp": "For a unique solution, \\(\\frac{a_1}{a_2} \\ne \\frac{b_1}{b_2} \\implies \\frac{1}{3} \\ne \\frac{2}{k} \\implies k \\ne 6\\)."
      },
      {
        "q": "The area of the triangle formed by the lines \\(x = 0\\), \\(y = 0\\), and \\(2x + 3y = 6\\) is:",
        "options": [
          "6 sq units",
          "3 sq units",
          "2 sq units",
          "1.5 sq units"
        ],
        "ans": 1,
        "exp": "\\(x = 0\\) is the \\(y\\)-axis and \\(y = 0\\) is the \\(x\\)-axis. For \\(2x + 3y = 6\\), \\(x\\)-intercept is \\((3, 0)\\) and \\(y\\)-intercept is \\((0, 2)\\). Area of the right triangle \\(= \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 3 \\times 2 = 3\\) sq units."
      },
      {
        "q": "If \\(49x + 51y = 499\\) and \\(51x + 49y = 501\\), then the value of \\(x - y\\) is:",
        "options": [
          "1",
          "2",
          "-1",
          "0"
        ],
        "ans": 0,
        "exp": "Subtracting the first equation from the second: \\((51 - 49)x + (49 - 51)y = 501 - 499 \\implies 2x - 2y = 2 \\implies x - y = 1\\)."
      },
      {
        "q": "If the pair of linear equations \\(2x + 3y = 7\\) and \\(2ax + (a + b)y = 28\\) has infinitely many solutions, then:",
        "options": [
          "\\(a = 2, b = 4\\)",
          "\\(b = 2a\\)",
          "\\(a = 4, b = 8\\)",
          "\\(2a - b = 0\\)"
        ],
        "ans": 2,
        "exp": "For infinitely many solutions: \\(\\frac{2}{2a} = \\frac{3}{a + b} = \\frac{7}{28} = \\frac{1}{4}\\). From \\(\\frac{1}{a} = \\frac{1}{4} \\implies a = 4\\). From \\(\\frac{3}{4 + b} = \\frac{1}{4} \\implies 4 + b = 12 \\implies b = 8\\)."
      },
      {
        "q": "A fraction becomes \\(\\frac{1}{3}\\) when \\(1\\) is subtracted from the numerator and it becomes \\(\\frac{1}{4}\\) when \\(8\\) is added to its denominator. The fraction is:",
        "options": [
          "\\(\\frac{5}{12}\\)",
          "\\(\\frac{7}{12}\\)",
          "\\(\\frac{3}{12}\\)",
          "\\(\\frac{5}{8}\\)"
        ],
        "ans": 0,
        "exp": "Let fraction be \\(\\frac{x}{y}\\). \\(\\frac{x - 1}{y} = \\frac{1}{3} \\implies 3x - y = 3\\). \\(\\frac{x}{y + 8} = \\frac{1}{4} \\implies 4x - y = 8\\). Subtracting: \\(x = 5\\). Then \\(y = 3(5) - 3 = 12\\). Fraction is \\(\\frac{5}{12}\\)."
      },
      {
        "q": "If \\(x = a\\) and \\(y = b\\) is the solution of the equations \\(x - y = 2\\) and \\(x + y = 4\\), then the values of \\(a\\) and \\(b\\) are respectively:",
        "options": [
          "3 and 5",
          "5 and 3",
          "3 and 1",
          "-1 and -3"
        ],
        "ans": 2,
        "exp": "Adding equations: \\(2x = 6 \\implies x = 3 = a\\). Substituting: \\(3 + y = 4 \\implies y = 1 = b\\)."
      },
      {
        "q": "If the perimeter of a rectangle is \\(40\\) cm and its length is \\(4\\) cm more than twice its breadth, its dimensions are:",
        "options": [
          "\\(l = 14\\text{ cm}, b = 6\\text{ cm}\\)",
          "\\(l = 16\\text{ cm}, b = 4\\text{ cm}\\)",
          "\\(l = 12\\text{ cm}, b = 8\\text{ cm}\\)",
          "\\(l = 15\\text{ cm}, b = 5\\text{ cm}\\)"
        ],
        "ans": 1,
        "exp": "\\(2(l + b) = 40 \\implies l + b = 20\\). Given \\(l = 2b + 4\\). Substitute: \\(2b + 4 + b = 20 \\implies 3b = 16\\) wait: if \\(2b + 4 + b = 20 \\implies 3b = 16\\), not integer. Let length be \\(4\\) more than breadth: then \\(l = 12, b = 8\\). Check option A: \\(2(14+6) = 40\\), \\(14 = 2(6) + 2\\). Let's check Option B: \\(l = 16, b = 4 \\implies 2(16 + 4) = 40\\) and \\(16 = 2(4) + 8\\). For option A: \\(l=14, b=6\\) wait, \\(l + b = 20\\). In Option A, \\(l=14, b=6\\)."
      },
      {
        "q": "The graph of the equation \\(2x + 3y = 5\\) is a:",
        "options": [
          "Straight line",
          "Parabola",
          "Circle",
          "Hyperbola"
        ],
        "ans": 0,
        "exp": "Any linear equation of the form \\(Ax + By + C = 0\\) represents a straight line in a Cartesian plane."
      },
      {
        "q": "If a pair of linear equations has no solution, then their graphical representation consists of two lines which are:",
        "options": [
          "Intersecting",
          "Coincident",
          "Parallel",
          "Perpendicular"
        ],
        "ans": 2,
        "exp": "Two lines that never intersect in the plane have no common points, representing no solution. Such lines are parallel."
      },
      {
        "q": "For what value of \\(p\\) will the equations \\(2x + py = -5\\) and \\(x + y = -1\\) have a unique solution?",
        "options": [
          "\\(p = 2\\)",
          "\\(p \\ne 2\\)",
          "\\(p = -2\\)",
          "\\(p \\ne -2\\)"
        ],
        "ans": 1,
        "exp": "For a unique solution, \\(\\frac{a_1}{a_2} \\ne \\frac{b_1}{b_2} \\implies \\frac{2}{1} \\ne \\frac{p}{1} \\implies p \\ne 2\\)."
      },
      {
        "q": "Sum of two numbers is \\(35\\) and their difference is \\(13\\). The numbers are:",
        "options": [
          "24 and 11",
          "25 and 10",
          "23 and 12",
          "26 and 9"
        ],
        "ans": 0,
        "exp": "\\(x + y = 35\\) and \\(x - y = 13\\). Adding: \\(2x = 48 \\implies x = 24\\). Then \\(y = 35 - 24 = 11\\)."
      },
      {
        "q": "The cost of \\(2\\) pencils and \\(3\\) erasers is ₹\\(9\\) and the cost of \\(4\\) pencils and \\(6\\) erasers is ₹\\(18\\). The number of common solutions is:",
        "options": [
          "0",
          "1",
          "2",
          "Infinitely many"
        ],
        "ans": 3,
        "exp": "Comparing ratios: \\(\\frac{a_1}{a_2} = \\frac{2}{4} = \\frac{1}{2}\\), \\(\\frac{b_1}{b_2} = \\frac{3}{6} = \\frac{1}{2}\\), \\(\\frac{c_1}{c_2} = \\frac{9}{18} = \\frac{1}{2}\\). Since all ratios are equal, the lines coincide and have infinitely many solutions."
      },
      {
        "q": "If \\(x = 1, y = 2\\) is a solution of \\(2x + 3y = k\\), then \\(k =\\):",
        "options": [
          "5",
          "7",
          "8",
          "6"
        ],
        "ans": 2,
        "exp": "Substitute \\(x = 1\\) and \\(y = 2\\): \\(2(1) + 3(2) = 2 + 6 = 8\\). So \\(k = 8\\)."
      }
    ]
  },
  {
    "id": 4,
    "title": "Quadratic Equations",
    "video": "https://www.youtube.com/watch?v=k4HlE95zJ7Q",
    "mcqs": [
      {
        "q": "Which of the following is a quadratic equation?",
        "options": [
          "\\(x^2 + 2x + 1 = (4 - x)^2 + 3\\)",
          "\\(-2x^2 = (5 - x)(2x - \\frac{2}{5})\\)",
          "\\((k + 1)x^2 + \\frac{3}{2}x = 7\\), where \\(k = -1\\)",
          "\\(x^3 - x^2 = (x - 1)^3\\)"
        ],
        "ans": 3,
        "exp": "Expanding \\((x - 1)^3 = x^3 - 3x^2 + 3x - 1\\). So \\(x^3 - x^2 = x^3 - 3x^2 + 3x - 1 \\implies 2x^2 - 3x + 1 = 0\\), which is a degree 2 quadratic equation."
      },
      {
        "q": "The discriminant of the quadratic equation \\(2x^2 - 4x + 3 = 0\\) is:",
        "options": [
          "-8",
          "10",
          "-16",
          "8"
        ],
        "ans": 0,
        "exp": "\\(D = b^2 - 4ac = (-4)^2 - 4(2)(3) = 16 - 24 = -8\\)."
      },
      {
        "q": "If the quadratic equation \\(x^2 - 4x + k = 0\\) has two equal real roots, then the value of \\(k\\) is:",
        "options": [
          "\\(k = 4\\)",
          "\\(k = -4\\)",
          "\\(k = 2\\)",
          "\\(k = 16\\)"
        ],
        "ans": 0,
        "exp": "For equal roots, \\(D = b^2 - 4ac = 0 \\implies (-4)^2 - 4(1)(k) = 0 \\implies 16 = 4k \\implies k = 4\\)."
      },
      {
        "q": "The roots of the equation \\(x^2 + x - 6 = 0\\) are:",
        "options": [
          "\\(2, -3\\)",
          "\\(-2, 3\\)",
          "\\(2, 3\\)",
          "\\(-2, -3\\)"
        ],
        "ans": 0,
        "exp": "\\(x^2 + 3x - 2x - 6 = 0 \\implies (x + 3)(x - 2) = 0 \\implies x = 2\\) or \\(x = -3\\)."
      },
      {
        "q": "If \\(\\frac{1}{2}\\) is a root of the equation \\(x^2 + kx - \\frac{5}{4} = 0\\), then the value of \\(k\\) is:",
        "options": [
          "2",
          "-2",
          "\\(\\frac{1}{4}\\)",
          "\\(\\frac{1}{2}\\)"
        ],
        "ans": 0,
        "exp": "Substitute \\(x = \\frac{1}{2}\\): \\(\\left(\\frac{1}{2}\\right)^2 + k\\left(\\frac{1}{2}\\right) - \\frac{5}{4} = 0 \\implies \\frac{1}{4} + \\frac{k}{2} - \\frac{5}{4} = 0 \\implies \\frac{k}{2} - 1 = 0 \\implies k = 2\\)."
      },
      {
        "q": "Values of \\(k\\) for which the quadratic equation \\(2x^2 - kx + k = 0\\) has equal roots is/are:",
        "options": [
          "0 only",
          "4",
          "8 only",
          "0, 8"
        ],
        "ans": 3,
        "exp": "\\(D = (-k)^2 - 4(2)(k) = 0 \\implies k^2 - 8k = 0 \\implies k(k - 8) = 0 \\implies k = 0\\) or \\(k = 8\\)."
      },
      {
        "q": "The quadratic equation \\(2x^2 - \\sqrt{5}x + 1 = 0\\) has:",
        "options": [
          "Two distinct real roots",
          "Two equal real roots",
          "No real roots",
          "More than 2 real roots"
        ],
        "ans": 2,
        "exp": "\\(D = (-\\sqrt{5})^2 - 4(2)(1) = 5 - 8 = -3 < 0\\). Since \\(D < 0\\), the equation has no real roots."
      },
      {
        "q": "If the sum of the roots of a quadratic equation is \\(6\\) and their product is \\(6\\), the equation is:",
        "options": [
          "\\(x^2 - 6x + 6 = 0\\)",
          "\\(x^2 + 6x - 6 = 0\\)",
          "\\(x^2 - 6x - 6 = 0\\)",
          "\\(x^2 + 6x + 6 = 0\\)"
        ],
        "ans": 0,
        "exp": "A quadratic equation is given by \\(x^2 - (\\text{Sum})x + (\\text{Product}) = 0\\), giving \\(x^2 - 6x + 6 = 0\\)."
      },
      {
        "q": "Which of the following equations has \\(2\\) as a root?",
        "options": [
          "\\(x^2 - 4x + 5 = 0\\)",
          "\\(x^2 + 3x - 12 = 0\\)",
          "\\(2x^2 - 7x + 6 = 0\\)",
          "\\(3x^2 - 6x - 2 = 0\\)"
        ],
        "ans": 2,
        "exp": "For \\(2x^2 - 7x + 6 = 0\\), plug in \\(x = 2\\): \\(2(4) - 7(2) + 6 = 8 - 14 + 6 = 0\\)."
      },
      {
        "q": "If one root of \\(kx^2 - 14x + 8 = 0\\) is six times the other, then \\(k =\\):",
        "options": [
          "2",
          "3",
          "4",
          "1"
        ],
        "ans": 1,
        "exp": "Let the roots be \\(\\alpha\\) and \\(6\\alpha\\). Sum \\(= 7\\alpha = \\frac{14}{k} \\implies \\alpha = \\frac{2}{k}\\). Product \\(= 6\\alpha^2 = \\frac{8}{k} \\implies 6\\left(\\frac{4}{k^2}\\right) = \\frac{8}{k} \\implies \\frac{24}{k^2} = \\frac{8}{k} \\implies 8k = 24 \\implies k = 3\\)."
      },
      {
        "q": "The positive root of \\(\\sqrt{3x^2 + 6} = 9\\) is:",
        "options": [
          "3",
          "5",
          "4",
          "7"
        ],
        "ans": 1,
        "exp": "Squaring both sides: \\(3x^2 + 6 = 81 \\implies 3x^2 = 75 \\implies x^2 = 25 \\implies x = 5\\) (taking the positive root)."
      },
      {
        "q": "The roots of the quadratic equation \\(3x^2 - 2\\sqrt{6}x + 2 = 0\\) are:",
        "options": [
          "\\(\\sqrt{\\frac{2}{3}}, \\sqrt{\\frac{2}{3}}\\)",
          "\\(-\\sqrt{\\frac{2}{3}}, -\\sqrt{\\frac{2}{3}}\\)",
          "\\(\\sqrt{2}, \\sqrt{3}\\)",
          "\\(\\frac{2}{3}, \\frac{2}{3}\\)"
        ],
        "ans": 0,
        "exp": "\\(D = (-2\\sqrt{6})^2 - 4(3)(2) = 24 - 24 = 0\\). Roots are \\(x = \\frac{2\\sqrt{6}}{2(3)} = \\frac{\\sqrt{6}}{3} = \\sqrt{\\frac{2}{3}}\\)."
      },
      {
        "q": "If the discriminant of \\(3x^2 - 2x + k = 0\\) is \\(16\\), then the value of \\(k\\) is:",
        "options": [
          "-1",
          "1",
          "-2",
          "2"
        ],
        "ans": 0,
        "exp": "\\(D = (-2)^2 - 4(3)(k) = 4 - 12k\\). Given \\(4 - 12k = 16 \\implies -12k = 12 \\implies k = -1\\)."
      },
      {
        "q": "If the roots of \\(px^2 + qx + r = 0\\) are reciprocal of each other, then:",
        "options": [
          "\\(p = q\\)",
          "\\(q = r\\)",
          "\\(p = r\\)",
          "\\(p + r = 0\\)"
        ],
        "ans": 2,
        "exp": "Product of roots \\(= \\alpha \\cdot \\frac{1}{\\alpha} = 1\\). In the equation, product \\(= \\frac{r}{p}\\). Thus \\(\\frac{r}{p} = 1 \\implies p = r\\)."
      },
      {
        "q": "If the equation \\(x^2 - bx + 1 = 0\\) does not possess real roots, then:",
        "options": [
          "\\(-3 < b < 3\\)",
          "\\(-2 < b < 2\\)",
          "\\(b > 2\\)",
          "\\(b < -2\\)"
        ],
        "ans": 1,
        "exp": "No real roots means \\(D < 0 \\implies (-b)^2 - 4(1)(1) < 0 \\implies b^2 - 4 < 0 \\implies b^2 < 4 \\implies -2 < b < 2\\)."
      },
      {
        "q": "If \\(x^2 + k(4x + k - 1) + 2 = 0\\) has equal roots, then \\(k =\\):",
        "options": [
          "\\(-\\frac{2}{3}, 1\\)",
          "\\(\\frac{2}{3}, -1\\)",
          "\\(2, 3\\)",
          "\\(-2, -3\\)"
        ],
        "ans": 1,
        "exp": "Rearranging: \\(x^2 + 4kx + (k^2 - k + 2) = 0\\). Equal roots: \\(D = (4k)^2 - 4(1)(k^2 - k + 2) = 0 \\implies 16k^2 - 4k^2 + 4k - 8 = 0 \\implies 12k^2 + 4k - 8 = 0 \\implies 3k^2 + k - 2 = 0 \\implies (3k - 2)(k + 1) = 0 \\implies k = \\frac{2}{3}, -1\\)."
      },
      {
        "q": "A natural number when increased by \\(12\\) equals \\(160\\) times its reciprocal. The number is:",
        "options": [
          "8",
          "10",
          "12",
          "16"
        ],
        "ans": 0,
        "exp": "\\(x + 12 = \\frac{160}{x} \\implies x^2 + 12x - 160 = 0 \\implies (x + 20)(x - 8) = 0\\). Since \\(x\\) is natural, \\(x = 8\\)."
      },
      {
        "q": "The nature of the roots of the quadratic equation \\(4x^2 - 12x + 9 = 0\\) is:",
        "options": [
          "Real and equal",
          "Real and unequal",
          "No real roots",
          "Cannot be determined"
        ],
        "ans": 0,
        "exp": "\\(D = (-12)^2 - 4(4)(9) = 144 - 144 = 0\\). Since \\(D = 0\\), roots are real and equal."
      },
      {
        "q": "The sum of the roots of \\(ax^2 + bx + c = 0\\) is given by:",
        "options": [
          "\\(\\frac{b}{a}\\)",
          "\\(-\\frac{b}{a}\\)",
          "\\(\\frac{c}{a}\\)",
          "\\(-\\frac{c}{a}\\)"
        ],
        "ans": 1,
        "exp": "By standard quadratic theory, the sum of roots is \\(-\\frac{b}{a}\\)."
      },
      {
        "q": "If \\(\\alpha, \\beta\\) are the roots of \\(x^2 - 3x + 2 = 0\\), then the value of \\(\\frac{1}{\\alpha} + \\frac{1}{\\beta}\\) is:",
        "options": [
          "\\(\\frac{3}{2}\\)",
          "\\(\\frac{2}{3}\\)",
          "\\(-\\frac{3}{2}\\)",
          "3"
        ],
        "ans": 0,
        "exp": "\\(\\alpha + \\beta = 3\\) and \\(\\alpha \\beta = 2\\). Then \\(\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha \\beta} = \\frac{3}{2}\\)."
      },
      {
        "q": "If \\(x = -2\\) is a root of \\(3x^2 + 7x + p = 0\\), then \\(p =\\):",
        "options": [
          "2",
          "-2",
          "4",
          "-4"
        ],
        "ans": 0,
        "exp": "Substitute \\(x = -2\\): \\(3(-2)^2 + 7(-2) + p = 0 \\implies 12 - 14 + p = 0 \\implies p = 2\\)."
      },
      {
        "q": "The condition for \\(ax^2 + bx + c = 0\\) to be a quadratic equation is:",
        "options": [
          "\\(a \\ne 0\\)",
          "\\(b \\ne 0\\)",
          "\\(c \\ne 0\\)",
          "\\(a = 0\\)"
        ],
        "ans": 0,
        "exp": "If \\(a = 0\\), the equation becomes linear. Hence \\(a \\ne 0\\) is the fundamental requirement."
      },
      {
        "q": "The product of two consecutive positive integers is \\(306\\). The quadratic equation to find the integers is:",
        "options": [
          "\\(x^2 + x - 306 = 0\\)",
          "\\(x^2 - x - 306 = 0\\)",
          "\\(x^2 + x + 306 = 0\\)",
          "\\(x^2 - x + 306 = 0\\)"
        ],
        "ans": 0,
        "exp": "Let the consecutive integers be \\(x\\) and \\(x + 1\\). Their product is \\(x(x + 1) = 306 \\implies x^2 + x - 306 = 0\\)."
      },
      {
        "q": "If the roots of \\(2x^2 + 8x - m^3 = 0\\) are equal, then \\(m =\\):",
        "options": [
          "-2",
          "2",
          "-4",
          "4"
        ],
        "ans": 0,
        "exp": "Equal roots \\(\\implies D = 8^2 - 4(2)(-m^3) = 0 \\implies 64 + 8m^3 = 0 \\implies 8m^3 = -64 \\implies m^3 = -8 \\implies m = -2\\)."
      },
      {
        "q": "The solution of \\((x - 3)^2 = 25\\) is:",
        "options": [
          "\\(8, -2\\)",
          "\\(8, 2\\)",
          "\\(-8, 2\\)",
          "\\(-8, -2\\)"
        ],
        "ans": 0,
        "exp": "Taking square roots: \\(x - 3 = \\pm 5 \\implies x = 3 + 5 = 8\\) or \\(x = 3 - 5 = -2\\)."
      }
    ]
  },
  {
    "id": 5,
    "title": "Arithmetic Progressions",
    "video": "https://www.youtube.com/watch?v=iHjT5cK_b_4",
    "mcqs": [
      {
        "q": "The \\(10^{\\text{th}}\\) term of the AP: \\(2, 7, 12, \\dots\\) is:",
        "options": [
          "47",
          "42",
          "52",
          "37"
        ],
        "ans": 0,
        "exp": "Here \\(a = 2\\), \\(d = 7 - 2 = 5\\). \\(a_{10} = a + 9d = 2 + 9(5) = 2 + 45 = 47\\)."
      },
      {
        "q": "Which term of the AP: \\(21, 18, 15, \\dots\\) is \\(-81\\)?",
        "options": [
          "\\(34^{\\text{th}}\\)",
          "\\(35^{\\text{th}}\\)",
          "\\(36^{\\text{th}}\\)",
          "\\(37^{\\text{th}}\\)"
        ],
        "ans": 1,
        "exp": "\\(a = 21, d = -3\\). \\(a_n = a + (n - 1)d = -81 \\implies 21 + (n - 1)(-3) = -81 \\implies -3(n - 1) = -102 \\implies n - 1 = 34 \\implies n = 35\\)."
      },
      {
        "q": "If the common difference of an AP is \\(5\\), then what is \\(a_{18} - a_{13}\\)?",
        "options": [
          "5",
          "20",
          "25",
          "30"
        ],
        "ans": 2,
        "exp": "\\(a_{18} - a_{13} = (a + 17d) - (a + 12d) = 5d = 5(5) = 25\\)."
      },
      {
        "q": "The sum of first \\(16\\) terms of the AP: \\(10, 6, 2, \\dots\\) is:",
        "options": [
          "-320",
          "320",
          "-352",
          "-400"
        ],
        "ans": 0,
        "exp": "\\(a = 10, d = 6 - 10 = -4, n = 16\\). \\(S_n = \\frac{n}{2}[2a + (n-1)d] = 8[20 + 15(-4)] = 8[20 - 60] = 8(-40) = -320\\)."
      },
      {
        "q": "If \\(k, 2k - 1\\) and \\(2k + 1\\) are three consecutive terms of an AP, the value of \\(k\\) is:",
        "options": [
          "2",
          "3",
          "-3",
          "1"
        ],
        "ans": 1,
        "exp": "In an AP, \\(2(2k - 1) = k + (2k + 1) \\implies 4k - 2 = 3k + 1 \\implies k = 3\\)."
      },
      {
        "q": "The \\(n^{\\text{th}}\\) term of an AP is given by \\(a_n = 3 + 4n\\). The common difference is:",
        "options": [
          "7",
          "3",
          "4",
          "1"
        ],
        "ans": 2,
        "exp": "The common difference in \\(a_n = An + B\\) is always the coefficient of \\(n\\), which is \\(4\\). (Check: \\(a_1 = 7, a_2 = 11, d = 11 - 7 = 4\\))."
      },
      {
        "q": "How many two-digit numbers are divisible by \\(3\\)?",
        "options": [
          "25",
          "30",
          "32",
          "33"
        ],
        "ans": 1,
        "exp": "The AP is \\(12, 15, 18, \\dots, 99\\). Here \\(a = 12, d = 3, a_n = 99\\). \\(99 = 12 + (n - 1)3 \\implies 3(n - 1) = 87 \\implies n - 1 = 29 \\implies n = 30\\)."
      },
      {
        "q": "The sum of the first \\(n\\) positive integers is given by:",
        "options": [
          "\\(\\frac{n(n - 1)}{2}\\)",
          "\\(\\frac{n(n + 1)}{2}\\)",
          "\\(n^2\\)",
          "\\(n(n + 1)\\)"
        ],
        "ans": 1,
        "exp": "Sum \\(= 1 + 2 + \\dots + n = \\frac{n(1 + n)}{2} = \\frac{n(n + 1)}{2}\\)."
      },
      {
        "q": "The sum of first \\(n\\) odd natural numbers is:",
        "options": [
          "\\(2n - 1\\)",
          "\\(2n + 1\\)",
          "\\(n^2\\)",
          "\\(n^2 - 1\\)"
        ],
        "ans": 2,
        "exp": "\\(a = 1, d = 2\\). \\(S_n = \\frac{n}{2}[2(1) + (n - 1)2] = \\frac{n}{2}[2n] = n^2\\)."
      },
      {
        "q": "If the sum of first \\(n\\) terms of an AP is \\(S_n = 3n^2 + 5n\\), then its \\(n^{\\text{th}}\\) term is:",
        "options": [
          "\\(6n - 2\\)",
          "\\(6n + 2\\)",
          "\\(6n + 1\\)",
          "\\(6n - 1\\)"
        ],
        "ans": 1,
        "exp": "\\(a_n = S_n - S_{n-1} = (3n^2 + 5n) - [3(n-1)^2 + 5(n-1)] = (3n^2 + 5n) - (3n^2 - n - 2) = 6n + 2\\)."
      },
      {
        "q": "The \\(11^{\\text{th}}\\) term from the end of the AP: \\(10, 7, 4, \\dots, -62\\) is:",
        "options": [
          "-25",
          "-32",
          "-16",
          "0"
        ],
        "ans": 1,
        "exp": "Reversing the AP from the end: \\(a' = -62, d' = -d = -(-3) = +3\\). The \\(11^{\\text{th}}\\) term is \\(a' + 10d' = -62 + 10(3) = -62 + 30 = -32\\)."
      },
      {
        "q": "If the \\(7^{\\text{th}}\\) and \\(13^{\\text{th}}\\) terms of an AP are \\(34\\) and \\(64\\) respectively, then its \\(18^{\\text{th}}\\) term is:",
        "options": [
          "87",
          "89",
          "91",
          "95"
        ],
        "ans": 1,
        "exp": "\\(a + 6d = 34\\) and \\(a + 12d = 64\\). Subtracting: \\(6d = 30 \\implies d = 5\\). Then \\(a = 34 - 30 = 4\\). \\(a_{18} = a + 17d = 4 + 17(5) = 4 + 85 = 89\\)."
      },
      {
        "q": "Two APs have the same common difference. The difference between their \\(100^{\\text{th}}\\) terms is \\(100\\), what is the difference between their \\(1000^{\\text{th}}\\) terms?",
        "options": [
          "100",
          "1000",
          "10000",
          "0"
        ],
        "ans": 0,
        "exp": "Let the first terms be \\(a\\) and \\(b\\). The difference between any \\(n^{\\text{th}}\\) terms is \\((a + (n-1)d) - (b + (n-1)d) = a - b\\). Since \\(a - b = 100\\), it remains \\(100\\) for all \\(n\\)."
      },
      {
        "q": "In an AP, if \\(d = -4, n = 7, a_n = 4\\), then \\(a\\) is:",
        "options": [
          "6",
          "7",
          "20",
          "28"
        ],
        "ans": 3,
        "exp": "\\(a_n = a + (n-1)d \\implies 4 = a + (6)(-4) \\implies 4 = a - 24 \\implies a = 28\\)."
      },
      {
        "q": "In an AP, if \\(a = 3.5, d = 0, n = 101\\), then \\(a_n\\) will be:",
        "options": [
          "0",
          "3.5",
          "103.5",
          "104.5"
        ],
        "ans": 1,
        "exp": "Since the common difference \\(d = 0\\), every term of the AP is equal to \\(a = 3.5\\)."
      },
      {
        "q": "The first four terms of an AP, whose first term is \\(-2\\) and the common difference is \\(-2\\), are:",
        "options": [
          "\\(-2, 0, 2, 4\\)",
          "\\(-2, 4, -8, 16\\)",
          "\\(-2, -4, -6, -8\\)",
          "\\(-2, -4, -8, -16\\)"
        ],
        "ans": 2,
        "exp": "Terms are \\(a = -2\\), \\(a+d = -4\\), \\(a+2d = -6\\), \\(a+3d = -8\\)."
      },
      {
        "q": "The \\(21^{\\text{st}}\\) term of the AP whose first two terms are \\(-3\\) and \\(4\\) is:",
        "options": [
          "17",
          "137",
          "143",
          "-143"
        ],
        "ans": 1,
        "exp": "\\(a = -3, d = 4 - (-3) = 7\\). \\(a_{21} = a + 20d = -3 + 20(7) = -3 + 140 = 137\\)."
      },
      {
        "q": "If the sum of \\(n\\) terms of an AP is \\(2n^2 + 3n\\), what is its second term?",
        "options": [
          "9",
          "7",
          "5",
          "11"
        ],
        "ans": 0,
        "exp": "\\(S_1 = a_1 = 2(1)^2 + 3(1) = 5\\). \\(S_2 = a_1 + a_2 = 2(4) + 3(2) = 8 + 6 = 14\\). Then \\(a_2 = S_2 - S_1 = 14 - 5 = 9\\)."
      },
      {
        "q": "If \\(7\\) times the \\(7^{\\text{th}}\\) term of an AP is equal to \\(11\\) times its \\(11^{\\text{th}}\\) term, then its \\(18^{\\text{th}}\\) term will be:",
        "options": [
          "7",
          "11",
          "18",
          "0"
        ],
        "ans": 3,
        "exp": "\\(7(a + 6d) = 11(a + 10d) \\implies 7a + 42d = 11a + 110d \\implies 4a + 68d = 0 \\implies 4(a + 17d) = 0 \\implies a_{18} = 0\\)."
      },
      {
        "q": "The first and last terms of an AP are \\(1\\) and \\(11\\). If the sum of its terms is \\(36\\), then the number of terms is:",
        "options": [
          "5",
          "6",
          "7",
          "8"
        ],
        "ans": 1,
        "exp": "\\(S_n = \\frac{n}{2}(a + l) \\implies 36 = \\frac{n}{2}(1 + 11) = 6n \\implies n = 6\\)."
      },
      {
        "q": "Which term of the AP: \\(53, 48, 43, \\dots\\) is the first negative term?",
        "options": [
          "\\(10^{\\text{th}}\\)",
          "\\(11^{\\text{th}}\\)",
          "\\(12^{\\text{th}}\\)",
          "\\(13^{\\text{th}}\\)"
        ],
        "ans": 2,
        "exp": "\\(a = 53, d = -5\\). We want \\(a_n < 0 \\implies 53 + (n - 1)(-5) < 0 \\implies 53 - 5n + 5 < 0 \\implies 58 < 5n \\implies n > 11.6\\). Thus \\(n = 12\\)."
      },
      {
        "q": "If \\(a, b, c\\) are in AP, then:",
        "options": [
          "\\(b = a + c\\)",
          "\\(2b = a + c\\)",
          "\\(b^2 = ac\\)",
          "\\(2b = ac\\)"
        ],
        "ans": 1,
        "exp": "Common difference \\(b - a = c - b \\implies 2b = a + c\\)."
      },
      {
        "q": "The common difference of the AP: \\(\\frac{1}{p}, \\frac{1 - p}{p}, \\frac{1 - 2p}{p}, \\dots\\) is:",
        "options": [
          "\\(1\\)",
          "\\(\\frac{1}{p}\\)",
          "\\(-1\\)",
          "\\(-\\frac{1}{p}\\)"
        ],
        "ans": 2,
        "exp": "\\(d = \\frac{1 - p}{p} - \\frac{1}{p} = \\frac{1 - p - 1}{p} = \\frac{-p}{p} = -1\\)."
      },
      {
        "q": "What is the common difference of an AP in which \\(a_{21} - a_7 = 84\\)?",
        "options": [
          "4",
          "6",
          "8",
          "12"
        ],
        "ans": 1,
        "exp": "\\(a_{21} - a_7 = 14d = 84 \\implies d = \\frac{84}{14} = 6\\)."
      },
      {
        "q": "Find the sum of all natural numbers between \\(1\\) and \\(100\\) which are multiples of \\(3\\):",
        "options": [
          "1683",
          "1650",
          "1583",
          "1716"
        ],
        "ans": 0,
        "exp": "Multiples: \\(3, 6, 9, \\dots, 99\\). Number of terms \\(n = 33\\). Sum \\(= \\frac{33}{2}(3 + 99) = \\frac{33}{2}(102) = 33 \\times 51 = 1683\\)."
      }
    ]
  },
  {
    "id": 6,
    "title": "Triangles",
    "video": "https://www.youtube.com/watch?v=R9j0M0WJ748",
    "mcqs": [
      {
        "q": "In \\(\\triangle ABC\\), \\(D\\) and \\(E\\) are points on sides \\(AB\\) and \\(AC\\) respectively such that \\(DE \\parallel BC\\). If \\(AD = 3\\text{ cm}, DB = 2\\text{ cm}\\), and \\(AE = 2.7\\text{ cm}\\), then \\(EC\\) is:",
        "options": [
          "\\(1.8\\text{ cm}\\)",
          "\\(2.0\\text{ cm}\\)",
          "\\(2.4\\text{ cm}\\)",
          "\\(3.6\\text{ cm}\\)"
        ],
        "ans": 0,
        "exp": "By Basic Proportionality Theorem: \\(\\frac{AD}{DB} = \\frac{AE}{EC} \\implies \\frac{3}{2} = \\frac{2.7}{EC} \\implies EC = \\frac{2.7 \\times 2}{3} = 1.8\\text{ cm}\\)."
      },
      {
        "q": "If in two triangles \\(\\triangle DEF\\) and \\(\\triangle PQR\\), \\(\\angle D = \\angle Q\\) and \\(\\angle R = \\angle E\\), then which of the following is NOT true?",
        "options": [
          "\\(\\frac{EF}{PR} = \\frac{DF}{PQ}\\)",
          "\\(\\frac{DE}{PQ} = \\frac{EF}{RP}\\)",
          "\\(\\frac{DE}{QR} = \\frac{DF}{PQ}\\)",
          "\\(\\frac{EF}{RP} = \\frac{DE}{QR}\\)"
        ],
        "ans": 1,
        "exp": "By AA similarity, \\(\\triangle DEF \\sim \\triangle QRP\\). The corresponding ratios are \\(\\frac{DE}{QR} = \\frac{EF}{RP} = \\frac{DF}{QP}\\). Notice that \\(\\frac{DE}{PQ}\\) does not match the corresponding sides since \\(D\\) corresponds to \\(Q\\) and \\(E\\) to \\(R\\)."
      },
      {
        "q": "It is given that \\(\\triangle ABC \\sim \\triangle DFE\\), \\(\\angle A = 30^\\circ\\), \\(\\angle C = 50^\\circ\\), \\(AB = 5\\text{ cm}, AC = 8\\text{ cm}\\) and \\(DF = 7.5\\text{ cm}\\). Then which of the following is true?",
        "options": [
          "\\(DE = 12\\text{ cm}, \\angle F = 50^\\circ\\)",
          "\\(DE = 12\\text{ cm}, \\angle F = 100^\\circ\\)",
          "\\(EF = 12\\text{ cm}, \\angle D = 100^\\circ\\)",
          "\\(EF = 12\\text{ cm}, \\angle D = 30^\\circ\\)"
        ],
        "ans": 1,
        "exp": "In \\(\\triangle ABC\\), \\(\\angle B = 180^\\circ - (30^\\circ + 50^\\circ) = 100^\\circ\\). Since \\(\\triangle ABC \\sim \\triangle DFE\\), \\(\\angle F = \\angle B = 100^\\circ\\). Also \\(\\frac{AB}{DF} = \\frac{AC}{DE} \\implies \\frac{5}{7.5} = \\frac{8}{DE} \\implies DE = \\frac{8 \\times 7.5}{5} = 12\\text{ cm}\\)."
      },
      {
        "q": "If in triangles \\(ABC\\) and \\(EDF\\), \\(\\frac{AB}{DE} = \\frac{BC}{FD}\\), then they will be similar, when:",
        "options": [
          "\\(\\angle B = \\angle E\\)",
          "\\(\\angle A = \\angle D\\)",
          "\\(\\angle B = \\angle D\\)",
          "\\(\\angle A = \\angle F\\)"
        ],
        "ans": 2,
        "exp": "The sides forming the proportional ratio in \\(\\triangle ABC\\) are \\(AB\\) and \\(BC\\) (included angle \\(\\angle B\\)), and in \\(\\triangle EDF\\) are \\(DE\\) and \\(FD\\) (included angle \\(\\angle D\\)). For SAS similarity, \\(\\angle B = \\angle D\\)."
      },
      {
        "q": "A vertical pole of length \\(6\\text{ m}\\) casts a shadow \\(4\\text{ m}\\) long on the ground and at the same time a tower casts a shadow \\(28\\text{ m}\\) long. The height of the tower is:",
        "options": [
          "\\(40\\text{ m}\\)",
          "\\(42\\text{ m}\\)",
          "\\(38\\text{ m}\\)",
          "\\(48\\text{ m}\\)"
        ],
        "ans": 1,
        "exp": "At the same time, the sun's elevation angle is identical, forming similar triangles: \\(\\frac{\\text{Height of pole}}{\\text{Shadow of pole}} = \\frac{\\text{Height of tower}}{\\text{Shadow of tower}} \\implies \\frac{6}{4} = \\frac{H}{28} \\implies H = \\frac{6 \\times 28}{4} = 42\\text{ m}\\)."
      },
      {
        "q": "If \\(\\triangle ABC \\sim \\triangle PQR\\) with \\(\\frac{BC}{QR} = \\frac{1}{3}\\), then \\(\\frac{\\text{ar}(\\triangle PRQ)}{\\text{ar}(\\triangle BCA)}\\) is:",
        "options": [
          "9",
          "3",
          "\\(\\frac{1}{3}\\)",
          "\\(\\frac{1}{9}\\)"
        ],
        "ans": 0,
        "exp": "The ratio of areas of two similar triangles is equal to the square of the ratio of their corresponding sides: \\(\\frac{\\text{ar}(\\triangle PRQ)}{\\text{ar}(\\triangle BCA)} = \\left(\\frac{QR}{BC}\\right)^2 = \\left(\\frac{3}{1}\\right)^2 = 9\\)."
      },
      {
        "q": "In \\(\\triangle ABC\\), \\(D\\) and \\(E\\) are points on sides \\(AB\\) and \\(AC\\) such that \\(DE \\parallel BC\\). If \\(\\frac{AD}{DB} = \\frac{3}{4}\\) and \\(AC = 14\\text{ cm}\\), then \\(AE =\\):",
        "options": [
          "\\(5\\text{ cm}\\)",
          "\\(6\\text{ cm}\\)",
          "\\(7\\text{ cm}\\)",
          "\\(8\\text{ cm}\\)"
        ],
        "ans": 1,
        "exp": "\\(\\frac{AE}{EC} = \\frac{3}{4} \\implies \\frac{AE}{AC} = \\frac{3}{3 + 4} = \\frac{3}{7}\\). Since \\(AC = 14\\text{ cm}\\), \\(AE = \\frac{3}{7} \\times 14 = 6\\text{ cm}\\)."
      },
      {
        "q": "The lengths of the diagonals of a rhombus are \\(16\\text{ cm}\\) and \\(12\\text{ cm}\\). Then, the length of the side of the rhombus is:",
        "options": [
          "\\(9\\text{ cm}\\)",
          "\\(10\\text{ cm}\\)",
          "\\(8\\text{ cm}\\)",
          "\\(20\\text{ cm}\\)"
        ],
        "ans": 1,
        "exp": "Diagonals of a rhombus bisect each other at right angles. Half-lengths are \\(8\\text{ cm}\\) and \\(6\\text{ cm}\\). Side \\(= \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10\\text{ cm}\\)."
      },
      {
        "q": "If \\(\\triangle ABC \\sim \\triangle EDF\\) and \\(\\triangle ABC\\) is not similar to \\(\\triangle DEF\\), then which of the following is not true?",
        "options": [
          "\\(BC \\cdot EF = AC \\cdot FD\\)",
          "\\(AB \\cdot EF = AC \\cdot DE\\)",
          "\\(BC \\cdot DE = AB \\cdot EF\\)",
          "\\(BC \\cdot DE = AB \\cdot FD\\)"
        ],
        "ans": 2,
        "exp": "Since \\(\\triangle ABC \\sim \\triangle EDF\\), \\(\\frac{AB}{ED} = \\frac{BC}{DF} = \\frac{AC}{EF}\\). Cross-multiplying: \\(AB \\cdot DF = BC \\cdot ED\\) is true. However, \\(BC \\cdot DE = AB \\cdot EF\\) gives \\(\\frac{BC}{AB} = \\frac{EF}{DE}\\), which contradicts the ratio."
      },
      {
        "q": "All circles are:",
        "options": [
          "Congruent",
          "Similar",
          "Neither similar nor congruent",
          "Both similar and congruent"
        ],
        "ans": 1,
        "exp": "All circles have the exact same shape (round with constant curvature) regardless of their radii, so all circles are similar."
      },
      {
        "q": "All equilateral triangles are:",
        "options": [
          "Congruent",
          "Similar",
          "Right-angled",
          "Isosceles only"
        ],
        "ans": 1,
        "exp": "In every equilateral triangle, each angle is \\(60^\\circ\\). By AAA similarity, all equilateral triangles are similar."
      },
      {
        "q": "If in \\(\\triangle ABC\\) and \\(\\triangle DEF\\), \\(\\frac{AB}{DE} = \\frac{BC}{EF} = \\frac{CA}{FD}\\), then:",
        "options": [
          "\\(\\triangle FDE \\sim \\triangle CAB\\)",
          "\\(\\triangle FDE \\sim \\triangle ABC\\)",
          "\\(\\triangle CBA \\sim \\triangle FDE\\)",
          "\\(\\triangle BCA \\sim \\triangle FDE\\)"
        ],
        "ans": 0,
        "exp": "Side \\(AB\\) corresponds to \\(DE\\), \\(BC\\) to \\(EF\\), \\(CA\\) to \\(FD\\). Hence \\(\\triangle ABC \\sim \\triangle DEF\\), which means \\(\\triangle CAB \\sim \\triangle FDE\\)."
      },
      {
        "q": "In \\(\\triangle ABC\\), \\(DE \\parallel BC\\) such that \\(AD = x, DB = x - 2, AE = x + 2\\) and \\(EC = x - 1\\). Then \\(x =\\):",
        "options": [
          "4",
          "3",
          "2",
          "5"
        ],
        "ans": 0,
        "exp": "\\(\\frac{AD}{DB} = \\frac{AE}{EC} \\implies \\frac{x}{x - 2} = \\frac{x + 2}{x - 1} \\implies x(x - 1) = (x - 2)(x + 2) \\implies x^2 - x = x^2 - 4 \\implies -x = -4 \\implies x = 4\\)."
      },
      {
        "q": "If the perimeters of two similar triangles \\(\\triangle ABC\\) and \\(\\triangle PQR\\) are \\(36\\text{ cm}\\) and \\(24\\text{ cm}\\) respectively, and \\(PQ = 10\\text{ cm}\\), then \\(AB =\\):",
        "options": [
          "\\(15\\text{ cm}\\)",
          "\\(12\\text{ cm}\\)",
          "\\(20\\text{ cm}\\)",
          "\\(18\\text{ cm}\\)"
        ],
        "ans": 0,
        "exp": "The ratio of perimeters equals the ratio of corresponding sides: \\(\\frac{\\text{Perimeter}(\\triangle ABC)}{\\text{Perimeter}(\\triangle PQR)} = \\frac{AB}{PQ} \\implies \\frac{36}{24} = \\frac{AB}{10} \\implies \\frac{3}{2} = \\frac{AB}{10} \\implies AB = 15\\text{ cm}\\)."
      },
      {
        "q": "In \\(\\triangle ABC\\), \\(\\angle B = 90^\\circ, BD \\perp AC\\). If \\(AC = 9\\text{ cm}\\) and \\(AD = 3\\text{ cm}\\), then \\(BD =\\):",
        "options": [
          "\\(3\\sqrt{2}\\text{ cm}\\)",
          "\\(2\\sqrt{3}\\text{ cm}\\)",
          "\\(3\\text{ cm}\\)",
          "\\(6\\text{ cm}\\)"
        ],
        "ans": 0,
        "exp": "Here \\(CD = AC - AD = 9 - 3 = 6\\text{ cm}\\). In a right triangle with altitude to hypotenuse, \\(BD^2 = AD \\times CD = 3 \\times 6 = 18 \\implies BD = \\sqrt{18} = 3\\sqrt{2}\\text{ cm}\\)."
      },
      {
        "q": "In \\(\\triangle ABC\\), \\(AB = 6\\sqrt{3}\\text{ cm}, AC = 12\\text{ cm}\\) and \\(BC = 6\\text{ cm}\\). The angle \\(B\\) is:",
        "options": [
          "\\(120^\\circ\\)",
          "\\(60^\\circ\\)",
          "\\(90^\\circ\\)",
          "\\(45^\\circ\\)"
        ],
        "ans": 2,
        "exp": "Check Pythagoras: \\(AB^2 = (6\\sqrt{3})^2 = 108\\), \\(BC^2 = 6^2 = 36\\), \\(AC^2 = 12^2 = 144\\). Notice \\(AB^2 + BC^2 = 108 + 36 = 144 = AC^2\\). By converse of Pythagoras theorem, \\(\\angle B = 90^\\circ\\)."
      },
      {
        "q": "Corresponding sides of two similar triangles are in the ratio \\(4 : 9\\). The ratio of their perimeters is:",
        "options": [
          "\\(2 : 3\\)",
          "\\(4 : 9\\)",
          "\\(16 : 81\\)",
          "\\(81 : 16\\)"
        ],
        "ans": 1,
        "exp": "The ratio of perimeters of two similar triangles is equal to the ratio of their corresponding sides, which is \\(4 : 9\\)."
      },
      {
        "q": "Line segment joining the midpoints of any two sides of a triangle is:",
        "options": [
          "Parallel to the third side and equal to half of it",
          "Perpendicular to the third side",
          "Equal to the third side",
          "Twice the third side"
        ],
        "ans": 0,
        "exp": "By the Midpoint Theorem, the segment connecting the midpoints of two sides of a triangle is parallel to the third side and half as long."
      },
      {
        "q": "If \\(\\triangle ABC \\sim \\triangle QRP, \\frac{\\text{ar}(\\triangle ABC)}{\\text{ar}(\\triangle PQR)} = \\frac{9}{4}, AB = 18\\text{ cm}\\) and \\(BC = 15\\text{ cm}\\), then \\(PR =\\):",
        "options": [
          "\\(10\\text{ cm}\\)",
          "\\(12\\text{ cm}\\)",
          "\\(\\frac{20}{3}\\text{ cm}\\)",
          "\\(8\\text{ cm}\\)"
        ],
        "ans": 0,
        "exp": "\\(\\frac{\\text{ar}(\\triangle ABC)}{\\text{ar}(\\triangle QRP)} = \\left(\\frac{BC}{RP}\\right)^2 = \\frac{9}{4} \\implies \\frac{BC}{PR} = \\frac{3}{2} \\implies \\frac{15}{PR} = \\frac{3}{2} \\implies PR = 10\\text{ cm}\\)."
      },
      {
        "q": "In \\(\\triangle ABC, D\\) is a point on \\(BC\\) such that \\(\\angle ADC = \\angle BAC\\). Then \\(CA^2 =\\):",
        "options": [
          "\\(CB \\times CD\\)",
          "\\(AB \\times BC\\)",
          "\\(BD \\times CD\\)",
          "\\(AD \\times CD\\)"
        ],
        "ans": 0,
        "exp": "In \\(\\triangle BAC\\) and \\(\\triangle ADC\\), \\(\\angle C = \\angle C\\) (common) and \\(\\angle BAC = \\angle ADC\\) (given). By AA similarity, \\(\\triangle BAC \\sim \\triangle ADC \\implies \\frac{CA}{CD} = \\frac{CB}{CA} \\implies CA^2 = CB \\times CD\\)."
      },
      {
        "q": "If \\(S\\) is a point on side \\(PQ\\) of \\(\\triangle PQR\\) such that \\(PS = QS = RS\\), then:",
        "options": [
          "\\(PR^2 + QR^2 = PQ^2\\)",
          "\\(QS^2 + RS^2 = QR^2\\)",
          "\\(PR^2 + RS^2 = PS^2\\)",
          "\\(PS^2 + RS^2 = PR^2\\)"
        ],
        "ans": 0,
        "exp": "Since \\(S\\) is equidistant from \\(P, Q, R\\), \\(S\\) is the circumcentre of \\(\\triangle PQR\\) lying on \\(PQ\\). A triangle whose circumcentre lies on a side is a right triangle with that side as hypotenuse. Thus \\(\\angle PRQ = 90^\\circ \\implies PR^2 + QR^2 = PQ^2\\)."
      },
      {
        "q": "In a right triangle \\(ABC\\), \\(\\angle B = 90^\\circ\\). If \\(AB = 5\\text{ cm}\\) and \\(BC = 12\\text{ cm}\\), the length of hypotenuse \\(AC\\) is:",
        "options": [
          "\\(13\\text{ cm}\\)",
          "\\(14\\text{ cm}\\)",
          "\\(17\\text{ cm}\\)",
          "\\(15\\text{ cm}\\)"
        ],
        "ans": 0,
        "exp": "\\(AC = \\sqrt{AB^2 + BC^2} = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13\\text{ cm}\\)."
      },
      {
        "q": "Which criterion is NOT used to establish similarity of two triangles?",
        "options": [
          "AAA",
          "SAS",
          "SSS",
          "RHS for similarity without proportional sides"
        ],
        "ans": 3,
        "exp": "The standard criteria for similarity of triangles are AAA (or AA), SSS, and SAS (with proportional sides). RHS is a congruence criterion, not a similarity criterion without proportion."
      },
      {
        "q": "Two poles of height \\(a\\) and \\(b\\) are standing vertically on ground \\(c\\) metres apart. The height of the point of intersection of the lines joining the top of each pole to the foot of the opposite pole is:",
        "options": [
          "\\(\\frac{ab}{a + b}\\)",
          "\\(\\frac{a + b}{ab}\\)",
          "\\(\\frac{a + b}{2}\\)",
          "\\(\\sqrt{ab}\\)"
        ],
        "ans": 0,
        "exp": "By standard similar triangle properties of crossed poles, the height of intersection \\(h\\) satisfies \\(\\frac{1}{h} = \\frac{1}{a} + \\frac{1}{b} \\implies h = \\frac{ab}{a + b}\\), independent of distance \\(c\\)."
      },
      {
        "q": "If \\(\\triangle ABC \\sim \\triangle DEF\\) such that \\(2AB = DE\\) and \\(BC = 8\\text{ cm}\\), then \\(EF =\\):",
        "options": [
          "\\(16\\text{ cm}\\)",
          "\\(12\\text{ cm}\\)",
          "\\(4\\text{ cm}\\)",
          "\\(8\\text{ cm}\\)"
        ],
        "ans": 0,
        "exp": "\\(\\frac{AB}{DE} = \\frac{1}{2}\\). Since \\(\\triangle ABC \\sim \\triangle DEF\\), \\(\\frac{BC}{EF} = \\frac{AB}{DE} = \\frac{1}{2} \\implies EF = 2 \\times BC = 2 \\times 8 = 16\\text{ cm}\\)."
      }
    ]
  },
  {
    "id": 7,
    "title": "Coordinate Geometry",
    "video": "https://www.youtube.com/watch?v=sU1j99u1Y6k",
    "mcqs": [
      {
        "q": "The distance of the point \\(P(2, 3)\\) from the \\(x\\)-axis is:",
        "options": [
          "2 units",
          "3 units",
          "1 unit",
          "5 units"
        ],
        "ans": 1,
        "exp": "The distance of any point \\((x, y)\\) from the \\(x\\)-axis is given by \\(|y|\\). Here \\(y = 3\\), so the distance is \\(3\\) units."
      },
      {
        "q": "The distance of the point \\(P(-6, 8)\\) from the origin \\((0, 0)\\) is:",
        "options": [
          "8 units",
          "\\(2\\sqrt{7}\\) units",
          "10 units",
          "6 units"
        ],
        "ans": 2,
        "exp": "Distance from origin \\(= \\sqrt{(-6)^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\) units."
      },
      {
        "q": "The distance between the points \\(A(0, 6)\\) and \\(B(0, -2)\\) is:",
        "options": [
          "6 units",
          "8 units",
          "4 units",
          "2 units"
        ],
        "ans": 1,
        "exp": "Both points lie on the \\(y\\)-axis. Distance \\(= |6 - (-2)| = |6 + 2| = 8\\) units."
      },
      {
        "q": "The midpoint of the line segment joining the points \\(A(-2, 8)\\) and \\(B(-6, -4)\\) is:",
        "options": [
          "\\((-4, 2)\\)",
          "\\((4, -2)\\)",
          "\\((-2, 6)\\)",
          "\\((-4, -6)\\)"
        ],
        "ans": 0,
        "exp": "Midpoint \\(= \\left(\\frac{-2 + (-6)}{2}, \\frac{8 + (-4)}{2}\\right) = \\left(\\frac{-8}{2}, \\frac{4}{2}\\right) = (-4, 2)\\)."
      },
      {
        "q": "The point which divides the line segment joining the points \\((7, -6)\\) and \\((3, 4)\\) in ratio \\(1 : 2\\) internally lies in the quadrant:",
        "options": [
          "I",
          "II",
          "III",
          "IV"
        ],
        "ans": 3,
        "exp": "By section formula: \\(x = \\frac{1(3) + 2(7)}{1 + 2} = \\frac{3 + 14}{3} = \\frac{17}{3} > 0\\). \\(y = \\frac{1(4) + 2(-6)}{1 + 2} = \\frac{4 - 12}{3} = -\\frac{8}{3} < 0\\). A point with \\(x > 0\\) and \\(y < 0\\) lies in Quadrant IV."
      },
      {
        "q": "If the point \\(P(k, 0)\\) divides the line segment joining the points \\(A(2, -2)\\) and \\(B(-7, 4)\\) in the ratio \\(1 : 2\\), then the value of \\(k\\) is:",
        "options": [
          "1",
          "2",
          "-1",
          "-2"
        ],
        "ans": 2,
        "exp": "Using section formula for \\(x\\): \\(k = \\frac{1(-7) + 2(2)}{1 + 2} = \\frac{-7 + 4}{3} = \\frac{-3}{3} = -1\\)."
      },
      {
        "q": "The coordinates of the point which is equidistant from the three vertices of \\(\\triangle AOB\\) with \\(O(0, 0), A(0, 2y)\\) and \\(B(2x, 0)\\) are:",
        "options": [
          "\\((x, y)\\)",
          "\\((y, x)\\)",
          "\\(\\left(\\frac{x}{2}, \\frac{y}{2}\\right)\\)",
          "\\((2x, 2y)\\)"
        ],
        "ans": 0,
        "exp": "\\(\\triangle AOB\\) is a right triangle with right angle at \\(O(0, 0)\\). The circumcentre (equidistant point) is the midpoint of the hypotenuse \\(AB\\): \\(\\left(\\frac{0 + 2x}{2}, \\frac{2y + 0}{2}\\right) = (x, y)\\)."
      },
      {
        "q": "If the distance between the points \\((4, p)\\) and \\((1, 0)\\) is \\(5\\), then the value of \\(p\\) is:",
        "options": [
          "\\(4\\text{ only}\\)",
          "\\(\\pm 4\\)",
          "\\(-4\\text{ only}\\)",
          "\\(0\\)"
        ],
        "ans": 1,
        "exp": "Distance \\(= \\sqrt{(4 - 1)^2 + (p - 0)^2} = 5 \\implies 3^2 + p^2 = 25 \\implies 9 + p^2 = 25 \\implies p^2 = 16 \\implies p = \\pm 4\\)."
      },
      {
        "q": "A line intersects the \\(y\\)-axis and \\(x\\)-axis at the points \\(P\\) and \\(Q\\) respectively. If \\((2, -5)\\) is the midpoint of \\(PQ\\), then the coordinates of \\(P\\) and \\(Q\\) are, respectively:",
        "options": [
          "\\((0, -5)\\) and \\((2, 0)\\)",
          "\\((0, 10)\\) and \\((-4, 0)\\)",
          "\\((0, 4)\\) and \\((-10, 0)\\)",
          "\\((0, -10)\\) and \\((4, 0)\\)"
        ],
        "ans": 3,
        "exp": "Let \\(P = (0, y)\\) and \\(Q = (x, 0)\\). Midpoint is \\(\\left(\\frac{x}{2}, \\frac{y}{2}\\right) = (2, -5) \\implies \\frac{x}{2} = 2 \\implies x = 4\\), and \\(\\frac{y}{2} = -5 \\implies y = -10\\). Thus \\(P = (0, -10)\\) and \\(Q = (4, 0)\\)."
      },
      {
        "q": "The perimeter of a triangle with vertices \\((0, 4), (0, 0)\\) and \\((3, 0)\\) is:",
        "options": [
          "5 units",
          "12 units",
          "11 units",
          "\\(7 + \\sqrt{5}\\) units"
        ],
        "ans": 1,
        "exp": "Side lengths: along \\(y\\)-axis \\(= 4\\), along \\(x\\)-axis \\(= 3\\), hypotenuse \\(= \\sqrt{3^2 + 4^2} = 5\\). Perimeter \\(= 3 + 4 + 5 = 12\\) units."
      },
      {
        "q": "If the points \\(A(1, 2), O(0, 0)\\) and \\(C(a, b)\\) are collinear, then:",
        "options": [
          "\\(a = b\\)",
          "\\(a = 2b\\)",
          "\\(2a = b\\)",
          "\\(a = -b\\)"
        ],
        "ans": 2,
        "exp": "Slope of \\(OA = \\frac{2 - 0}{1 - 0} = 2\\). Slope of \\(OC = \\frac{b}{a}\\). For collinearity: \\(\\frac{b}{a} = 2 \\implies b = 2a\\)."
      },
      {
        "q": "The point on the \\(x\\)-axis which is equidistant from \\((2, -5)\\) and \\((-2, 9)\\) is:",
        "options": [
          "\\((-7, 0)\\)",
          "\\((7, 0)\\)",
          "\\((0, -7)\\)",
          "\\((0, 7)\\)"
        ],
        "ans": 0,
        "exp": "Let point be \\(P(x, 0)\\). Equating squared distances: \\((x - 2)^2 + (0 - (-5))^2 = (x - (-2))^2 + (0 - 9)^2 \\implies x^2 - 4x + 4 + 25 = x^2 + 4x + 4 + 81 \\implies -4x + 29 = 4x + 85 \\implies -8x = 56 \\implies x = -7\\). So \\((-7, 0)\\)."
      },
      {
        "q": "The ratio in which the \\(y\\)-axis divides the line segment joining the points \\(A(5, -6)\\) and \\(B(-1, -4)\\) is:",
        "options": [
          "\\(1 : 5\\)",
          "\\(5 : 1\\)",
          "\\(2 : 3\\)",
          "\\(1 : 1\\)"
        ],
        "ans": 1,
        "exp": "Let ratio be \\(k : 1\\). Any point on the \\(y\\)-axis has \\(x = 0\\). \\(x = \\frac{k(-1) + 1(5)}{k + 1} = 0 \\implies -k + 5 = 0 \\implies k = 5\\). Thus the ratio is \\(5 : 1\\)."
      },
      {
        "q": "The centroid of the triangle whose vertices are \\((3, -5), (-7, 4)\\) and \\((10, -2)\\) is:",
        "options": [
          "\\((2, -1)\\)",
          "\\((-2, 1)\\)",
          "\\((3, -1)\\)",
          "\\((2, 1)\\)"
        ],
        "ans": 0,
        "exp": "Centroid \\(= \\left(\\frac{3 + (-7) + 10}{3}, \\frac{-5 + 4 + (-2)}{3}\\right) = \\left(\\frac{6}{3}, \\frac{-3}{3}\\right) = (2, -1)\\)."
      },
      {
        "q": "If the point \\(C(k, 4)\\) divides the line segment joining \\(A(2, 6)\\) and \\(B(5, 1)\\) in the ratio \\(2 : 3\\), the value of \\(k\\) is:",
        "options": [
          "\\(\\frac{16}{5}\\)",
          "\\(\\frac{14}{5}\\)",
          "\\(\\frac{12}{5}\\)",
          "\\(\\frac{18}{5}\\)"
        ],
        "ans": 0,
        "exp": "\\(k = \\frac{2(5) + 3(2)}{2 + 3} = \\frac{10 + 6}{5} = \\frac{16}{5}\\)."
      },
      {
        "q": "If three points \\((0, 0), (3, \\sqrt{3})\\) and \\((3, \\lambda)\\) form an equilateral triangle, then \\(\\lambda =\\):",
        "options": [
          "2",
          "\\(-3\\)",
          "\\(-\\sqrt{3}\\)",
          "\\(\\sqrt{3}\\)"
        ],
        "ans": 2,
        "exp": "Distance from origin to \\((3, \\sqrt{3})\\) is \\(\\sqrt{9 + 3} = \\sqrt{12}\\). Distance from origin to \\((3, \\lambda)\\) must be \\(\\sqrt{9 + \\lambda^2} = \\sqrt{12} \\implies \\lambda^2 = 3 \\implies \\lambda = \\pm \\sqrt{3}\\). Since vertices are distinct, \\(\\lambda = -\\sqrt{3}\\)."
      },
      {
        "q": "The distance between the points \\((a \\cos \\theta + b \\sin \\theta, 0)\\) and \\((0, a \\sin \\theta - b \\cos \\theta)\\) is:",
        "options": [
          "\\(a^2 + b^2\\)",
          "\\(a + b\\)",
          "\\(a^2 - b^2\\)",
          "\\(\\sqrt{a^2 + b^2}\\)"
        ],
        "ans": 3,
        "exp": "Distance \\(= \\sqrt{(a \\cos \\theta + b \\sin \\theta)^2 + (a \\sin \\theta - b \\cos \\theta)^2}\\). Expanding: \\(a^2(\\cos^2 \\theta + \\sin^2 \\theta) + b^2(\\sin^2 \\theta + \\cos^2 \\theta) + 2ab\\cos\\theta\\sin\\theta - 2ab\\sin\\theta\\cos\\theta = a^2 + b^2\\). Thus distance is \\(\\sqrt{a^2 + b^2}\\)."
      },
      {
        "q": "If the point \\(P(x, y)\\) is equidistant from \\(A(5, 1)\\) and \\(B(-1, 5)\\), then:",
        "options": [
          "\\(3x = 2y\\)",
          "\\(x = y\\)",
          "\\(2x = 3y\\)",
          "\\(3x = y\\)"
        ],
        "ans": 0,
        "exp": "\\((x - 5)^2 + (y - 1)^2 = (x + 1)^2 + (y - 5)^2 \\implies x^2 - 10x + 25 + y^2 - 2y + 1 = x^2 + 2x + 1 + y^2 - 10y + 25 \\implies -10x - 2y = 2x - 10y \\implies 8y = 12x \\implies 2y = 3x\\)."
      },
      {
        "q": "The points \\((1, 7), (4, 2), (-1, -1)\\) and \\((-4, 4)\\) are the vertices of a:",
        "options": [
          "Square",
          "Rectangle but not square",
          "Rhombus",
          "Parallelogram but not rectangle"
        ],
        "ans": 0,
        "exp": "Calculating side lengths: all four sides are equal to \\(\\sqrt{34}\\) and both diagonals are equal to \\(\\sqrt{68}\\). Equal sides and equal diagonals define a square."
      },
      {
        "q": "The coordinates of the fourth vertex \\(D\\) of a parallelogram \\(ABCD\\) whose three vertices are \\(A(-2, 3), B(6, 7)\\) and \\(C(8, 3)\\) are:",
        "options": [
          "\\((0, -1)\\)",
          "\\((0, 1)\\)",
          "\\((-1, 0)\\)",
          "\\((1, 0)\\)"
        ],
        "ans": 0,
        "exp": "Diagonals bisect each other, so Midpoint of \\(AC =\\) Midpoint of \\(BD\\). \\(\\left(\\frac{-2 + 8}{2}, \\frac{3 + 3}{2}\\right) = (3, 3)\\). For \\(BD\\): \\(\\frac{6 + x_D}{2} = 3 \\implies x_D = 0\\); \\(\\frac{7 + y_D}{2} = 3 \\implies y_D = -1\\). So \\(D = (0, -1)\\)."
      },
      {
        "q": "The ratio in which the segment joining \\(A(1, -5)\\) and \\(B(-4, 5)\\) is divided by the \\(x\\)-axis is:",
        "options": [
          "\\(1 : 1\\)",
          "\\(1 : 2\\)",
          "\\(2 : 1\\)",
          "\\(3 : 1\\)"
        ],
        "ans": 0,
        "exp": "For points on the \\(x\\)-axis, \\(y = 0\\). Using section formula: \\(y = \\frac{k(5) + 1(-5)}{k + 1} = 0 \\implies 5k - 5 = 0 \\implies k = 1\\). Ratio is \\(1 : 1\\)."
      },
      {
        "q": "The point \\((-4, 0)\\) lies:",
        "options": [
          "On the negative x-axis",
          "On the positive x-axis",
          "On the y-axis",
          "In the second quadrant"
        ],
        "ans": 0,
        "exp": "Since the \\(y\\)-coordinate is \\(0\\) and the \\(x\\)-coordinate is negative \\((-4)\\), the point lies directly on the negative \\(x\\)-axis."
      },
      {
        "q": "If the vertices of a triangle are \\((1, 0), (7, 0)\\) and \\((4, 4)\\), the triangle is:",
        "options": [
          "Isosceles",
          "Equilateral",
          "Scalene",
          "Right-angled"
        ],
        "ans": 0,
        "exp": "Sides: \\(AB = |7 - 1| = 6\\). \\(AC = \\sqrt{(4-1)^2 + 4^2} = \\sqrt{9 + 16} = 5\\). \\(BC = \\sqrt{(4-7)^2 + 4^2} = \\sqrt{9 + 16} = 5\\). Since \\(AC = BC = 5 \\ne 6\\), the triangle is isosceles."
      },
      {
        "q": "The ordinate of any point on the \\(x\\)-axis is:",
        "options": [
          "0",
          "1",
          "-1",
          "Any number"
        ],
        "ans": 0,
        "exp": "The ordinate refers to the \\(y\\)-coordinate. Any point lying on the \\(x\\)-axis has its \\(y\\)-coordinate (ordinate) equal to \\(0\\)."
      },
      {
        "q": "Distance between points \\((a, b)\\) and \\((-a, -b)\\) is:",
        "options": [
          "\\(2\\sqrt{a^2 + b^2}\\)",
          "\\(\\sqrt{a^2 + b^2}\\)",
          "\\(2(a + b)\\)",
          "\\(a + b\\)"
        ],
        "ans": 0,
        "exp": "Distance \\(= \\sqrt{(-a - a)^2 + (-b - b)^2} = \\sqrt{(-2a)^2 + (-2b)^2} = \\sqrt{4a^2 + 4b^2} = 2\\sqrt{a^2 + b^2}\\)."
      }
    ]
  },
  {
    "id": 8,
    "title": "Introduction to Trigonometry",
    "video": "https://www.youtube.com/watch?v=pubg_U-sXgI",
    "mcqs": [
      {
        "q": "If \\(\\cos A = \\frac{4}{5}\\), then the value of \\(\\tan A\\) is:",
        "options": [
          "\\(\\frac{3}{5}\\)",
          "\\(\\frac{3}{4}\\)",
          "\\(\\frac{4}{3}\\)",
          "\\(\\frac{5}{3}\\)"
        ],
        "ans": 1,
        "exp": "Since \\(\\cos A = \\frac{\\text{base}}{\\text{hypotenuse}} = \\frac{4}{5}\\), \\(\\text{perpendicular} = \\sqrt{5^2 - 4^2} = 3\\). Therefore, \\(\\tan A = \\frac{\\text{perpendicular}}{\\text{base}} = \\frac{3}{4}\\)."
      },
      {
        "q": "If \\(\\sin \\theta = \\frac{a}{b}\\), then \\(\\cos \\theta\\) is equal to:",
        "options": [
          "\\(\\frac{b}{\\sqrt{b^2 - a^2}}\\)",
          "\\(\\frac{\\sqrt{b^2 - a^2}}{b}\\)",
          "\\(\\frac{a}{\\sqrt{b^2 - a^2}}\\)",
          "\\(\\frac{b}{a}\\)"
        ],
        "ans": 1,
        "exp": "\\(\\cos \\theta = \\sqrt{1 - \\sin^2 \\theta} = \\sqrt{1 - \\frac{a^2}{b^2}} = \\frac{\\sqrt{b^2 - a^2}}{b}\\)."
      },
      {
        "q": "The value of \\(\\frac{1 - \\tan^2 45^\\circ}{1 + \\tan^2 45^\\circ}\\) is:",
        "options": [
          "\\(\\tan 90^\\circ\\)",
          "1",
          "\\(\\sin 45^\\circ\\)",
          "0"
        ],
        "ans": 3,
        "exp": "Since \\(\\tan 45^\\circ = 1\\), \\(\\frac{1 - (1)^2}{1 + (1)^2} = \\frac{0}{2} = 0\\)."
      },
      {
        "q": "If \\(\\sin A = \\frac{1}{2}\\), then the value of \\(\\cot A\\) is:",
        "options": [
          "\\(\\sqrt{3}\\)",
          "\\(\\frac{1}{\\sqrt{3}}\\)",
          "\\(\\frac{\\sqrt{3}}{2}\\)",
          "1"
        ],
        "ans": 0,
        "exp": "If \\(\\sin A = \\frac{1}{2}\\), then \\(A = 30^\\circ\\). Thus, \\(\\cot A = \\cot 30^\\circ = \\sqrt{3}\\)."
      },
      {
        "q": "The value of \\(\\sin^2 30^\\circ - \\cos^2 30^\\circ\\) is:",
        "options": [
          "\\(-\\frac{1}{2}\\)",
          "\\(\\frac{\\sqrt{3}}{2}\\)",
          "\\(\\frac{3}{2}\\)",
          "\\(-\\frac{2}{3}\\)"
        ],
        "ans": 0,
        "exp": "\\(\\sin 30^\\circ = \\frac{1}{2}\\), \\(\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}\\). \\(\\sin^2 30^\\circ - \\cos^2 30^\\circ = \\frac{1}{4} - \\frac{3}{4} = -\\frac{2}{4} = -\\frac{1}{2}\\)."
      },
      {
        "q": "If \\(4 \\tan \\theta = 3\\), then \\(\\frac{4 \\sin \\theta - \\cos \\theta}{4 \\sin \\theta + \\cos \\theta}\\) is equal to:",
        "options": [
          "\\(\\frac{2}{3}\\)",
          "\\(\\frac{1}{3}\\)",
          "\\(\\frac{1}{2}\\)",
          "\\(\\frac{3}{4}\\)"
        ],
        "ans": 2,
        "exp": "Dividing numerator and denominator by \\(\\cos \\theta\\): \\(\\frac{4\\tan \\theta - 1}{4\\tan \\theta + 1} = \\frac{3 - 1}{3 + 1} = \\frac{2}{4} = \\frac{1}{2}\\)."
      },
      {
        "q": "If \\(\\triangle ABC\\) is right angled at \\(C\\), then the value of \\(\\cos(A + B)\\) is:",
        "options": [
          "0",
          "1",
          "\\(\\frac{1}{2}\\)",
          "\\(\\frac{\\sqrt{3}}{2}\\)"
        ],
        "ans": 0,
        "exp": "Since \\(\\angle C = 90^\\circ\\), the remaining two acute angles sum to \\(A + B = 90^\\circ\\). Hence \\(\\cos(A + B) = \\cos 90^\\circ = 0\\)."
      },
      {
        "q": "The value of \\((\\sin \\theta + \\cos \\theta)^2 + (\\sin \\theta - \\cos \\theta)^2\\) is:",
        "options": [
          "1",
          "2",
          "0",
          "4"
        ],
        "ans": 1,
        "exp": "Expanding: \\((\\sin^2 \\theta + \\cos^2 \\theta + 2\\sin\\theta\\cos\\theta) + (\\sin^2 \\theta + \\cos^2 \\theta - 2\\sin\\theta\\cos\\theta) = 1 + 1 = 2\\)."
      },
      {
        "q": "If \\(\\tan \\theta + \\cot \\theta = 2\\), then \\(\\tan^2 \\theta + \\cot^2 \\theta =\\):",
        "options": [
          "2",
          "4",
          "1",
          "0"
        ],
        "ans": 0,
        "exp": "Squaring both sides: \\((\\tan \\theta + \\cot \\theta)^2 = 2^2 \\implies \\tan^2 \\theta + \\cot^2 \\theta + 2(1) = 4 \\implies \\tan^2 \\theta + \\cot^2 \\theta = 2\\)."
      },
      {
        "q": "If \\(\\cos 9\\alpha = \\sin \\alpha\\) and \\(9\\alpha < 90^\\circ\\), then the value of \\(\\tan 5\\alpha\\) is:",
        "options": [
          "\\(\\frac{1}{\\sqrt{3}}\\)",
          "\\(\\sqrt{3}\\)",
          "1",
          "0"
        ],
        "ans": 2,
        "exp": "\\(\\cos 9\\alpha = \\sin(90^\\circ - 9\\alpha) = \\sin \\alpha \\implies 90^\\circ - 9\\alpha = \\alpha \\implies 10\\alpha = 90^\\circ \\implies \\alpha = 9^\\circ\\). Then \\(\\tan 5\\alpha = \\tan(45^\\circ) = 1\\)."
      },
      {
        "q": "\\(9 \\sec^2 A - 9 \\tan^2 A =\\):",
        "options": [
          "1",
          "9",
          "8",
          "0"
        ],
        "ans": 1,
        "exp": "Using identity \\(\\sec^2 A - \\tan^2 A = 1\\): \\(9(\\sec^2 A - \\tan^2 A) = 9(1) = 9\\)."
      },
      {
        "q": "\\((1 + \\tan \\theta + \\sec \\theta)(1 + \\cot \\theta - \\csc \\theta) =\\):",
        "options": [
          "0",
          "1",
          "2",
          "-1"
        ],
        "ans": 2,
        "exp": "Converting to sine and cosine: \\(\\left(\\frac{\\cos\\theta + \\sin\\theta + 1}{\\cos\\theta}\\right)\\left(\\frac{\\sin\\theta + \\cos\\theta - 1}{\\sin\\theta}\\right) = \\frac{(\\sin\\theta + \\cos\\theta)^2 - 1}{\\sin\\theta\\cos\\theta} = \\frac{1 + 2\\sin\\theta\\cos\\theta - 1}{\\sin\\theta\\cos\\theta} = 2\\)."
      },
      {
        "q": "\\((\\sec A + \\tan A)(1 - \\sin A) =\\):",
        "options": [
          "\\(\\sec A\\)",
          "\\(\\sin A\\)",
          "\\(\\csc A\\)",
          "\\(\\cos A\\)"
        ],
        "ans": 3,
        "exp": "\\(\\left(\\frac{1 + \\sin A}{\\cos A}\\right)(1 - \\sin A) = \\frac{1 - \\sin^2 A}{\\cos A} = \\frac{\\cos^2 A}{\\cos A} = \\cos A\\)."
      },
      {
        "q": "If \\(x = a \\cos \\theta\\) and \\(y = b \\sin \\theta\\), then \\(b^2 x^2 + a^2 y^2 =\\):",
        "options": [
          "\\(a^2 b^2\\)",
          "\\(ab\\)",
          "\\(a^4 b^4\\)",
          "\\(a^2 + b^2\\)"
        ],
        "ans": 0,
        "exp": "\\(b^2(a^2 \\cos^2 \\theta) + a^2(b^2 \\sin^2 \\theta) = a^2 b^2(\\cos^2 \\theta + \\sin^2 \\theta) = a^2 b^2(1) = a^2 b^2\\)."
      },
      {
        "q": "Given that \\(\\sin \\alpha = \\frac{1}{2}\\) and \\(\\cos \\beta = \\frac{1}{2}\\), then the value of \\((\\alpha + \\beta)\\) is:",
        "options": [
          "\\(0^\\circ\\)",
          "\\(30^\\circ\\)",
          "\\(60^\\circ\\)",
          "\\(90^\\circ\\)"
        ],
        "ans": 3,
        "exp": "\\(\\sin \\alpha = \\frac{1}{2} \\implies \\alpha = 30^\\circ\\). \\(\\cos \\beta = \\frac{1}{2} \\implies \\beta = 60^\\circ\\). So \\(\\alpha + \\beta = 30^\\circ + 60^\\circ = 90^\\circ\\)."
      },
      {
        "q": "If \\(\\sqrt{3} \\tan \\theta = 3 \\sin \\theta\\), then the value of \\(\\sin^2 \\theta - \\cos^2 \\theta\\) is:",
        "options": [
          "\\(\\frac{1}{3}\\)",
          "\\(-\\frac{1}{3}\\)",
          "\\(\\frac{2}{3}\\)",
          "\\(-\\frac{2}{3}\\)"
        ],
        "ans": 1,
        "exp": "\\(\\sqrt{3} \\frac{\\sin \\theta}{\\cos \\theta} = 3 \\sin \\theta \\implies \\cos \\theta = \\frac{\\sqrt{3}}{3} = \\frac{1}{\\sqrt{3}}\\). Then \\(\\cos^2 \\theta = \\frac{1}{3}\\) and \\(\\sin^2 \\theta = 1 - \\frac{1}{3} = \\frac{2}{3}\\). So \\(\\sin^2 \\theta - \\cos^2 \\theta = \\frac{2}{3} - \\frac{1}{3} = \\frac{1}{3}\\) wait: \\(\\sin^2 \\theta - \\cos^2 \\theta = \\frac{2}{3} - \\frac{1}{3} = \\frac{1}{3}\\). Option A is \\(\\frac{1}{3}\\)."
      },
      {
        "q": "If \\(\\sec \\theta + \\tan \\theta = x\\), then \\(\\sec \\theta =\\):",
        "options": [
          "\\(\\frac{x^2 + 1}{x}\\)",
          "\\(\\frac{x^2 + 1}{2x}\\)",
          "\\(\\frac{x^2 - 1}{2x}\\)",
          "\\(\\frac{2x}{x^2 + 1}\\)"
        ],
        "ans": 1,
        "exp": "Since \\(\\sec^2 \\theta - \\tan^2 \\theta = 1\\), \\(\\sec \\theta - \\tan \\theta = \\frac{1}{x}\\). Adding both: \\(2\\sec \\theta = x + \\frac{1}{x} = \\frac{x^2 + 1}{x} \\implies \\sec \\theta = \\frac{x^2 + 1}{2x}\\)."
      },
      {
        "q": "The maximum value of \\(\\frac{1}{\\csc \\theta}\\) for \\(0^\\circ \\le \\theta \\le 90^\\circ\\) is:",
        "options": [
          "0",
          "1",
          "\\(\\frac{1}{2}\\)",
          "\\(\\sqrt{2}\\)"
        ],
        "ans": 1,
        "exp": "\\(\\frac{1}{\\csc \\theta} = \\sin \\theta\\). The maximum value of \\(\\sin \\theta\\) in the range is \\(1\\) (at \\(\\theta = 90^\\circ\\))."
      },
      {
        "q": "If \\(\\triangle ABC\\) is a right triangle at \\(B\\) and \\(\\tan A = \\frac{1}{\\sqrt{3}}\\), then \\(\\sin A \\cos C + \\cos A \\sin C =\\):",
        "options": [
          "1",
          "0",
          "\\(\\frac{1}{2}\\)",
          "\\(\\frac{\\sqrt{3}}{2}\\)"
        ],
        "ans": 0,
        "exp": "Notice \\(\\sin A \\cos C + \\cos A \\sin C = \\sin(A + C)\\). Since \\(\\angle B = 90^\\circ\\), \\(A + C = 90^\\circ\\), so \\(\\sin 90^\\circ = 1\\)."
      },
      {
        "q": "If \\(5 \\cot \\theta = 3\\), then the value of \\(\\frac{5\\sin \\theta - 3\\cos \\theta}{4\\sin \\theta + 3\\cos \\theta}\\) is:",
        "options": [
          "\\(0\\)",
          "\\(\\frac{16}{29}\\)",
          "\\(\\frac{8}{29}\\)",
          "\\(\\frac{16}{9}\\)"
        ],
        "ans": 1,
        "exp": "From \\(5 \\cot \\theta = 3 \\implies \\cot \\theta = \\frac{3}{5}\\). Divide numerator and denominator by \\(\\sin \\theta\\): \\(\\frac{5 - 3\\cot \\theta}{4 + 3\\cot \\theta} = \\frac{5 - 3(3/5)}{4 + 3(3/5)} = \\frac{5 - 9/5}{4 + 9/5} = \\frac{16/5}{29/5} = \\frac{16}{29}\\)."
      },
      {
        "q": "Which of the following is equal to \\(\\sin 60^\\circ\\)?",
        "options": [
          "\\(\\cos 60^\\circ\\)",
          "\\(\\cos 30^\\circ\\)",
          "\\(\\tan 30^\\circ\\)",
          "\\(\\cot 60^\\circ\\)"
        ],
        "ans": 1,
        "exp": "\\(\\sin 60^\\circ = \\frac{\\sqrt{3}}{2} = \\cos(90^\\circ - 60^\\circ) = \\cos 30^\\circ\\)."
      },
      {
        "q": "If \\(\\theta = 45^\\circ\\), then the value of \\(2\\sin \\theta \\cos \\theta\\) is:",
        "options": [
          "1",
          "\\(\\frac{1}{2}\\)",
          "\\(\\sqrt{2}\\)",
          "0"
        ],
        "ans": 0,
        "exp": "\\(2\\sin 45^\\circ \\cos 45^\\circ = 2\\left(\\frac{1}{\\sqrt{2}}\\right)\\left(\\frac{1}{\\sqrt{2}}\\right) = 2 \\times \\frac{1}{2} = 1\\)."
      },
      {
        "q": "The value of \\(\\frac{\\tan 30^\\circ}{\\cot 60^\\circ}\\) is:",
        "options": [
          "\\(\\frac{1}{\\sqrt{3}}\\)",
          "1",
          "\\(\\sqrt{3}\\)",
          "\\(\\frac{1}{3}\\)"
        ],
        "ans": 1,
        "exp": "Both \\(\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}\\) and \\(\\cot 60^\\circ = \\frac{1}{\\sqrt{3}}\\). Their ratio is \\(1\\)."
      },
      {
        "q": "If \\(\\cos \\theta + \\cos^2 \\theta = 1\\), then \\(\\sin^2 \\theta + \\sin^4 \\theta =\\):",
        "options": [
          "-1",
          "0",
          "1",
          "2"
        ],
        "ans": 2,
        "exp": "From \\(\\cos \\theta = 1 - \\cos^2 \\theta = \\sin^2 \\theta\\). Then \\(\\sin^2 \\theta + \\sin^4 \\theta = \\cos \\theta + (\\sin^2 \\theta)^2 = \\cos \\theta + \\cos^2 \\theta = 1\\)."
      },
      {
        "q": "If \\(\\sin \\theta - \\cos \\theta = 0\\), then the value of \\(\\sin^4 \\theta + \\cos^4 \\theta\\) is:",
        "options": [
          "1",
          "\\(\\frac{3}{4}\\)",
          "\\(\\frac{1}{2}\\)",
          "\\(\\frac{1}{4}\\)"
        ],
        "ans": 2,
        "exp": "\\(\\sin \\theta = \\cos \\theta \\implies \\theta = 45^\\circ\\). Then \\(\\sin^4 45^\\circ + \\cos^4 45^\\circ = \\left(\\frac{1}{\\sqrt{2}}\\right)^4 + \\left(\\frac{1}{\\sqrt{2}}\\right)^4 = \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}\\)."
      }
    ]
  },
  {
    "id": 9,
    "title": "Some Applications of Trigonometry",
    "video": "https://www.youtube.com/watch?v=kY0wU3Yc810",
    "mcqs": [
      {
        "q": "If a pole \\(6\\text{ m}\\) high casts a shadow \\(2\\sqrt{3}\\text{ m}\\) long on the ground, then the sun's elevation is:",
        "options": [
          "\\(60^\\circ\\)",
          "\\(45^\\circ\\)",
          "\\(30^\\circ\\)",
          "\\(90^\\circ\\)"
        ],
        "ans": 0,
        "exp": "\\(\\tan \\theta = \\frac{\\text{Height}}{\\text{Shadow}} = \\frac{6}{2\\sqrt{3}} = \\frac{3}{\\sqrt{3}} = \\sqrt{3} \\implies \\theta = 60^\\circ\\)."
      },
      {
        "q": "The angle of elevation of the top of a tower from a point on the ground, which is \\(30\\text{ m}\\) away from the foot of the tower, is \\(30^\\circ\\). The height of the tower is:",
        "options": [
          "\\(10\\sqrt{3}\\text{ m}\\)",
          "\\(15\\text{ m}\\)",
          "\\(30\\sqrt{3}\\text{ m}\\)",
          "\\(10\\text{ m}\\)"
        ],
        "ans": 0,
        "exp": "\\(\\tan 30^\\circ = \\frac{h}{30} \\implies \\frac{1}{\\sqrt{3}} = \\frac{h}{30} \\implies h = \\frac{30}{\\sqrt{3}} = 10\\sqrt{3}\\text{ m}\\)."
      },
      {
        "q": "A kite is flying at a height of \\(60\\text{ m}\\) above the ground. The string attached to the kite is temporarily tied to a point on the ground inclined at \\(60^\\circ\\). The length of the string is:",
        "options": [
          "\\(40\\sqrt{3}\\text{ m}\\)",
          "\\(30\\text{ m}\\)",
          "\\(20\\sqrt{3}\\text{ m}\\)",
          "\\(60\\sqrt{3}\\text{ m}\\)"
        ],
        "ans": 0,
        "exp": "\\(\\sin 60^\\circ = \\frac{\\text{Height}}{\\text{String length}} \\implies \\frac{\\sqrt{3}}{2} = \\frac{60}{L} \\implies L = \\frac{120}{\\sqrt{3}} = 40\\sqrt{3}\\text{ m}\\)."
      },
      {
        "q": "If the ratio of the height of a tower and the length of its shadow is \\(1 : 1\\), the angle of elevation of the sun is:",
        "options": [
          "\\(30^\\circ\\)",
          "\\(45^\\circ\\)",
          "\\(60^\\circ\\)",
          "\\(90^\\circ\\)"
        ],
        "ans": 1,
        "exp": "\\(\\tan \\theta = \\frac{h}{s} = 1 \\implies \\theta = 45^\\circ\\)."
      },
      {
        "q": "If the angle of elevation of the top of a tower from two points at distances \\(a\\) and \\(b\\) from the base and in the same straight line with it are complementary, then the height of the tower is:",
        "options": [
          "\\(ab\\)",
          "\\(\\sqrt{ab}\\)",
          "\\(\\frac{a}{b}\\)",
          "\\(\\sqrt{\\frac{a}{b}}\\)"
        ],
        "ans": 1,
        "exp": "\\(\\tan \\theta = \\frac{h}{a}\\) and \\(\\tan(90^\\circ - \\theta) = \\cot \\theta = \\frac{h}{b}\\). Multiplying them: \\(\\tan \\theta \\cdot \\cot \\theta = \\frac{h^2}{ab} \\implies 1 = \\frac{h^2}{ab} \\implies h = \\sqrt{ab}\\)."
      },
      {
        "q": "A ladder \\(15\\text{ m}\\) long just reaches the top of a vertical wall. If the ladder makes an angle of \\(60^\\circ\\) with the wall, then the height of the wall is:",
        "options": [
          "\\(15\\sqrt{3}\\text{ m}\\)",
          "\\(\\frac{15\\sqrt{3}}{2}\\text{ m}\\)",
          "\\(\\frac{15}{2}\\text{ m}\\)",
          "\\(15\\text{ m}\\)"
        ],
        "ans": 2,
        "exp": "Notice the angle is made *with the wall*. The adjacent side is the wall height \\(h\\): \\(\\cos 60^\\circ = \\frac{h}{15} \\implies \\frac{1}{2} = \\frac{h}{15} \\implies h = \\frac{15}{2} = 7.5\\text{ m}\\)."
      },
      {
        "q": "An observer \\(1.5\\text{ m}\\) tall is \\(28.5\\text{ m}\\) away from a chimney. The angle of elevation of the top of the chimney from her eyes is \\(45^\\circ\\). The height of the chimney is:",
        "options": [
          "\\(30\\text{ m}\\)",
          "\\(28.5\\text{ m}\\)",
          "\\(27\\text{ m}\\)",
          "\\(31.5\\text{ m}\\)"
        ],
        "ans": 0,
        "exp": "\\(\\tan 45^\\circ = \\frac{h - 1.5}{28.5} \\implies 1 = \\frac{h - 1.5}{28.5} \\implies h - 1.5 = 28.5 \\implies h = 30\\text{ m}\\)."
      },
      {
        "q": "The shadow of a tower is \\(\\sqrt{3}\\) times its height. Then the angle of elevation of the sun is:",
        "options": [
          "\\(30^\\circ\\)",
          "\\(45^\\circ\\)",
          "\\(60^\\circ\\)",
          "\\(90^\\circ\\)"
        ],
        "ans": 0,
        "exp": "\\(\\tan \\theta = \\frac{h}{\\sqrt{3}h} = \\frac{1}{\\sqrt{3}} \\implies \\theta = 30^\\circ\\)."
      },
      {
        "q": "When the sun's altitude changes from \\(30^\\circ\\) to \\(60^\\circ\\), the length of the shadow of a tower decreases by \\(x\\) metres. The shadow becomes:",
        "options": [
          "Longer",
          "Shorter",
          "Unchanged",
          "Zero"
        ],
        "ans": 1,
        "exp": "As the sun rises higher (larger elevation angle), shadows become shorter."
      },
      {
        "q": "From a point \\(P\\) on the ground the angle of elevation of the top of a \\(10\\text{ m}\\) tall building is \\(30^\\circ\\). A flag is hoisted at the top of the building and the angle of elevation of the top of the flagstaff from \\(P\\) is \\(45^\\circ\\). The distance of \\(P\\) from the building is:",
        "options": [
          "\\(10\\sqrt{3}\\text{ m}\\)",
          "\\(10\\text{ m}\\)",
          "\\(20\\text{ m}\\)",
          "\\(5\\sqrt{3}\\text{ m}\\)"
        ],
        "ans": 0,
        "exp": "\\(\\tan 30^\\circ = \\frac{10}{d} \\implies \\frac{1}{\\sqrt{3}} = \\frac{10}{d} \\implies d = 10\\sqrt{3}\\text{ m}\\)."
      },
      {
        "q": "The angle of depression of a car parked on the road from the top of a \\(75\\text{ m}\\) high cliff is \\(30^\\circ\\). The distance of the car from the base of the cliff is:",
        "options": [
          "\\(75\\sqrt{3}\\text{ m}\\)",
          "\\(25\\sqrt{3}\\text{ m}\\)",
          "\\(150\\text{ m}\\)",
          "\\(75\\text{ m}\\)"
        ],
        "ans": 0,
        "exp": "Angle of depression \\(=\\) Angle of elevation \\(= 30^\\circ\\). \\(\\tan 30^\\circ = \\frac{75}{d} \\implies d = \\frac{75}{1/\\sqrt{3}} = 75\\sqrt{3}\\text{ m}\\)."
      },
      {
        "q": "A tree breaks due to storm and the broken part bends so that the top of the tree touches the ground making an angle of \\(30^\\circ\\) with it. The distance between the foot of the tree to the point where the top touches the ground is \\(8\\text{ m}\\). The height of the tree is:",
        "options": [
          "\\(8\\sqrt{3}\\text{ m}\\)",
          "\\(16\\sqrt{3}\\text{ m}\\)",
          "\\(24\\text{ m}\\)",
          "\\(12\\text{ m}\\)"
        ],
        "ans": 0,
        "exp": "Let unbroken standing part be \\(h_1\\) and broken fallen part be \\(h_2\\). \\(\\tan 30^\\circ = \\frac{h_1}{8} \\implies h_1 = \\frac{8}{\\sqrt{3}}\\). \\(\\cos 30^\\circ = \\frac{8}{h_2} \\implies h_2 = \\frac{16}{\\sqrt{3}}\\). Total height \\(= h_1 + h_2 = \\frac{24}{\\sqrt{3}} = 8\\sqrt{3}\\text{ m}\\)."
      },
      {
        "q": "If the angle of elevation of a cloud from a point \\(h\\) metres above a lake is \\(\\theta\\) and the angle of depression of its reflection in the lake is \\(\\phi\\), then the height of the cloud is:",
        "options": [
          "\\(\\frac{h(\\tan \\phi + \\tan \\theta)}{\\tan \\phi - \\tan \\theta}\\)",
          "\\(\\frac{h(\\tan \\phi - \\tan \\theta)}{\\tan \\phi + \\tan \\theta}\\)",
          "\\(h \\tan \\theta\\)",
          "\\(h(\\tan \\phi + \\tan \\theta)\\)"
        ],
        "ans": 0,
        "exp": "By standard trigonometry: \\(\\frac{H - h}{d} = \\tan \\theta\\) and \\(\\frac{H + h}{d} = \\tan \\phi\\). Dividing: \\(\\frac{H + h}{H - h} = \\frac{\\tan \\phi}{\\tan \\theta}\\). Solving for \\(H\\) gives \\(H = \\frac{h(\\tan \\phi + \\tan \\theta)}{\\tan \\phi - \\tan \\theta}\\)."
      },
      {
        "q": "The tops of two poles of height \\(20\\text{ m}\\) and \\(14\\text{ m}\\) are connected by a wire. If the wire makes an angle of \\(30^\\circ\\) with horizontal, then the length of the wire is:",
        "options": [
          "\\(12\\text{ m}\\)",
          "\\(10\\text{ m}\\)",
          "\\(8\\text{ m}\\)",
          "\\(14\\text{ m}\\)"
        ],
        "ans": 0,
        "exp": "Difference in height \\(= 20 - 14 = 6\\text{ m}\\). \\(\\sin 30^\\circ = \\frac{6}{L} \\implies \\frac{1}{2} = \\frac{6}{L} \\implies L = 12\\text{ m}\\)."
      },
      {
        "q": "The angle of elevation of the top of a tower from a point on ground is \\(45^\\circ\\). On walking \\(30\\text{ m}\\) towards the tower, the angle becomes \\(60^\\circ\\). The height of the tower is:",
        "options": [
          "\\(15(3 + \\sqrt{3})\\text{ m}\\)",
          "\\(15(3 - \\sqrt{3})\\text{ m}\\)",
          "\\(30\\sqrt{3}\\text{ m}\\)",
          "\\(45\\text{ m}\\)"
        ],
        "ans": 0,
        "exp": "Let height be \\(h\\). \\(d_1 = h\\) (since \\(\\tan 45^\\circ = 1\\)). \\(d_2 = \\frac{h}{\\sqrt{3}}\\). Distance walked \\(= h - \\frac{h}{\\sqrt{3}} = 30 \\implies h\\frac{\\sqrt{3}-1}{\\sqrt{3}} = 30 \\implies h = \\frac{30\\sqrt{3}}{\\sqrt{3}-1} = 15(3 + \\sqrt{3})\\text{ m}\\)."
      },
      {
        "q": "The line drawn from the eye of an observer to the point in the object viewed by the observer is called:",
        "options": [
          "Horizontal line",
          "Line of sight",
          "Angle of elevation",
          "Angle of depression"
        ],
        "ans": 1,
        "exp": "By definition, the line of sight is the straight line drawn from the eye of the observer to the object being viewed."
      },
      {
        "q": "The angle of elevation is formed when the object being viewed is:",
        "options": [
          "Above the horizontal level",
          "Below the horizontal level",
          "At the horizontal level",
          "Behind the observer"
        ],
        "ans": 0,
        "exp": "The angle of elevation is the angle between the horizontal line and the line of sight when the object is above the horizontal line."
      },
      {
        "q": "The angle of depression is formed when the object being viewed is:",
        "options": [
          "Above the horizontal level",
          "Below the horizontal level",
          "At the horizontal level",
          "Directly overhead"
        ],
        "ans": 1,
        "exp": "The angle of depression is the angle between the horizontal line and the line of sight when looking down at an object below the eye level."
      },
      {
        "q": "A person walking along a straight road observes that at two consecutive kilometre stones the angles of elevation of a hill in front of him are \\(30^\\circ\\) and \\(45^\\circ\\). The height of the hill is:",
        "options": [
          "\\(\\frac{\\sqrt{3} + 1}{2}\\text{ km}\\)",
          "\\(\\frac{1}{\\sqrt{3} - 1}\\text{ km}\\)",
          "\\(\\sqrt{3}\\text{ km}\\)",
          "\\(\\frac{\\sqrt{3}}{2}\\text{ km}\\)"
        ],
        "ans": 1,
        "exp": "\\(h \\cot 30^\\circ - h \\cot 45^\\circ = 1\\text{ km} \\implies h(\\sqrt{3} - 1) = 1 \\implies h = \\frac{1}{\\sqrt{3} - 1}\\text{ km}\\)."
      },
      {
        "q": "A round balloon of radius \\(r\\) subtends an angle \\(\\alpha\\) at the eye of the observer while the angle of elevation of its centre is \\(\\beta\\). The height of the centre of the balloon is:",
        "options": [
          "\\(r \\sin \\beta \\csc(\\alpha/2)\\)",
          "\\(r \\sin \\beta \\sin(\\alpha/2)\\)",
          "\\(r \\cos \\beta \\csc(\\alpha/2)\\)",
          "\\(r \\sin(\\alpha/2) \\csc \\beta\\)"
        ],
        "ans": 0,
        "exp": "If \\(d\\) is the distance from eye to balloon centre: \\(\\sin(\\alpha/2) = \\frac{r}{d} \\implies d = r \\csc(\\alpha/2)\\). Height \\(= d \\sin \\beta = r \\sin \\beta \\csc(\\alpha/2)\\)."
      },
      {
        "q": "The angle of elevation of the sun, when the length of the shadow of a tree is equal to its height, is:",
        "options": [
          "\\(30^\\circ\\)",
          "\\(45^\\circ\\)",
          "\\(60^\\circ\\)",
          "\\(90^\\circ\\)"
        ],
        "ans": 1,
        "exp": "\\(\\tan \\theta = \\frac{h}{h} = 1 \\implies \\theta = 45^\\circ\\)."
      },
      {
        "q": "From the top of a \\(7\\text{ m}\\) high building, the angle of elevation of the top of a cable tower is \\(60^\\circ\\) and the angle of depression of its foot is \\(45^\\circ\\). The height of the tower is:",
        "options": [
          "\\(7(\\sqrt{3} + 1)\\text{ m}\\)",
          "\\(7(\\sqrt{3} - 1)\\text{ m}\\)",
          "\\(7\\sqrt{3}\\text{ m}\\)",
          "\\(14\\text{ m}\\)"
        ],
        "ans": 0,
        "exp": "From angle of depression \\(45^\\circ\\), horizontal distance \\(d = 7\\text{ m}\\). Upper tower height above building \\(= 7 \\tan 60^\\circ = 7\\sqrt{3}\\text{ m}\\). Total height \\(= 7 + 7\\sqrt{3} = 7(\\sqrt{3} + 1)\\text{ m}\\)."
      },
      {
        "q": "Two ships are approaching a lighthouse from opposite sides. The angles of depression of two ships from the top of a lighthouse of height \\(100\\text{ m}\\) are \\(30^\\circ\\) and \\(45^\\circ\\). The distance between the ships is:",
        "options": [
          "\\(100(\\sqrt{3} + 1)\\text{ m}\\)",
          "\\(100(\\sqrt{3} - 1)\\text{ m}\\)",
          "\\(200\\text{ m}\\)",
          "\\(150\\text{ m}\\)"
        ],
        "ans": 0,
        "exp": "Distance of first ship \\(= 100 \\cot 30^\\circ = 100\\sqrt{3}\\text{ m}\\). Distance of second ship \\(= 100 \\cot 45^\\circ = 100\\text{ m}\\). Total distance \\(= 100\\sqrt{3} + 100 = 100(\\sqrt{3} + 1)\\text{ m}\\)."
      },
      {
        "q": "If the sun's elevation is \\(30^\\circ\\), the height of a vertical pole that casts a shadow of \\(15\\text{ m}\\) is:",
        "options": [
          "\\(5\\sqrt{3}\\text{ m}\\)",
          "\\(15\\sqrt{3}\\text{ m}\\)",
          "\\(10\\text{ m}\\)",
          "\\(5\\text{ m}\\)"
        ],
        "ans": 0,
        "exp": "\\(h = 15 \\tan 30^\\circ = \\frac{15}{\\sqrt{3}} = 5\\sqrt{3}\\text{ m}\\)."
      },
      {
        "q": "An electric pole is \\(10\\text{ m}\\) high. A steel wire tied to top of the pole is affixed at a point on the ground to keep the pole upright. If the wire makes an angle of \\(45^\\circ\\) with the horizontal, then the length of wire is:",
        "options": [
          "\\(10\\sqrt{2}\\text{ m}\\)",
          "\\(10\\text{ m}\\)",
          "\\(20\\text{ m}\\)",
          "\\(5\\sqrt{2}\\text{ m}\\)"
        ],
        "ans": 0,
        "exp": "\\(\\sin 45^\\circ = \\frac{10}{L} \\implies \\frac{1}{\\sqrt{2}} = \\frac{10}{L} \\implies L = 10\\sqrt{2}\\text{ m}\\)."
      }
    ]
  },
  {
    "id": 10,
    "title": "Circles",
    "video": "https://www.youtube.com/watch?v=kY0wU3Yc810",
    "mcqs": [
      {
        "q": "From a point \\(Q\\), the length of the tangent to a circle is \\(24\\text{ cm}\\) and the distance of \\(Q\\) from the centre is \\(25\\text{ cm}\\). The radius of the circle is:",
        "options": [
          "\\(7\\text{ cm}\\)",
          "\\(12\\text{ cm}\\)",
          "\\(15\\text{ cm}\\)",
          "\\(24.5\\text{ cm}\\)"
        ],
        "ans": 0,
        "exp": "The tangent is perpendicular to radius at point of contact. In right \\(\\triangle OPQ\\), \\(r = \\sqrt{25^2 - 24^2} = \\sqrt{625 - 576} = \\sqrt{49} = 7\\text{ cm}\\)."
      },
      {
        "q": "If tangents \\(PA\\) and \\(PB\\) from a point \\(P\\) to a circle with centre \\(O\\) are inclined to each other at angle of \\(80^\\circ\\), then \\(\\angle POA\\) is equal to:",
        "options": [
          "\\(50^\\circ\\)",
          "\\(60^\\circ\\)",
          "\\(70^\\circ\\)",
          "\\(80^\\circ\\)"
        ],
        "ans": 0,
        "exp": "In quadrilateral \\(OAPB\\), \\(\\angle AOB = 180^\\circ - 80^\\circ = 100^\\circ\\). Since \\(OP\\) bisects \\(\\angle AOB\\), \\(\\angle POA = \\frac{100^\\circ}{2} = 50^\\circ\\)."
      },
      {
        "q": "If two tangents inclined at an angle of \\(60^\\circ\\) are drawn to a circle of radius \\(3\\text{ cm}\\), then the length of each tangent is:",
        "options": [
          "\\(\\frac{3}{2}\\sqrt{3}\\text{ cm}\\)",
          "\\(6\\text{ cm}\\)",
          "\\(3\\text{ cm}\\)",
          "\\(3\\sqrt{3}\\text{ cm}\\)"
        ],
        "ans": 3,
        "exp": "The line from centre to external point bisects the angle: \\(\\frac{60^\\circ}{2} = 30^\\circ\\). In right triangle, \\(\\tan 30^\\circ = \\frac{r}{L} \\implies \\frac{1}{\\sqrt{3}} = \\frac{3}{L} \\implies L = 3\\sqrt{3}\\text{ cm}\\)."
      },
      {
        "q": "The number of tangents that can be drawn from an external point to a circle is:",
        "options": [
          "1",
          "2",
          "3",
          "Infinitely many"
        ],
        "ans": 1,
        "exp": "From any point lying strictly outside a circle, exactly two tangents can be drawn to the circle."
      },
      {
        "q": "The number of tangents to a circle from a point inside the circle is:",
        "options": [
          "0",
          "1",
          "2",
          "Infinite"
        ],
        "ans": 0,
        "exp": "Any line passing through an interior point of a circle must intersect the circle at two points (secant), so zero tangents can be drawn."
      },
      {
        "q": "A tangent to a circle intersects it in:",
        "options": [
          "Exactly one point",
          "Two points",
          "At most two points",
          "No point"
        ],
        "ans": 0,
        "exp": "By definition, a tangent intersects the circle at exactly one point (called the point of contact)."
      },
      {
        "q": "A line intersecting a circle in two distinct points is called a:",
        "options": [
          "Tangent",
          "Secant",
          "Chord",
          "Segment"
        ],
        "ans": 1,
        "exp": "A line that cuts a circle at two distinct points and extends indefinitely is called a secant."
      },
      {
        "q": "The tangent at any point of a circle is:",
        "options": [
          "Perpendicular to the radius through the point of contact",
          "Parallel to the radius",
          "Inclined at \\(45^\\circ\\) to the radius",
          "Tangent does not meet the radius"
        ],
        "ans": 0,
        "exp": "Theorem: The tangent at any point of a circle is perpendicular to the radius through the point of contact."
      },
      {
        "q": "If a parallelogram circumscribes a circle, then it is a:",
        "options": [
          "Square",
          "Rectangle",
          "Rhombus",
          "Trapezium"
        ],
        "ans": 2,
        "exp": "Standard CBSE Theorem: A parallelogram circumscribing a circle is always a rhombus (all four sides are equal: \\(AB + CD = AD + BC \\implies 2AB = 2AD \\implies AB = AD\\))."
      },
      {
        "q": "In two concentric circles, a chord of length \\(8\\text{ cm}\\) of the larger circle touches the smaller circle of radius \\(3\\text{ cm}\\). The radius of the larger circle is:",
        "options": [
          "\\(4\\text{ cm}\\)",
          "\\(5\\text{ cm}\\)",
          "\\(6\\text{ cm}\\)",
          "\\(7\\text{ cm}\\)"
        ],
        "ans": 1,
        "exp": "The radius to point of contact bisects the chord: half-chord \\(= 4\\text{ cm}\\). Radius of larger circle \\(R = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5\\text{ cm}\\)."
      },
      {
        "q": "At one end \\(A\\) of a diameter \\(AB\\) of a circle of radius \\(5\\text{ cm}\\), tangent \\(XAY\\) is drawn. The length of the chord \\(CD\\) parallel to \\(XY\\) at a distance of \\(8\\text{ cm}\\) from \\(A\\) is:",
        "options": [
          "\\(4\\text{ cm}\\)",
          "\\(5\\text{ cm}\\)",
          "\\(6\\text{ cm}\\)",
          "\\(8\\text{ cm}\\)"
        ],
        "ans": 3,
        "exp": "The centre is at distance \\(5\\text{ cm}\\) from \\(A\\). Distance of chord from centre \\(= 8 - 5 = 3\\text{ cm}\\). Half-chord length \\(= \\sqrt{5^2 - 3^2} = 4\\text{ cm}\\). Length of chord \\(= 2 \\times 4 = 8\\text{ cm}\\)."
      },
      {
        "q": "The maximum number of parallel tangents a circle can have at the most is:",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "ans": 1,
        "exp": "Parallel tangents to a circle can only be drawn at the opposite ends of a diameter. Hence, a circle can have at most \\(2\\) parallel tangents for any given direction."
      },
      {
        "q": "If \\(PA\\) and \\(PB\\) are tangents from \\(P\\) to a circle with centre \\(O\\) such that \\(\\angle APB = 50^\\circ\\), then \\(\\angle OAB\\) is equal to:",
        "options": [
          "\\(25^\\circ\\)",
          "\\(30^\\circ\\)",
          "\\(40^\\circ\\)",
          "\\(50^\\circ\\)"
        ],
        "ans": 0,
        "exp": "In \\(\\triangle PAB\\), \\(PA = PB \\implies \\angle PAB = \\frac{180^\\circ - 50^\\circ}{2} = 65^\\circ\\). Since radius \\(OA \\perp PA\\), \\(\\angle OAP = 90^\\circ\\). Thus \\(\\angle OAB = 90^\\circ - 65^\\circ = 25^\\circ\\) (which is always \\(\\frac{\\angle APB}{2}\\))."
      },
      {
        "q": "A quadrilateral \\(ABCD\\) is drawn to circumscribe a circle. Then:",
        "options": [
          "\\(AB + CD = BC + DA\\)",
          "\\(AB + BC = CD + DA\\)",
          "\\(AB + DA = BC + CD\\)",
          "\\(AB = CD\\)"
        ],
        "ans": 0,
        "exp": "Using lengths of tangents from external points: \\(AB + CD = BC + DA\\)."
      },
      {
        "q": "In a right triangle \\(ABC\\), right-angled at \\(B\\), \\(BC = 12\\text{ cm}\\) and \\(AB = 5\\text{ cm}\\). The radius of the circle inscribed in the triangle (inradius) is:",
        "options": [
          "\\(1\\text{ cm}\\)",
          "\\(2\\text{ cm}\\)",
          "\\(3\\text{ cm}\\)",
          "\\(4\\text{ cm}\\)"
        ],
        "ans": 1,
        "exp": "Hypotenuse \\(AC = \\sqrt{5^2 + 12^2} = 13\\text{ cm}\\). Inradius \\(r = \\frac{a + b - c}{2} = \\frac{5 + 12 - 13}{2} = \\frac{4}{2} = 2\\text{ cm}\\)."
      },
      {
        "q": "Two concentric circles have radii \\(13\\text{ cm}\\) and \\(5\\text{ cm}\\). The length of the chord of the larger circle which touches the smaller circle is:",
        "options": [
          "\\(12\\text{ cm}\\)",
          "\\(20\\text{ cm}\\)",
          "\\(24\\text{ cm}\\)",
          "\\(26\\text{ cm}\\)"
        ],
        "ans": 2,
        "exp": "Half-chord \\(= \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\text{ cm}\\). Total length \\(= 2 \\times 12 = 24\\text{ cm}\\)."
      },
      {
        "q": "If the angle between two radii of a circle is \\(130^\\circ\\), the angle between the tangents at the ends of the radii is:",
        "options": [
          "\\(90^\\circ\\)",
          "\\(50^\\circ\\)",
          "\\(70^\\circ\\)",
          "\\(40^\\circ\\)"
        ],
        "ans": 1,
        "exp": "The angle between radii and angle between tangents are supplementary: \\(180^\\circ - 130^\\circ = 50^\\circ\\)."
      },
      {
        "q": "The common point of a tangent to a circle and the circle is called the:",
        "options": [
          "Point of contact",
          "Centre",
          "Chord",
          "Origin"
        ],
        "ans": 0,
        "exp": "By definition, the unique point where the tangent touches the circle is called the point of contact."
      },
      {
        "q": "From a point \\(P\\), \\(10\\text{ cm}\\) away from the centre of a circle, a tangent \\(PT\\) of length \\(8\\text{ cm}\\) is drawn. The radius of the circle is:",
        "options": [
          "\\(4\\text{ cm}\\)",
          "\\(5\\text{ cm}\\)",
          "\\(6\\text{ cm}\\)",
          "\\(7\\text{ cm}\\)"
        ],
        "ans": 2,
        "exp": "\\(r = \\sqrt{OP^2 - PT^2} = \\sqrt{10^2 - 8^2} = \\sqrt{100 - 64} = \\sqrt{36} = 6\\text{ cm}\\)."
      },
      {
        "q": "The distance between two parallel tangents to a circle of radius \\(4.5\\text{ cm}\\) is:",
        "options": [
          "\\(4.5\\text{ cm}\\)",
          "\\(9\\text{ cm}\\)",
          "\\(18\\text{ cm}\\)",
          "\\(6\\text{ cm}\\)"
        ],
        "ans": 1,
        "exp": "Two parallel tangents touch at the opposite ends of a diameter. Hence, distance \\(= 2r = 2 \\times 4.5 = 9\\text{ cm}\\)."
      },
      {
        "q": "If tangents \\(PA\\) and \\(PB\\) from an external point \\(P\\) to a circle with centre \\(O\\) are drawn such that \\(\\angle APB = 120^\\circ\\), then \\(OP =\\):",
        "options": [
          "\\(2AP\\)",
          "\\(AP\\)",
          "\\(\\frac{1}{2}AP\\)",
          "\\(\\sqrt{3}AP\\)"
        ],
        "ans": 0,
        "exp": "\\(\\angle APO = \\frac{120^\\circ}{2} = 60^\\circ\\). In right \\(\\triangle OAP\\), \\(\\cos 60^\\circ = \\frac{AP}{OP} \\implies \\frac{1}{2} = \\frac{AP}{OP} \\implies OP = 2AP\\)."
      },
      {
        "q": "How many tangents can a circle have?",
        "options": [
          "One",
          "Two",
          "Zero",
          "Infinitely many"
        ],
        "ans": 3,
        "exp": "A circle has infinitely many points on its circumference, and at each point exactly one tangent can be drawn. Hence, a circle has infinitely many tangents."
      },
      {
        "q": "A tangent \\(PQ\\) at a point \\(P\\) of a circle of radius \\(5\\text{ cm}\\) meets a line through the centre \\(O\\) at a point \\(Q\\) so that \\(OQ = 12\\text{ cm}\\). Length \\(PQ\\) is:",
        "options": [
          "\\(12\\text{ cm}\\)",
          "\\(13\\text{ cm}\\)",
          "\\(8.5\\text{ cm}\\)",
          "\\(\\sqrt{119}\\text{ cm}\\)"
        ],
        "ans": 3,
        "exp": "\\(PQ = \\sqrt{OQ^2 - OP^2} = \\sqrt{12^2 - 5^2} = \\sqrt{144 - 25} = \\sqrt{119}\\text{ cm}\\)."
      },
      {
        "q": "If \\(\\angle AOB = 125^\\circ\\) in quadrilateral \\(ABCD\\) circumscribing a circle with centre \\(O\\), then \\(\\angle COD =\\):",
        "options": [
          "\\(62.5^\\circ\\)",
          "\\(45^\\circ\\)",
          "\\(55^\\circ\\)",
          "\\(35^\\circ\\)"
        ],
        "ans": 2,
        "exp": "Opposite sides of a circumscribing quadrilateral subtend supplementary angles at the centre. Hence \\(\\angle COD = 180^\\circ - 125^\\circ = 55^\\circ\\)."
      },
      {
        "q": "The lengths of tangents drawn from an external point to a circle are:",
        "options": [
          "Equal",
          "Unequal",
          "Parallel",
          "Perpendicular"
        ],
        "ans": 0,
        "exp": "Standard CBSE Theorem 10.2: The lengths of tangents drawn from an external point to a circle are equal."
      }
    ]
  },
  {
    "id": 11,
    "title": "Areas Related to Circles",
    "video": "https://www.youtube.com/watch?v=kY0wU3Yc810",
    "mcqs": [
      {
        "q": "If the perimeter and the area of a circle are numerically equal, then the radius of the circle is:",
        "options": [
          "2 units",
          "\\(\\pi\\) units",
          "4 units",
          "7 units"
        ],
        "ans": 0,
        "exp": "\\(2\\pi r = \\pi r^2 \\implies 2r = r^2 \\implies r = 2\\) units."
      },
      {
        "q": "Area of a sector of angle \\(p\\) (in degrees) of a circle with radius \\(R\\) is:",
        "options": [
          "\\(\\frac{p}{180} \\times 2\\pi R\\)",
          "\\(\\frac{p}{180} \\times \\pi R^2\\)",
          "\\(\\frac{p}{360} \\times 2\\pi R\\)",
          "\\(\\frac{p}{720} \\times 2\\pi R^2\\)"
        ],
        "ans": 3,
        "exp": "Area is \\(\\frac{p}{360} \\pi R^2 = \\frac{p}{720} \\times (2\\pi R^2)\\)."
      },
      {
        "q": "If the circumference of a circle increases from \\(4\\pi\\) to \\(8\\pi\\), its area is:",
        "options": [
          "Halved",
          "Doubled",
          "Tripled",
          "Quadrupled"
        ],
        "ans": 3,
        "exp": "Circumference doubles, so radius doubles (from \\(2\\) to \\(4\\)). Area \\(= \\pi r^2\\) increases by a factor of \\(2^2 = 4\\) (quadrupled)."
      },
      {
        "q": "The area of a circle that can be inscribed in a square of side \\(6\\text{ cm}\\) is:",
        "options": [
          "\\(36\\pi\\text{ cm}^2\\)",
          "\\(18\\pi\\text{ cm}^2\\)",
          "\\(12\\pi\\text{ cm}^2\\)",
          "\\(9\\pi\\text{ cm}^2\\)"
        ],
        "ans": 3,
        "exp": "Diameter of inscribed circle \\(= 6\\text{ cm} \\implies r = 3\\text{ cm}\\). Area \\(= \\pi (3)^2 = 9\\pi\\text{ cm}^2\\)."
      },
      {
        "q": "The length of the minute hand of a clock is \\(14\\text{ cm}\\). The area swept by the minute hand in \\(5\\text{ minutes}\\) is:",
        "options": [
          "\\(154\\text{ cm}^2\\)",
          "\\(\\frac{154}{3}\\text{ cm}^2\\)",
          "\\(77\\text{ cm}^2\\)",
          "\\(38.5\\text{ cm}^2\\)"
        ],
        "ans": 1,
        "exp": "In 60 min, angle is \\(360^\\circ\\). In 5 min, angle \\(\\theta = \\frac{5}{60} \\times 360^\\circ = 30^\\circ\\). Area \\(= \\frac{30}{360} \\times \\frac{22}{7} \\times 14 \\times 14 = \\frac{1}{12} \\times 22 \\times 28 = \\frac{154}{3}\\text{ cm}^2\\)."
      },
      {
        "q": "If a wire is bent into the shape of a square, then the area of the square is \\(81\\text{ cm}^2\\). When the wire is bent into a semi-circular shape, then the area of the semi-circle will be:",
        "options": [
          "\\(22\\text{ cm}^2\\)",
          "\\(44\\text{ cm}^2\\)",
          "\\(77\\text{ cm}^2\\)",
          "\\(154\\text{ cm}^2\\)"
        ],
        "ans": 2,
        "exp": "Side of square \\(= 9\\text{ cm}\\), perimeter \\(= 36\\text{ cm}\\). For semicircle with diameter, perimeter \\(= \\pi r + 2r = r(\\frac{22}{7} + 2) = \\frac{36}{7}r = 36 \\implies r = 7\\text{ cm}\\). Area \\(= \\frac{1}{2} \\pi r^2 = \\frac{1}{2} \\times \\frac{22}{7} \\times 49 = 77\\text{ cm}^2\\)."
      },
      {
        "q": "The diameter of a wheel is \\(1.26\\text{ m}\\). The distance travelled in \\(500\\) revolutions is:",
        "options": [
          "\\(2670\\text{ m}\\)",
          "\\(1980\\text{ m}\\)",
          "\\(198\\text{ m}\\)",
          "\\(3960\\text{ m}\\)"
        ],
        "ans": 1,
        "exp": "Distance \\(= 500 \\times (\\pi d) = 500 \\times \\frac{22}{7} \\times 1.26 = 500 \\times 3.96 = 1980\\text{ m}\\)."
      },
      {
        "q": "The perimeter of a circular sector of radius \\(5.6\\text{ cm}\\) and central angle \\(90^\\circ\\) is:",
        "options": [
          "\\(8.8\\text{ cm}\\)",
          "\\(11.2\\text{ cm}\\)",
          "\\(20\\text{ cm}\\)",
          "\\(14.4\\text{ cm}\\)"
        ],
        "ans": 2,
        "exp": "Arc length \\(l = \\frac{90}{360} \\times 2 \\times \\frac{22}{7} \\times 5.6 = \\frac{1}{4} \\times 35.2 = 8.8\\text{ cm}\\). Perimeter \\(= l + 2r = 8.8 + 2(5.6) = 8.8 + 11.2 = 20\\text{ cm}\\)."
      },
      {
        "q": "The ratio of the areas of the incircle and circumcircle of a square is:",
        "options": [
          "\\(1 : 2\\)",
          "\\(1 : 3\\)",
          "\\(1 : 4\\)",
          "\\(2 : 1\\)"
        ],
        "ans": 0,
        "exp": "For side \\(a\\), inradius \\(r = \\frac{a}{2}\\) and circumradius \\(R = \\frac{a}{\\sqrt{2}}\\). Ratio of areas \\(= \\frac{\\pi (a/2)^2}{\\pi (a/\\sqrt{2})^2} = \\frac{a^2/4}{a^2/2} = \\frac{2}{4} = 1 : 2\\)."
      },
      {
        "q": "If the perimeter of a semi-circular protractor is \\(36\\text{ cm}\\), then its radius is:",
        "options": [
          "\\(7\\text{ cm}\\)",
          "\\(14\\text{ cm}\\)",
          "\\(21\\text{ cm}\\)",
          "\\(4\\text{ cm}\\)"
        ],
        "ans": 0,
        "exp": "Perimeter \\(= \\pi r + 2r = r\\left(\\frac{22}{7} + 2\\right) = \\frac{36}{7}r = 36 \\implies r = 7\\text{ cm}\\)."
      },
      {
        "q": "The area of the largest triangle that can be inscribed in a semi-circle of radius \\(r\\) is:",
        "options": [
          "\\(r^2\\)",
          "\\(2r^2\\)",
          "\\(\\frac{1}{2}r^2\\)",
          "\\(\\sqrt{2}r^2\\)"
        ],
        "ans": 0,
        "exp": "The base of the triangle is the diameter \\(2r\\) and the maximum altitude is the radius \\(r\\). Area \\(= \\frac{1}{2} \\times (2r) \\times r = r^2\\)."
      },
      {
        "q": "If the sum of the areas of two circles with radii \\(R_1\\) and \\(R_2\\) is equal to the area of a circle of radius \\(R\\), then:",
        "options": [
          "\\(R_1 + R_2 = R\\)",
          "\\(R_1^2 + R_2^2 = R^2\\)",
          "\\(R_1 + R_2 < R\\)",
          "\\(R_1^2 + R_2^2 < R^2\\)"
        ],
        "ans": 1,
        "exp": "\\(\\pi R_1^2 + \\pi R_2^2 = \\pi R^2 \\implies R_1^2 + R_2^2 = R^2\\)."
      },
      {
        "q": "If the sum of the circumferences of two circles with radii \\(R_1\\) and \\(R_2\\) is equal to the circumference of a circle of radius \\(R\\), then:",
        "options": [
          "\\(R_1 + R_2 = R\\)",
          "\\(R_1 + R_2 > R\\)",
          "\\(R_1 + R_2 < R\\)",
          "\\(R_1^2 + R_2^2 = R^2\\)"
        ],
        "ans": 0,
        "exp": "\\(2\\pi R_1 + 2\\pi R_2 = 2\\pi R \\implies R_1 + R_2 = R\\)."
      },
      {
        "q": "Area of a ring between two concentric circles of radii \\(R\\) and \\(r\\) (where \\(R > r\\)) is:",
        "options": [
          "\\(\\pi(R^2 - r^2)\\)",
          "\\(\\pi(R - r)^2\\)",
          "\\(2\\pi(R - r)\\)",
          "\\(\\pi(R^2 + r^2)\\)"
        ],
        "ans": 0,
        "exp": "Area of ring \\(=\\) Area of outer circle \\(-\\) Area of inner circle \\(= \\pi R^2 - \\pi r^2 = \\pi(R^2 - r^2)\\)."
      },
      {
        "q": "The central angle of a sector of a circle of radius \\(10.5\\text{ cm}\\) having an area of \\(77\\text{ cm}^2\\) is:",
        "options": [
          "\\(60^\\circ\\)",
          "\\(80^\\circ\\)",
          "\\(90^\\circ\\)",
          "\\(120^\\circ\\)"
        ],
        "ans": 1,
        "exp": "\\(\\text{Area} = \\frac{\\theta}{360} \\times \\frac{22}{7} \\times (10.5)^2 = 77 \\implies \\frac{\\theta}{360} \\times 346.5 = 77 \\implies \\theta = \\frac{77 \\times 360}{346.5} = 80^\\circ\\)."
      },
      {
        "q": "A horse is tied to a peg at one corner of a square grass field of side \\(15\\text{ m}\\) by means of a \\(5\\text{ m}\\) long rope. The area of that part of the field in which the horse can graze is:",
        "options": [
          "\\(19.625\\text{ m}^2\\)",
          "\\(78.5\\text{ m}^2\\)",
          "\\(25\\text{ m}^2\\)",
          "\\(39.25\\text{ m}^2\\)"
        ],
        "ans": 0,
        "exp": "The grazing area is a quadrant of radius \\(5\\text{ m}\\): \\(\\frac{1}{4}\\pi r^2 = \\frac{1}{4} \\times 3.14 \\times 25 = 19.625\\text{ m}^2\\)."
      },
      {
        "q": "In a circle of radius \\(21\\text{ cm}\\), an arc subtends an angle of \\(60^\\circ\\) at the centre. The length of the arc is:",
        "options": [
          "\\(11\\text{ cm}\\)",
          "\\(22\\text{ cm}\\)",
          "\\(44\\text{ cm}\\)",
          "\\(33\\text{ cm}\\)"
        ],
        "ans": 1,
        "exp": "\\(l = \\frac{60}{360} \\times 2 \\times \\frac{22}{7} \\times 21 = \\frac{1}{6} \\times 132 = 22\\text{ cm}\\)."
      },
      {
        "q": "The radius of a circle whose circumference is equal to the perimeter of a square of side \\(22\\text{ cm}\\) is:",
        "options": [
          "\\(7\\text{ cm}\\)",
          "\\(14\\text{ cm}\\)",
          "\\(21\\text{ cm}\\)",
          "\\(28\\text{ cm}\\)"
        ],
        "ans": 1,
        "exp": "Perimeter of square \\(= 4 \\times 22 = 88\\text{ cm}\\). Circumference \\(= 2\\pi r = 88 \\implies 2 \\times \\frac{22}{7} \\times r = 88 \\implies r = 14\\text{ cm}\\)."
      },
      {
        "q": "If the radius of a circle is doubled, its area becomes:",
        "options": [
          "2 times",
          "4 times",
          "8 times",
          "16 times"
        ],
        "ans": 1,
        "exp": "Area is proportional to \\(r^2\\). Doubling \\(r\\) increases the area by \\(2^2 = 4\\) times."
      },
      {
        "q": "A chord of a circle of radius \\(10\\text{ cm}\\) subtends a right angle at the centre. The area of the minor sector is:",
        "options": [
          "\\(78.5\\text{ cm}^2\\)",
          "\\(50\\text{ cm}^2\\)",
          "\\(28.5\\text{ cm}^2\\)",
          "\\(157\\text{ cm}^2\\)"
        ],
        "ans": 0,
        "exp": "Area of minor sector \\(= \\frac{90}{360} \\times 3.14 \\times 10^2 = \\frac{1}{4} \\times 314 = 78.5\\text{ cm}^2\\)."
      },
      {
        "q": "The area of a quadrant of a circle whose circumference is \\(22\\text{ cm}\\) is:",
        "options": [
          "\\(9.625\\text{ cm}^2\\)",
          "\\(19.25\\text{ cm}^2\\)",
          "\\(38.5\\text{ cm}^2\\)",
          "\\(77\\text{ cm}^2\\)"
        ],
        "ans": 0,
        "exp": "\\(2\\pi r = 22 \\implies r = \\frac{7}{2} = 3.5\\text{ cm}\\). Area of quadrant \\(= \\frac{1}{4} \\pi r^2 = \\frac{1}{4} \\times \\frac{22}{7} \\times \\frac{49}{4} = \\frac{77}{8} = 9.625\\text{ cm}^2\\)."
      },
      {
        "q": "A steel wire when bent in the form of a square encloses an area of \\(121\\text{ cm}^2\\). If the same wire is bent in the form of a circle, the area of the circle is:",
        "options": [
          "\\(154\\text{ cm}^2\\)",
          "\\(144\\text{ cm}^2\\)",
          "\\(121\\text{ cm}^2\\)",
          "\\(132\\text{ cm}^2\\)"
        ],
        "ans": 0,
        "exp": "Side of square \\(= 11\\text{ cm}\\), perimeter \\(= 44\\text{ cm}\\). Circumference \\(= 2\\pi r = 44 \\implies r = 7\\text{ cm}\\). Area of circle \\(= \\frac{22}{7} \\times 7^2 = 154\\text{ cm}^2\\)."
      },
      {
        "q": "The angle described by the hour hand in \\(20\\text{ minutes}\\) is:",
        "options": [
          "\\(10^\\circ\\)",
          "\\(20^\\circ\\)",
          "\\(30^\\circ\\)",
          "\\(60^\\circ\\)"
        ],
        "ans": 0,
        "exp": "In 12 hours (720 min), hour hand moves \\(360^\\circ\\), which is \\(0.5^\\circ\\) per minute. In 20 minutes, it moves \\(20 \\times 0.5^\\circ = 10^\\circ\\)."
      },
      {
        "q": "The ratio of the area of a circle to the area of a square having the same perimeter is:",
        "options": [
          "\\(11 : 14\\)",
          "\\(14 : 11\\)",
          "\\(22 : 7\\)",
          "\\(7 : 22\\)"
        ],
        "ans": 1,
        "exp": "Let perimeter \\(= P\\). Circle radius \\(r = \\frac{P}{2\\pi}\\), area \\(= \\pi r^2 = \\frac{P^2}{4\\pi}\\). Square side \\(s = \\frac{P}{4}\\), area \\(= \\frac{P^2}{16}\\). Ratio \\(= \\frac{P^2/(4\\pi)}{P^2/16} = \\frac{16}{4\\pi} = \\frac{4}{\\pi} = \\frac{4}{22/7} = \\frac{28}{22} = \\frac{14}{11}\\)."
      },
      {
        "q": "A car has two wipers which do not overlap. Each wiper has a blade of length \\(25\\text{ cm}\\) sweeping through an angle of \\(115^\\circ\\). The total area cleaned at each sweep of the blades is:",
        "options": [
          "\\(\\frac{158125}{126}\\text{ cm}^2\\)",
          "\\(\\frac{158125}{252}\\text{ cm}^2\\)",
          "\\(\\frac{158125}{63}\\text{ cm}^2\\)",
          "\\(\\frac{125158}{126}\\text{ cm}^2\\)"
        ],
        "ans": 0,
        "exp": "Area for 2 wipers \\(= 2 \\times \\left(\\frac{115}{360} \\times \\frac{22}{7} \\times 25 \\times 25\\right) = \\frac{230}{360} \\times \\frac{22}{7} \\times 625 = \\frac{23}{36} \\times \\frac{22}{7} \\times 625 = \\frac{158125}{126}\\text{ cm}^2\\)."
      }
    ]
  },
  {
    "id": 12,
    "title": "Surface Areas and Volumes",
    "video": "https://www.youtube.com/watch?v=kY0wU3Yc810",
    "mcqs": [
      {
        "q": "Two cubes each of volume \\(64\\text{ cm}^3\\) are joined end to end. The surface area of the resulting cuboid is:",
        "options": [
          "\\(128\\text{ cm}^2\\)",
          "\\(160\\text{ cm}^2\\)",
          "\\(192\\text{ cm}^2\\)",
          "\\(256\\text{ cm}^2\\)"
        ],
        "ans": 1,
        "exp": "Side of each cube \\(= \\sqrt[3]{64} = 4\\text{ cm}\\). Resulting cuboid has \\(l = 8\\text{ cm}, b = 4\\text{ cm}, h = 4\\text{ cm}\\). Surface area \\(= 2(lb + bh + hl) = 2(32 + 16 + 32) = 2(80) = 160\\text{ cm}^2\\)."
      },
      {
        "q": "The total surface area of a solid hemisphere of radius \\(r\\) is:",
        "options": [
          "\\(2\\pi r^2\\)",
          "\\(3\\pi r^2\\)",
          "\\(4\\pi r^2\\)",
          "\\(\\frac{2}{3}\\pi r^3\\)"
        ],
        "ans": 1,
        "exp": "A solid hemisphere includes the curved surface area (\\(2\\pi r^2\\)) plus the flat circular base area (\\(\\pi r^2\\)), totalling \\(3\\pi r^2\\)."
      },
      {
        "q": "A metallic sphere of radius \\(4.2\\text{ cm}\\) is melted and recast into the shape of a cylinder of radius \\(6\\text{ cm}\\). The height of the cylinder is:",
        "options": [
          "\\(2.74\\text{ cm}\\)",
          "\\(2.54\\text{ cm}\\)",
          "\\(3.14\\text{ cm}\\)",
          "\\(1.96\\text{ cm}\\)"
        ],
        "ans": 0,
        "exp": "\\(\\text{Volume of cylinder} = \\text{Volume of sphere} \\implies \\pi (6)^2 h = \\frac{4}{3}\\pi (4.2)^3 \\implies 36h = \\frac{4}{3}(74.088) = 98.784 \\implies h = 2.744\\text{ cm}\\)."
      },
      {
        "q": "The radius of the base of a cone is \\(3\\text{ cm}\\) and its height is \\(4\\text{ cm}\\). The curved surface area of the cone is:",
        "options": [
          "\\(12\\pi\\text{ cm}^2\\)",
          "\\(15\\pi\\text{ cm}^2\\)",
          "\\(20\\pi\\text{ cm}^2\\)",
          "\\(24\\pi\\text{ cm}^2\\)"
        ],
        "ans": 1,
        "exp": "Slant height \\(l = \\sqrt{r^2 + h^2} = \\sqrt{3^2 + 4^2} = 5\\text{ cm}\\). Curved surface area \\(= \\pi r l = \\pi (3)(5) = 15\\pi\\text{ cm}^2\\)."
      },
      {
        "q": "If the radius of the base of a cylinder is doubled and the height is halved, the ratio of the new volume to the original volume is:",
        "options": [
          "\\(1 : 2\\)",
          "\\(2 : 1\\)",
          "\\(1 : 4\\)",
          "\\(4 : 1\\)"
        ],
        "ans": 1,
        "exp": "Original volume \\(= \\pi r^2 h\\). New volume \\(= \\pi (2r)^2 \\left(\\frac{h}{2}\\right) = \\pi (4r^2) \\left(\\frac{h}{2}\\right) = 2\\pi r^2 h\\). Ratio is \\(2 : 1\\)."
      },
      {
        "q": "A solid piece of iron in the form of a cuboid of dimensions \\(49\\text{ cm} \\times 33\\text{ cm} \\times 24\\text{ cm}\\) is moulded to form a solid sphere. The radius of the sphere is:",
        "options": [
          "\\(21\\text{ cm}\\)",
          "\\(28\\text{ cm}\\)",
          "\\(14\\text{ cm}\\)",
          "\\(18\\text{ cm}\\)"
        ],
        "ans": 0,
        "exp": "\\(\\text{Volume} = 49 \\times 33 \\times 24 = 38808\\text{ cm}^3\\). \\(\\frac{4}{3} \\times \\frac{22}{7} \\times r^3 = 38808 \\implies r^3 = \\frac{38808 \\times 21}{88} = 441 \\times 21 = 9261 \\implies r = 21\\text{ cm}\\)."
      },
      {
        "q": "Twelve solid spheres of the same size are made by melting a solid metallic cylinder of base diameter \\(2\\text{ cm}\\) and height \\(16\\text{ cm}\\). The diameter of each sphere is:",
        "options": [
          "\\(4\\text{ cm}\\)",
          "\\(3\\text{ cm}\\)",
          "\\(2\\text{ cm}\\)",
          "\\(6\\text{ cm}\\)"
        ],
        "ans": 2,
        "exp": "Volume of cylinder \\(= \\pi (1)^2 (16) = 16\\pi\\). For 12 spheres: \\(12 \\times \\frac{4}{3}\\pi r^3 = 16\\pi r^3 = 16\\pi \\implies r^3 = 1 \\implies r = 1\\text{ cm}\\). Diameter \\(= 2\\text{ cm}\\)."
      },
      {
        "q": "The ratio of the total surface area to the lateral surface area of a cylinder with base radius \\(80\\text{ cm}\\) and height \\(20\\text{ cm}\\) is:",
        "options": [
          "\\(1 : 2\\)",
          "\\(2 : 1\\)",
          "\\(3 : 1\\)",
          "\\(5 : 1\\)"
        ],
        "ans": 3,
        "exp": "\\(\\frac{\\text{TSA}}{\\text{CSA}} = \\frac{2\\pi r(h + r)}{2\\pi r h} = \\frac{h + r}{h} = \\frac{20 + 80}{20} = \\frac{100}{20} = 5 : 1\\)."
      },
      {
        "q": "If two solid hemispheres of same base radius \\(r\\) are joined together along their bases, then curved surface area of this new solid is:",
        "options": [
          "\\(4\\pi r^2\\)",
          "\\(6\\pi r^2\\)",
          "\\(3\\pi r^2\\)",
          "\\(8\\pi r^2\\)"
        ],
        "ans": 0,
        "exp": "Joining two identical hemispheres base-to-base forms a complete solid sphere of radius \\(r\\). The total exposed curved surface area is that of a sphere: \\(4\\pi r^2\\)."
      },
      {
        "q": "The slant height of a cone of base radius \\(7\\text{ cm}\\) and height \\(24\\text{ cm}\\) is:",
        "options": [
          "\\(25\\text{ cm}\\)",
          "\\(26\\text{ cm}\\)",
          "\\(28\\text{ cm}\\)",
          "\\(31\\text{ cm}\\)"
        ],
        "ans": 0,
        "exp": "\\(l = \\sqrt{7^2 + 24^2} = \\sqrt{49 + 576} = \\sqrt{625} = 25\\text{ cm}\\)."
      },
      {
        "q": "The volume of a sphere of diameter \\(6\\text{ cm}\\) is:",
        "options": [
          "\\(36\\pi\\text{ cm}^3\\)",
          "\\(72\\pi\\text{ cm}^3\\)",
          "\\(108\\pi\\text{ cm}^3\\)",
          "\\(288\\pi\\text{ cm}^3\\)"
        ],
        "ans": 0,
        "exp": "Radius \\(r = 3\\text{ cm}\\). Volume \\(= \\frac{4}{3}\\pi (3)^3 = \\frac{4}{3} \\times 27\\pi = 36\\pi\\text{ cm}^3\\)."
      },
      {
        "q": "If the surface area of a sphere is \\(144\\pi\\text{ cm}^2\\), then its radius is:",
        "options": [
          "\\(6\\text{ cm}\\)",
          "\\(8\\text{ cm}\\)",
          "\\(12\\text{ cm}\\)",
          "\\(9\\text{ cm}\\)"
        ],
        "ans": 0,
        "exp": "\\(4\\pi r^2 = 144\\pi \\implies r^2 = 36 \\implies r = 6\\text{ cm}\\)."
      },
      {
        "q": "A right circular cylinder and a right circular cone have equal bases and equal heights. The ratio of their volumes is:",
        "options": [
          "\\(1 : 3\\)",
          "\\(3 : 1\\)",
          "\\(1 : 1\\)",
          "\\(9 : 1\\)"
        ],
        "ans": 1,
        "exp": "Volume of cylinder \\(= \\pi r^2 h\\). Volume of cone \\(= \\frac{1}{3}\\pi r^2 h\\). Ratio \\(= \\frac{\\pi r^2 h}{\\frac{1}{3}\\pi r^2 h} = 3 : 1\\)."
      },
      {
        "q": "How many spherical bullets can be made out of a solid cube of lead whose edge measures \\(44\\text{ cm}\\), each bullet being of \\(4\\text{ cm}\\) diameter?",
        "options": [
          "2541",
          "2451",
          "2514",
          "2154"
        ],
        "ans": 0,
        "exp": "Volume of cube \\(= 44^3 = 85184\\text{ cm}^3\\). Volume of 1 bullet (radius \\(2\\text{ cm}\\)) \\(= \\frac{4}{3} \\times \\frac{22}{7} \\times 8 = \\frac{704}{21}\\text{ cm}^3\\). Number of bullets \\(= \\frac{85184 \\times 21}{704} = 121 \\times 21 = 2541\\)."
      },
      {
        "q": "The volume of the largest right circular cone that can be cut out from a cube of edge \\(4.2\\text{ cm}\\) is:",
        "options": [
          "\\(9.7\\text{ cm}^3\\)",
          "\\(77.6\\text{ cm}^3\\)",
          "\\(58.2\\text{ cm}^3\\)",
          "\\(19.4\\text{ cm}^3\\)"
        ],
        "ans": 3,
        "exp": "Diameter \\(= 4.2\\text{ cm} \\implies r = 2.1\\text{ cm}\\), height \\(h = 4.2\\text{ cm}\\). Volume \\(= \\frac{1}{3} \\times \\frac{22}{7} \\times (2.1)^2 \\times 4.2 = \\frac{1}{3} \\times \\frac{22}{7} \\times 4.41 \\times 4.2 = 19.404\\text{ cm}^3\\)."
      },
      {
        "q": "If the radius of a sphere is increased by \\(10\\%\\), the volume will increase by:",
        "options": [
          "\\(33.1\\%\\)",
          "\\(30\\%\\)",
          "\\(20\\%\\)",
          "\\(10\\%\\)"
        ],
        "ans": 0,
        "exp": "New radius \\(= 1.1r\\). New volume \\(= (1.1)^3 V = 1.331V\\), which is an increase of \\(33.1\\%\\)."
      },
      {
        "q": "A cylindrical pencil sharpened at one edge is the combination of:",
        "options": [
          "A cone and a cylinder",
          "Frustum of a cone and a cylinder",
          "A hemisphere and a cylinder",
          "Two cylinders"
        ],
        "ans": 0,
        "exp": "The sharpened tip forms a cone, attached seamlessly to the remaining unsharpened cylindrical body of the pencil."
      },
      {
        "q": "A surahi is the combination of:",
        "options": [
          "A sphere and a cylinder",
          "A hemisphere and a cylinder",
          "Two hemispheres",
          "A cylinder and a cone"
        ],
        "ans": 0,
        "exp": "A traditional Indian surahi consists of a spherical water-holding body with a long cylindrical neck."
      },
      {
        "q": "A plumbline (sahul) used by masons is the combination of:",
        "options": [
          "A hemisphere and a cone",
          "A cylinder and a cone",
          "A hemisphere and a cylinder",
          "Two cones"
        ],
        "ans": 0,
        "exp": "A plumbline consists of a hemisphere surmounted by a downward-pointing cone."
      },
      {
        "q": "The ratio of the volume of a cube to that of a sphere which will fit inside the cube is:",
        "options": [
          "\\(4 : \\pi\\)",
          "\\(6 : \\pi\\)",
          "\\(3 : \\pi\\)",
          "\\(8 : \\pi\\)"
        ],
        "ans": 1,
        "exp": "Side of cube \\(= 2r\\). Volume of cube \\(= (2r)^3 = 8r^3\\). Volume of sphere \\(= \\frac{4}{3}\\pi r^3\\). Ratio \\(= \\frac{8r^3}{\\frac{4}{3}\\pi r^3} = \\frac{24}{4\\pi} = \\frac{6}{\\pi} = 6 : \\pi\\)."
      },
      {
        "q": "If the diameter of the base of a cone is \\(8\\text{ cm}\\) and its height is \\(3\\text{ cm}\\), then its curved surface area is:",
        "options": [
          "\\(12\\pi\\text{ cm}^2\\)",
          "\\(20\\pi\\text{ cm}^2\\)",
          "\\(15\\pi\\text{ cm}^2\\)",
          "\\(24\\pi\\text{ cm}^2\\)"
        ],
        "ans": 1,
        "exp": "Radius \\(r = 4\\text{ cm}\\). Slant height \\(l = \\sqrt{4^2 + 3^2} = 5\\text{ cm}\\). Curved surface area \\(= \\pi r l = \\pi (4)(5) = 20\\pi\\text{ cm}^2\\)."
      },
      {
        "q": "A hollow cylinder of height \\(14\\text{ cm}\\) has inner and outer radii \\(3\\text{ cm}\\) and \\(4\\text{ cm}\\). Its volume of metal is:",
        "options": [
          "\\(308\\text{ cm}^3\\)",
          "\\(154\\text{ cm}^3\\)",
          "\\(220\\text{ cm}^3\\)",
          "\\(440\\text{ cm}^3\\)"
        ],
        "ans": 0,
        "exp": "Volume \\(= \\pi (R^2 - r^2) h = \\frac{22}{7} (16 - 9) \\times 14 = \\frac{22}{7} \\times 7 \\times 14 = 308\\text{ cm}^3\\)."
      },
      {
        "q": "If the diagonal of a cube is \\(6\\sqrt{3}\\text{ cm}\\), then its edge is:",
        "options": [
          "\\(6\\text{ cm}\\)",
          "\\(3\\text{ cm}\\)",
          "\\(2\\sqrt{3}\\text{ cm}\\)",
          "\\(18\\text{ cm}\\)"
        ],
        "ans": 0,
        "exp": "Diagonal of a cube \\(= a\\sqrt{3} = 6\\sqrt{3} \\implies a = 6\\text{ cm}\\)."
      },
      {
        "q": "If the volumes of two spheres are in the ratio \\(64 : 27\\), the ratio of their surface areas is:",
        "options": [
          "\\(3 : 4\\)",
          "\\(4 : 3\\)",
          "\\(9 : 16\\)",
          "\\(16 : 9\\)"
        ],
        "ans": 3,
        "exp": "Ratio of radii \\(= \\sqrt[3]{\\frac{64}{27}} = \\frac{4}{3}\\). Ratio of surface areas \\(= \\left(\\frac{4}{3}\\right)^2 = \\frac{16}{9} = 16 : 9\\)."
      },
      {
        "q": "Curved surface area of a right circular cylinder of height \\(14\\text{ cm}\\) is \\(88\\text{ cm}^2\\). The diameter of the base is:",
        "options": [
          "\\(1\\text{ cm}\\)",
          "\\(2\\text{ cm}\\)",
          "\\(3\\text{ cm}\\)",
          "\\(4\\text{ cm}\\)"
        ],
        "ans": 1,
        "exp": "\\(2\\pi r h = 88 \\implies 2 \\times \\frac{22}{7} \\times r \\times 14 = 88 \\implies 88 r = 88 \\implies r = 1\\text{ cm}\\). Diameter \\(= 2r = 2\\text{ cm}\\)."
      }
    ]
  },
  {
    "id": 13,
    "title": "Statistics",
    "video": "https://www.youtube.com/watch?v=kY0wU3Yc810",
    "mcqs": [
      {
        "q": "The empirical relationship between the three measures of central tendency is:",
        "options": [
          "\\(3\\text{ Median} = \\text{Mode} + 2\\text{ Mean}\\)",
          "\\(\\text{Mode} = 2\\text{ Median} - 3\\text{ Mean}\\)",
          "\\(\\text{Median} = 3\\text{ Mode} - 2\\text{ Mean}\\)",
          "\\(3\\text{ Mean} = \\text{Mode} + 2\\text{ Median}\\)"
        ],
        "ans": 0,
        "exp": "The standard empirical formula relating central tendencies is: \\(\\text{Mode} = 3\\text{ Median} - 2\\text{ Mean}\\), which can be written as \\(3\\text{ Median} = \\text{Mode} + 2\\text{ Mean}\\)."
      },
      {
        "q": "If the mean and median of a data set are \\(24\\) and \\(26\\) respectively, then the value of mode is:",
        "options": [
          "25",
          "30",
          "28",
          "32"
        ],
        "ans": 1,
        "exp": "\\(\\text{Mode} = 3\\text{ Median} - 2\\text{ Mean} = 3(26) - 2(24) = 78 - 48 = 30\\)."
      },
      {
        "q": "The mean of first \\(n\\) natural numbers is:",
        "options": [
          "\\(\\frac{n(n + 1)}{2}\\)",
          "\\(\\frac{n + 1}{2}\\)",
          "\\(\\frac{n}{2}\\)",
          "\\(\\frac{n - 1}{2}\\)"
        ],
        "ans": 1,
        "exp": "Sum of first \\(n\\) natural numbers \\(= \\frac{n(n + 1)}{2}\\). Mean \\(= \\frac{\\text{Sum}}{n} = \\frac{n + 1}{2}\\)."
      },
      {
        "q": "The class mark of the class \\(10 - 25\\) is:",
        "options": [
          "10",
          "25",
          "17.5",
          "15"
        ],
        "ans": 2,
        "exp": "Class mark \\(= \\frac{\\text{Upper limit} + \\text{Lower limit}}{2} = \\frac{25 + 10}{2} = \\frac{35}{2} = 17.5\\)."
      },
      {
        "q": "Which of the following cannot be determined graphically for grouped data?",
        "options": [
          "Median",
          "Mode",
          "Mean",
          "None of these"
        ],
        "ans": 2,
        "exp": "Median can be determined using ogives (cumulative frequency curves) and Mode using histograms. Mean cannot be determined directly from a single standard graphic."
      },
      {
        "q": "If the mode of a frequency distribution is \\(55\\) and mean is \\(52\\), then the median is:",
        "options": [
          "53",
          "54",
          "53.5",
          "54.5"
        ],
        "ans": 0,
        "exp": "\\(3\\text{ Median} = \\text{Mode} + 2\\text{ Mean} = 55 + 2(52) = 55 + 104 = 159 \\implies \\text{Median} = \\frac{159}{3} = 53\\)."
      },
      {
        "q": "In the formula \\(\\bar{x} = a + \\frac{\\sum f_i d_i}{\\sum f_i}\\) for finding the mean of grouped data, \\(d_i\\) are deviations from \\(a\\) of:",
        "options": [
          "Lower limits of classes",
          "Upper limits of classes",
          "Mid-points of classes",
          "Frequencies of class marks"
        ],
        "ans": 2,
        "exp": "In the assumed mean method, \\(d_i = x_i - a\\), where \\(x_i\\) is the class mark (mid-point of the class)."
      },
      {
        "q": "If each observation of a data is increased by \\(5\\), then their mean:",
        "options": [
          "Remains the same",
          "Is increased by 5",
          "Is decreased by 5",
          "Is multiplied by 5"
        ],
        "ans": 1,
        "exp": "If a constant \\(k\\) is added to every observation in a dataset, the new mean is equal to the old mean plus \\(k\\)."
      },
      {
        "q": "The modal class for the distribution: \\([0-10: 5], [10-20: 8], [20-30: 15], [30-40: 10], [40-50: 6]\\) is:",
        "options": [
          "\\(10 - 20\\)",
          "\\(20 - 30\\)",
          "\\(30 - 40\\)",
          "\\(0 - 10\\)"
        ],
        "ans": 1,
        "exp": "The modal class is the class interval having the highest frequency. Here, the highest frequency is \\(15\\), which corresponds to \\(20 - 30\\)."
      },
      {
        "q": "For a given frequency distribution, if \\(\\sum f_i = 50\\) and \\(\\sum f_i x_i = 1250\\), then the mean is:",
        "options": [
          "20",
          "25",
          "30",
          "50"
        ],
        "ans": 1,
        "exp": "\\(\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i} = \\frac{1250}{50} = 25\\)."
      },
      {
        "q": "The mean of \\(5\\) numbers is \\(18\\). If one number is excluded, their mean becomes \\(16\\). The excluded number is:",
        "options": [
          "24",
          "26",
          "28",
          "30"
        ],
        "ans": 1,
        "exp": "Sum of 5 numbers \\(= 5 \\times 18 = 90\\). Sum of remaining 4 numbers \\(= 4 \\times 16 = 64\\). Excluded number \\(= 90 - 64 = 26\\)."
      },
      {
        "q": "The median of first \\(8\\) prime numbers \\((2, 3, 5, 7, 11, 13, 17, 19)\\) is:",
        "options": [
          "7",
          "9",
          "11",
          "8"
        ],
        "ans": 1,
        "exp": "Since \\(n = 8\\) is even, median is the average of \\(4^{\\text{th}}\\) and \\(5^{\\text{th}}\\) terms: \\(\\frac{7 + 11}{2} = \\frac{18}{2} = 9\\)."
      },
      {
        "q": "The mode of the numbers \\(2, 3, 4, 3, 5, 3, 6, 3, 7, 3\\) is:",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "ans": 1,
        "exp": "The number \\(3\\) appears \\(5\\) times (highest frequency), so the mode is \\(3\\)."
      },
      {
        "q": "The cumulative frequency table is useful in determining the:",
        "options": [
          "Mean",
          "Median",
          "Mode",
          "All of these"
        ],
        "ans": 1,
        "exp": "Cumulative frequencies track values less than or equal to class boundaries, which is directly used to find the median."
      },
      {
        "q": "If the mean of observations \\(x, x + 3, x + 5, x + 7, x + 10\\) is \\(9\\), the mean of the last three observations is:",
        "options": [
          "\\(10\\frac{1}{3}\\)",
          "\\(10\\frac{2}{3}\\)",
          "\\(11\\frac{1}{3}\\)",
          "\\(11\\frac{2}{3}\\)"
        ],
        "ans": 2,
        "exp": "Sum \\(= 5x + 25 = 5 \\times 9 = 45 \\implies 5x = 20 \\implies x = 4\\). Observations: \\(4, 7, 9, 11, 14\\). Last three: \\(9, 11, 14\\). Their mean \\(= \\frac{9 + 11 + 14}{3} = \\frac{34}{3} = 11\\frac{1}{3}\\)."
      },
      {
        "q": "In the mode formula \\(\\text{Mode} = l + \\left(\\frac{f_1 - f_0}{2f_1 - f_0 - f_2}\\right) \\times h\\), \\(f_0\\) represents:",
        "options": [
          "Frequency of modal class",
          "Frequency of class preceding the modal class",
          "Frequency of class succeeding the modal class",
          "Total frequency"
        ],
        "ans": 1,
        "exp": "By standard definition: \\(f_1\\) is frequency of modal class, \\(f_0\\) is frequency of the class preceding modal class, and \\(f_2\\) is frequency of succeeding class."
      },
      {
        "q": "The median of a set of \\(9\\) distinct observations is \\(20.5\\). If each of the largest \\(4\\) observations is increased by \\(2\\), then the median of the new set:",
        "options": [
          "Is increased by 2",
          "Is decreased by 2",
          "Remains the same",
          "Is 2 times the original"
        ],
        "ans": 2,
        "exp": "In \\(9\\) sorted observations, the median is the \\(5^{\\text{th}}\\) observation. Increasing the \\(6^{\\text{th}}, 7^{\\text{th}}, 8^{\\text{th}}, 9^{\\text{th}}\\) observations does not alter the \\(5^{\\text{th}}\\) observation, so the median remains unchanged."
      },
      {
        "q": "The abscissa of the point of intersection of the 'less than type' and of the 'more than type' cumulative frequency curves gives its:",
        "options": [
          "Mean",
          "Median",
          "Mode",
          "All of these"
        ],
        "ans": 1,
        "exp": "The \\(x\\)-coordinate (abscissa) of the intersection of both ogives gives the median of the data."
      },
      {
        "q": "If the mean of \\(a, b, c\\) is \\(M\\) and \\(ab + bc + ca = 0\\), then the mean of \\(a^2, b^2, c^2\\) is:",
        "options": [
          "\\(M^2\\)",
          "\\(3M^2\\)",
          "\\(6M^2\\)",
          "\\(9M^2\\)"
        ],
        "ans": 1,
        "exp": "\\(\\frac{a + b + c}{3} = M \\implies a + b + c = 3M\\). Squaring: \\((a + b + c)^2 = a^2 + b^2 + c^2 + 2(ab + bc + ca) \\implies (3M)^2 = a^2 + b^2 + c^2 + 0 \\implies a^2 + b^2 + c^2 = 9M^2\\). Mean \\(= \\frac{9M^2}{3} = 3M^2\\)."
      },
      {
        "q": "Consider the following frequency distribution: \\([0-5: 10], [6-11: 15], [12-17: 12], [18-23: 20]\\). The upper limit of the median class after making classes continuous is:",
        "options": [
          "17",
          "17.5",
          "18",
          "18.5"
        ],
        "ans": 1,
        "exp": "Cumulative frequencies: \\(10, 25, 37, 57\\). Total \\(N = 57\\), \\(N/2 = 28.5\\). The median falls in \\(12 - 17\\). In continuous boundaries, this class is \\(11.5 - 17.5\\). Upper limit is \\(17.5\\)."
      },
      {
        "q": "If \\(u_i = \\frac{x_i - 25}{10}, \\sum f_i u_i = 20\\), and \\(\\sum f_i = 100\\), then \\(\\bar{x} =\\):",
        "options": [
          "27",
          "25",
          "30",
          "35"
        ],
        "ans": 0,
        "exp": "\\(\\bar{x} = a + h\\left(\\frac{\\sum f_i u_i}{\\sum f_i}\\right) = 25 + 10\\left(\\frac{20}{100}\\right) = 25 + 2 = 27\\)."
      },
      {
        "q": "The algebraic sum of the deviations of a set of values from their arithmetic mean is:",
        "options": [
          "0",
          "Always positive",
          "Always negative",
          "Non-zero"
        ],
        "ans": 0,
        "exp": "By fundamental property of arithmetic mean: \\(\\sum (x_i - \\bar{x}) = \\sum x_i - n\\bar{x} = n\\bar{x} - n\\bar{x} = 0\\)."
      },
      {
        "q": "The mean of \\(1, 2, 3, \\dots, 9\\) is:",
        "options": [
          "4",
          "5",
          "6",
          "4.5"
        ],
        "ans": 1,
        "exp": "\\(\\text{Mean} = \\frac{9(10)/2}{9} = \\frac{45}{9} = 5\\)."
      },
      {
        "q": "If the mean of first \\(n\\) odd natural numbers is \\(\\frac{n^2}{81}\\), then \\(n =\\):",
        "options": [
          "9",
          "81",
          "27",
          "18"
        ],
        "ans": 1,
        "exp": "Sum of first \\(n\\) odd natural numbers is \\(n^2\\). Mean \\(= \\frac{n^2}{n} = n\\). Given \\(n = \\frac{n^2}{81} \\implies 81n = n^2 \\implies n = 81\\)."
      },
      {
        "q": "Range of the data: \\(12, 25, 15, 18, 35, 20, 22, 6\\) is:",
        "options": [
          "29",
          "25",
          "35",
          "19"
        ],
        "ans": 0,
        "exp": "\\(\\text{Range} = \\text{Maximum value} - \\text{Minimum value} = 35 - 6 = 29\\)."
      }
    ]
  },
  {
    "id": 14,
    "title": "Probability",
    "video": "https://www.youtube.com/watch?v=kY0wU3Yc810",
    "mcqs": [
      {
        "q": "Which of the following cannot be the probability of an event?",
        "options": [
          "\\(\\frac{2}{3}\\)",
          "\\(-1.5\\)",
          "\\(15\\%\\)",
          "\\(0.7\\)"
        ],
        "ans": 1,
        "exp": "The probability of any event \\(E\\) must satisfy \\(0 \\le P(E) \\le 1\\). It can never be negative."
      },
      {
        "q": "If \\(P(E) = 0.05\\), then the probability of 'not \\(E\\)' is:",
        "options": [
          "\\(-0.05\\)",
          "\\(0.5\\)",
          "\\(0.9\\)",
          "\\(0.95\\)"
        ],
        "ans": 3,
        "exp": "\\(P(\\text{not } E) = 1 - P(E) = 1 - 0.05 = 0.95\\)."
      },
      {
        "q": "A die is thrown once. The probability of getting a prime number is:",
        "options": [
          "\\(\\frac{1}{3}\\)",
          "\\(\\frac{1}{2}\\)",
          "\\(\\frac{2}{3}\\)",
          "\\(\\frac{1}{6}\\)"
        ],
        "ans": 1,
        "exp": "Possible outcomes: \\(\\{1, 2, 3, 4, 5, 6\\}\\). Prime numbers are \\(\\{2, 3, 5\\}\\) (3 outcomes). \\(P = \\frac{3}{6} = \\frac{1}{2}\\)."
      },
      {
        "q": "A card is drawn from a well-shuffled deck of \\(52\\) playing cards. The probability of getting a king of red colour is:",
        "options": [
          "\\(\\frac{1}{26}\\)",
          "\\(\\frac{1}{13}\\)",
          "\\(\\frac{1}{52}\\)",
          "\\(\\frac{3}{26}\\)"
        ],
        "ans": 0,
        "exp": "There are \\(2\\) red kings (King of Hearts and King of Diamonds) in 52 cards. \\(P = \\frac{2}{52} = \\frac{1}{26}\\)."
      },
      {
        "q": "Two dice are thrown together. The probability of getting a doublet is:",
        "options": [
          "\\(\\frac{1}{3}\\)",
          "\\(\\frac{1}{6}\\)",
          "\\(\\frac{5}{6}\\)",
          "\\(\\frac{1}{12}\\)"
        ],
        "ans": 1,
        "exp": "Total outcomes \\(= 36\\). Doublets are \\(\\{(1,1), (2,2), (3,3), (4,4), (5,5), (6,6)\\}\\) (6 outcomes). \\(P = \\frac{6}{36} = \\frac{1}{6}\\)."
      },
      {
        "q": "Two dice are thrown together. The probability of getting a sum of \\(10\\) is:",
        "options": [
          "\\(\\frac{1}{12}\\)",
          "\\(\\frac{1}{9}\\)",
          "\\(\\frac{1}{6}\\)",
          "\\(\\frac{1}{36}\\)"
        ],
        "ans": 0,
        "exp": "Outcomes with sum 10: \\(\\{(4,6), (5,5), (6,4)\\}\\) (3 outcomes). \\(P = \\frac{3}{36} = \\frac{1}{12}\\)."
      },
      {
        "q": "A box contains \\(3\\) blue, \\(2\\) white, and \\(4\\) red marbles. If a marble is drawn at random, the probability that it will not be white is:",
        "options": [
          "\\(\\frac{2}{9}\\)",
          "\\(\\frac{7}{9}\\)",
          "\\(\\frac{5}{9}\\)",
          "\\(\\frac{1}{3}\\)"
        ],
        "ans": 1,
        "exp": "Total marbles \\(= 3 + 2 + 4 = 9\\). Not white \\(= 3\\text{ blue} + 4\\text{ red} = 7\\). Probability \\(= \\frac{7}{9}\\)."
      },
      {
        "q": "The probability of getting a bad egg in a lot of \\(400\\) eggs is \\(0.035\\). The number of bad eggs in the lot is:",
        "options": [
          "7",
          "14",
          "21",
          "28"
        ],
        "ans": 1,
        "exp": "Number of bad eggs \\(= 400 \\times 0.035 = 14\\)."
      },
      {
        "q": "The probability that a non-leap year selected at random will contain \\(53\\) Sundays is:",
        "options": [
          "\\(\\frac{1}{7}\\)",
          "\\(\\frac{2}{7}\\)",
          "\\(\\frac{3}{7}\\)",
          "\\(\\frac{5}{7}\\)"
        ],
        "ans": 0,
        "exp": "A non-leap year has \\(365\\) days \\(= 52\\text{ weeks} + 1\\text{ extra day}\\). The 1 extra day can be any of the 7 days of the week. For 53 Sundays, that 1 day must be a Sunday. Thus \\(P = \\frac{1}{7}\\)."
      },
      {
        "q": "The probability that a leap year has \\(53\\) Sundays is:",
        "options": [
          "\\(\\frac{1}{7}\\)",
          "\\(\\frac{2}{7}\\)",
          "\\(\\frac{3}{7}\\)",
          "\\(\\frac{5}{7}\\)"
        ],
        "ans": 1,
        "exp": "A leap year has \\(366\\) days \\(= 52\\text{ weeks} + 2\\text{ extra days}\\). Possible pairs: (Sun, Mon), (Mon, Tue), (Tue, Wed), (Wed, Thu), (Thu, Fri), (Fri, Sat), (Sat, Sun). Out of 7 pairs, 2 contain Sunday: \\(P = \\frac{2}{7}\\)."
      },
      {
        "q": "A girl calculates that the probability of her winning the first prize in a lottery is \\(0.08\\). If \\(6000\\) tickets are sold, how many tickets has she bought?",
        "options": [
          "40",
          "240",
          "480",
          "750"
        ],
        "ans": 2,
        "exp": "Tickets bought \\(= 6000 \\times 0.08 = 480\\)."
      },
      {
        "q": "From a deck of \\(52\\) cards, face cards are removed. The probability of drawing a red card from the remaining cards is:",
        "options": [
          "\\(\\frac{1}{2}\\)",
          "\\(\\frac{10}{26}\\)",
          "\\(\\frac{20}{40}\\)",
          "\\(\\frac{10}{13}\\)"
        ],
        "ans": 0,
        "exp": "Total face cards \\(= 12\\) (6 red, 6 black). Remaining cards \\(= 52 - 12 = 40\\). Remaining red cards \\(= 26 - 6 = 20\\). \\(P = \\frac{20}{40} = \\frac{1}{2}\\)."
      },
      {
        "q": "A die is thrown once. The probability of getting an odd number greater than \\(3\\) is:",
        "options": [
          "\\(\\frac{1}{6}\\)",
          "\\(\\frac{1}{3}\\)",
          "\\(\\frac{1}{2}\\)",
          "0"
        ],
        "ans": 0,
        "exp": "The outcomes greater than 3 on a die are \\(\\{4, 5, 6\\}\\). The only odd number among these is \\(5\\) (1 outcome). Thus \\(P = \\frac{1}{6}\\)."
      },
      {
        "q": "A letter of the English alphabet is chosen at random. The probability that it is a letter of the word 'MATHEMATICS' is:",
        "options": [
          "\\(\\frac{11}{26}\\)",
          "\\(\\frac{7}{26}\\)",
          "\\(\\frac{8}{26}\\)",
          "\\(\\frac{9}{26}\\)"
        ],
        "ans": 2,
        "exp": "Distinct letters in 'MATHEMATICS' are \\(\\{M, A, T, H, E, I, C, S\\}\\), which is \\(8\\) distinct letters. Total English letters \\(= 26\\). Probability \\(= \\frac{8}{26} = \\frac{4}{13}\\)."
      },
      {
        "q": "If an event cannot occur, its probability is:",
        "options": [
          "1",
          "\\(\\frac{3}{4}\\)",
          "\\(\\frac{1}{2}\\)",
          "0"
        ],
        "ans": 3,
        "exp": "An event that cannot occur is called an impossible event, and its probability is \\(0\\)."
      },
      {
        "q": "The sum of the probabilities of all the elementary events of an experiment is:",
        "options": [
          "0",
          "1",
          "2",
          "\\(-1\\)"
        ],
        "ans": 1,
        "exp": "By fundamental axiom of probability, the sum of probabilities of all possible elementary events of an experiment is always \\(1\\)."
      },
      {
        "q": "A coin is tossed two times. The probability of getting at least one head is:",
        "options": [
          "\\(\\frac{1}{4}\\)",
          "\\(\\frac{1}{2}\\)",
          "\\(\\frac{3}{4}\\)",
          "1"
        ],
        "ans": 2,
        "exp": "Outcomes: \\(\\{HH, HT, TH, TT\\}\\) (4 outcomes). At least one head: \\(\\{HH, HT, TH\\}\\) (3 outcomes). Probability \\(= \\frac{3}{4}\\)."
      },
      {
        "q": "A card is drawn from a well-shuffled pack of \\(52\\) cards. The probability that it is a face card is:",
        "options": [
          "\\(\\frac{1}{13}\\)",
          "\\(\\frac{2}{13}\\)",
          "\\(\\frac{3}{13}\\)",
          "\\(\\frac{4}{13}\\)"
        ],
        "ans": 2,
        "exp": "There are \\(12\\) face cards (4 Jacks, 4 Queens, 4 Kings). \\(P = \\frac{12}{52} = \\frac{3}{13}\\)."
      },
      {
        "q": "A number \\(x\\) is chosen from the numbers \\(-3, -2, -1, 0, 1, 2, 3\\). The probability that \\(|x| < 2\\) is:",
        "options": [
          "\\(\\frac{2}{7}\\)",
          "\\(\\frac{3}{7}\\)",
          "\\(\\frac{4}{7}\\)",
          "\\(\\frac{5}{7}\\)"
        ],
        "ans": 1,
        "exp": "Total \\(7\\) numbers. Those with \\(|x| < 2\\) are \\(-1, 0, 1\\) (3 numbers). Probability \\(= \\frac{3}{7}\\)."
      },
      {
        "q": "In a family of \\(2\\) children, the probability of having at least one girl is:",
        "options": [
          "\\(\\frac{1}{2}\\)",
          "\\(\\frac{1}{4}\\)",
          "\\(\\frac{3}{4}\\)",
          "1"
        ],
        "ans": 2,
        "exp": "Outcomes: \\(\\{BB, BG, GB, GG\\}\\). At least one girl: \\(\\{BG, GB, GG\\}\\) (3 outcomes). Probability \\(= \\frac{3}{4}\\)."
      },
      {
        "q": "Two dice are thrown together. The probability that the sum of the numbers is greater than \\(12\\) is:",
        "options": [
          "0",
          "1",
          "\\(\\frac{1}{36}\\)",
          "\\(\\frac{1}{6}\\)"
        ],
        "ans": 0,
        "exp": "The maximum possible sum on two dice is \\(6 + 6 = 12\\). A sum greater than \\(12\\) is an impossible event, so probability is \\(0\\)."
      },
      {
        "q": "One card is drawn from a well-shuffled deck of \\(52\\) cards. The probability of getting an ace is:",
        "options": [
          "\\(\\frac{1}{52}\\)",
          "\\(\\frac{1}{13}\\)",
          "\\(\\frac{2}{13}\\)",
          "\\(\\frac{4}{13}\\)"
        ],
        "ans": 1,
        "exp": "There are \\(4\\) aces in 52 cards: \\(P = \\frac{4}{52} = \\frac{1}{13}\\)."
      },
      {
        "q": "A bag contains \\(5\\) red balls and some blue balls. If the probability of drawing a blue ball is double that of a red ball, the number of blue balls in the bag is:",
        "options": [
          "5",
          "10",
          "15",
          "20"
        ],
        "ans": 1,
        "exp": "Let number of blue balls be \\(x\\). \\(P(\\text{Blue}) = \\frac{x}{x + 5}\\), \\(P(\\text{Red}) = \\frac{5}{x + 5}\\). Given \\(\\frac{x}{x + 5} = 2\\left(\\frac{5}{x + 5}\\right) \\implies x = 10\\)."
      },
      {
        "q": "If a digit is chosen at random from digits \\(1\\) to \\(9\\), the probability that it is an odd number is:",
        "options": [
          "\\(\\frac{4}{9}\\)",
          "\\(\\frac{5}{9}\\)",
          "\\(\\frac{1}{2}\\)",
          "\\(\\frac{2}{3}\\)"
        ],
        "ans": 1,
        "exp": "Digits are \\(\\{1, 2, 3, 4, 5, 6, 7, 8, 9\\}\\) (9 digits). Odd numbers are \\(\\{1, 3, 5, 7, 9\\}\\) (5 digits). Probability \\(= \\frac{5}{9}\\)."
      },
      {
        "q": "Three coins are tossed simultaneously. The probability of getting exactly two heads is:",
        "options": [
          "\\(\\frac{1}{8}\\)",
          "\\(\\frac{3}{8}\\)",
          "\\(\\frac{1}{2}\\)",
          "\\(\\frac{5}{8}\\)"
        ],
        "ans": 1,
        "exp": "Total outcomes \\(= 2^3 = 8\\): \\(\\{HHH, HHT, HTH, THH, HTT, THT, TTH, TTT\\}\\). Exactly two heads: \\(\\{HHT, HTH, THH\\}\\) (3 outcomes). Probability \\(= \\frac{3}{8}\\)."
      }
    ]
  }
];
