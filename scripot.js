 
        const numerologyMap = {
            'A': 1, 'J': 1, 'S': 1,
            'B': 2, 'K': 2, 'T': 2,
            'C': 3, 'L': 3, 'U': 3,
            'D': 4, 'M': 4, 'V': 4,
            'E': 5, 'N': 5, 'W': 5,
            'F': 6, 'O': 6, 'X': 6,
            'G': 7, 'P': 7, 'Y': 7,
            'H': 8, 'Q': 8, 'Z': 8,
            'I': 9, 'R': 9
        };

        
        function calculateNumerology(name) {
            name = name.toUpperCase();
            let sum = 0;
            for (let char of name) {
                if (numerologyMap[char]) {
                    sum += numerologyMap[char];
                }
            }
            // Reduce to a single digit or master number
            while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
                sum = sum.toString().split('').reduce((acc, num) => acc + parseInt(num), 0);
            }
            return sum;
        }

    
        function calculateLove() {
            const name1 = document.getElementById('name1').value;
            const name2 = document.getElementById('name2').value;

            if (name1 && name2) {
                const num1 = calculateNumerology(name1);
                const num2 = calculateNumerology(name2);
                const compatibility = (num1 + num2) % 100; 

                document.getElementById('loveResult').innerHTML = `Your Love Compatibility is: ${compatibility}%`;
            } else {
                document.getElementById('loveResult').innerHTML = "Please enter both names.";
            }
        }

        
        function calculateLoyalty() {
            const loyaltyName = document.getElementById('loyaltyName').value;

            if (loyaltyName) {
                const num = calculateNumerology(loyaltyName);
                const loyaltyScore = (num * 10) % 100; 

                document.getElementById('loyaltyResult').innerHTML = `Your Loyalty Score is: ${loyaltyScore}%`;
            } else {
                document.getElementById('loyaltyResult').innerHTML = "Please enter a name.";
            }
        }