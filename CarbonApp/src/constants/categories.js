const categories = [
    {
        category: 'Meal',
        types: {
            /* Unit: kgCO2eq (kilograms of carbon dioxide equivalent) per meal */

            /* https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4372775/ */
            /* Mean greenhouse gas emissions per 2,000 kcal */
            /* https://globalnews.ca/news/3615212/this-is-what-your-breakfast-lunch-and-dinner-calories-actually-look-like/ */
            /* Human eats around 600 calories per meal */
            'High Meat': (7.19 * 600) / 2000,
            'Medium Meat': (5.63 * 600) / 2000,
            'Low Meat': (4.67 * 600) / 2000,
            'Pescetarian': (3.91 * 600) / 2000,
            'Vegetarian': (3.81 * 600) / 2000,
            'Vegan': (2.89 * 600) / 2000,
        }
    },
    {
        category: 'Transport',
        types: {
            /* https://static.ducky.eco/calculator_documentation.pdf */

            /* Unit: kgCO2eq/m (kilograms of carbon dioxide equivalent) per ?meter? */

            'Train': 0.000042,
            'Car': 0.000257,
            'Bus': 0.000103,
            'Plane': 0.000288,
            'Boat': 0.000803,
            'Motorbike': 0.000108,
        }
    }, {
        category: 'Streaming',
        types: {
            /* TODO: Unit: bits/s, use getInternetUsageCarbonImpact to get kgCO₂eq */

            /* MP3 song at 192 kbps (kilobytes per second) / 3.8 MB */

            'Audio - Mp3': (3.8 * Math.pow(10, 6) * 8) / 154,

            /* 
            Star Wars The Rise Of Skywalker - 2h22
            HD / 720p : 1.21 GB
            Full HD / 1080p : 7.02 GB
            Ultra HD / 2160p : 35.73 Gb
            */

            'Video - Hd': (1.21 * Math.pow(10, 9) * 8) / ((2 * 60 + 22) * 60),
            'Video - FullHd/1080p': (7.02 * Math.pow(10, 9) * 8) / ((2 * 60 + 22) * 60),
            'Video - UltraHd/4K': (35.73 * Math.pow(10, 9) * 8) / ((2 * 60 + 22) * 60),
        }
    },
    {
        category: 'Purchase',
        types: {
            /* Unit: kgCO2eq (kilograms of carbon dioxide equivalent) per product / transaction */

            'Smartphone': 80,
            'Laptop': 210,
            'Tablet': 87,
            'Computer': 588,
            'Television': 500,
            'Electric Car': 8800,
            'Fossil Fuel Car': 5600,
            'Hybrid Car': 6500,
            'Crypto Currency Transaction': 20,
            'Single Edition Nft': 211,
        }
    },
    {
        category: 'Fashion',
        types: {
            /* Unit: kgCO2eq per product */

            /* Clothing
            https://www.ademe.fr/sites/default/files/assets/documents/poids_carbone-biens-equipement-201809-rapport.pdf
            */

            'Coat': (89 + 39 + 25) / 3,
            'Dress': (56 + 56 + 51) / 3,
            'Jeans': 25,
            'Shirt': (13 + 12) / 2,
            'Shoes': (15 + 19 + 20) / 3,
            'Sweater': (28 + 26 + 31 + 56 + 12) / 5,
            'T-Shirt': (7 + 10 + 6) / 3,
        }
    },
    {
        category: 'Food',
        types: {
            /* Unit: kgCO2eq */

            /* http://www.greeneatz.com/foods-carbon-footprint.html */

            'Red Meat': (39.2 + 27.0) / 2, // (lamb + beef) / 2
            'White Meat': (12.1 + 10.9 + 6.9) / 3, // (pork + turkey + chicken) / 3
            'Fish': 6.1,
            'Lamb': 39.2,
            'Beef': 27.0,
            'Cheese': 13.5,
            'Pork': 12.1,
            'Turkey': 10.9,
            'Chicken': 6.9,
            'Tuna': 6.1,
            'Eggs': 4.8,
            'Potatoes': 2.9,
            'Rice': 2.7,
            'Nuts': 2.3,
            'Beans': 2.0,
            'Tofu': 2.0,
            'Vegetables': 2.0,
            'Milk': 1.9,
            'Fruit': 1.1,
            'Lentils': 0.9,

            /* https://www.bilans-ges.ademe.fr/ */

            'Coffee': 3.14,
            'Chocolate': 4.87,
        }
    },
    {
        category: 'Electricity',
        types: {
            /* Unit: kgCO₂eq/J (kilograms of carbon dioxide equivalent) per Joule */

            /* source : https://github.com/carbonalyser/Carbonalyser - kgCO₂eq/kWh */

            'Europe': (0.276 / 3.6) * Math.pow(10, -6), // - 0.276 [kgCO₂eq/kWh]
            'USA': (0.493 / 3.6) * Math.pow(10, -6), // - 0.493 [kgCO₂eq/kWh]
            'China': (0.681 / 3.6) * Math.pow(10, -6), // - 0.681 [kgCO₂eq/kWh]
            'World': (0.681 / 3.6) * Math.pow(10, -6), // - 0.681 [kgCO₂eq/kWh]   
        }
    },
    {
        category: 'Custom',
        types: {
            /* Unit: kgCO2eq (kilograms of carbon dioxide equivalent) */

            'Custom': 1,
        }
    },
];

export default categories;